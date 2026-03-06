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
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10 sm:px-8 lg:px-10 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:pointer-events-none after:absolute before:inset-y-0 after:right-0 after:w-px after:bg-border">
        <div aria-hidden="true">
          <DecorIcon position="top-left" pageBorder />
          <DecorIcon position="top-right" pageBorder />
        </div>

        <div className="flex flex-col gap-8">
          {/* Social links */}
          <nav aria-label="Social links" className="flex gap-2">
            {siteConfig.social.map((item) => (
              <Button
                key={item.label}
                asChild
                size="icon-sm"
                variant="outline"
                className="h-9 w-9"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} (opens in new tab)`}
                >
                  {getPlatformIcon(item.platform)}
                </a>
              </Button>
            ))}
          </nav>

          {/* Navigation links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div aria-hidden="true">
          <FullWidthDivider position="bottom" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TypographyMuted
            className="font-mono text-sm"
            aria-label={`© ${currentYear()} ${siteConfig.name}. All rights reserved.`}
          >
            &copy; {currentYear()} {siteConfig.name}
          </TypographyMuted>
          <ThemeToggle aria-label="Toggle theme" />
        </div>
      </div>
    </footer>
  );
}
