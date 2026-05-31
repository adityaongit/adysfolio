"use client";

import { IconBriefcase } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

interface Period {
  start: string;
  /** Omit `end` for the ongoing role — it counts up to now. */
  end?: string;
}

interface ExperienceCounterProps {
  periods?: Period[];
  className?: string;
}

// Only the periods I was actually working — the gap between roles is excluded.
const DEFAULT_PERIODS: Period[] = [
  { start: "2023-06-01T00:00:00+05:30", end: "2023-08-31T23:59:59+05:30" },
  { start: "2024-08-01T00:00:00+05:30", end: "2026-05-01T00:00:00+05:30" },
  { start: "2026-05-01T00:00:00+05:30" },
];

function getYears(periods: Period[]) {
  const now = Date.now();
  const worked = periods.reduce((total, { start, end }) => {
    const from = new Date(start).getTime();
    const to = end ? new Date(end).getTime() : now;
    return total + Math.max(0, Math.min(to, now) - from);
  }, 0);

  return (worked / MS_PER_YEAR).toFixed(1);
}

export function ExperienceCounter({
  periods = DEFAULT_PERIODS,
  className,
}: ExperienceCounterProps) {
  const [isActive, setIsActive] = useState(false);
  const [years, setYears] = useState(() => getYears(periods));

  useEffect(() => {
    const update = () => setYears(getYears(periods));
    update();

    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [periods]);

  return (
    <button
      type="button"
      onClick={() => setIsActive((prev) => !prev)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      aria-label={
        isActive
          ? "Working since June 2023, excluding career gaps"
          : `${years} years of professional experience`
      }
      aria-live="polite"
      className={cn(
        "group relative flex w-fit items-center gap-2.5 rounded-lg border border-border/60 bg-muted/40 px-3 py-2",
        "transition-colors duration-300 hover:border-border hover:bg-muted/60",
        className,
      )}
    >
      <IconBriefcase
        className="size-4 shrink-0 text-muted-foreground"
        aria-hidden="true"
      />

      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-base font-semibold leading-none tabular-nums text-foreground">
          {years}
        </span>

        <div
          className="relative h-4 w-[6.25rem] overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="flex h-4 items-center text-xs whitespace-nowrap text-muted-foreground transition-[transform,opacity] duration-300"
            style={{
              transform: isActive ? "translateY(-100%)" : "translateY(0)",
              opacity: isActive ? 0 : 1,
            }}
          >
            yrs experience
          </span>

          <span
            className="absolute left-0 top-0 flex h-4 items-center text-xs whitespace-nowrap text-muted-foreground transition-[transform,opacity] duration-300"
            style={{
              transform: isActive ? "translateY(0)" : "translateY(100%)",
              opacity: isActive ? 1 : 0,
            }}
          >
            since Jun 2023
          </span>
        </div>
      </div>
    </button>
  );
}
