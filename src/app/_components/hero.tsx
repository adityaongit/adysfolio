import Link from "next/link";
import { IconFileText, IconMail } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Section, Card } from "@/components/layouts/page";
import { ExperienceCounter } from "@/components/ui/experience-counter";
import { siteConfig } from "@/lib/config";
import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
  TypographyMark,
  SectionLabel,
} from "@/components/ui/typography";
import { LocationTag } from "@/components/ui/location";

export function Hero() {
  return (
    <Section variant="hero" aria-label="Introduction">
      <div className="flex items-center gap-3 mb-6" aria-hidden="true">
        <SectionLabel>Who am I?</SectionLabel>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-6">
        <Card className="@sm:p-8 flex flex-col gap-8 bg-background/80 backdrop-blur-md">
          <div className="flex flex-col gap-6 @lg:flex-row @lg:items-start @lg:justify-between">
            <div className="space-y-4">
              <TypographyH1>{siteConfig.name}</TypographyH1>
              <TypographyMuted aria-label={`Role: ${siteConfig.role}`}>
                {siteConfig.role}
              </TypographyMuted>
              <LocationTag />
            </div>
            <ExperienceCounter className="@lg:mt-1" />
          </div>

          <TypographyLead>
            I build with{" "}
            <TypographyMark>
              clarity and structure
            </TypographyMark>{" "}
            — designing backend systems and AI solutions that stay simple, even when the problems aren’t.
          </TypographyLead>

          <nav aria-label="Primary actions">
            <ButtonGroup>
              <Button asChild size="lg" className="font-semibold px-3 @sm:px-5">
                <Link
                  href="/resume"
                  prefetch={false}
                  aria-label="View resume"
                  className="flex items-center justify-center gap-2"
                >
                  <IconFileText
                    className="size-5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>Resume</span>
                </Link>
              </Button>
              <ButtonGroupSeparator />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold px-3 @sm:px-5"
              >
                <a
                  href="#contact"
                  aria-label="Jump to contact section"
                  className="flex items-center justify-center gap-2"
                >
                  <IconMail className="size-5 shrink-0" aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </Button>
            </ButtonGroup>
          </nav>
        </Card>
      </div>
    </Section>
  );
}
