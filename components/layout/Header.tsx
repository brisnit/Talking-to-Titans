"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Routes whose top section is light (so a transparent header needs dark text).
  // Every other route opens over a dark hero.
  const LIGHT_TOP_ROUTES = ["/contact"];
  const overDark =
    !scrolled && !openMenu && !LIGHT_TOP_ROUTES.includes(pathname);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial",
        scrolled || openMenu
          ? "bg-cream/90 backdrop-blur-md shadow-editorial-sm"
          : "bg-transparent"
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 md:h-28 md:px-10">
        <Logo theme={overDark ? "light" : "dark"} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-sm transition-colors duration-300",
                    overDark
                      ? active
                        ? "text-cream"
                        : "text-cream/80 hover:text-cream"
                      : active
                        ? "text-ink"
                        : "text-charcoal/80 hover:text-ink"
                  )}
                >
                  <span>{item.label}</span>
                  {item.comingSoon && (
                    <span className="text-[0.55rem] uppercase tracking-widest text-gold">
                      Soon
                    </span>
                  )}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        openMenu === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/refer"
            className={cn(
              "hidden items-center gap-2 px-5 py-3 text-sm font-medium transition-colors duration-500 ease-editorial md:inline-flex",
              overDark
                ? "border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink"
                : "bg-ink text-cream hover:bg-gold hover:text-ink"
            )}
          >
            Refer a Leader
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            aria-label="Open menu"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center lg:hidden",
              overDark ? "text-cream" : "text-ink"
            )}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {openMenu && (
          <MegaMenu
            label={openMenu}
            onClose={() => setOpenMenu(null)}
          />
        )}
      </AnimatePresence>

    </header>

      {/* Mobile menu — rendered OUTSIDE <header> on purpose. The header uses
          backdrop-filter when scrolled, which would otherwise become the
          containing block for this fixed overlay and clip it to the header. */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

const DEFAULT_FEATURED = {
  eyebrow: "A Gift You Give",
  title: "Refer a business leader",
  body: "Send us a leader you shepherd. We honor your role — always pointing back to you and your church.",
  href: "/refer",
  cta: "Refer a Leader",
};

function MegaMenu({ label, onClose }: { label: string; onClose: () => void }) {
  const item = NAV.find((n) => n.label === label);
  if (!item?.children) return null;

  const featured = item.featured ?? DEFAULT_FEATURED;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-28 hidden border-y border-ink/10 bg-cream/95 shadow-[0_22px_44px_-26px_rgba(11,11,12,0.45)] backdrop-blur-md lg:block"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-10 px-10 py-12">
        <div className="col-span-3">
          <p className="eyebrow mb-5">{item.label}</p>
          <Link
            href={item.href}
            onClick={onClose}
            className="font-serif text-2xl text-ink link-underline"
          >
            Overview
          </Link>
        </div>
        <ul className="col-span-5 grid grid-cols-2 gap-x-8 gap-y-6">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                onClick={onClose}
                className="group block"
              >
                <span className="flex items-center gap-2 text-base font-medium text-ink">
                  {child.label}
                  {child.comingSoon && (
                    <span className="text-[0.55rem] uppercase tracking-widest text-gold">
                      Soon
                    </span>
                  )}
                </span>
                {child.description && (
                  <span className="mt-1 block text-sm text-stone group-hover:text-charcoal">
                    {child.description}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="col-span-4">
          <div className="grain flex h-full flex-col justify-between bg-ink p-8 text-cream">
            <div>
              <p className="text-[0.65rem] uppercase tracking-widest text-gold-light">
                {featured.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-snug text-cream">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {featured.body}
              </p>
            </div>
            <Link
              href={featured.href}
              onClick={onClose}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-light hover:text-cream"
            >
              {featured.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-cream lg:hidden"
    >
      <div className="flex h-24 items-center justify-between px-6 md:h-28">
        <Logo theme="dark" />
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center text-ink"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="px-6 pb-16 pt-6">
        <ul className="divide-y divide-ink/10">
          {NAV.map((item) => (
            <li key={item.label} className="py-1">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-2 py-4 font-serif text-2xl text-ink"
                >
                  {item.label}
                  {item.comingSoon && (
                    <span className="text-[0.55rem] uppercase tracking-widest text-gold">
                      Soon
                    </span>
                  )}
                </Link>
                {item.children && (
                  <button
                    aria-label={`Expand ${item.label}`}
                    onClick={() =>
                      setExpanded(expanded === item.label ? null : item.label)
                    }
                    className="p-2 text-stone"
                  >
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        expanded === item.label && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>
              <AnimatePresence>
                {item.children && expanded === item.label && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pb-4 pl-1"
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-base text-stone"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <Link
          href="/refer"
          onClick={onClose}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-medium text-cream"
        >
          Refer a Leader
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </nav>
    </motion.div>
  );
}
