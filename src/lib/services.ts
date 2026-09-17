export type Service = {
  slug: string;
  name: string;
  format: string;
  summary: string;
  includes: string[];
  note?: string;
  audience?: string;
};

// Pricing is intentionally left off the site. It is discussed on the free call.
export const services: Service[] = [
  {
    slug: "balance-blueprint-session",
    name: "Balance Blueprint Session",
    format: "90-minute virtual session",
    summary:
      "A focused starting point. We look honestly at faith, family, and ministry, name what matters most right now, and leave with a clear plan for the next 30 days.",
    includes: ["Faith, Family, and Ministry assessment", "Your top three priorities", "A 30-day reset plan"],
  },
  {
    slug: "seek-first-reset",
    name: "Seek First Reset",
    format: "4 weekly sessions",
    summary:
      "Four weeks to rebuild the rhythms that hold everything else up. You will finish with a personal rhythm of life and a week that actually reflects your priorities.",
    includes: ["A personal rhythm of life", "Your ideal week calendar", "Boundaries and non-negotiables"],
  },
  {
    slug: "kingdom-builder-intensive",
    name: "Kingdom Builder Intensive",
    format: "8 weeks",
    summary:
      "Everything in the Reset, plus the practice of sharing the load. We build a healthy pace that holds up through the busiest seasons of the church year.",
    includes: [
      "Everything in the Seek First Reset",
      "Delegation and raising up leaders",
      "A healthy pace through busy seasons like Easter and Christmas",
    ],
  },
  {
    slug: "leadership-coaching",
    name: "1-On-1 Leadership Coaching",
    format: "Monthly 60-minute meeting",
    summary:
      "Ongoing support for the long haul. A steady monthly conversation to keep first things first as seasons change.",
    includes: ["One 60-minute meeting each month", "6 or 12 month commitment", "A trusted place to think out loud"],
  },
  {
    slug: "staff-and-team-workshop",
    name: "Staff and Team Workshop",
    format: "Half day, virtual or in person",
    summary:
      "Bring the whole staff together. A half-day workshop on burnout, soul care, and keeping a healthy pace together.",
    includes: ["Burnout and its early warning signs", "Soul care for leaders", "Healthy pace as a team"],
    note: "Available virtually or in person. Travel is quoted separately.",
  },
  {
    slug: "sunday-ready-add-on",
    name: "Sunday Ready Add-On",
    format: "2 weeks",
    audience: "Worship pastors only",
    summary:
      "A weekly prep rhythm for set planning, rehearsal flow, and service run-through, so Saturdays go back to the family.",
    includes: [
      "A weekly set planning rhythm",
      "Rehearsal flow that respects everyone's time",
      "A service run-through that ends on time",
    ],
    note: "Can be added to any plan.",
  },
];
