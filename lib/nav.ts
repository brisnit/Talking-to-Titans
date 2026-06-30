export type NavChild = {
  label: string;
  href: string;
  description?: string;
  comingSoon?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  comingSoon?: boolean;
  children?: NavChild[];
  featured?: {
    eyebrow: string;
    title: string;
    body: string;
    href: string;
    cta: string;
  };
};

export const NAV: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about", description: "Why Talking to Titans exists." },
      { label: "Andrew Statezny", href: "/about#andrew", description: "35+ years equipping leaders." },
      { label: "Our Beliefs", href: "/about#beliefs", description: "The convictions that shape us." },
      { label: "The Movement", href: "/about#movement", description: "Where this is going." },
    ],
  },
  {
    label: "Kingdom Leadership Collective",
    href: "/kingdom-leadership-collective",
    children: [
      { label: "Overview", href: "/kingdom-leadership-collective", description: "A brotherhood of Kingdom builders." },
      { label: "Five Areas of Formation", href: "/kingdom-leadership-collective#formation", description: "How leaders are shaped." },
      { label: "What Members Receive", href: "/kingdom-leadership-collective#membership", description: "Summit, roundtable, rhythms." },
      { label: "Become a Founding Member", href: "/kingdom-leadership-collective#join", description: "Join the founding cohort." },
    ],
    featured: {
      eyebrow: "Flagship Experience",
      title: "A year-long discipleship community",
      body: "For CEOs, founders, executives, and marketplace leaders who want to leverage their influence for the Kingdom.",
      href: "/kingdom-leadership-collective#join",
      cta: "Become a Founding Member",
    },
  },
  {
    label: "For Pastors",
    href: "/for-pastors",
    children: [
      { label: "Why This Matters", href: "/for-pastors#why", description: "Who is discipling your business leaders?" },
      { label: "A Gift You Give", href: "/for-pastors#gift", description: "Not a program you join." },
      { label: "Refer a Leader", href: "/refer", description: "Send us someone you shepherd." },
      { label: "Pastor Toolkit", href: "/resources#pastor-toolkit", description: "Coming soon.", comingSoon: true },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Articles", href: "/resources#articles", description: "Leadership and discipleship writing." },
      { label: "Video Teaching", href: "/resources#videos", description: "Formation on screen.", comingSoon: true },
      { label: "The Book", href: "/resources#book", description: "Talking to Titans.", comingSoon: true },
      { label: "Research & Insights", href: "/resources#research", description: "Data on faith and the marketplace.", comingSoon: true },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  Explore: [
    { label: "About", href: "/about" },
    { label: "Kingdom Leadership Collective", href: "/kingdom-leadership-collective" },
    { label: "For Pastors", href: "/for-pastors" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  Coming: [
    { label: "Podcast", href: "/podcast" },
    { label: "Annual Conference", href: "/conference" },
    { label: "Masterclass", href: "/resources#masterclass" },
    { label: "Mobile App", href: "/#app" },
    { label: "Research & Insights", href: "/resources#research" },
  ],
  Engage: [
    { label: "Become a Founding Member", href: "/kingdom-leadership-collective#join" },
    { label: "Refer a Leader", href: "/refer" },
    { label: "Pastor Toolkit", href: "/resources#pastor-toolkit" },
    { label: "Newsletter", href: "/#newsletter" },
  ],
};
