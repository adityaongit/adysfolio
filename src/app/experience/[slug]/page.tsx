import { Section } from "@/components/layouts/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyMuted,
  TypographySmall,
} from "@/components/ui/typography";
import { Logo } from "@/lib/logo";
import { buildMeta } from "@/lib/og";
import { experienceSource } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { IconArrowLeft, IconCalendar, IconMapPin } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { slug: string };

export default async function ExperiencePage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const page = experienceSource.getPage([slug]);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <>
      <Section variant="nav" aria-label="Experience navigation">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/#experience" aria-label="Back to portfolio">
            <IconArrowLeft className="size-3.5 shrink-0" aria-hidden="true" />
            <TypographySmall>Portfolio</TypographySmall>
          </Link>
        </Button>
      </Section>

      <Section variant="hero" aria-label="Experience header">
        <div className="flex items-start justify-between gap-6">
          <div className="flex min-w-0 flex-col gap-2">
            <TypographyH1 className="leading-tight">
              {page.data.company}
            </TypographyH1>
            <TypographyMuted className="text-base">
              {page.data.role}
            </TypographyMuted>
          </div>
          <Logo
            logo={page.data.logo}
            brandIcon={page.data.brandIcon}
            title={page.data.company}
            slug={slug}
            size="header"
          />
        </div>

        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1.5"
          aria-label="Role metadata"
        >
          <TypographyMuted className="font-mono text-xs flex items-center gap-1.5">
            <IconCalendar className="size-3.5 shrink-0" aria-hidden="true" />
            {page.data.period}
          </TypographyMuted>
          <TypographyMuted className="font-mono text-xs flex items-center gap-1.5">
            <IconMapPin className="size-3.5 shrink-0" aria-hidden="true" />
            {page.data.location}
          </TypographyMuted>
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
      </Section>

      <Section noTopDivider>
        <article className="prose min-w-0 max-w-3xl">
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(experienceSource, page),
            })}
          />
        </article>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  return experienceSource.generateParams().map(({ slug }) => ({
    slug: slug.join("/"),
  }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const page = experienceSource.getPage([slug]);
  if (!page) notFound();

  const title = `${page.data.company} — ${page.data.role}`;
  const metaTitle = title.length > 60 ? title.slice(0, 57).trimEnd() + "…" : title;

  const rawDesc = page.data.description ?? "";
  const metaDesc =
    rawDesc.length > 155 ? rawDesc.slice(0, 152).trimEnd() + "…" : rawDesc;

  return buildMeta({
    title,
    pageTitle: metaTitle,
    description: metaDesc,
    path: `home / experience / ${slug}`,
    canonicalPath: page.url,
    type: "profile",
    tags: page.data.tags as string[] | undefined,
  });
}
