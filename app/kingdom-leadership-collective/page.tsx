import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhatIsKLC } from "@/components/sections/WhatIsKLC";
import { FormationCards } from "@/components/sections/FormationCards";
import { MembersReceive } from "@/components/sections/MembersReceive";
import { FourPromises } from "@/components/sections/FourPromises";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ReferForm } from "@/components/forms/ReferForm";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialQuote } from "@/components/ui/EditorialQuote";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kingdom Leadership Collective",
  description:
    "A year-long discipleship community for CEOs, founders, executives, investors, and marketplace leaders who want to leverage their influence for the Kingdom of God.",
};

export default function KLCPage() {
  return (
    <>
      <PageHero
        eyebrow="The Flagship Experience"
        title="The Kingdom Leadership Collective"
        intro="A year-long discipleship community for CEOs, entrepreneurs, executives, founders, investors, family business leaders, and marketplace influencers. A brotherhood of Kingdom builders."
        image={IMAGES.brotherhood}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <EditorialQuote
            quote="The Kingdom Leadership Collective is not something pastors join. It is a gift pastors give to the business leaders God has entrusted to them."
            cite="Andrew Hartman"
            role="Founder, Talking to Titans"
            className="mx-auto text-center"
          />
        </Container>
      </section>

      <WhatIsKLC />
      <FormationCards />
      <MembersReceive />
      <FourPromises />

      {/* Join / founding member */}
      <section id="join" className="grain bg-ink py-24 text-cream md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionHeader
                  theme="light"
                  eyebrow="Become a Founding Member"
                  title="Join the founding cohort."
                  intro={
                    <span className="text-cream/70">
                      We are assembling a founding community of marketplace leaders
                      who will help shape the Collective for the decade to come.
                      Tell us about yourself — or the leader you&rsquo;d like to
                      refer — and we&rsquo;ll be in touch.
                    </span>
                  }
                />
                <Reveal className="mt-10 space-y-4 border-t border-cream/15 pt-8 text-sm text-cream/70">
                  <p>✦ A trusted cohort of peers who love Jesus</p>
                  <p>✦ Annual summit, monthly roundtable, daily rhythms</p>
                  <p>✦ Formation across all five areas of leadership</p>
                  <p>✦ Always in partnership with your local church</p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ReferForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
