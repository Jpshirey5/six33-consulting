export type CoreArea = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  summary: string;
  focus: string[];
  outcome: string;
};

/** The two consulting areas. Everything Six33 does lives under one of these. */
export const coreAreas: CoreArea[] = [
  {
    slug: "worship-leadership-coaching",
    name: "Worship Leadership Coaching",
    short: "Lead people. Build culture. Develop leaders.",
    headline: "Lead the ministry without carrying the entire ministry.",
    summary:
      "Practical leadership work for worship leaders and worship pastors. We look at how your team is built, how it communicates, and what only you can currently do, then we start handing pieces of it to other people well.",
    focus: [
      "Building a healthy worship ministry",
      "Leading and developing volunteers",
      "Team culture and clear expectations",
      "Rehearsal strategy and service planning",
      "Team communication that does not live in your texts",
      "Delegation and raising up future leaders",
      "Handling difficult team situations",
      "Sustainable leadership rhythms",
    ],
    outcome: "A team that knows what to do, and a ministry that does not depend entirely on you.",
  },
  {
    slug: "worship-production-systems",
    name: "Worship Production + Systems",
    short: "Create systems that make Sunday easier.",
    headline: "Build a Sunday that does not depend on one person remembering everything.",
    summary:
      "The place where ministry experience and real systems experience meet. We map how your weekend actually comes together, then rebuild it into something repeatable that your volunteers can run without you standing over it.",
    focus: [
      "Sunday run of show and service preparation",
      "ProPresenter setup, templates, and workflow",
      "Production and tech team organization",
      "Volunteer scheduling and workflows",
      "Documentation your team will actually open",
      "Automations and practical AI tools",
      "Church technology that fits the team you have",
      "Process improvement and communication systems",
    ],
    outcome: "A weekend that runs the same way whether or not you are in the building.",
  },
];

/**
 * The offer structure. No pricing anywhere on the site.
 * Every path leads to booking the One-Time Focused Consultation, which is the
 * entry point for everything else, not one of the options alongside them.
 */

export const bookingLabel = "Book a discovery call";

/** The one line that sits under every primary button. */
export const bookingSubline =
  "Book a Discovery Call. Tell me what you are carrying, and I will tell you whether Six33 can help.";

export const consultation = {
  label: "Start here",
  name: "One-Time Focused Consultation",
  format: "Virtual Session (90 Minutes)",
  summary:
    "Bring the thing that is most stuck. We work through what is actually causing it and what to do about it. Every engagement starts here.",
};

export type Engagement = {
  slug: string;
  name: string;
  /** One short line. This is all the site shows. */
  brief: string;
  format: string;
  /** Packet only. Not shown on the site. */
  forWhom: string;
  /** Packet only. Not shown on the site. */
  summary: string;
  /** Packet only. Not shown on the site. */
  outcomes: string[];
};

/** The three engagements that can follow the first consultation, in order. */
export const engagements: Engagement[] = [
  {
    slug: "ministry-reset",
    name: "The Ministry Reset",
    brief: "A four week engagement",
    format: "4-Week Engagement | One Session Per Week",
    forWhom: "Leaders ready to move from overwhelmed and reactive to clear and organized.",
    summary:
      "Four weeks with a defined start and finish. Week 1 we find the real bottleneck. Week 2 we bring clarity to people, ownership, and communication. Week 3 you build the practical thing with me alongside you. Week 4 you put it into practice.",
    outcomes: [
      "Ministry assessment and systems audit",
      "Ownership map and communication plan",
      "Customized workflow, templates, and documentation",
      "30 day plan and leadership rhythm",
    ],
  },
  {
    slug: "ministry-rebuild",
    name: "The Ministry Rebuild",
    brief: "An eight week intensive",
    format: "8-Week Intensive | One Session Per Week",
    forWhom:
      "Leaders carrying more than one broken area who need to rebuild how the whole ministry runs.",
    summary:
      "Everything in the Reset, plus four more weeks to go wider. We work through the areas the Reset surfaces but cannot finish: leadership and delegation, team structure, the busy season plan, and rolling what you built out to the rest of your team.",
    outcomes: [
      "Everything in the Reset",
      "Delegation and leadership development plan",
      "Team rollout, with your people trained",
      "Busy season plan that protects home",
      "90 day plan and check-in rhythm",
      "Documentation your team is already using",
    ],
  },
  {
    slug: "ongoing-consulting",
    name: "Ongoing 1-On-1 Consulting",
    brief: "Monthly",
    format: "Monthly Session (60 Minutes) | 6 or 12 Months | Defined Scope",
    forWhom: "Leaders who want a consistent place to think, build, and stay accountable.",
    summary:
      "We agree on what we are working on before we start: leadership coaching, systems and production consulting, workflow development, automation and AI, team development, or ministry planning. A defined scope, not unlimited support.",
    outcomes: [
      "Monthly working session",
      "An agreed scope set before we start",
      "Steady progress on one area at a time",
      "Accountability between sessions",
    ],
  },
];

/** Engagement detail and pricing are not on the site. They go in the packet. */
export const packetNote = "Full details and pricing are covered after your discovery call.";

export const teamNote =
  "Team and staff sessions are also available, virtual or in person. We will talk through the right fit on your consultation.";

/** The four weeks of the Ministry Reset, also used as the "how it works" path. */
export const resetWeeks = [
  {
    name: "Diagnose",
    week: "Week 1",
    text: "We find the actual bottleneck. Not the symptom you have been managing, the thing underneath it that keeps creating the symptom.",
    deliverables: ["Ministry assessment", "Systems audit", "The real problem, named"],
  },
  {
    name: "Organize",
    week: "Week 2",
    text: "We create clarity around people, responsibilities, communication, and process. Who owns what, and how anyone would know.",
    deliverables: ["Ownership map", "Communication plan", "Responsibilities out of your head"],
  },
  {
    name: "Build",
    week: "Week 3",
    text: "We build the practical thing. Workflows, templates, documentation, or a rhythm your team can run without you in the room.",
    deliverables: ["Customized workflow", "Templates you keep", "Documentation"],
  },
  {
    name: "Sustain",
    week: "Week 4",
    text: "We put it into practice. A 30 day plan, a leadership rhythm, and a clear picture of what happens when the busy season hits.",
    deliverables: ["30 day implementation plan", "Leadership rhythm", "Recommendations"],
  },
] as const;

/** The five outcomes every engagement is aiming at. */
export const solution = [
  { title: "Clarity", text: "Know what matters." },
  { title: "Systems", text: "Know how it gets done." },
  { title: "People", text: "Know who owns it." },
  { title: "Rhythms", text: "Know when it happens." },
  { title: "Sustainability", text: "Build something that can keep working." },
] as const;

/** Before and after, in plain language. */
export const shifts = [
  { from: "Overwhelmed", to: "Organized" },
  { from: "Reactive", to: "Intentional" },
  { from: "One person", to: "Repeatable systems" },
  { from: "Constantly doing", to: "Leading" },
  { from: "Burnout", to: "Sustainable rhythms" },
] as const;
