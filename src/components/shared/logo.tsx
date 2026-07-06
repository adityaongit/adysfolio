"use client";

import { cn } from "@/lib/cn";
import { forwardRef, SVGProps, useEffect, useRef, useState } from "react";
import { LogoIcon } from "@/components/shared/logo-icon";

export interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
  showWordmark?: boolean;
  full?: boolean;
  copyOnClick?: boolean;
}

const FONT_SIZE = 46;
const TEXT_X = 68;
const TEXT_Y = 57;
const VB_HEIGHT = 64;
const PADDING = 4;
const CONTENT_LEFT = 6;
const CHAR_W = 0.52;

export const Logo = forwardRef<SVGSVGElement, LogoProps>(
  (
    {
      className,
      size = 64,
      showWordmark = false,
      full = false,
      copyOnClick = false,
      "aria-label": ariaLabel,
      "aria-hidden": ariaHidden,
      ...props
    },
    ref,
  ) => {
    const isHidden = ariaHidden === true || ariaHidden === "true";
    const textRef = useRef<SVGTextElement>(null);
    const [measuredW, setMeasuredW] = useState<number | null>(null);

    const wordmark = full ? "ditya Jindal" : "ditya";
    const defaultLabel = "Aditya Jindal";
    useEffect(() => {
      if (!textRef.current) return;
      const bbox = textRef.current.getBBox();
      const contentRight = bbox.x + bbox.width;
      setMeasuredW(contentRight + PADDING - (CONTENT_LEFT - PADDING));
    }, [wordmark]);

    if (!showWordmark) {
      return (
        <LogoIcon
          ref={ref}
          size={size}
          className={cn(
            "transition-colors select-none",
            copyOnClick && "cursor-pointer",
            className,
          )}
          aria-label={
            isHidden ? undefined : ((ariaLabel as string) ?? "Aditya Jindal")
          }
          aria-hidden={isHidden ? true : undefined}
          onClick={() => {
            if (copyOnClick) navigator.clipboard.writeText("Aditya Jindal");
          }}
        />
      );
    }

    const fallbackW =
      TEXT_X + Math.ceil(wordmark.length * CHAR_W * FONT_SIZE) + PADDING - (CONTENT_LEFT - PADDING);
    const vbX = CONTENT_LEFT - PADDING; // = 12
    const vbW = measuredW ?? fallbackW;
    const scaledWidth = Math.round((vbW / VB_HEIGHT) * size);

    const mergedRef = (node: SVGSVGElement | null) => {
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<SVGSVGElement | null>).current = node;
    };

    return (
      <svg
        ref={mergedRef}
        role={isHidden ? undefined : "img"}
        aria-label={isHidden ? undefined : (ariaLabel ?? defaultLabel)}
        aria-hidden={isHidden ? true : undefined}
        viewBox={`${vbX} 0 ${vbW} ${VB_HEIGHT}`}
        width={scaledWidth}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "transition-colors select-none cursor-pointer",
          className,
        )}
        onClick={() => {
          if (copyOnClick) navigator.clipboard.writeText(defaultLabel);
        }}
        {...props}
      >
        {!isHidden && <title>{ariaLabel ?? defaultLabel}</title>}
        <path
          d="M32 8 L16 58 M32 8 L48 58"
          className="stroke-current"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="32" cy="8" r="5.5" className="fill-current" />
        <ellipse
          cx="32"
          cy="36"
          rx="26"
          ry="9"
          transform="rotate(-14 32 36)"
          className="stroke-current"
          strokeWidth="2"
          strokeDasharray="2.5 3.5"
          opacity="0.75"
        />
        <circle cx="57.2" cy="29.7" r="4" className="fill-(--selection-bg)" />
        <text
          ref={textRef}
          x={TEXT_X}
          y={TEXT_Y}
          fontFamily="'Geist', 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
          fontSize={FONT_SIZE}
          fontWeight={600}
          letterSpacing="-0.03em"
          textAnchor="start"
          dominantBaseline="alphabetic"
          className="fill-current"
        >
          {wordmark}
        </text>
      </svg>
    );
  },
);

Logo.displayName = "Logo";
