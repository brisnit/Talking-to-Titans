"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterSignup({
  theme = "dark",
  className,
}: {
  theme?: "dark" | "light";
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Wire to your CRM / ESP here.
    setDone(true);
  };

  const light = theme === "light";

  if (done) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 text-sm",
          light ? "text-cream" : "text-ink",
          className
        )}
      >
        <span className="inline-flex h-7 w-7 items-center justify-center bg-gold text-ink">
          <Check className="h-4 w-4" />
        </span>
        Thank you. Watch your inbox for what&rsquo;s next.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)}>
      <div
        className={cn(
          "flex items-center border-b transition-colors",
          light ? "border-cream/30 focus-within:border-cream" : "border-ink/25 focus-within:border-ink"
        )}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className={cn(
            "w-full bg-transparent py-3 text-base outline-none placeholder:text-current/40",
            light ? "text-cream" : "text-ink"
          )}
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className={cn(
            "ml-3 inline-flex h-10 w-10 shrink-0 items-center justify-center transition-colors",
            light ? "text-cream hover:text-gold-light" : "text-ink hover:text-gold"
          )}
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
