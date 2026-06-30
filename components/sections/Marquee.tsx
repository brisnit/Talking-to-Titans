const TRUTHS = [
  "Talking to Titans equips pastors",
  "The Kingdom Leadership Collective disciples business leaders",
  "The local church remains the center of discipleship",
  "We never replace the local church — we strengthen it",
];

export function Marquee() {
  const items = [...TRUTHS, ...TRUTHS];
  return (
    <section className="border-y border-ink/10 bg-cream py-6">
      <div className="no-scrollbar flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {items.map((t, i) => (
            <span key={i} className="flex shrink-0 items-center gap-12">
              <span className="font-serif text-xl text-charcoal md:text-2xl">
                {t}
              </span>
              <span className="text-gold" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
