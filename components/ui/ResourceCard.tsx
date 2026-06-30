import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./Badge";

export function ResourceCard({
  title,
  body,
  status,
  href,
  image,
}: {
  title: string;
  body: string;
  status: string;
  href: string;
  image: string;
}) {
  const live = status === "Live";
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border border-ink/10 bg-cream-soft transition-all duration-500 ease-editorial hover:-translate-y-1 hover:shadow-editorial"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-90 transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <Badge tone={live ? "gold" : "light"}>{status}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="flex items-start justify-between gap-3 font-serif text-2xl text-ink">
          {title}
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-stone transition-all duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-deep" />
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-stone">{body}</p>
      </div>
    </Link>
  );
}
