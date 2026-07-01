export interface Course {
  slug: string;
  title: string;
  description: string;
  icon: string;
  videoCount: number;
}

export const courses: Course[] = [
  {
    slug: "product-knowledge",
    title: "Way Education Services",
    description:
      "Master Way Education's full service offering — from initial counselling and school guidance to post-arrival support. Understand what makes Way different: 20+ years of expertise, Jay Ruparelia's UK government connections, and a holistic family-first approach.",
    icon: "📚",
    videoCount: 4,
  },
  {
    slug: "sales-techniques",
    title: "Consultative Selling & Objection Handling",
    description:
      "Learn to identify student aspirations, guide families through the study abroad decision, and handle common objections. Build trust through Way's personalised approach — not a one-size-fits-all pitch.",
    icon: "🎯",
    videoCount: 3,
  },
  {
    slug: "uk-applications",
    title: "UK Applications — UCAS Program",
    description:
      "Deep dive into the UCAS process: 5 university choices, personal statements, interview prep, and the 6-milestone program. Fee structure: £2,999 GBP + VAT. Includes MAT/TMUA tutor referrals for competitive courses.",
    icon: "🇬🇧",
    videoCount: 4,
  },
  {
    slug: "us-applications",
    title: "US Applications — Common App Program",
    description:
      "Master the Common App: extracurricular profiles, personal essays, supplemental essays, Early Action/Decision strategy, and scholarship applications. Fee structure: £2,999 GBP + VAT. Covers Ivy League, Stanford, MIT, and top liberal arts colleges.",
    icon: "🇺🇸",
    videoCount: 3,
  },
  {
    slug: "destinations",
    title: "Destination Guides — UK, US, Canada, Australia",
    description:
      "In-depth knowledge of each destination: shorter UK degrees (3yr UG, 1yr PG), US OPT/CPT work rights, Canada's PGPP and PR pathways, Australia's subclass 500/485 visas. What to tell students and families.",
    icon: "🌍",
    videoCount: 4,
  },
  {
    slug: "case-studies",
    title: "Student Success Case Studies",
    description:
      "Real stories from Way students: Smayana Meswani (LSE Mathematics), Anirudh Mody (Edinburgh Business & Economics), Aashna Patel (King's College Psychology). Use these to inspire and build confidence with new families.",
    icon: "🏆",
    videoCount: 3,
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
