'use client';

import mermaid from 'mermaid';
import { useEffect, useRef, useState } from 'react';

// Hex equivalents of the site's oklch CSS variables (from global.css)
const LIGHT = {
  bg:           '#ffffff',
  card:         '#f5f5f8',
  border:       '#e7e7ef',
  fg:           '#191927',
  mutedFg:      '#7a7a93',
  secondary:    '#ececf2',
};

const DARK = {
  bg:           '#191927',
  card:         '#26263a',
  border:       '#3d3d52',
  fg:           '#fafafa',
  mutedFg:      '#aaaac0',
  secondary:    '#363645',
};

function buildThemeVars(isDark: boolean) {
  const c = isDark ? DARK : LIGHT;
  return {
    background:            c.bg,
    mainBkg:               c.card,
    nodeBorder:            c.border,
    clusterBkg:            c.card,
    clusterBorder:         c.border,
    titleColor:            c.fg,
    edgeLabelBackground:   c.bg,
    nodeTextColor:         c.fg,
    lineColor:             c.mutedFg,
    primaryColor:          c.card,
    primaryTextColor:      c.fg,
    primaryBorderColor:    c.border,
    secondaryColor:        c.secondary,
    secondaryTextColor:    c.fg,
    secondaryBorderColor:  c.border,
    tertiaryColor:         isDark ? '#2a2a3d' : '#f9f9fc',
    tertiaryTextColor:     c.fg,
    tertiaryBorderColor:   c.border,
    noteBkgColor:          c.card,
    noteTextColor:         c.fg,
    noteBorderColor:       c.border,
    activationBkgColor:    c.card,
    activationBorderColor: c.border,
    labelBoxBkgColor:      c.card,
    labelBoxBorderColor:   c.border,
    labelTextColor:        c.fg,
    loopTextColor:         c.fg,
    signalTextColor:       c.fg,
    signalColor:           c.mutedFg,
    actorBkg:              c.card,
    actorBorder:           c.border,
    actorTextColor:        c.fg,
    actorLineColor:        c.mutedFg,
    fontSize:              '14px',
  };
}

export function Mermaid({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  // Detect initial theme and watch for toggle changes
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
    if (!ref.current) return;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: buildThemeVars(isDark),
      securityLevel: 'loose',
    });

    const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    mermaid.render(id, code).then(({ svg }) => {
      if (!ref.current) return;
      ref.current.innerHTML = svg;
      // Make the SVG fluid — Mermaid sets fixed width/height by default
      const el = ref.current.querySelector('svg');
      if (el) {
        el.removeAttribute('width');
        el.removeAttribute('height');
        el.style.maxWidth = '100%';
        el.style.height = 'auto';
      }
    }).catch((err) => {
      console.error('Mermaid render error:', err);
      if (ref.current) {
        ref.current.innerHTML = `<pre class="text-destructive text-sm p-4">Error rendering diagram</pre>`;
      }
    });
  }, [code, isDark]);

  return (
    <div
      ref={ref}
      className="my-8 flex justify-center items-center overflow-x-auto rounded-lg border border-border/50 bg-muted/30 p-6"
      aria-label="Diagram"
    />
  );
}
