'use client';

import { useEffect, useRef, useState } from 'react';
import rough from 'roughjs';
import dagre from '@dagrejs/dagre';

export type NodeShape = 'rect' | 'diamond';
export type Direction = 'TB' | 'LR';
export type NodeColor = 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'orange';

export interface DiagramNode {
  id: string;
  label: string;
  shape?: NodeShape;
  color?: NodeColor;
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
}

interface RoughDiagramProps {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  direction?: Direction;
}

const ROUGHNESS = 1.4;
const STROKE_W = 1.5;
const HACHURE_GAP = 8;
const HACHURE_ANGLE = -41;
const FONT_SIZE = 13;
const CHAR_W = 7.5;     // approx px per character at font-size 13
const PAD_X = 28;
const PAD_Y = 16;
const MIN_W = 110;
const DIAMOND_EXTRA = 44; // diamonds need more room for the slanted sides

// Per-color palette — hachure color visible against the bg tint, per theme
const PALETTE: Record<NodeColor, {
  light: { bg: string; hachure: string; stroke: string };
  dark:  { bg: string; hachure: string; stroke: string };
}> = {
  default: {
    light: { bg: '#f5f5f8', hachure: '#a0a0c0', stroke: '#26263a' },
    dark:  { bg: '#26263a', hachure: '#6060a0', stroke: '#c9c9dc' },
  },
  blue: {
    light: { bg: '#eff6ff', hachure: '#60a5fa', stroke: '#1d4ed8' },
    dark:  { bg: '#1e3a5f', hachure: '#93c5fd', stroke: '#60a5fa' },
  },
  green: {
    light: { bg: '#f0fdf4', hachure: '#4ade80', stroke: '#15803d' },
    dark:  { bg: '#14532d', hachure: '#86efac', stroke: '#4ade80' },
  },
  red: {
    light: { bg: '#fef2f2', hachure: '#f87171', stroke: '#b91c1c' },
    dark:  { bg: '#450a0a', hachure: '#fca5a5', stroke: '#f87171' },
  },
  yellow: {
    light: { bg: '#fefce8', hachure: '#facc15', stroke: '#a16207' },
    dark:  { bg: '#422006', hachure: '#fde047', stroke: '#facc15' },
  },
  purple: {
    light: { bg: '#faf5ff', hachure: '#c084fc', stroke: '#7e22ce' },
    dark:  { bg: '#3b0764', hachure: '#d8b4fe', stroke: '#c084fc' },
  },
  orange: {
    light: { bg: '#fff7ed', hachure: '#fb923c', stroke: '#c2410c' },
    dark:  { bg: '#431407', hachure: '#fdba74', stroke: '#fb923c' },
  },
};

function nodeDims(label: string, shape: NodeShape = 'rect') {
  const textW = label.length * CHAR_W;
  if (shape === 'diamond') {
    const w = Math.max(MIN_W, textW + PAD_X) + DIAMOND_EXTRA;
    const h = FONT_SIZE + PAD_Y + DIAMOND_EXTRA / 1.2;
    return { width: w, height: h };
  }
  return {
    width: Math.max(MIN_W, textW + PAD_X),
    height: FONT_SIZE + PAD_Y * 2,
  };
}

function svgText(
  x: number,
  y: number,
  text: string,
  opts: {
    fill: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: string;
  }
) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  el.setAttribute('x', String(x));
  el.setAttribute('y', String(y));
  el.setAttribute('text-anchor', 'middle');
  el.setAttribute('dominant-baseline', 'middle');
  el.setAttribute('fill', opts.fill);
  el.setAttribute('font-size', String(opts.fontSize ?? FONT_SIZE));
  el.setAttribute('font-family', opts.fontFamily ?? 'var(--font-plus-jakarta-sans), sans-serif');
  if (opts.fontWeight) el.setAttribute('font-weight', opts.fontWeight);
  el.textContent = text;
  return el;
}

function svgRect(
  x: number,
  y: number,
  w: number,
  h: number,
  fill: string
) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  el.setAttribute('x', String(x));
  el.setAttribute('y', String(y));
  el.setAttribute('width', String(w));
  el.setAttribute('height', String(h));
  el.setAttribute('fill', fill);
  return el;
}

