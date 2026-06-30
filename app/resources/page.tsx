import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MobileAppPreview } from "@/components/sections/MobileAppPreview";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { RESOURCES } from "@/lib/content";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles, video teaching, podcast, the book, masterclass, research, and toolkits for pastors and the marketplace leaders they shepherd.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="A growing platform for pastors and leaders."
        intro="Talking to Titans is becoming the national content platform for pastors, executives, entrepreneurs, investors, and marketplace leaders. Here's what's available now — and what's coming."
        image={IMAGES.articles}
      />

      <section id="articles" className="bg-cream py-24 md:py-36">
        <Container>
          <SectionHeader
            eyebrow="The Library"
            title="Explore the resource library."
          />
          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <RevealItem key={r.title}>
                <span id={r.href.split("#")[1]} className="block scroll-mt-28" />
                <ResourceCard {...r} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <MobileAppPreview />

      {/* Newsletter */}
      <section className="bg-cream-deep py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
            <SectionHeader
              eyebrow="Stay Informed"
              title="Be the first to know."
              intro="New articles, teaching, research, and resources — delivered as they're released."
            />
            <NewsletterSignup className="max-w-md" />
          </div>
        </Container>
      </section>

      <CTABanner
        title="Start with the Collective."
        body="The Kingdom Leadership Collective is where these resources come to life in community."
      />
    </>
  );
}
