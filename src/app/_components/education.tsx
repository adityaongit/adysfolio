import { Section } from "@/components/layouts/page";
import { OrbitalDecor } from "@/components/shared/orbital-decor";
import { DecorIcon } from "@/components/ui/border";
import { Divider } from "@/components/ui/divider";
import { SectionLabel, TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const baseHighlights: (string | ReactNode)[] = [
  "CGPA: 8.52",
  <>
    Solved 700+ coding questions on{" "}
    <Link href="https://leetcode.com/u/adysleetcode/" className="underline hover:text-foreground/80 transition-colors" target="_blank" rel="noopener noreferrer">
      LeetCode
    </Link>
    {" "}and{" "}
    <Link href="https://www.geeksforgeeks.org/profile/adysgfg?tab=activity" className="underline hover:text-foreground/80 transition-colors" target="_blank" rel="noopener noreferrer">
      GeeksforGeeks
    </Link>
  </>,
  <>
    Continued learning on{" "}
    <Link href="/certifications" className="underline hover:text-foreground/80 transition-colors">
      certifications
    </Link>{" "}— AWS, Google Cloud, and more.
  </>,
];

const education = [
  {
    institution: "Chandigarh University",
    degree: "BE in Computer Science & Engineering",
    period: "2020 – 2024",
    location: "Chandigarh, India",
    logo: "/logos/education/chandigarh-university-logo.png",
    highlights: baseHighlights,
    tags: ["Computer Science", "Engineering", "Alumni"],
  },
];

export function Education() {
  return (
    <Section aria-label="Education">
      <OrbitalDecor
        variant="duo"
        className="-left-36 -top-10 size-80 sm:-left-24"
      />
      <h2 className="sr-only">Education</h2>
      <div className="flex items-center gap-3" aria-hidden="true">
        <SectionLabel>Education</SectionLabel>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <div className="w-full flex flex-col">
        {education.flatMap((edu, i) => {
          const box = (
            <div key={edu.institution} className="relative border border-border px-6">
              <DecorIcon position="top-left" />
              <DecorIcon position="top-right" />
              <DecorIcon position="bottom-left" />
              <DecorIcon position="bottom-right" />
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="relative flex size-14 shrink-0 items-center justify-center border border-border bg-background p-2">
                      <Image
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        width={64}
                        height={64}
                        className="size-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-semibold text-base text-foreground">
                        {edu.institution}
                      </span>
                      <TypographyMuted className="text-sm font-normal">
                        {edu.degree}
                      </TypographyMuted>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-0.5 shrink-0">
                    <TypographySmall className="font-mono tabular-nums text-muted-foreground">
                      {edu.period}
                    </TypographySmall>
                    <TypographySmall className="text-muted-foreground/50">
                      {edu.location}
                    </TypographySmall>
                  </div>
                </div>
                <div className="flex gap-3 sm:hidden">
                  <TypographySmall className="font-mono tabular-nums text-muted-foreground">
                    {edu.period}
                  </TypographySmall>
                  <span className="text-muted-foreground/40 text-xs">·</span>
                  <TypographySmall className="text-muted-foreground/50">
                    {edu.location}
                  </TypographySmall>
                </div>
                <ul className="space-y-2.5" role="list">
                  {edu.highlights.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span
                        className="mt-2 size-1 rounded-full bg-muted-foreground/40 shrink-0"
                        aria-hidden="true"
                      />
                      <TypographyMuted className="text-sm leading-relaxed">
                        {point}
                      </TypographyMuted>
                    </li>
                  ))}
                </ul>
                <ul
                  role="list"
                  aria-label="Focus areas"
                  className="flex flex-wrap gap-1.5"
                >
                  {edu.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
          return i > 0
            ? [<Divider key={`div-${i}`} short borderTop={false} borderBottom={false} className="before:w-full before:left-0 before:translate-x-0" />, box]
            : [box];
        })}
      </div>
    </Section>
  );
}
