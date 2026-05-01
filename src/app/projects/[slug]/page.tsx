import { Section } from "@/components/layouts/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  TypographyH1,
  TypographyLead,
  TypographySmall,
} from "@/components/ui/typography";
import { Logo } from "@/lib/logo";
import { buildMeta } from "@/lib/og";
import { projectsSource } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  IconArrowLeft,
  IconArrowUpRight,
  IconBrandGithubFilled,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { slug: string };

export default async function ProjectPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const page = projectsSource.getPage([slug]);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <>
      <Section variant="nav" aria-label="Project navigation">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/#projects" aria-label="Back to portfolio">
            <IconArrowLeft className="size-3.5 shrink-0" aria-hidden="true" />
            <TypographySmall>Portfolio</TypographySmall>
          </Link>
        </Button>
      </Section>

      <Section variant="hero" aria-label="Project header">
        <div className="flex items-start justify-between gap-6">
          <div className="flex min-w-0 flex-col gap-4">
            <TypographyH1 className="leading-tight">
              {page.data.title}
            </TypographyH1>
            {page.data.tagline && (
              <TypographyLead className="!mt-0">
                {page.data.tagline}
              </TypographyLead>
            )}
          </div>
          <Logo
            logo={page.data.logo}
            brandIcon={page.data.brandIcon}
            title={page.data.title}
            slug={slug}
            size="header"
          />
        </div>

        {page.data.tags?.length > 0 && (
          <ul
            role="list"
            aria-label="Technologies used"
            className="flex flex-wrap gap-1.5"
          >
            {page.data.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        )}

        <nav
          aria-label={`Links for ${page.data.title}`}
          className="pt-2"
        >
          <ButtonGroup>
            {page.data.live && (
              <>
                <Button asChild size="sm" variant="outline">
                  <a
                    href={page.data.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${page.data.title} live site`}
                  >
                    <IconArrowUpRight
                      className="size-4"
                      aria-hidden="true"
                    />
                    <span className="ml-2">View live</span>
                  </a>
                </Button>
                <ButtonGroupSeparator />
              </>
            )}
            <Button asChild size="sm" variant="secondary">
              <a
                href={page.data.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithubFilled
                  className="size-4"
                  aria-hidden="true"
                />
                <span className="ml-2">GitHub</span>
              </a>
            </Button>
          </ButtonGroup>
        </nav>
      </Section>

      <Section noTopDivider>
        <article className="prose min-w-0 max-w-3xl">
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(projectsSource, page),
            })}
          />
        </article>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  return projectsSource.generateParams().map(({ slug }) => ({
    slug: slug.join("/"),
  }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const page = projectsSource.getPage([slug]);
  if (!page) notFound();

  const rawTitle = page.data.title;
  const metaTitle =
    rawTitle.length > 60 ? rawTitle.slice(0, 57).trimEnd() + "…" : rawTitle;

  const rawDesc = page.data.description ?? page.data.tagline ?? "";
  const metaDesc =
    rawDesc.length > 155 ? rawDesc.slice(0, 152).trimEnd() + "…" : rawDesc;

  return buildMeta({
    title: rawTitle,
    pageTitle: metaTitle,
    description: metaDesc,
    path: `home / projects / ${slug}`,
    canonicalPath: page.url,
    type: "article",
    tags: page.data.tags as string[] | undefined,
  });
}
