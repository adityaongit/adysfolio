import { Section, CardGrid, CardGridItem } from "@/components/layouts/page";
import { Button } from "@/components/ui/button";
import {
  SectionLabel,
  TypographyH1,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import { Logo } from "@/lib/logo";
import { certifications, siteConfig } from "@/lib/config";
import { buildMeta } from "@/lib/og";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";

const ISSUER_BRAND_ICON: Record<string, string> = {
  "Amazon Web Services": "aws",
  AWS: "aws",
  "Google Cloud": "google-cloud",
  "Google Cloud Skills Boost": "google-cloud",
  Google: "google-icon",
  Microsoft: "microsoft-icon",
  "Microsoft Azure": "microsoft-azure",
  Azure: "microsoft-azure",
  Coursera: "coursera",
  Udemy: "udemy",
  edX: "edx",
  HashiCorp: "hashicorp",
  Kubernetes: "kubernetes",
  Docker: "docker",
  GitHub: "github-icon",
  Meta: "meta-icon",
  IBM: "ibm",
  Oracle: "oracle",
  Cisco: "cisco",
  HackerRank: "hackerrank",
  "Infosys Springboard": "infosys",
  Infosys: "infosys",
  MathWorks: "mathworks",
  "IIT Kharagpur": "indianinstituteoftechnology",
  "IIIT Bangalore": "indianinstituteoftechnology",
};

export default function CertificationsPage() {
  return (
    <>
      <Section variant="hero" aria-label="Certifications header">
        <div className="flex items-center gap-3" aria-hidden="true">
          <SectionLabel>Certifications</SectionLabel>
          <div className="flex-1 h-px bg-border/40" />
        </div>

        <TypographyH1>Certifications</TypographyH1>

        <TypographyLead>
          Industry certifications, validated coursework, and the occasional
          weekend exam.
        </TypographyLead>
      </Section>

      <Section noTopDivider aria-label="Certifications list">
        <CardGrid cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const brandIcon = ISSUER_BRAND_ICON[cert.issuer];
            return (
              <CardGridItem key={cert.id} className="p-0">
                <article
                  aria-label={cert.name}
                  className="flex h-full flex-col gap-4 p-4 @sm:p-6 @lg:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Logo
                      brandIcon={brandIcon}
                      title={cert.issuer}
                      slug={cert.id}
                      size="card"
                    />
                    <span className="font-mono text-xs tabular-nums text-muted-foreground">
                      {cert.year}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-base text-foreground leading-snug">
                      {cert.name}
                    </h2>
                    <TypographyMuted className="text-sm">
                      {cert.issuer}
                    </TypographyMuted>
                  </div>

                  <div className="mt-auto pt-2">
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View credential for ${cert.name}`}
                      >
                        <IconArrowUpRight
                          className="size-4"
                          aria-hidden="true"
                        />
                        <span className="ml-2">View credential</span>
                      </a>
                    </Button>
                  </div>
                </article>
              </CardGridItem>
            );
          })}
        </CardGrid>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="ghost" size="sm">
            <Link href="/" aria-label="Back to portfolio">
              ← Back to portfolio
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

export const metadata: Metadata = buildMeta({
  title: `Certifications — ${siteConfig.name}`,
  description:
    "Industry certifications and validated coursework — AWS, Google Cloud, and more.",
  path: "home / certifications",
  canonicalPath: "/certifications",
  type: "website",
});
