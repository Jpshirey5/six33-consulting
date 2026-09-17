export const site = {
  name: "Six33 Consulting",
  shortName: "Six33",
  legalName: "Six33 Consulting",
  tagline: "Seek first. Lead well. Build what lasts.",
  description:
    "Faith-based leadership and life consulting for ministry pastors and worship pastors. Put faith first, family second, and ministry third, and serve for the long haul.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.six33consulting.com",
  // Placeholder. Swap for the real address when the domain is set up.
  email: "john@[yourdomain].com",
  // Placeholder booking link. Replace with your Cal.com or Calendly event URL.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/your-username/free-call",
  founder: {
    name: "John Shirey",
    title: "Founder",
    location: "Tampa Bay, Florida",
  },
  verse: {
    reference: "Matthew 6:33 (CSB)",
    text: "But seek first the kingdom of God and his righteousness, and all these things will be provided for you.",
  },
  // Placeholder social links. Remove any you do not use.
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/framework", label: "Framework" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const faqs = [
  {
    q: "Is this counseling, coaching, or consulting?",
    a: "Consulting with a coaching feel. We are not licensed counselors, and we will say so if what you need is a counselor. What we do is help you look honestly at faith, family, and ministry, then build the rhythms, boundaries, and shared load that put them back in order.",
  },
  {
    q: "Do I have to be a worship pastor?",
    a: "No. Worship pastors and younger leaders with young families are our primary focus, but lead, associate, and ministry pastors, along with children's, student, groups, and operations staff, are all welcome.",
  },
  {
    q: "How much does it cost?",
    a: "We talk through investment on your free call, once we know which option fits. That way you are not guessing, and neither are we.",
  },
  {
    q: "Is everything virtual?",
    a: "Yes, every session is virtual unless noted. Staff and team workshops can be in person, with travel quoted separately.",
  },
  {
    q: "What if my church cannot pay for it?",
    a: "Many leaders invest personally, and some churches cover it as staff development. Bring it up on the call and we will help you think it through.",
  },
] as const;
