"use client";

import { ComponentProps, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { ACCENT_STORAGE_KEY, todaysPlanet } from "@/lib/accent";

type AccentMode = "planetary" | "default";

function applyMode(mode: AccentMode) {
  if (mode === "default") {
    document.documentElement.removeAttribute("data-accent");
  } else {
    document.documentElement.setAttribute("data-accent", todaysPlanet().key);
  }
}

export function AccentToggle({ className, ...props }: ComponentProps<"div">) {
  const [mode, setMode] = useState<AccentMode | null>(null);

  useEffect(() => {
    try {
      setMode(
        localStorage.getItem(ACCENT_STORAGE_KEY) === "default"
          ? "default"
          : "planetary",
      );
    } catch {
      setMode("planetary");
    }
  }, []);

  const select = (next: AccentMode) => {
    setMode(next);
    try {
      localStorage.setItem(ACCENT_STORAGE_KEY, next);
    } catch {}
    applyMode(next);
  };

  // Resolve the day only after mount — the prerendered day may differ.
  const planet = mode === null ? null : todaysPlanet();

  return (
    <div
      role="group"
      aria-label="Accent color"
      className={cn(
        "inline-flex w-fit items-center rounded-full border p-1 *:rounded-full",
        className,
      )}
      {...props}
    >
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={
          planet
            ? `Planetary accent — today is ${planet.day}, the ${planet.body}'s day`
            : "Planetary accent"
        }
        aria-pressed={mode === "planetary"}
        className={cn(
          "size-6.5 p-0 font-mono text-sm leading-none transition-colors cursor-pointer",
          mode === "planetary"
            ? "bg-foreground/10 text-foreground"
            : "text-foreground/40",
        )}
        onClick={() => select("planetary")}
      >
        <span aria-hidden="true">{planet?.symbol ?? "◌"}</span>
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Default green accent"
        aria-pressed={mode === "default"}
        className={cn(
          "size-6.5 p-0 transition-colors cursor-pointer",
          mode === "default"
            ? "bg-foreground/10 text-foreground"
            : "text-foreground/40",
        )}
        onClick={() => select("default")}
      >
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full bg-[oklch(0.82_0.155_155)] ring-1 ring-current/30"
        />
      </Button>
    </div>
  );
}
