"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Field, TextArea } from "./Field";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-ink/10 bg-cream-soft p-10 text-center">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center bg-gold text-ink">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-6 font-serif text-2xl text-ink">Thank you.</h3>
        <p className="mt-3 text-stone">
          We&rsquo;ve received your message and someone from our team will be in
          touch soon.
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
      className="space-y-8"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="First name" name="firstName" required placeholder="Jane" />
        <Field label="Last name" name="lastName" required placeholder="Doe" />
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required placeholder="you@church.org" />
        <Field label="Church / Organization" name="org" placeholder="Wellspring Church" />
      </div>
      <Field label="I am a..." name="role" placeholder="Pastor, business leader, etc." />
      <TextArea
        label="How can we help?"
        name="message"
        required
        rows={5}
        placeholder="Tell us a little about what you're looking for."
      />
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2.5 bg-ink px-7 py-4 text-sm font-medium text-cream transition-colors duration-500 ease-editorial hover:bg-gold hover:text-ink"
      >
        Send message
      </button>
    </form>
  );
}
