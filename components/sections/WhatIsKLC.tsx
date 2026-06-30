import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const NOT = ["Not networking", "Not coaching", "Not another mastermind"];

export function WhatIsKLC() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <Media
                src="/brand/brotherhood.png"
                alt="Five leaders laughing together beneath a wall reading 'A brotherhood of Kingdom builders', Bibles and coffee on the table"
                ratio="landscape"
                className="shadow-editorial"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-8 -right-4 hidden bg-ink px-8 py-6 text-cream shadow-lift md:block">
                <p className="font-serif text-4xl text-gold-light">1</p>
                <p className="mt-1 max-w-[12rem] text-sm text-cream/70">
                  year-long journey of brotherhood and formation
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-6">The Kingdom Leadership Collective</span>
            <h2 className="font-serif text-display-md text-ink md:text-display-lg">
              A brotherhood of Kingdom builders.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {NOT.map((n) => (
                <span
                  key={n}
                  className="border border-ink/15 px-4 py-2 text-sm text-stone"
                >
                  {n}
                </span>
              ))}
            </div>

            <p className="mt-8 max-w-prose text-lg leading-relaxed text-charcoal">
              A discipleship community for marketplace leaders who believe business
              is one of God&rsquo;s greatest gifts for advancing His Kingdom. A
              place to be challenged spiritually, encouraged personally, and
              sharpened professionally — surrounded by other leaders who love Jesus.
            </p>

            <div className="mt-10">
              <Button href="/kingdom-leadership-collective" variant="secondary">
                Explore the Collective
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
