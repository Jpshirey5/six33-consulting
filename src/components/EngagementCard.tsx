import type { Engagement } from "@/lib/services";

/**
 * The site names the engagements and nothing more. Scope, structure, and
 * pricing are covered in the packet that follows the discovery call.
 */
export default function EngagementCard({ engagement }: { engagement: Engagement }) {
  return (
    <li id={engagement.slug} className="flex scroll-mt-24 items-baseline gap-4 rounded-card bg-white px-6 py-5 shadow-[0_1px_0_#e4e0dd]">
      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
      <span>
        <span className="font-heading text-lg font-medium text-ink">{engagement.name}</span>
        <span className="ml-2 text-sm text-stone">{engagement.brief}</span>
      </span>
    </li>
  );
}
