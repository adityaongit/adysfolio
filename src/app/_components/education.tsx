import { Section } from "@/components/layouts/page";
import { DecorIcon } from "@/components/ui/border";
import { Divider } from "@/components/ui/divider";
import { SectionLabel, TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    institution: "Chandigarh University",
    degree: "BE in Computer Science & Engineering",
    period: "2020 – 2024",
    location: "Punjab, India",
    highlights: [
      "CGPA: 8.52",
      "Solved over 600 coding questions across LeetCode and GeeksforGeeks",
      "AWS Certified Solutions Architect – Amazon Web Services, 2024",
      "Google Associate Cloud Engineer Certification – Google Cloud, 2023",
    ],
    tags: ["Computer Science", "Engineering", "Alumni"],
  },
];

export function Education() {
  return (
    <Section aria-label="Education">
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
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <span className="font-semibold text-base text-foreground">
                      {edu.institution}
                    </span>
                    <TypographyMuted className="text-sm font-normal">
                      {edu.degree}
                    </TypographyMuted>
                  </div>
                  <div className="flex flex-col items-end gap-0.5 shrink-0">
                    <TypographySmall className="font-mono tabular-nums text-muted-foreground">
                      {edu.period}
                    </TypographySmall>
                    <TypographySmall className="text-muted-foreground/50">
                      {edu.location}
                    </TypographySmall>
                  </div>
                </div>
                <ul className="space-y-2.5" role="list">
                  {edu.highlights.map((point) => (
                    <li key={point} className="flex gap-2.5">
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
