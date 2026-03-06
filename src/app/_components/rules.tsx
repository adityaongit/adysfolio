"use client";

import { Section, CardGrid, CardGridItem } from "@/components/layouts/page";
import {
  TypographyH3,
  TypographyLead,
  TypographyMuted,
  TypographyMark,
  SectionLabel,
} from "@/components/ui/typography";

export function RulesIFollow() {
  return (
    <Section aria-label="Rules I Follow">
      <h2 className="sr-only">Rules I Follow</h2>
      <div className="flex items-center gap-3 mb-10" aria-hidden="true">
        <SectionLabel>Rules I Follow</SectionLabel>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <CardGrid cols="grid-cols-1 md:grid-cols-2">
        {rules.map((item) => (
          <CardGridItem key={item.title}>
            <div className="space-y-3">
              <TypographyH3 className="text-xl">{item.title}</TypographyH3>
              <TypographyMuted className="leading-relaxed">
                {item.description}
              </TypographyMuted>
            </div>
          </CardGridItem>
        ))}
      </CardGrid>

      <div className="mt-14 max-w-3xl">
        <TypographyLead>
          Backend engineer turned{" "}
          <TypographyMark>AI builder</TypographyMark> — Xoogler shipping
          systems with clarity, structure, and automation.
        </TypographyLead>
      </div>
    </Section>
  );
}

const rules = [
  {
    title: "If It's Repetitive, Automate It",
    description:
      "The moment I catch myself doing the same thing twice, I'm already thinking about how to eliminate it. A script that runs forever beats a manual process you repeat daily — every time.",
  },
  {
    title: "Measure Before You Optimize",
    description:
      "Gut feelings about performance are usually wrong. I instrument first, evaluate second, and only then change the code — whether it's API latency, LLM response quality, or query patterns.",
  },
  {
    title: "Clarity Beats Cleverness",
    description:
      "Code that reads like what it does is more valuable than code that shows off what it can do. Abstractions earn their place — they aren't just there to exist.",
  },
  {
    title: "Systems Fail at the Edges",
    description:
      "Happy paths are easy. The real work is handling what happens when the API returns garbage, the model hallucinates, or the user does something unexpected. I handle those explicitly.",
  },
];
