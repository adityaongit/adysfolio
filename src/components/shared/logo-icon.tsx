import { cn } from "@/lib/cn";
import { forwardRef, type SVGProps } from "react";

interface LogoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * The "A" drawn as an orbital diagram: two trajectory legs meeting at a
 * planet apex, crossbar formed by a dashed orbit ring carrying the accent
 * planet. Geometry mirrored in favicon.svg and the OG mark.
 */
export const LogoIcon = forwardRef<SVGSVGElement, LogoIconProps>(
  (
    { size = 64, color = "currentColor", className, onClick, ...props },
    ref,
  ) => {
    return (
      <svg
        ref={ref}
        role="img"
        aria-label="Aditya Jindal logo"
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        className={cn(
          "transition-colors select-none",
          onClick && "cursor-pointer",
          className,
        )}
        {...props}
      >
        <title>Aditya Jindal</title>
        <path
          d="M32 8 L16 58 M32 8 L48 58"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="32" cy="8" r="5.5" fill={color} />
        <ellipse
          cx="32"
          cy="36"
          rx="26"
          ry="9"
          transform="rotate(-14 32 36)"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="2.5 3.5"
          opacity="0.75"
        />
        <circle cx="57.2" cy="29.7" r="4" className="fill-(--selection-bg)" />
      </svg>
    );
  },
);

LogoIcon.displayName = "LogoIcon";
