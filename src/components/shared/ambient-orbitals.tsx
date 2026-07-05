"use client";

import { OrbitalDecor } from "@/components/shared/orbital-decor";
import { usePathname } from "next/navigation";

/** Site-wide orbital backdrop. The home page curates its own per-section plates. */
export function AmbientOrbitals() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-clip"
    >
      <OrbitalDecor variant="duo" className="-top-28 -right-32 size-96" />
      <OrbitalDecor variant="solo" className="top-1/2 -left-40 size-80" />
      <OrbitalDecor
        variant="full"
        className="-bottom-48 right-[6%] size-96 hidden lg:block"
      />
    </div>
  );
}
