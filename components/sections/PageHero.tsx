import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[68svh] items-end overflow-hidden bg-ink text-cream">
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />

      <Container className="relative z-10 pb-20 pt-40 md:pb-28">
        <p className="eyebrow text-gold-light before:bg-gold-light/60">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-display-lg text-cream md:text-display-xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
