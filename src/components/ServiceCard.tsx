import Image from "next/image";
import { LinkButton } from "./Button";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service, highlight = false }: { service: Service; highlight?: boolean }) {
  return (
    <article
      id={service.slug}
      className={`relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-card p-7 ${highlight ? "on-dark text-white" : "bg-white"}`}
    >
      {highlight && (
        <>
          <Image src="/images/plan-highlight.svg" alt="" width={800} height={1000} className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/35" />
        </>
      )}
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-medium">{service.name}</h3>
          {service.audience && (
            <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${highlight ? "bg-white/20" : "bg-bronze/15 text-bronze-deep"}`}>
              {service.audience}
            </span>
          )}
        </div>
        <p className={`mt-1 text-sm ${highlight ? "text-white/75" : "text-stone"}`}>{service.format}</p>
        <p className={`mt-5 text-sm leading-relaxed ${highlight ? "text-white/85" : "text-ink"}`}>{service.summary}</p>
        <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 ${highlight ? "border-white/20" : "border-line"}`}>
          {service.includes.map((item) => (
            <li key={item} className={`flex items-start gap-2.5 text-sm ${highlight ? "text-white/90" : "text-ink"}`}>
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
              {item}
            </li>
          ))}
        </ul>
        {service.note && <p className={`mt-4 text-xs ${highlight ? "text-white/70" : "text-stone"}`}>{service.note}</p>}
        <div className="mt-7">
          <LinkButton href="/contact#book" variant={highlight ? "light" : "dark"} className="w-full">
            Book a free call<span className="sr-only"> about the {service.name}</span>
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
