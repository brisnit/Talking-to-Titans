import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DesignedForPastors } from "@/components/sections/DesignedForPastors";
import { FourPromises } from "@/components/sections/FourPromises";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EditorialQuote } from "@/components/ui/EditorialQuote";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "For Pastors",
  description:
    "Who is discipling your business leaders? The Kingdom Leadership Collective is a gift you give the leaders God has entrusted to you.",
};

const DISCIPLED = ["Marriages", "Parents", "Students"];
const HAVE = ["Business mentors", "Financial advisors", "Executive coaches", "Performance consultants"];

export default function ForPastorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pastors"
        title="Who is discipling your business leaders?"
        intro="You shouldn't have to become an expert in executive leadership to shepherd high-capacity leaders well. We come alongside you — never in place of you."
        image={IMAGES.pastor}
      />

      {/* The big idea */}
      <section id="why" className="bg-cream py-24 md:py-36">
        <Container>
          <SectionHeader
            eyebrow="The Big Idea"
            title="Every church disciples marriages, parents, and students."
            intro="But who is intentionally discipling the leaders carrying extraordinary influence?"
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2">
            <div className="bg-cream-soft p-8 md:p-12">
              <p className="text-xs uppercase tracking-widest text-stone">
                Your church already disciples
              </p>
              <ul className="mt-6 space-y-3">
                {DISCIPLED.map((d) => (
                  <li key={d} className="font-serif text-3xl text-ink">{d}</li>
                ))}
              </ul>
            </div>
            <div className="grain bg-ink p-8 text-cream md:p-12">
              <p className="text-xs uppercase tracking-widest text-gold-light">
                Your business leaders already have
              </p>
              <ul className="mt-6 space-y-3">
                {HAVE.map((h) => (
                  <li key={h} className="font-serif text-2xl text-cream/90">{h}</li>
                ))}
              </ul>
              <p className="mt-8 border-t border-cream/15 pt-6 text-cream/70">
                Very few have intentional discipleship designed for the unique
                weight they carry. Talking to Titans exists to solve that problem.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <SplitFeature
        eyebrow="A Gift, Not a Pitch"
        title="We're not asking you to send us your donors."
        body={
          <>
            <p>
              We&rsquo;re helping you disciple your most influential people. This is
              not something pastors join — it&rsquo;s a gift pastors give to the
              business leaders God has entrusted to them.
            </p>
            <p className="mt-4">
              Your leaders return more committed to Christ, to their families, to
              generosity, and to your church.
            </p>
          </>
        }
        image={IMAGES.conversation}
        imageAlt="A pastor in conversation with a leader"
        theme="light"
      />

      <div id="gift">
        <DesignedForPastors />
      </div>

      <FourPromises />

      <section className="bg-cream-deep py-24 md:py-36">
        <Container>
          <EditorialQuote
            quote="I've been looking for something exactly like this for my business leaders."
            cite="The response we hear most"
            role="from pastors across the country"
            className="mx-auto text-center"
          />
        </Container>
      </section>

      <CTABanner
        eyebrow="For Pastors"
        title="Refer a leader you shepherd."
        body="Tell us about a business leader in your church. We'll honor your role and walk with them — always pointing back to you and your church."
        primary={{ href: "/refer", label: "Refer a Leader" }}
        secondary={{ href: "/contact", label: "Talk with our team" }}
      />
    </>
  );
}
