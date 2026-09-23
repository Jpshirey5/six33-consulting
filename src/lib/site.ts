export const site = {
  name: "Six33 Consulting",
  shortName: "Six33",
  legalName: "Six33 Consulting",
  tagline: "Faith First. Family Second. Ministry Third.",
  description:
    "Ministry and leadership consulting for church leaders. We help you bring your leadership, your teams, and your systems into order, so the ministry runs on more than one person holding everything together.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.six33consulting.com",
  // Placeholder. Swap for the real address when the domain is set up.
  email: "john@[yourdomain].com",
  // Every "Book a discovery call" button points here, not straight at Calendly.
  // /book takes their details into HubSpot first, then hands off to the calendar.
  bookingPath: "/book",
  // The live Calendly event, used by the scheduler on the second step of /book.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendly.com/six33consulting/30min",
  founder: {
    name: "John Shirey",
    title: "Founder",
    location: "Tampa Bay, Florida",
  },
  verse: {
    reference: "Matthew 6:33 (CSB)",
    text: "But seek first the kingdom of God and his righteousness, and all these things will be provided for you.",
  },
  // The one sentence that should show up everywhere.
  coreQuestion: "How do I get all of this out of my head and into a system that actually works?",
  // Placeholder social links. Remove any you do not use.
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

/** Headline options for the hero. Swap the index to change the homepage headline. */
export const heroHeadlines = [
  {
    id: "order",
    lines: ["Bring your ministry", "back into order."],
    sub: "Lead well. Build healthy teams. Create systems your people will actually use.",
  },
  {
    id: "head",
    lines: ["Get it out of your head.", "Into a system that works."],
    sub: "Leadership, production, and ministry systems consulting for the person holding it all together.",
  },
  {
    id: "carry",
    lines: ["Lead the ministry without", "carrying the whole ministry."],
    sub: "Clarity, healthy teams, and systems that hold up after you walk out of the room.",
  },
] as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/framework", label: "Framework" },
  { href: "/who-we-serve", label: "Who We Serve" },
] as const;

export const faqs = [
  {
    q: "What do you actually do?",
    a: "We sit down with what you are carrying, find the real bottleneck, and build something practical around it. That might be a rehearsal and service planning rhythm, a Sunday run of show, a volunteer scheduling workflow, a delegation plan, or documentation so the ministry is not living in one person's head. You leave with something built, not just advice.",
  },
  {
    q: "Is this coaching or consulting?",
    a: "Consulting, with a coaching feel. We work on the problem with you and help you put the solution into practice. We are not licensed counselors, and we will say so plainly if what you need is a counselor.",
  },
  {
    q: "Do I have to be a worship leader?",
    a: "No. Worship leaders and worship pastors are a core focus, but we work with lead and associate pastors, ministry directors, production and tech leaders, and church staff. If you are responsible for people, services, and a long list of details, this fits.",
  },
  {
    q: "Is this a technology or ProPresenter service?",
    a: "No. Technology is a tool we use, not the product. ProPresenter, automation, and AI come up often because they solve real problems, but the outcome we are after is clarity, consistency, and a ministry that is sustainable for the people running it.",
  },
  {
    q: "What does it cost?",
    a: "Investment depends on which option fits and how much is involved, so we talk it through on your consultation once we know what you are actually dealing with. That way you are not guessing, and neither are we.",
  },
  {
    q: "Is everything virtual?",
    a: "Yes, unless noted. Team and staff sessions can be done in person, with travel quoted separately.",
  },
  {
    q: "What if my church cannot pay for it?",
    a: "Some leaders invest personally and some churches cover it as staff or ministry development. Bring it up on your consultation and we will help you think it through.",
  },
] as const;
