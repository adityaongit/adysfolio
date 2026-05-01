import logosData from "@iconify-json/logos/icons.json";
import simpleIconsData from "@iconify-json/simple-icons/icons.json";
import Image from "next/image";
import { Monogram } from "@/components/ui/monogram";
import { cn } from "@/lib/cn";

interface IconifyIcon {
  body: string;
  width?: number;
  height?: number;
}

interface IconifyData {
  icons: Record<string, IconifyIcon>;
  width?: number;
  height?: number;
}

const logos = logosData as unknown as IconifyData;
const simpleIcons = simpleIconsData as unknown as IconifyData;

function findIcon(name: string):
  | { icon: IconifyIcon; data: IconifyData; colored: boolean }
  | null {
  if (logos.icons[name]) {
    return { icon: logos.icons[name], data: logos, colored: true };
  }
  if (simpleIcons.icons[name]) {
    return {
      icon: simpleIcons.icons[name],
      data: simpleIcons,
      colored: false,
    };
  }
  return null;
}

interface BrandSvgProps {
  name: string;
  className?: string;
  ariaLabel?: string;
}

function BrandSvg({ name, className, ariaLabel }: BrandSvgProps) {
  const found = findIcon(name);
  if (!found) return null;
  const { icon, data, colored } = found;
  const w = icon.width ?? data.width ?? 24;
  const h = icon.height ?? data.height ?? 24;
  return (
    <svg
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, !colored && "fill-foreground")}
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}

export function hasBrandIcon(name: string | undefined): boolean {
  if (!name) return false;
  return findIcon(name) !== null;
}

interface LogoProps {
  /** Static path under /public, e.g. "/logos/projects/idxbeaver.svg" */
  logo?: string;
  /** Iconify "logos:" collection slug, e.g. "google-icon", "aws", "browserstack" */
  brandIcon?: string;
  /** Title used to derive monogram fallback. */
  title: string;
  /** Slug used to seed monogram rotation. */
  slug: string;
  /** Visual size variant. */
  size?: "card" | "header";
  className?: string;
}

export function Logo({
  logo,
  brandIcon,
  title,
  slug,
  size = "header",
  className,
}: LogoProps) {
  const frameSize =
    size === "card" ? "size-9" : "size-14 sm:size-20 lg:size-24";
  const frame = cn(
    "relative flex shrink-0 items-center justify-center",
    "border border-border bg-background",
    frameSize,
    className,
  );
  const iconSize =
    size === "card" ? "size-6" : "size-9 sm:size-12 lg:size-14";

  if (logo) {
    return (
      <div className={cn(frame, "p-1.5")}>
        <Image
          src={logo}
          alt={`${title} logo`}
          width={64}
          height={64}
          className="size-full object-contain"
        />
      </div>
    );
  }

  if (brandIcon && hasBrandIcon(brandIcon)) {
    return (
      <div className={frame}>
        <BrandSvg
          name={brandIcon}
          className={iconSize}
          ariaLabel={`${title} logo`}
        />
      </div>
    );
  }

  return (
    <Monogram
      title={title}
      slug={slug}
      size={size}
      className={className}
    />
  );
}
