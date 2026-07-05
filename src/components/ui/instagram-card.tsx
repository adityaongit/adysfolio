import Image from "next/image";
import {
  IconArrowUpRight,
  IconBookmark,
  IconBrandInstagram,
  IconHeart,
  IconMessageCircle,
  IconRosetteDiscountCheckFilled,
  IconSend,
} from "@tabler/icons-react";
import { DecorIcon } from "@/components/ui/border";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/config";

interface InstagramCardProps {
  className?: string;
}

export function InstagramCard({ className }: InstagramCardProps) {
  const { handle, verified, avatar, postUrl, date, caption, slides } =
    siteConfig.instagram;
  const [cover, second] = slides;

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
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="relative size-7 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={avatar}
              alt=""
              width={56}
              height={56}
              className="size-full object-cover"
            />
          </span>
          <span className="flex min-w-0 items-center gap-1">
            <span className="truncate font-mono text-xs font-medium text-foreground">
              @{handle}
            </span>
            {verified && (
              <IconRosetteDiscountCheckFilled
                className="size-3.5 shrink-0 text-sky-500"
                aria-label="Verified account"
              />
            )}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-1.5">
          <IconBrandInstagram
            className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
            stroke={1.5}
            aria-hidden="true"
          />
          <IconArrowUpRight
            className="size-3.5 text-muted-foreground/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            stroke={1.5}
            aria-hidden="true"
          />
        </span>
      </span>

      <span className="relative mx-4 block aspect-4/5 overflow-hidden border border-border">
        <Image
          src={cover.src}
          alt={cover.alt}
          width={1080}
          height={1349}
          sizes="(min-width: 48rem) 20rem, 90vw"
          className="absolute inset-0 size-full object-cover"
        />
        <Image
          src={second.src}
          alt={second.alt}
          width={1080}
          height={1349}
          sizes="(min-width: 48rem) 20rem, 90vw"
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        />
      </span>

      <span
        className="relative flex items-center justify-between px-4 pt-3"
        aria-hidden="true"
      >
        <span className="flex items-center gap-3.5">
          <IconHeart
            className="size-4.5 fill-[#FF3040] text-[#FF3040]"
            stroke={1.5}
          />
          <IconMessageCircle
            className="size-4.5 text-muted-foreground transition-colors group-hover:text-foreground"
            stroke={1.5}
          />
          <IconSend
            className="size-4.5 text-muted-foreground transition-colors group-hover:text-foreground"
            stroke={1.5}
          />
        </span>
        <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[calc(-50%+0.375rem)] items-center gap-1">
          <span className="size-1.5 rounded-full bg-foreground/60 transition-colors duration-500 group-hover:bg-foreground/25" />
          <span className="size-1.5 rounded-full bg-foreground/25 transition-colors duration-500 group-hover:bg-foreground/60" />
        </span>
        <IconBookmark
          className="size-4.5 text-muted-foreground transition-colors group-hover:text-foreground"
          stroke={1.5}
        />
      </span>

      <span className="px-4 pt-2.5 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">{handle}</span> {caption}
      </span>
      <span className="px-4 pb-3.5 pt-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/80">
        {date}
      </span>
    </a>
  );
}
