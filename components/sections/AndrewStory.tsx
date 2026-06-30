import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialQuote } from "@/components/ui/EditorialQuote";
import { IMAGES } from "@/lib/images";

export function AndrewStory() {
  return (
    <section id="story" className="grain bg-ink py-24 text-cream md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Sticky image rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow text-gold-light before:bg-gold-light/60">
                Why I Started Talking to Titans
              </span>
              <h2 className="mt-6 font-serif text-display-md text-cream md:text-display-lg">
                A single question changed everything.
              </h2>
              <Media
                src={IMAGES.conversation}
                alt="A pastor in conversation with a business leader"
                ratio="portrait"
                overlay
                className="mt-10"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7">
            <div className="max-w-prose space-y-8 text-lg leading-relaxed text-cream/75">
              <Reveal as="span" className="block">
                <span className="float-left mr-4 mt-1 font-serif text-7xl leading-none text-gold">
                  F
                </span>
                For years I was more comfortable asking a college student to tithe
                than inviting a CEO into transformational generosity. Not because I
                lacked conviction — because I lacked confidence.
              </Reveal>

              <Reveal as="span" className="block">
                Then I sat down with four wealthy Christian business leaders. I
                asked one question:
              </Reveal>

              <EditorialQuote
                theme="light"
                quote="What helps — and what hurts — when pastors talk to you about generosity?"
                className="!my-12"
              />

              <Reveal as="span" className="block">
                Everything changed. They weren&rsquo;t looking for better
                fundraising. They were longing for better shepherding. They carried
                enormous weight and had business mentors, financial advisors, and
                executive coaches — but almost no one discipling the whole of who
                they were becoming.
              </Reveal>

              <Reveal as="span" className="block">
                Those conversations became Talking to Titans. Today they have become
                something even bigger.
              </Reveal>

              <Reveal className="border-l-2 border-gold pl-6">
                <p className="font-serif text-3xl text-cream">
                  The Kingdom Leadership Collective.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
