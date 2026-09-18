export type Audience = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  short: string;
  text: string[];
  points: string[];
  who: string[];
};

export const audiences: Audience[] = [
  {
    id: "worship-leaders",
    label: "Worship leaders",
    eyebrow: "Worship leaders and worship pastors",
    title: "You are leading the ministry and carrying it.",
    short:
      "Set lists, rehearsals, scheduling, tech, communication, and the twelve small decisions nobody else can make. We help you build a team and a rhythm that can run without you in the middle of everything.",
    text: [
      "Set lists, rehearsals, scheduling, charts, tech, and communication all run through you. Not because you want control, but because handing it off has never been faster than just doing it.",
      "We work on the team and the system at the same time. Clear expectations, a rehearsal and planning rhythm that holds, communication that does not live in your text messages, and people developed enough to own real pieces of the ministry.",
    ],
    points: [
      "A planning and rehearsal rhythm that holds",
      "Volunteers who know what is expected",
      "Real delegation, not just more asking",
    ],
    who: [
      "Worship leaders and worship pastors",
      "Leaders who are the only one who knows how Sunday works",
      "Leaders building a team for the first time",
    ],
  },
  {
    id: "pastors-and-directors",
    label: "Pastors + directors",
    eyebrow: "Pastors and ministry directors",
    title: "Too much of the ministry lives in your head.",
    short:
      "Planning, people, communication, administration, and decisions all land on you. We help you get responsibilities out of your memory and into something your team can actually see and run.",
    text: [
      "Planning, people, communication, administration, and every decision that nobody else is positioned to make all land on you. The ministry works, but it works because you are personally holding it together.",
      "We take what you are carrying and give it a place to live outside of you. Ownership that is clear, processes that are written down, meeting and communication rhythms that hold, and a team structure that does not route everything back through one person.",
    ],
    points: ["Clear ownership across the team", "Processes that are written down", "Meeting and communication rhythms"],
    who: [
      "Lead, associate, and executive pastors",
      "Ministry directors and department leaders",
      "Leaders heading into a growth or building season",
    ],
  },
  {
    id: "production-and-tech",
    label: "Production + tech",
    eyebrow: "Production and technical leaders",
    title: "Sunday works. It just should not be this hard.",
    short:
      "Run of show, ProPresenter, volunteer scheduling, and a hundred details that only exist in one person's memory. We rebuild the weekend into something repeatable.",
    text: [
      "The service comes together every week, and every week it takes more out of the people running it than it should. The run of show lives in someone's head. ProPresenter is set up the way it was set up three years ago. Volunteers get scheduled in a group text.",
      "We map how the weekend actually comes together, then rebuild it. Templates, documentation, a run of show your team can follow, and the automations worth having. The goal is a weekend that runs the same way whether or not you are in the building.",
    ],
    points: ["A run of show anyone can follow", "ProPresenter templates and workflow", "Documentation your team will open"],
    who: [
      "Production and technical directors",
      "Volunteer tech leads carrying the weekend",
      "Churches rebuilding a production process",
    ],
  },
  {
    id: "church-staff",
    label: "Church staff",
    eyebrow: "Church staff and teams",
    title: "Not a pastor? You are welcome here too.",
    short:
      "Children's, student, groups, operations, and communications leaders carry the same weight and the same calendar. The systems work is the same work.",
    text: [
      "Children's, student, groups, operations, and communications leaders carry the same weight and the same calendar as everyone else on staff, usually with fewer people to hand things to.",
      "If you are responsible for volunteers, a recurring event, a process nobody documented, or a list of details that only exists in your notes app, there is real work we can do together.",
    ],
    points: ["Volunteer workflows that hold", "Process documentation", "Practical automation and AI tools"],
    who: [
      "Children's and student ministry leaders",
      "Groups, discipleship, and communications staff",
      "Operations and administrative staff",
    ],
  },
];
