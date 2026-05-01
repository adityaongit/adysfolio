import { cn } from "@/lib/cn";

interface MonogramProps {
  title: string;
  slug: string;
  size?: "card" | "header";
  className?: string;
}

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function initials(title: string): string {
  const words = title
    .replace(/[—–-]/g, " ")
    .trim()
    .split(/\s+/);
  if (words.length >= 2 && words[1].length > 0) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  const first = words[0] ?? "";
  return first.slice(0, 2).toUpperCase();
}

export function Monogram({
  title,
  slug,
  size = "header",
  className,
}: MonogramProps) {
  const letters = initials(title);
  const rotation = (hashSlug(slug) % 9) - 4;

  const frameSize =
    size === "card" ? "size-9" : "size-14 sm:size-20 lg:size-24";
  const fontSize =
    size === "card" ? "text-sm" : "text-xl sm:text-3xl lg:text-4xl";

  return (
    <div
      aria-label={`${title} monogram`}
      className={cn(
        "relative flex shrink-0 items-center justify-center",
        "border border-border bg-background",
        frameSize,
        className,
      )}
    >
      <span
        className={cn(
          "font-sans font-extrabold tracking-tight text-foreground",
          fontSize,
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {letters}
      </span>
    </div>
  );
}
