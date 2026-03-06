import { ThemeToggle } from "@/components/shared/theme-toggle";
import { DecorIcon, FullWidthDivider } from "@/components/ui/border";
import { Button } from "@/components/ui/button";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { siteConfig } from "@/lib/config";
import { getPlatformIcon } from "@/components/shared/platform-icons";
import { currentYear } from "@/lib/date";
import Link from "next/link";

const footerNav = [
  ...siteConfig.nav,
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto" aria-label="Site footer">
      {/* Purple accent line at top */}
      <div className="h-px w-full bg-gradient-to-r from-purple-500 via-purple-400 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Corner accents */}
        <div className="absolute -top-px left-0 w-px h-4 bg-border" aria-hidden="true" />
        <div className="absolute -top-px right-0 w-px h-4 bg-border" aria-hidden="true" />

        <div className="flex flex-col gap-8 py-12">
          {/* Main footer content - asymmetric three-column */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-8">

            {/* Left: Name + Statement */}
            <div className="flex flex-col gap-3 md:order-1">
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-purple-500/50" aria-hidden="true" />
                <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                  Portfolio
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                {siteConfig.name}
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Building distributed AI systems with clarity and rigor.
              </p>
            </div>

            {/* Center: Navigation */}
            <div className="flex flex-col gap-3 md:order-2 md:items-center">
              <span
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground md:self-start"
                aria-hidden="true"
              >
                Navigate
              </span>
              <nav className="flex flex-col gap-2">
                {footerNav.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-block w-fit"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: Social + Theme Toggle */}
            <div className="flex flex-col gap-4 md:order-3 md:items-end">
              <span
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground md:self-end"
                aria-hidden="true"
              >
                Connect
              </span>
              <nav className="flex gap-2" aria-label="Social links">
                {siteConfig.social.map((item) => (
                  <Button
                    key={item.label}
                    asChild
                    size="icon"
                    variant="outline"
                    className="h-9 w-9 border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label} (opens in new tab)`}
                    >
                      {getPlatformIcon(item.platform, "size-4")}
                    </a>
                  </Button>
                ))}
              </nav>
              <ThemeToggle
                aria-label="Toggle theme"
                className="md:self-end"
              />
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-border/50">
            <TypographyMuted
              className="font-mono text-xs tabular-nums"
              aria-label={`© ${currentYear()} ${siteConfig.name}. All rights reserved.`}
            >
              © {currentYear()} · {siteConfig.name}
            </TypographyMuted>

            {/* Decorative element */}
            <div className="flex items-center gap-3 sm:ml-auto" aria-hidden="true">
              <div className="h-px w-12 bg-border/40" />
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-purple-500/30" />
                <div className="w-1 h-1 rounded-full bg-purple-500/20" />
                <div className="w-1 h-1 rounded-full bg-purple-500/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom corner accents */}
        <div className="absolute bottom-0 left-0 pointer-events-none" aria-hidden="true">
          <DecorIcon position="bottom-left" pageBorder />
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none" aria-hidden="true">
          <DecorIcon position="bottom-right" pageBorder />
        </div>
      </div>
    </footer>
  );
}
