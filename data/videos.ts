export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  duration: string;
}

export const videos: Video[] = [
  // Product Knowledge — Way Education Services
  {
    id: "pk-1",
    title: "Way Education — Our Story & Mission",
    description:
      "Founded by Jay Ruparelia with 20+ years in education, including UK government Department for Education Steering Committee involvement. Understand Way's mission: academic excellence, career readiness, and long-term success.",
    youtubeId: "dQw4w9WgXcQ",
    category: "product-knowledge",
    duration: "10:00",
  },
  {
    id: "pk-2",
    title: "The Way Service Journey — From First Call to Arrival",
    description:
      "Complete walkthrough: initial consultation, school/subject guidance, application support, visa prep, accommodation, airport pickup, and post-arrival support. Way walks with students every step.",
    youtubeId: "dQw4w9WgXcQ",
    category: "product-knowledge",
    duration: "14:30",
  },
  {
    id: "pk-3",
    title: "Understanding Family-Centred Counselling",
    description:
      "Way's approach: involve parents, address family concerns, provide honest updates. Letter from Jay to parents — building trust through transparency and regular communication.",
    youtubeId: "dQw4w9WgXcQ",
    category: "product-knowledge",
    duration: "8:45",
  },
  {
    id: "pk-4",
    title: "Way's 6-Point Support Framework",
    description:
      "1) Aspirations & school guidance, 2) Applications & exams, 3) Personal & scholarship statements, 4) Extracurricular profile, 5) Mock interviews, 6) Visa & settling support. Each point explained with examples.",
    youtubeId: "dQw4w9WgXcQ",
    category: "product-knowledge",
    duration: "12:15",
  },

  // Sales Techniques
  {
    id: "st-1",
    title: "Consultative Selling — Ask Before You Pitch",
    description:
      "Way's approach is not salesy. Start with the student's goals, academic background, budget, and family preferences. Guide, don't push. Build a plan together.",
    youtubeId: "dQw4w9WgXcQ",
    category: "sales-techniques",
    duration: "11:00",
  },
  {
    id: "st-2",
    title: "Handling Parent Objections — 'It's Too Expensive'",
    description:
      "Frame cost as investment. Compare UK 1-year master's vs 2-year elsewhere. Highlight ROI: shorter degrees, post-study work visas, career outcomes. Use case studies like Smayana at LSE.",
    youtubeId: "dQw4w9WgXcQ",
    category: "sales-techniques",
    duration: "13:20",
  },
  {
    id: "st-3",
    title: "Converting Consultations to Enrolments",
    description:
      "Follow up within 24 hours. Share a personalised shortlist within 48 hours. Involve parents early. Use intake deadlines to create urgency without pressure.",
    youtubeId: "dQw4w9WgXcQ",
    category: "sales-techniques",
    duration: "9:50",
  },

  // UK Applications — UCAS
  {
    id: "uk-1",
    title: "UCAS Overview — The 6-Milestone Program",
    description:
      "Walk through Way's UCAS milestones: 1) Course guidance, 2) Parent discussion, 3) Personal statement & application, 4) Predicted grades & changes, 5) Offers & interview prep, 6) Results & Clearing. Fee: £2,999 + VAT.",
    youtubeId: "dQw4w9WgXcQ",
    category: "uk-applications",
    duration: "16:00",
  },
  {
    id: "uk-2",
    title: "Personal Statement Masterclass",
    description:
      "How Jay guides students to authentic, compelling personal statements — not formulaic templates. Smayana's LSE statement example: genuine voice, strategic extracurriculars, work experience.",
    youtubeId: "dQw4w9WgXcQ",
    category: "uk-applications",
    duration: "18:30",
  },
  {
    id: "uk-3",
    title: "Interview Prep — The Jay Method",
    description:
      "Jay's mock interviews are deliberately rigorous and challenging. MAT, TMUA, and university-specific prep. Oxford-educated tutor referrals. The goal: make the real interview feel easy.",
    youtubeId: "dQw4w9WgXcQ",
    category: "uk-applications",
    duration: "14:20",
  },
  {
    id: "uk-4",
    title: "UCAS Clearing & Extra — Plan B Strategy",
    description:
      "What happens if results don't go to plan. UCAS Extra and Clearing process. How Way supports students through backup options without panic.",
    youtubeId: "dQw4w9WgXcQ",
    category: "uk-applications",
    duration: "10:45",
  },

  // US Applications — Common App
  {
    id: "us-1",
    title: "Common App Walkthrough",
    description:
      "The US application landscape: 1,000+ universities, Early Action vs Early Decision vs Restrictive Early Action, regular deadlines. Way's strategic approach to maximise admission chances.",
    youtubeId: "dQw4w9WgXcQ",
    category: "us-applications",
    duration: "15:00",
  },
  {
    id: "us-2",
    title: "Building a Competitive US Profile",
    description:
      "Beyond grades: extracurriculars, leadership, community service, creative pursuits. How Way helps students build authentic profiles that stand out at Ivy League and top schools.",
    youtubeId: "dQw4w9WgXcQ",
    category: "us-applications",
    duration: "13:45",
  },
  {
    id: "us-3",
    title: "US Essays — Personal & Supplemental",
    description:
      "Crafting the Common App personal essay and university-specific supplemental essays. Finding authentic stories that reveal character, not just achievements.",
    youtubeId: "dQw4w9WgXcQ",
    category: "us-applications",
    duration: "17:20",
  },

  // Destinations
  {
    id: "dg-1",
    title: "Study in the UK — What to Tell Families",
    description:
      "3-year undergrad, 1-year master's. World-class universities: Oxford, Cambridge, UCL, LSE, Imperial. 2-year Graduate Route visa. Multicultural campuses. Shorter = more affordable overall.",
    youtubeId: "dQw4w9WgXcQ",
    category: "destinations",
    duration: "12:00",
  },
  {
    id: "dg-2",
    title: "Study in the US — Key Selling Points",
    description:
      "Ivy League prestige, OPT work authorization (12-36 months for STEM), diverse programs, campus life. Higher tuition but strong ROI for STEM and business.",
    youtubeId: "dQw4w9WgXcQ",
    category: "destinations",
    duration: "14:30",
  },
  {
    id: "dg-3",
    title: "Study in Canada — PR Pathways",
    description:
      "Affordable tuition, Post-Graduation Work Permit, Provincial Nominee Program pathways to permanent residency. Great for students thinking long-term settlement.",
    youtubeId: "dQw4w9WgXcQ",
    category: "destinations",
    duration: "11:15",
  },
  {
    id: "dg-4",
    title: "Study in Australia — Visa & Work Options",
    description:
      "Subclass 500 student visa, subclass 485 graduate visa (2-4 years), safe environment, strong in business, IT, engineering, healthcare. Quality of life selling points.",
    youtubeId: "dQw4w9WgXcQ",
    category: "destinations",
    duration: "13:00",
  },

  // Case Studies
  {
    id: "cs-1",
    title: "Case Study: Smayana Meswani — LSE",
    description:
      "Mathematics, Statistics and Business at London School of Economics. From dreaming to enrolling — Jay's mentoring, MAT/TMUA prep, strategic university choices, and authentic personal statement.",
    youtubeId: "dQw4w9WgXcQ",
    category: "case-studies",
    duration: "8:00",
  },
  {
    id: "cs-2",
    title: "Case Study: Anirudh Mody — Edinburgh",
    description:
      "Business and Economics MA at University of Edinburgh. Overwhelmed by the process to thriving in the UK. Way's patience, insight, and deep understanding of the application system.",
    youtubeId: "dQw4w9WgXcQ",
    category: "case-studies",
    duration: "7:30",
  },
  {
    id: "cs-3",
    title: "Case Study: Aashna Patel — King's College London",
    description:
      "Psychology at King's College London. Accepted at all 5 universities. Jay's rigorous mock interviews, authentic personal statement development, and strategic extracurricular planning.",
    youtubeId: "dQw4w9WgXcQ",
    category: "case-studies",
    duration: "9:15",
  },
];

export function getVideosByCategory(category: string): Video[] {
  return videos.filter((v) => v.category === category);
}

export function getVideoById(id: string): Video | undefined {
  return videos.find((v) => v.id === id);
}
