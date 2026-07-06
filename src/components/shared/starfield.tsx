import { cn } from "@/lib/cn";
import type { CSSProperties } from "react";

/* Seeded so the server and client render identical skies. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(404);

const STARS = Array.from({ length: 56 }, () => ({
  left: rand() * 100,
  top: rand() * 100,
  size: 1 + rand() * 1.5,
  delay: rand() * 6,
  duration: 2.5 + rand() * 4,
  accent: rand() < 0.12,
}));

const METEORS = [
  { left: 10, top: 5, delay: 1.5, duration: 8 },
  { left: 55, top: 0, delay: 5, duration: 10 },
  { left: 80, top: 25, delay: 9, duration: 12 },
];

interface StarfieldProps {
  className?: string;
}

export function Starfield({ className }: StarfieldProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden text-foreground",
        className,
      )}
    >
      {STARS.map((star, i) => (
        <span
          key={i}
          className={cn(
            "star-twinkle absolute rounded-full",
            star.accent ? "bg-(--selection-bg)" : "bg-current",
          )}
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            } as CSSProperties
          }
        />
      ))}

      {METEORS.map((meteor, i) => (
        <span
          key={`m-${i}`}
          className="meteor absolute size-0.5 rounded-full bg-current"
          style={
            {
              left: `${meteor.left}%`,
              top: `${meteor.top}%`,
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.duration}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
