import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AndrewStory } from "@/components/sections/AndrewStory";
import { AboutAndrew } from "@/components/sections/AboutAndrew";
import { CoreBeliefs } from "@/components/sections/CoreBeliefs";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Talking to Titans helps pastors disciple the leaders shaping tomorrow — strengthening, never replacing, the local church.",
};

const MOVEMENT = [
  { title: "Kingdom Leadership Collective", body: "The flagship year-long discipleship community.", live: true },
  { title: "Podcast", body: "Conversations with pastors and marketplace titans.", live: false },
  { title: "Annual Conference", body: "A national gathering for pastors and leaders.", live: false },
  { title: "Masterclass", body: "A guided path for shepherding high-capacity leaders.", live: false },
  { title: "The Book", body: "The story and the strategy behind the movement.", live: false },
  { title: "Resource Library", body: "Articles, video teaching, and toolkits.", live: false },
  { title: "Research & Insights", body: "Data on faith, generosity, and the marketplace.", live: false },
  { title: "Mobile App", body: "Daily leadership rhythms in your pocket.", live: false },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Helping pastors disciple the leaders shaping tomorrow."
        intro="Talking to Titans is the trusted destination where pastors confidently send their most influential business leaders to be discipled. We never replace the local church. We strengthen it."
        image={IMAGES.city}
      />

      {/* Three truths */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="What We Believe About Our Role"
            title="Three truths we never stop repeating."
          />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
            {[
              { n: "01", t: "Talking to Titans equips pastors", b: "We help pastors confidently shepherd high-capacity leaders." },
              { n: "02", t: "The Collective disciples leaders", b: "The Kingdom Leadership Collective forms marketplace leaders." },
              { n: "03", t: "The local church remains central", b: "The church is God's primary strategy. We reinforce the pastor." },
            ].map((item) => (
              <RevealItem key={item.n}>
                <div className="h-full bg-cream-soft p-8">
                  <span className="font-serif text-4xl text-gold-deep">{item.n}</span>
                  <h3 className="mt-4 font-serif text-2xl text-ink">{item.t}</h3>
                  <p className="mt-3 text-stone">{item.b}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <AndrewStory />
      <AboutAndrew />
      <CoreBeliefs />

      {/* The movement / ecosystem */}
      <section id="movement" className="bg-cream-deep py-24 md:py-36">
        <Container>
          <SectionHeader
            eyebrow="The Movement"
            title="What begins as Talking to Titans becomes something larger."
            intro="We are building an enduring content platform and ecosystem for pastors, executives, entrepreneurs, investors, and marketplace leaders."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MOVEMENT.map((m) => (
              <RevealItem key={m.title}>
                <div className="flex h-full flex-col justify-between border border-ink/10 bg-cream-soft p-6">
                  <div>
                    <span className="text-[0.6rem] uppercase tracking-widest text-gold-deep">
                      {m.live ? "Available now" : "Coming soon"}
                    </span>
                    <h3 className="mt-3 font-serif text-xl text-ink">{m.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-stone">{m.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTABanner
        title="Be part of what's beginning."
        body="Whether you're a pastor or a marketplace leader, there's a place for you in this movement."
      />
    </>
  );
}
