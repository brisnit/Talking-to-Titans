"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-cream">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/brand/hero-bg.png"
          alt="A leader placing a reassuring hand on another, with the city skyline beyond"
          fill
          priority
          sizes="100vw"
          className={reduce ? "object-cover object-right" : "object-cover object-right animate-slow-zoom"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/20 to-transparent" />
        {/* Top scrim — keeps the header (nav + CTA) legible over the bright
            skyline at the top of the image */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink/85 via-ink/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="eyebrow text-gold-light before:bg-gold-light/60"
        >
          A National Movement for Pastors &amp; Marketplace Leaders
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="mt-7 max-w-5xl font-serif text-display-xl text-cream"
        >
          Where Pastors Send Their Business Leaders to Grow in Faith, Leadership,
          Character &amp; Generosity.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl"
        >
          The Kingdom Leadership Collective disciples CEOs, entrepreneurs,
          executives, investors, and founders who want to leverage their
          influence for the Kingdom of God. Pastors shouldn&rsquo;t have to become
          experts in executive leadership to shepherd high-capacity leaders well.
          That&rsquo;s why we&rsquo;re here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/kingdom-leadership-collective#join" variant="primary" className="bg-cream text-ink hover:bg-gold">
            Become a Founding Member
          </Button>
          <Button href="/refer" variant="light">
            Refer a Business Leader
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex items-center gap-8 border-t border-cream/15 pt-8 text-sm text-cream/60"
        >
          <span className="hidden items-center gap-2 sm:flex">
            <ArrowDown className="h-4 w-4 animate-bounce text-gold-light" />
            A trusted cohort
          </span>
          <span>A Kingdom community</span>
          <span>A transformational journey</span>
        </motion.div>
      </div>
    </section>
  );
}
