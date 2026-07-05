"use client";

import { OrbitalLoader } from "@/components/shared/orbital-mark";

export default function Loading() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-background"
      role="status"
      aria-label="Loading"
      aria-live="polite"
    >
      <OrbitalLoader className="text-foreground" />
    </div>
  );
}
