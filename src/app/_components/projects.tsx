import { Section, CardGrid, CardGridItem } from "@/components/layouts/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/lib/logo";
import {
  SectionLabel,
  TypographyH3,
  TypographyLead,
  TypographyMark,
  TypographyMuted,
} from "@/components/ui/typography";
import { projectsSource } from "@/lib/source";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithubFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export function BuiltThings() {
  const projects = projectsSource.getPages().sort((a, b) => {
    const ao = a.data.order ?? 999;
    const bo = b.data.order ?? 999;
    return ao - bo;
  });

  return (
    <Section id="projects" aria-label="Things I've Built">
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

      <CardGrid cols="grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <CardGridItem
            key={project.url}
            className="group transition-colors duration-300 hover:bg-muted/30 p-0"
          >
            <Link
              href={project.url}
              aria-label={`View details for ${project.data.title}`}
              className="flex h-full flex-col gap-4 p-4 @sm:p-6 @lg:p-8"
            >
              <article className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Logo
                    logo={project.data.logo}
                    brandIcon={project.data.brandIcon}
                    title={project.data.title}
                    slug={project.slugs[project.slugs.length - 1] ?? project.url}
                    size="card"
                  />
                  <TypographyH3 className="text-xl">
                    {project.data.title}
                  </TypographyH3>
                  {project.data.wip && (
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 font-mono uppercase tracking-wider"
                    >
                      WIP
                    </Badge>
                  )}
                </div>

                <TypographyMuted className="leading-relaxed">
                  {project.data.tagline}
                </TypographyMuted>

                <ul
                  role="list"
                  aria-label="Technologies used"
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {project.data.tags.slice(0, 4).map((tag) => (
                    <li key={tag}>
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-1.5 pt-2 text-xs font-mono text-muted-foreground transition-colors group-hover:text-foreground">
                  <span>Read more</span>
                  <IconArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </article>
            </Link>
          </CardGridItem>
        ))}
      </CardGrid>

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
