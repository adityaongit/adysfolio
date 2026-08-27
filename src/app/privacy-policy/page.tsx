import { Section } from "@/components/layouts/page";
import { JsonLd } from "@/components/shared/json-ld";
import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
  TypographyMark,
  TypographyP,
  SectionLabel,
} from "@/components/ui/typography";
import { siteConfig } from "@/lib/config";
import { buildMeta } from "@/lib/og";
import type { Metadata } from "next";

export const metadata: Metadata = buildMeta({
  title: "Privacy Policy",
  pageTitle: "Privacy Policy",
  description: `How ${siteConfig.name}'s website handles your data — what's collected, why, and how it's stored. Short version: not much, and nothing creepy.`,
  path: "home / privacy-policy",
  canonicalPath: "/privacy-policy",
  type: "website",
});

const LAST_UPDATED = "March 6, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        type="webpage"
        title="Privacy Policy"
        description={`Privacy policy for ${siteConfig.domain} — data collected, stored, and why.`}
        canonicalUrl={`${siteConfig.baseUrl}/privacy-policy`}
      />

      <Section variant="hero" aria-label="Privacy Policy">
        <TypographyH1>Privacy Policy</TypographyH1>
        <TypographyLead>
          The short version:{" "}
          <TypographyMark>
            no personal data is collected or stored by this site.
          </TypographyMark>{" "}
          The long version follows.
        </TypographyLead>
        <TypographyMuted className="font-mono">
          Last updated: {LAST_UPDATED}
        </TypographyMuted>
      </Section>

      <Section aria-label="What this site is">
        <div className="flex items-center gap-3 mb-10" aria-hidden="true">
          <SectionLabel>What this site is</SectionLabel>
          <div className="flex-1 h-px bg-border/40" />
        </div>
        <div className="max-w-2xl">
          <TypographyP>
            This is a personal portfolio and blog at{" "}
            <TypographyMark>{siteConfig.domain}</TypographyMark>. It includes
            blog posts, projects, experience, a resume, and a contact section —
            all fully public. There is no newsletter, no login, and no account
            system.
          </TypographyP>
        </div>
      </Section>

      <Section aria-label="What data is collected">
        <div className="flex items-center gap-3 mb-10" aria-hidden="true">
          <SectionLabel>What data is collected</SectionLabel>
          <div className="flex-1 h-px bg-border/40" />
        </div>
        <div className="max-w-2xl">
          <TypographyP>
            This site does not collect, store, or process any personally
            identifiable information. No browser fingerprinting.{" "}
            <TypographyMark>No tracking pixels.</TypographyMark> No third-party
            ad networks. No cookies set by this site. The only external data
            collection comes from{" "}
            <TypographyMark>Umami Analytics</TypographyMark> — see below.
          </TypographyP>
        </div>
      </Section>

      <Section aria-label="Analytics">
        <div className="flex items-center gap-3 mb-10" aria-hidden="true">
          <SectionLabel>Analytics</SectionLabel>
          <div className="flex-1 h-px bg-border/40" />
        </div>
        <div className="max-w-2xl">
          <TypographyP>
            This site uses{" "}
            <a
              href="https://umami.is"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Umami Analytics
            </a>{" "}
            — a <TypographyMark>privacy-focused, open-source</TypographyMark>{" "}
            analytics tool <TypographyMark>self-hosted</TypographyMark> on
            infrastructure I control, so analytics data never leaves my own
            server. Umami does <TypographyMark>not use cookies</TypographyMark>, does
            not collect personal data, and complies with{" "}
            <TypographyMark>GDPR, CCPA, and PECR</TypographyMark>. Only
            anonymized, aggregated page view data is recorded — no IP addresses,
            no fingerprinting, no cross-site tracking.
          </TypographyP>
        </div>
      </Section>

      <Section aria-label="Third-party services">
        <div className="flex items-center gap-3 mb-10" aria-hidden="true">
          <SectionLabel>Third-party services</SectionLabel>
          <div className="flex-1 h-px bg-border/40" />
        </div>
        <div className="max-w-2xl">
          <TypographyP>
            This site uses Google Fonts (loaded via CSS, subject to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Google&apos;s Privacy Policy
            </a>
            ). The resume is served from a GitHub Releases URL. Neither
            integration passes any data about you back to this site.
          </TypographyP>
        </div>
      </Section>

      <Section aria-label="Your rights">
        <div className="flex items-center gap-3 mb-10" aria-hidden="true">
          <SectionLabel>Your rights</SectionLabel>
          <div className="flex-1 h-px bg-border/40" />
        </div>
        <div className="max-w-2xl">
          <TypographyP>
            Since no personal data is stored by this site, there is nothing to
            access, correct, or erase. If you have any questions or concerns,
            reach out at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              {siteConfig.email}
            </a>
            .
          </TypographyP>
        </div>
      </Section>

      <Section aria-label="Changes to this policy">
        <div className="flex items-center gap-3 mb-10" aria-hidden="true">
          <SectionLabel>Changes to this policy</SectionLabel>
          <div className="flex-1 h-px bg-border/40" />
        </div>
        <div className="max-w-2xl">
          <TypographyP>
            If anything meaningful changes (like adding a feature that collects
            data), this page will be updated and the{" "}
            <TypographyMark>&ldquo;Last updated&rdquo;</TypographyMark> date
            will reflect it. No surprise privacy pivots here.
          </TypographyP>
        </div>
      </Section>
    </>
  );
}
