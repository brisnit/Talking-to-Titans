"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Field, TextArea } from "./Field";

export function ReferForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-cream/15 bg-ink/40 p-10 text-center text-cream">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center bg-gold text-ink">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-6 font-serif text-2xl text-cream">Referral received.</h3>
        <p className="mt-3 text-cream/70">
          Thank you for entrusting us with one of your leaders. We&rsquo;ll reach
          out with the next steps — always honoring your role as their pastor.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-8 [&_.text-stone]:text-cream/60 [&_input]:border-cream/25 [&_input]:text-cream [&_input]:placeholder:text-cream/30 [&_input:focus]:border-gold-light [&_textarea]:border-cream/25 [&_textarea]:text-cream [&_textarea]:placeholder:text-cream/30 [&_textarea:focus]:border-gold-light"
    >
      <div>
        <p className="text-[0.65rem] uppercase tracking-widest text-gold-light">
          About you
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <Field label="Your name" name="referrerName" required placeholder="Pastor Jane Doe" />
          <Field label="Your email" name="referrerEmail" type="email" required placeholder="you@church.org" />
        </div>
        <Field label="Your church" name="church" className="mt-8" placeholder="Wellspring Church" />
      </div>

      <div className="border-t border-cream/15 pt-8">
        <p className="text-[0.65rem] uppercase tracking-widest text-gold-light">
          The leader you&rsquo;re referring
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <Field label="Their name" name="leaderName" required placeholder="Leader's full name" />
          <Field label="Their email" name="leaderEmail" type="email" placeholder="leader@company.com" />
        </div>
        <Field label="Their company / role" name="leaderRole" className="mt-8" placeholder="CEO, Founder, etc." />
        <TextArea
          label="Anything we should know?"
          name="notes"
          rows={4}
          className="mt-8"
          placeholder="Tell us about this leader and how we can serve them well."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2.5 bg-cream px-7 py-4 text-sm font-medium text-ink transition-colors duration-500 ease-editorial hover:bg-gold"
      >
        Submit referral
      </button>
    </form>
  );
}
