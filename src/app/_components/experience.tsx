"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Section } from "@/components/layouts/page";
import { DecorIcon } from "@/components/ui/border";
import { Divider } from "@/components/ui/divider";
import { SectionLabel, TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Edra Labs – BrowserStack",
    role: "Software Engineer",
    period: "Aug 2024 – Present",
    location: "Mumbai, India",
    highlights: [
      "Shipped an AI copilot Chrome extension for Salesforce that auto-links activities to deals, extracts field values from transcripts, and suggests pipeline stage transitions.",
      "Integrated Gmail, Zoom, Fireflies.ai, and Google Calendar into a unified context layer, routing data across multiple LLM providers for structured field extraction.",
      "Built backend for an AI-driven CX system with multiple LLM agents (RAG, diagnosis, evaluation), now resolving 60% of L2 tickets automatically.",
      "Implemented an LLM-as-a-judge evaluation layer using DeepEval's G-Eval framework to measure and improve AI response quality.",
      "Built a LangChain-based caching layer that cut redundant API calls and improved response efficiency for frequently accessed prompts.",
    ],
    tags: ["TypeScript", "LLMs", "LangChain", "Python", "Chrome Extensions"],
  },
  {
    company: "Google",
    role: "Software Engineering Intern",
    period: "Jun 2023 – Aug 2023",
    location: "Bengaluru, India",
    highlights: [
      "Built Terraformarium, an internal Go tool that automated infrastructure setup for Anthos and Composer — cutting provisioning time and costs by 37%.",
      "Delivered up to $600 savings per 100 cases around Anthos Service Mesh.",
      "Contributed to TS Toolkit, enhancing IAM Role Comparison and Foreign Logs Translation capabilities.",
      "Implemented serverless backend with Cloud Functions, deployed on App Engine with auto-scaling and load balancing.",
    ],
    tags: ["Go", "Terraform", "GCP", "Serverless", "Cloud Functions"],
  },
];

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section aria-label="Experience">
      <h2 className="sr-only">Experience</h2>
      <div className="flex items-center gap-3" aria-hidden="true">
        <SectionLabel>Experience</SectionLabel>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <div className="w-full flex flex-col">
        {experiences.flatMap((exp, i) => {
          const isOpen = openIndex === i;
          const box = (
            <div key={exp.company} className="relative border border-border px-6">
              <DecorIcon position="top-left" />
              <DecorIcon position="top-right" />
              <DecorIcon position="bottom-left" />
              <DecorIcon position="bottom-right" />
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`exp-details-${i}`}
                className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-semibold text-base text-foreground group-hover:text-foreground/80 transition-colors truncate">
                    {exp.company}
                  </span>
                  <TypographyMuted className="text-sm font-normal">
                    {exp.role}
                  </TypographyMuted>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:flex flex-col items-end gap-0.5">
                    <TypographySmall className="font-mono tabular-nums text-muted-foreground">
                      {exp.period}
                    </TypographySmall>
                    <TypographySmall className="text-muted-foreground/50">
                      {exp.location}
                    </TypographySmall>
                  </div>
                  <IconChevronDown
                    className={`size-4 text-muted-foreground/60 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
              <div
                id={`exp-details-${i}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 space-y-4">
                    <div className="flex gap-3 sm:hidden">
                      <TypographySmall className="font-mono tabular-nums text-muted-foreground">
                        {exp.period}
                      </TypographySmall>
                      <span className="text-muted-foreground/40 text-xs">·</span>
                      <TypographySmall className="text-muted-foreground/50">
                        {exp.location}
                      </TypographySmall>
                    </div>
                    <ul className="space-y-2.5" role="list">
                      {exp.highlights.map((point) => (
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
                      aria-label="Technologies used"
                      className="flex flex-wrap gap-1.5"
                    >
                      {exp.tags.map((tag) => (
                        <li key={tag}>
                          <Badge variant="outline" className="text-xs px-2 py-0.5">
                            {tag}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
