import { BlogsCta } from "@/app/_components/blogs-cta";
import { Contact } from "@/app/_components/contact";
import { Education } from "@/app/_components/education";
import { Experience } from "@/app/_components/experience";
import { Hero } from "@/app/_components/hero";
import { BuiltThings } from "@/app/_components/projects";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/config";
import { buildMeta } from "@/lib/og";
import type { Metadata } from "next";

export const metadata: Metadata = buildMeta({
  title: siteConfig.name,
  pageTitle: `${siteConfig.name} - ${siteConfig.role}`,
  description: siteConfig.description,
  path: "home",
  canonicalPath: "/",
  type: "profile",
});

export default function Page() {
  return (
    <>
      <JsonLd
        type="webpage"
        title={siteConfig.name}
        description={siteConfig.description}
        canonicalUrl={`${siteConfig.baseUrl}`}
      />
      <Hero />
      <Experience />
      <BuiltThings />
      <BlogsCta />
      <Education />
      <Contact />
    </>
  );
}
