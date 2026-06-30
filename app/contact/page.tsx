import type { Metadata } from "next";
import { Mail, MapPin, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with the Talking to Titans team. For pastors, business leaders, and partners who want to learn more.",
};

const CHANNELS = [
  {
    icon: Users,
    title: "For Pastors",
    body: "Learn how to disciple the business leaders in your church.",
  },
  {
    icon: Mail,
    title: "For Business Leaders",
    body: "Explore the Kingdom Leadership Collective and founding membership.",
  },
  {
    icon: MapPin,
    title: "For Partners",
    body: "Help build the movement and the platform for the decade ahead.",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-cream pt-32">
      <Container className="pb-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-6 font-serif text-display-lg text-ink">
              Let&rsquo;s start a conversation.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal">
              Whether you&rsquo;re a pastor, a marketplace leader, or a partner who
              believes in this mission — we&rsquo;d love to hear from you.
            </p>

            <ul className="mt-12 space-y-8 border-t border-ink/10 pt-10">
              {CHANNELS.map((c) => (
                <li key={c.title} className="flex gap-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-cream">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-xl text-ink">{c.title}</h2>
                    <p className="mt-1 text-stone">{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-ink/10 bg-cream-soft p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
