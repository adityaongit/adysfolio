import { Section } from "@/components/layouts/page";
import { OrbitalDecor } from "@/components/shared/orbital-decor";
import { Button } from "@/components/ui/button";
import {
  SectionLabel,
  TypographyLead,
  TypographyMark,
} from "@/components/ui/typography";
import { projectsSource } from "@/lib/source";
import {
  IconArrowUpRight,
  IconBrandGithubFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { ProjectsGrid } from "@/app/_components/projects-grid";

export function BuiltThings() {
  const projects = projectsSource
    .getPages()
    .sort((a, b) => {
      const ao = a.data.order ?? 999;
      const bo = b.data.order ?? 999;
      return ao - bo;
    })
    .map((project) => ({
      url: project.url,
      slug: project.slugs[project.slugs.length - 1] ?? project.url,
      title: project.data.title,
      tagline: project.data.tagline,
      tags: project.data.tags,
      logo: project.data.logo,
      brandIcon: project.data.brandIcon,
      wip: project.data.wip,
    }));

  return (
    <Section id="projects" aria-label="Things I've Built">
      <OrbitalDecor
        variant="duo"
        className="-left-40 top-16 size-96 sm:-left-28"
      />
      <h2 className="sr-only">Things I&apos;ve Built</h2>
      <div className="flex items-center gap-3 mb-10" aria-hidden="true">
        <SectionLabel>Things I've Built</SectionLabel>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <div className="mb-12 max-w-3xl">
        <TypographyLead>
          A mix of{" "}
          <TypographyMark>
            real systems, useful tools, and controlled chaos
          </TypographyMark>
          .
        </TypographyLead>
      </div>

      <ProjectsGrid projects={projects} />

      <div className="mt-16 flex flex-col items-center gap-6 text-center">
        <TypographyLead className="max-w-2xl">
          There's more{" "}
          <TypographyMark>
            experiments, half-built tools, and questionable decisions
          </TypographyMark>{" "}
          living on my GitHub.
        </TypographyLead>
        <Button asChild size="lg" className="rounded-lg font-semibold">
          <Link
            href="https://github.com/adityaongit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore the Chaos — view all projects on GitHub"
          >
            <IconBrandGithubFilled className="size-5 mr-2" aria-hidden="true" />
            <span>Explore the Chaos</span>
            <IconArrowUpRight
              className="size-4 ml-2 opacity-70"
              aria-hidden="true"
            />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
