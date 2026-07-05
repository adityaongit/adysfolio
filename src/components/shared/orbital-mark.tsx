import { cn } from "@/lib/cn";
import type { CSSProperties, SVGProps } from "react";

interface OrbitalMarkProps extends SVGProps<SVGSVGElement> {
  size?: number;
  /** Seconds per revolution of the orbiting body. */
  duration?: number;
}

export function OrbitalMark({
  size = 40,
  duration = 14,
  className,
  ...props
}: OrbitalMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={cn("select-none", className)}
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 5"
        opacity="0.55"
      />
      <circle cx="32" cy="32" r="4.5" fill="currentColor" opacity="0.8" />
      <g
        className="orbit-group"
        style={{ "--orbit-duration": `${duration}s` } as CSSProperties}
      >
        <circle cx="54" cy="32" r="3.5" fill="currentColor" />
      </g>
    </svg>
  );
}

export function OrbitalLoader({
  size = 64,
  className,
  ...props
}: Omit<OrbitalMarkProps, "duration">) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={cn("select-none", className)}
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 5"
        opacity="0.4"
      />
      <circle cx="32" cy="32" r="5" className="fill-(--selection-bg)" />
      <g
        className="orbit-group"
        style={{ "--orbit-duration": "1.4s" } as CSSProperties}
      >
        <circle cx="56" cy="32" r="4" fill="currentColor" />
      </g>
    </svg>
  );
}
