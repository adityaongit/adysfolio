import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Section, Card } from "@/components/layouts/page";
import {
  SectionLabel,
  TypographyH2,
  TypographyLead,
  TypographyMark,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export function BlogsCta() {
  return (
    <Section aria-label="Writing">
      <div className="flex items-center gap-3 mb-10" aria-hidden="true">
        <SectionLabel>Writing</SectionLabel>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <div className="w-full max-w-5xl">
        <Card className="@lg:p-10">
          <div className="space-y-6">
            <div className="space-y-3 max-w-2xl">
              <TypographyH2 className="border-none pb-0">
                I Write About What I Build
              </TypographyH2>
              <TypographyLead>
                Technical deep-dives on{" "}
                <TypographyMark>
                  AI systems, backend engineering, and the decisions behind
                  real-world projects
                </TypographyMark>{" "}
                — written the way I wish I'd found them when I was figuring it
                out.
              </TypographyLead>
            </div>

            <Button asChild size="lg" className="font-semibold w-fit">
              <Link href="/blogs" aria-label="Read all blog posts">
                Read the Blog
                <IconArrowUpRight
                  className="size-4 ml-1.5 opacity-70"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}
