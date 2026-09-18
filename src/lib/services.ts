export type CoreArea = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  summary: string;
  focus: string[];
  outcome: string;
};

/** The three consulting areas. Everything Six33 does lives under one of these. */
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
  {
    slug: "ministry-church-systems",
    name: "Ministry Leader + Church Systems",
    short: "Get what is in your head into a system that actually works.",
    headline: "The ministry should not live in one person's memory.",
    summary:
      "Broader consulting for pastors, ministry directors, and church staff. We take the responsibilities, decisions, and details you are personally holding and give them a place to live outside of you.",
    focus: [
      "Ministry workflows and repeatable processes",
      "Team structure, ownership, and delegation",
      "Communication and meeting rhythms",
      "Process documentation and task management",
      "Digital organization and file structure",
      "Automation and AI implementation",
      "Ministry planning and accountability",
      "Healthy boundaries and leadership rhythms",
    ],
    outcome: "Enough order that productivity serves the calling instead of consuming the person.",
  },
];

export type Engagement = {
  slug: string;
  name: string;
  format: string;
  summary: string;
  includes: string[];
  note?: string;
  audience?: string;
};

/** The service ladder. Four options, in order of depth.
 *  Pricing is intentionally kept off the website and discussed on the intro call. */
export const engagements: Engagement[] = [
  {
    slug: "consultation",
    name: "Consultation",
    format: "One focused working session",
    summary:
      "One problem, one session. Bring the thing that is stuck and we will work on it together until you have a clear next step you can act on this week.",
    includes: [
      "A leadership, team, or volunteer problem",
      "A ProPresenter or Sunday workflow problem",
      "A ministry systems or planning problem",
      "An automation or AI opportunity",
      "Notes and next steps after the session",
    ],
    note: "The most common place to start.",
  },
  {
    slug: "six33-ministry-reset",
    name: "The Six33 Ministry Reset",
    format: "4 weeks, one session each week",
    summary:
      "Four weeks to move from overwhelmed and reactive to clear and organized. We find the real bottleneck, create clarity around it, build the system, and leave you with a plan to keep it running.",
    includes: [
      "Week 1: Diagnose the biggest bottleneck",
      "Week 2: Organize people, responsibilities, and communication",
      "Week 3: Build the workflows, templates, and rhythms",
      "Week 4: A 30 day implementation plan",
      "Ministry assessment and systems audit",
      "Customized workflow and templates you keep",
    ],
  },
  {
    slug: "ongoing-consulting",
    name: "Ongoing Consulting",
    format: "Monthly, defined scope",
    summary:
      "A steady working relationship for leaders who want to keep building. Scope is agreed up front so both of us know exactly what is included each month.",
    includes: [
      "Monthly leadership coaching sessions",
      "Systems and production consulting",
      "Workflow and process development",
      "Automation and AI consulting",
      "Team development and ministry planning",
      "A defined scope, not unlimited support",
    ],
    note: "Scope and expectations are set before we start.",
  },
  {
    slug: "custom-church-systems",
    name: "Custom Church Systems Projects",
    format: "Scoped project",
    summary:
      "For churches that need one specific system built or rebuilt. We scope the work, build it with your team, and hand it over documented.",
    includes: [
      "Sunday production system",
      "Worship volunteer system",
      "ProPresenter workflow",
      "Church communication system",
      "Ministry workflow audit",
      "AI and automation implementation",
    ],
    audience: "For churches",
  },
];

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
