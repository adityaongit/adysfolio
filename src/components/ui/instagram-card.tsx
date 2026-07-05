import Image from "next/image";
import { IconBrandInstagram, IconArrowUpRight } from "@tabler/icons-react";
import { DecorIcon } from "@/components/ui/border";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/config";

interface InstagramCardProps {
  className?: string;
}

export function InstagramCard({ className }: InstagramCardProps) {
  const { handle, postUrl, image, alt, caption } = siteConfig.instagram;

  return (
    <a
      href={postUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Instagram post by @${handle} (opens in new tab)`}
      className={cn(
        "group relative flex w-full max-w-sm flex-col border border-border bg-background",
        "transition-colors hover:bg-muted/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <DecorIcon position="top-left" />
      <DecorIcon position="top-right" />
      <DecorIcon position="bottom-left" />
      <DecorIcon position="bottom-right" />

      <span className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="flex min-w-0 items-center gap-2">
          <IconBrandInstagram
            className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
            stroke={1.5}
            aria-hidden="true"
          />
          <span className="truncate font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            @{handle}
          </span>
        </span>
        <IconArrowUpRight
          className="size-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          stroke={1.5}
          aria-hidden="true"
        />
      </span>

      <span className="relative mx-4 block overflow-hidden border border-border">
        <Image
          src={image}
          alt={alt}
          width={1080}
          height={1349}
          sizes="(min-width: 48rem) 20rem, 90vw"
          className="aspect-4/5 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </span>

      <span className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        {caption}
      </span>
    </a>
  );
}
