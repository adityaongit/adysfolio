import { cn } from "@/lib/cn";
import type { CSSProperties } from "react";

type OrbitalVariant = "full" | "duo" | "solo";

interface OrbitalDecorProps {
  className?: string;
  variant?: OrbitalVariant;
}

const orbit = (duration: string): CSSProperties =>
  ({ "--orbit-duration": duration }) as CSSProperties;

function Ring({ r, dash = "2 5", opacity }: { r: number; dash?: string; opacity: number }) {
  return (
    <circle
      cx="200"
      cy="200"
      r={r}
      stroke="currentColor"
      strokeWidth="0.75"
      strokeDasharray={dash}
      opacity={opacity}
    />
  );
}

function Body({
  angle,
  radius,
  duration,
  r = 3,
  accent = false,
  ringed = false,
  opacity = 0.55,
}: {
  angle: number;
  radius: number;
  duration: string;
  r?: number;
  accent?: boolean;
  ringed?: boolean;
  opacity?: number;
}) {
  const cx = 200 + radius;
  return (
    <g transform={`rotate(${angle} 200 200)`}>
      <g className="orbit-group" style={orbit(duration)}>
        <circle
          cx={cx}
          cy="200"
          r={r}
          fill={accent ? undefined : "currentColor"}
          className={accent ? "fill-(--selection-bg)" : undefined}
          opacity={accent ? 0.55 : opacity}
        />
        {ringed && (
          <ellipse
            cx={cx}
            cy="200"
            rx={r + 4}
            ry={r - 0.5}
            stroke="currentColor"
            strokeWidth="0.75"
            opacity={opacity}
            transform={`rotate(-18 ${cx} 200)`}
          />
        )}
      </g>
    </g>
  );
}

export function OrbitalDecor({ className, variant = "full" }: OrbitalDecorProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none text-foreground/70",
        className,
      )}
    >
      <circle
        cx="200"
        cy="200"
        r="4"
        className="fill-(--selection-bg)"
        opacity="0.55"
      />

      {variant === "full" && (
        <>
          <Ring r={55} opacity={0.4} />
          <Ring r={100} opacity={0.35} />
          <Ring r={145} opacity={0.3} />
          <Ring r={185} dash="1 7" opacity={0.25} />
          <Body angle={40} radius={55} duration="45s" />
          <Body angle={160} radius={100} duration="80s" r={3.5} accent />
          <Body angle={265} radius={145} duration="130s" r={2.5} />
          <Body angle={320} radius={185} duration="190s" ringed />
        </>
      )}

      {variant === "duo" && (
        <>
          <Ring r={90} opacity={0.4} />
          <Ring r={155} opacity={0.3} />
          <Body angle={80} radius={90} duration="60s" accent r={3.5} />
          <Body angle={230} radius={155} duration="110s" ringed />
        </>
      )}

      {variant === "solo" && (
        <>
          <Ring r={120} opacity={0.4} />
          <Body angle={20} radius={120} duration="70s" r={3.5} accent />
          <Body angle={200} radius={120} duration="70s" r={2} opacity={0.4} />
        </>
      )}
    </svg>
  );
}
