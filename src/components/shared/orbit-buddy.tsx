"use client";

import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type BuddyState = "hint-down" | "idle" | "scrolling" | "asleep" | "hint-up";

const EDGE_PX = 240;
const SCROLL_SETTLE_MS = 260;
const SLEEP_MS = 30_000;

const orbit = (duration: string): CSSProperties =>
  ({ "--orbit-duration": duration }) as CSSProperties;

export function OrbitBuddy() {
  const pathname = usePathname();
  const [state, setState] = useState<BuddyState>("hint-down");
  const [canScroll, setCanScroll] = useState(false);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sleepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Re-runs on navigation: the layout keeps this mounted across routes.
  useEffect(() => {
    const positionState = (): Exclude<BuddyState, "scrolling" | "asleep"> => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= max - EDGE_PX) return "hint-up";
      if (window.scrollY <= EDGE_PX) return "hint-down";
      return "idle";
    };

    const armSleep = () => {
      if (sleepTimer.current) clearTimeout(sleepTimer.current);
      sleepTimer.current = setTimeout(() => {
        setState((s) =>
          s === "idle" || s === "hint-down" ? "asleep" : s,
        );
      }, SLEEP_MS);
    };

    const sync = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setCanScroll(max > EDGE_PX);
      setState(positionState());
      armSleep();
    };

    const onScroll = () => {
      const target = positionState();
      setState(target === "idle" ? "scrolling" : target);
      if (settleTimer.current) clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(
        () => setState(positionState()),
        SCROLL_SETTLE_MS,
      );
      armSleep();
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      if (settleTimer.current) clearTimeout(settleTimer.current);
      if (sleepTimer.current) clearTimeout(sleepTimer.current);
    };
  }, [pathname]);

  if (!canScroll) return null;

  const atBottom = state === "hint-up";
  const awakeEyes = state !== "asleep" && state !== "scrolling";

  const wake = () => {
    setState((s) => (s === "asleep" ? "idle" : s));
  };

  const onClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({
        top: window.innerHeight * 0.9,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={wake}
      aria-label={atBottom ? "Scroll back to top" : "Scroll down"}
      data-buddy={state}
      className={cn(
        "orbit-buddy group fixed bottom-5 right-4 z-40 md:bottom-7 md:right-6 print:hidden",
        "cursor-pointer rounded-full",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        className={cn(
          "size-14 select-none text-foreground md:size-16",
          state === "idle" && "buddy-float",
        )}
      >
        <ellipse
          cx="50"
          cy="50"
          rx="30"
          ry="11"
          transform="rotate(-14 50 50)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2.5 4.5"
          className={cn(
            "buddy-ring transition-opacity duration-500",
            state === "asleep" ? "opacity-35" : "opacity-70",
          )}
        />

        <circle
          cx="50"
          cy="50"
          r="16"
          stroke="currentColor"
          strokeWidth="2"
          className="fill-background"
        />

        {awakeEyes && (
          <>
            <g className="buddy-eyes-normal buddy-blink fill-current">
              <circle cx="45" cy={atBottom ? 46 : 48} r="2" />
              <circle cx="55" cy={atBottom ? 46 : 48} r="2" />
            </g>
            <g
              className="buddy-eyes-happy stroke-current"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M42 49 L45 46 L48 49" />
              <path d="M52 49 L55 46 L58 49" />
            </g>
            <path
              d="M46 55 Q50 58 54 55"
              className="stroke-current"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        )}

        {state === "scrolling" && (
          <>
            <g className="fill-current">
              <circle cx="45" cy="49" r="2.6" />
              <circle cx="55" cy="49" r="2.6" />
            </g>
            <circle cx="45.8" cy="48.2" r="0.9" className="fill-background" />
            <circle cx="55.8" cy="48.2" r="0.9" className="fill-background" />
            <circle
              cx="50"
              cy="57"
              r="1.8"
              className="stroke-current"
              strokeWidth="1.4"
            />
          </>
        )}

        {state === "asleep" && (
          <>
            <g
              className="stroke-current"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M42 50 Q44.5 52.5 47 50" />
              <path d="M53 50 Q55.5 52.5 58 50" />
            </g>
            <path
              d="M47 57 Q50 59 53 57"
              className="stroke-current"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle
              cx="73"
              cy="61"
              r="3.5"
              className="fill-(--selection-bg) opacity-50"
            />
            <g className="buddy-z font-mono text-[11px] fill-muted-foreground">
              <text x="68" y="34">z</text>
              <text x="74" y="26">z</text>
              <text x="80" y="18">z</text>
            </g>
          </>
        )}

        {(state === "idle" || state === "scrolling") && (
          <g
            className="orbit-group"
            style={orbit(state === "scrolling" ? "1.6s" : "8s")}
          >
            <circle cx="79" cy="42" r="3.5" className="fill-(--selection-bg)" />
            {state === "scrolling" && (
              <path
                d="M79 42 A 30 22 0 0 0 62 28"
                stroke="var(--selection-bg)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                opacity="0.5"
              />
            )}
          </g>
        )}

        {state === "hint-down" && (
          <g className="buddy-bob">
            <circle cx="50" cy="76" r="4" className="fill-(--selection-bg)" />
            <path
              d="M45 84 L50 89 L55 84"
              stroke="var(--selection-bg)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        {atBottom && (
          <g className="buddy-bob-up">
            <circle cx="50" cy="24" r="4" className="fill-(--selection-bg)" />
            <path
              d="M45 16 L50 11 L55 16"
              stroke="var(--selection-bg)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        <g className="buddy-hearts">
          <path
            d="M74 30 c-1.6 -2.4 -5 -1 -4.4 1.6 c0.4 1.8 2.8 3.4 4.4 4.4 c1.6 -1 4 -2.6 4.4 -4.4 c0.6 -2.6 -2.8 -4 -4.4 -1.6 Z"
            className="fill-(--selection-bg)"
          />
          <path
            d="M26 26 c-1.3 -2 -4.2 -0.8 -3.7 1.3 c0.3 1.5 2.3 2.8 3.7 3.7 c1.3 -0.9 3.3 -2.2 3.7 -3.7 c0.5 -2.1 -2.3 -3.3 -3.7 -1.3 Z"
            className="fill-(--selection-bg)"
          />
        </g>
      </svg>
    </button>
  );
}
