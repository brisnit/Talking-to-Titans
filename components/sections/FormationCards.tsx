import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FORMATION } from "@/lib/content";

export function FormationCards() {
  return (
    <section id="formation" className="bg-cream-deep py-24 md:py-36">
      <Container>
        <SectionHeader
          eyebrow="Five Areas of Formation"
          title="Leaders are not shaped in one dimension."
          intro="Real formation touches the whole leader — what they build, how they lead, who they are, and how they give."
        />

        <RevealGroup className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {FORMATION.map((card) => (
            <RevealItem key={card.title}>
              <article className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden bg-ink p-8 text-cream">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-55 transition-all duration-700 ease-editorial group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
                <div className="relative z-10">
                  <span className="font-serif text-2xl text-gold-light">{card.n}</span>
                  <h3 className="mt-3 font-serif text-3xl text-cream">{card.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70 opacity-0 transition-all duration-500 ease-editorial group-hover:opacity-100">
                    {card.body}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}

          {/* Closing tile */}
          <RevealItem>
            <div className="flex h-full min-h-[24rem] flex-col justify-between border border-ink/15 bg-cream p-8">
              <span className="eyebrow">The Whole Leader</span>
              <p className="font-serif text-2xl leading-snug text-ink">
                Business is a calling. Influence is stewardship. Generosity is
                discipleship. Leadership is ministry.
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
