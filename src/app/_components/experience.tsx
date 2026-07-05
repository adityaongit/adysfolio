import { IconArrowRight } from "@tabler/icons-react";
import { Section } from "@/components/layouts/page";
import { OrbitalDecor } from "@/components/shared/orbital-decor";
import { DecorIcon } from "@/components/ui/border";
import { Divider } from "@/components/ui/divider";
import {
  SectionLabel,
  TypographyMuted,
  TypographySmall,
} from "@/components/ui/typography";
import { Logo } from "@/lib/logo";
import { experienceSource } from "@/lib/source";
import Link from "next/link";

export function Experience() {
  const experiences = experienceSource.getPages().sort((a, b) => {
    const ao = a.data.order ?? 999;
    const bo = b.data.order ?? 999;
    return ao - bo;
  });

  return (
    <Section id="experience" aria-label="Experience">
      <OrbitalDecor
        variant="solo"
        className="-right-36 top-1/4 size-80 sm:-right-28"
      />
      <h2 className="sr-only">Experience</h2>
      <div className="flex items-center gap-3" aria-hidden="true">
        <SectionLabel>Experience</SectionLabel>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <div className="w-full flex flex-col">
        {experiences.flatMap((exp, i) => {
          const box = (
            <div
              key={exp.url}
              className="relative border border-border px-6 group transition-colors hover:bg-muted/30"
            >
              <DecorIcon position="top-left" />
              <DecorIcon position="top-right" />
              <DecorIcon position="bottom-left" />
              <DecorIcon position="bottom-right" />
              <Link
                href={exp.url}
                aria-label={`View details for ${exp.data.company}`}
                className="w-full flex items-center justify-between gap-4 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Logo
                    logo={exp.data.logo}
                    brandIcon={exp.data.brandIcon}
                    title={exp.data.company}
                    slug={exp.slugs[exp.slugs.length - 1] ?? exp.url}
                    size="card"
                  />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-semibold text-base text-foreground transition-colors truncate">
                      {exp.data.company}
                    </span>
                    <TypographyMuted className="text-sm font-normal">
                      {exp.data.role}
                    </TypographyMuted>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:flex flex-col items-end gap-0.5">
                    <TypographySmall className="font-mono tabular-nums text-muted-foreground">
                      {exp.data.period}
                    </TypographySmall>
                    <TypographySmall className="text-muted-foreground/50">
                      {exp.data.location}
                    </TypographySmall>
                  </div>
                  <IconArrowRight
                    className="size-4 text-muted-foreground/60 transition-transform shrink-0 group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </div>
          );
          return i > 0
            ? [
                <Divider
                  key={`div-${i}`}
                  short
                  borderTop={false}
                  borderBottom={false}
                  className="before:w-full before:left-0 before:translate-x-0"
                />,
                box,
              ]
            : [box];
        })}
      </div>
    </Section>
  );
}
