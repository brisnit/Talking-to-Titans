import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ReferForm } from "@/components/forms/ReferForm";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Refer a Leader",
  description:
    "Refer a business leader in your church to the Kingdom Leadership Collective. We honor your role as their pastor — always.",
};

const PROMISES = [
  "We never replace the pastor — we reinforce the pastor.",
  "Your leader returns more committed to your church.",
  "Formation across faith, leadership, character, and generosity.",
  "Always in partnership with the local church.",
];

export default function ReferPage() {
  return (
    <section className="grain relative min-h-screen overflow-hidden bg-ink pt-32 text-cream">
      <Image
        src={IMAGES.brotherhood}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink to-ink" />

      <Container className="relative z-10 pb-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow text-gold-light before:bg-gold-light/60">
                Refer a Leader
              </span>
              <h1 className="mt-6 font-serif text-display-lg text-cream">
                A gift you give the leaders you shepherd.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/70">
                Tell us about a business leader in your church. We&rsquo;ll walk
                with them through the Kingdom Leadership Collective — and always
                point them back to you and your church.
              </p>

              <ul className="mt-10 space-y-4 border-t border-cream/15 pt-8">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-start gap-4 text-cream/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-light" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-cream/10 bg-ink/40 p-8 md:p-10">
              <ReferForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