export function RoughDiagram({ nodes, edges, direction = 'TB' }: RoughDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // Global colors
    const textColor = isDark ? '#fafafa' : '#191927';
    const edgeColor = isDark ? '#7070a0' : '#8080a8';
    const labelBg   = isDark ? '#191927' : '#ffffff';

    // --- Dagre layout ---
    const g = new dagre.graphlib.Graph();
    g.setDefaultEdgeLabel(() => ({}));
    g.setGraph({ rankdir: direction, nodesep: 55, ranksep: 65, marginx: 35, marginy: 35 });

    nodes.forEach(n => g.setNode(n.id, nodeDims(n.label, n.shape)));
    edges.forEach(e => g.setEdge(e.from, e.to, { label: e.label ?? '' }));

    dagre.layout(g);

    const gi = g.graph();
    const W = (gi.width  ?? 400) + 70;
    const H = (gi.height ?? 300) + 70;

    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('width',  String(W));
    svg.setAttribute('height', String(H));

    const rc = rough.svg(svg);

    const baseShapeOpts = {
      roughness:    ROUGHNESS,
      strokeWidth:  STROKE_W,
      fillStyle:    'hachure' as const,
      hachureAngle: HACHURE_ANGLE,
      hachureGap:   HACHURE_GAP,
    };

    // --- Edges (drawn first so they sit behind nodes) ---
    g.edges().forEach(e => {
      const meta = g.edge(e);
      const pts  = meta.points as { x: number; y: number }[];
      if (pts.length < 2) return;

      for (let i = 0; i < pts.length - 1; i++) {
        svg.appendChild(
          rc.line(pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y, {
            roughness: 1.2,
            strokeWidth: STROKE_W,
            stroke: edgeColor,
          })
        );
      }

      // Arrowhead
      const last = pts[pts.length - 1];
      const prev = pts[pts.length - 2];
      const angle = Math.atan2(last.y - prev.y, last.x - prev.x);
      const AL = 10, AA = 0.42;
      const arrowOpts = { roughness: 0.8, strokeWidth: STROKE_W, stroke: edgeColor };
      svg.appendChild(rc.line(last.x, last.y, last.x - AL * Math.cos(angle - AA), last.y - AL * Math.sin(angle - AA), arrowOpts));
      svg.appendChild(rc.line(last.x, last.y, last.x - AL * Math.cos(angle + AA), last.y - AL * Math.sin(angle + AA), arrowOpts));

      // Edge label
      const labelStr = meta.label as string;
      if (labelStr) {
        const mid  = pts[Math.floor(pts.length / 2)];
        const lw   = labelStr.length * 7 + 12;
        const lh   = 18;
        svg.appendChild(svgRect(mid.x - lw / 2, mid.y - lh / 2, lw, lh, labelBg));
        svg.appendChild(svgText(mid.x, mid.y, labelStr, {
          fill: edgeColor,
          fontSize: 11,
          fontFamily: 'var(--font-geist-mono), monospace',
        }));
      }
    });

    // --- Nodes ---
    nodes.forEach(n => {
      const { x, y, width: nw, height: nh } = g.node(n.id);
      const shape  = n.shape ?? 'rect';
      const colors = PALETTE[n.color ?? 'default'][isDark ? 'dark' : 'light'];

      const shapeOpts = {
        ...baseShapeOpts,
        stroke: colors.stroke,
        fill:   colors.hachure,
      };

      if (shape === 'diamond') {
        const hw = nw / 2, hh = nh / 2;
        const pts: [number, number][] = [[x, y - hh], [x + hw, y], [x, y + hh], [x - hw, y]];
        // flat bg tint behind the rough sketch
        const bgPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        bgPoly.setAttribute('points', pts.map(p => p.join(',')).join(' '));
        bgPoly.setAttribute('fill', colors.bg);
        bgPoly.setAttribute('stroke', 'none');
        svg.appendChild(bgPoly);
        svg.appendChild(rc.polygon(pts, shapeOpts));
      } else {
        // flat bg tint behind the rough sketch
        svg.appendChild(svgRect(x - nw / 2, y - nh / 2, nw, nh, colors.bg));
        svg.appendChild(rc.rectangle(x - nw / 2, y - nh / 2, nw, nh, shapeOpts));
      }

      svg.appendChild(svgText(x, y, n.label, {
        fill: textColor,
        fontWeight: '500',
      }));
    });

    // Make fluid
    svg.removeAttribute('width');
    svg.style.maxWidth = '100%';
    svg.style.height   = 'auto';
  }, [nodes, edges, direction, isDark]);

  return (
    <div
      className="my-8 flex justify-center items-center overflow-x-auto rounded-lg border border-border/50 bg-muted/20 p-6"
      aria-label="Diagram"
    >
      <svg ref={svgRef} />
    </div>
  );
}
