"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Floating "Refer a Leader" CTA — appears after the hero, primarily for
 * mobile where the header CTA is hidden.
 */
export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 720);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 lg:hidden"
        >
          <Link
            href="/refer"
            className="inline-flex items-center gap-2 bg-ink px-6 py-4 text-sm font-medium text-cream shadow-lift"
          >
            Refer a Leader
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
