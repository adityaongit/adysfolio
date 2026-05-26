"use client";

import { CardGrid, CardGridItem } from "@/components/layouts/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { Logo } from "@/lib/logo";
import { IconArrowRight, IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export type ProjectCard = {
  url: string;
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  logo?: string;
  brandIcon?: string;
  wip?: boolean;
};

interface ProjectsGridProps {
  projects: ProjectCard[];
}

const INITIAL_PROJECT_COUNT = 4;

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = projects.length > INITIAL_PROJECT_COUNT;
  const visibleProjects = expanded
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <>
      <CardGrid cols="grid-cols-1 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <CardGridItem
            key={project.url}
            className="group transition-colors duration-300 hover:bg-muted/30 p-0"
          >
            <Link
              href={project.url}
              aria-label={`View details for ${project.title}`}
              className="flex h-full flex-col gap-4 p-4 @sm:p-6 @lg:p-8"
            >
              <article className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Logo
                    logo={project.logo}
                    brandIcon={project.brandIcon}
                    title={project.title}
                    slug={project.slug}
                    size="card"
                  />
                  <TypographyH3 className="text-xl">
                    {project.title}
                  </TypographyH3>
                  {project.wip && (
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 font-mono uppercase tracking-wider"
                    >
                      WIP
                    </Badge>
                  )}
                </div>

                <TypographyMuted className="leading-relaxed">
                  {project.tagline}
                </TypographyMuted>

                <ul
                  role="list"
                  aria-label="Technologies used"
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {project.tags.slice(0, 4).map((tag) => (
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

      {hasMore && !expanded && (
        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            variant="outline"
            className="rounded-lg font-semibold"
            onClick={() => setExpanded(true)}
          >
            <span>Show more</span>
            <IconChevronDown className="size-4 ml-2" aria-hidden="true" />
          </Button>
        </div>
      )}
    </>
  );
}
