import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain flex min-h-screen items-center bg-ink text-cream">
      <Container className="py-32 text-center">
        <p className="eyebrow justify-center text-gold-light before:bg-gold-light/60">
          Page Not Found
        </p>
        <h1 className="mt-8 font-serif text-display-xl text-cream">404</h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-cream/70">
          This page hasn&rsquo;t been written yet — but the movement is just
          beginning. Let&rsquo;s get you back on the path.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/" variant="light">
            Return home
          </Button>
        </div>
      </Container>
    </section>
  );
}
