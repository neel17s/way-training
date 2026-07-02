export interface FaqEntry {
  keywords: string[];
  followUps?: string[];
  courseRec?: string;
  response: string;
}

export const faqEntries: FaqEntry[] = [
  // About Way Education
  {
    keywords: ["who is jay", "jay ruparelia", "founder", "about jay", "who runs way", "who started"],
    response:
      "Jay Ruparelia is the founder of Way Education with over 20 years of experience in the education industry. He's been involved with the UK government's Department for Education Steering Committee and specialises in mentoring students into leading global universities and competitive graduate job roles. He's very hands-on — he knows every student personally.",
  },
  {
    keywords: ["what does way do", "services", "what way offers", "offerings", "about way", "about way education", "who are we"],
    response:
      "Way Education provides comprehensive study abroad support: personalised school/subject guidance, university application support (UCAS for UK, Common App for US), personal statement coaching, interview preparation, visa assistance, accommodation help, airport pickup, and post-arrival mentorship. We walk with students every step of the journey.",
    courseRec: "product-knowledge",
  },
  {
    keywords: ["tagline", "mission", "what we stand for", "values"],
    response:
      "Way Education's mission is academic excellence, career readiness, and long-term success. Our tagline: \"At Way Education, we don't just help you apply. We walk with you every step of the journey.\" We take a family-centred approach, involving parents throughout the process.",
  },
  {
    keywords: ["contact", "phone", "email", "reach", "get in touch", "whatsapp", "number"],
    response:
      "Way Education can be reached at:\n• Phone: +44 7958 753305\n• Email: admin@way-edu.com\n• Website: www.way-edu.com\nWe're also available on WhatsApp for quick queries.",
  },

  // Services & Programs
  {
    keywords: ["fee", "price", "cost", "how much", "pricing", "charge", "what does it cost"],
    response:
      "Way's bespoke programs (both UCAS and Common App) are **£2,999 GBP + VAT**. This covers the full journey from initial guidance through to results.\n\nFor tuition costs by destination:\n• UK: £10,000-38,000/year\n• US: $20,000-60,000/year\n• Canada: CAD 15,000-40,000/year\n• Australia: AUD 25,000-50,000/year\n\nThe initial consultation is free.",
    followUps: ["What's included in the fee?", "Is there a free consultation?"],
  },
  {
    keywords: ["free consultation", "initial consultation", "first meeting", "start"],
    response:
      "Yes! Way offers a free initial consultation to understand the student's needs, goals, and family situation. This helps us determine the best approach before any commitment. It's a no-pressure conversation — just honest guidance.",
  },
  {
    keywords: ["6 point", "six point", "6-point", "framework", "support framework", "how way works"],
    response:
      "Way's 6-Point Support Framework:\n1. Understanding aspirations and tailored school/subject guidance\n2. Comprehensive support with applications & entrance exams\n3. Expert advice on personal statements & scholarship statements\n4. Recommendations for extracurricular activities\n5. Mock interviews and confidence-building support\n6. Help with enrolment, visa application & settling support\n\nPrograms take 6-12 months with weekly commitment.",
    courseRec: "product-knowledge",
  },
  {
    keywords: ["program duration", "how long", "timeline", "time commitment", "how long does it take"],
    response:
      "Way's programs take between **6-12 months** to complete. It's a weekly commitment to upskilling and deep diving into what and where the student wants to study. The timeline depends on the destination and intake date.",
  },

  // UCAS
  {
    keywords: ["ucas", "uk application", "apply to uk", "ukas", "british university"],
    response:
      "UCAS is the UK's university admissions service. Way's **UCAS Program** follows 6 milestones:\n1. Course & university guidance\n2. Detailed parent discussion\n3. Personal statement & application (5 choices)\n4. Predicted grades & updates\n5. Offers & interview prep\n6. Results & Clearing support\n\nFee: **£2,999 + VAT**. Includes in-depth assessment, university recommendations, personal statement revamp, mock interviews, and tutor referrals (MAT, TMUA).",
    courseRec: "uk-applications",
    followUps: ["Tell me about personal statements", "What about interview prep?"],
  },
  {
    keywords: ["ucas fee", "ucas price", "ucas cost", "uk price", "uk cost"],
    response:
      "The UCAS Program fee is **£2,999 GBP + VAT**. This covers the complete 6-milestone journey from course selection through to results day, including personal statement coaching, application management, interview preparation, and tutor referrals for competitive entrance exams.",
    courseRec: "uk-applications",
  },
  {
    keywords: ["5 choices", "five choices", "five universities", "5 universities"],
    response:
      "Through UCAS, each student can apply to up to **5 different universities** with similar but different majors. Way helps students make strategic choices — balancing aspirational, realistic, and safety options. If results don't go to plan, UCAS Extra and Clearing provide backup pathways.",
  },

  // Common App
  {
    keywords: ["common app", "us application", "usa application", "apply to us", "american university"],
    response:
      "The **Common App** is the US undergraduate admissions platform for 1,000+ universities. Way's US Program covers:\n1. Profile building & extracurricular planning\n2. Personal essay & supplemental essays\n3. Early Action/Decision strategy\n4. Application submission & interview prep\n5. Scholarship & financial aid guidance\n\nFee: **£2,999 + VAT**. Top US schools have acceptance rates below 5%, so expert guidance makes a real difference.",
    courseRec: "us-applications",
  },
  {
    keywords: ["common app fee", "us fee", "us price", "us cost", "american cost"],
    response:
      "The Common App Program fee is **£2,999 GBP + VAT**. This includes comprehensive assessment of academics, profile, extracurriculars, and leadership. It covers essay revamps, full application management, EA/ED strategy, interview prep, SAT/ACT planning, and scholarship support.",
    courseRec: "us-applications",
  },
  {
    keywords: ["early action", "early decision", "ea ", " ed ", "rea", "early app"],
    response:
      "**Early Action (EA):** Apply early (Oct-Nov), get decisions early, no commitment to attend.\n**Early Decision (ED):** Apply early, commit to attending if accepted.\n**Restrictive Early Action (REA):** Apply early to one school, restrictions on other early applications.\n\nWay helps students choose the right strategy based on their top choices and timeline.",
    courseRec: "us-applications",
  },

  // Destinations
  {
    keywords: ["uk", "united kingdom", "britain", "england", "study in uk", "british"],
    response:
      "**Study in the UK** — key selling points:\n• 3-year undergraduate (vs 4 elsewhere)\n• 1-year master's programs\n• Top universities: Oxford, Cambridge, UCL, LSE, Imperial\n• 2-year Graduate Route visa for post-study work\n• Multicultural campuses\n\nShorter degrees = lower overall cost and faster career start.",
    courseRec: "destinations",
  },
  {
    keywords: ["us", "united states", "america", "usa", "study in us", "american"],
    response:
      "**Study in the US** — key selling points:\n• World-class universities and research\n• OPT work authorization (12 months, up to 36 for STEM)\n• Diverse programs and campus life\n• Strong ROI for STEM and business\n• Ivy League, Stanford, MIT prestige\n\nNote: Higher tuition but excellent long-term returns.",
    courseRec: "destinations",
  },
  {
    keywords: ["canada", "study in canada", "canadian"],
    response:
      "**Study in Canada** — key selling points:\n• Affordable tuition compared to US/UK\n• Post-Graduation Work Permit (PGWPP)\n• Provincial Nominee Program → permanent residency\n• Safe, multicultural environment\n• Great for long-term settlement goals\n\nCanada is ideal for students thinking about PR pathways.",
    courseRec: "destinations",
  },
  {
    keywords: ["australia", "study in australia", "australian"],
    response:
      "**Study in Australia** — key selling points:\n• World-class education and quality of life\n• Student visa (subclass 500)\n• Graduate visa (subclass 485): 2-4 years post-study work\n• Safe, multicultural environment\n• Popular in business, IT, engineering, healthcare\n\nAustralia is strong for students wanting work rights after graduation.",
    courseRec: "destinations",
  },
  {
    keywords: ["destination", "destinations", "countries", "where", "which country", "best country"],
    response:
      "Way covers 4 major study abroad destinations:\n• **UK** — shorter degrees, top prestige\n• **US** — diverse programs, STEM OPT\n• **Canada** — affordable, PR pathways\n• **Australia** — work rights, quality of life\n\nThe best destination depends on the student's goals, budget, and career plans. We help families compare side by side.",
    courseRec: "destinations",
  },

  // Applications & Documents
  {
    keywords: ["personal statement", "ps", "personal essay", "essay writing"],
    response:
      "Jay's approach to personal statements focuses on **authentic narratives** rather than formulaic templates. He helps students share their most compelling personal experiences.\n\n• **UCAS:** One personal statement for all 5 choices\n• **Common App:** Personal essay + university-specific supplemental essays\n\nSmayana's LSE statement is a great example — genuine voice, strategic extracurriculars, real work experience.",
    courseRec: "uk-applications",
  },
  {
    keywords: ["interview", "mock interview", "interview prep", "interview preparation", "interview practice"],
    response:
      "Jay's mock interviews are deliberately **challenging and rigorous**. He doesn't go easy — the goal is to make the real interview feel surprisingly manageable.\n\nFor competitive courses, he connects students with **Oxford-educated tutors** who've mastered specific tests like MAT and TMUA. This no-nonsense approach ensures genuine readiness.",
    courseRec: "uk-applications",
  },
  {
    keywords: ["visa", "visa process", "student visa", "visa interview", "visa documents"],
    response:
      "Way provides full visa support: document preparation, financial evidence guidance, and interview preparation. We ensure the process is smooth, timely, and accurate.\n\nKey documents typically include:\n• Admission letter\n• Financial proof (bank statements, sponsorship)\n• English proficiency score\n• Medical check\n• Sometimes an interview\n\nEach destination has different requirements — our team knows them inside out.",
  },
  {
    keywords: ["ielts", "toefl", "english test", "english proficiency", "pte", "english language"],
    response:
      "Most universities require:\n• **IELTS:** 6.0-7.0\n• **TOEFL:** 80-100\n• **PTE:** 50-65\n\nRequirements vary by program. Some universities waive this for CBSE/ICSE students with English medium instruction. Way helps students prepare and choose the right test.",
  },
  {
    keywords: ["application", "apply", "how to apply", "application process", "steps"],
    response:
      "The application process has 4 stages:\n1. Profile assessment and course shortlisting\n2. Document preparation and application submission\n3. Offer review and acceptance\n4. Visa preparation and pre-departure brief\n\nWay supports each step with dedicated counsellors. Programs take 6-12 months.",
    courseRec: "product-knowledge",
  },
  {
    keywords: ["extracurricular", "activities", "profile building", "leadership", "enrichment"],
    response:
      "Way recommends extracurricular activities that enhance student profiles:\n• Work placements and internships\n• Academic enrichment beyond curriculum\n• Leadership roles\n• Creative pursuits (music, art, sports)\n• Community service\n\nThe goal is **authentic profile building**, not checkbox filling. Each activity should connect to the student's story.",
    courseRec: "us-applications",
  },

  // Scholarships & Financial
  {
    keywords: ["scholarship", "scholarships", "financial aid", "funding", "merit award"],
    response:
      "Way provides guidance on scholarship and financial aid applications. Many universities offer merit-based scholarships for Indian students.\n\nWe also help with:\n• Chevening and Commonwealth scholarships (UK)\n• Australia Awards\n• University-specific grants\n• US scholarship and financial aid applications\n\nStart early — most deadlines are 6-9 months before intake.",
  },
  {
    keywords: ["tuition", "university cost", "university fee", "college cost"],
    response:
      "Tuition varies by destination and university:\n• **UK:** £10,000-38,000/year\n• **US:** $20,000-60,000/year\n• **Canada:** CAD 15,000-40,000/year\n• **Australia:** AUD 25,000-50,000/year\n\nWay's fee (£2,999 + VAT) is separate and covers the full application support journey. Living costs are additional.",
  },

  // Sales & Objections
  {
    keywords: ["objection", "objections", "student says no", "pushback", "resistance", "not interested"],
    response:
      "Common objections and how to handle them:\n\n**\"Too expensive\"** → Frame as investment. UK 1-year master's saves time and money. ROI through shorter degrees and post-study work visas.\n\n**\"Parents disagree\"** → Involve parents early with Way's family-centred approach. Regular communication builds trust.\n\n**\"Not sure about going abroad\"** → Share case studies of students who felt the same but thrived.\n\n**\"Want to try locally first\"** → Explain competitive advantage of international education and global career prospects.",
    courseRec: "sales-techniques",
  },
  {
    keywords: ["convert", "conversion", "close deal", "close", "enrol", "enroll", "sign up", "commit"],
    response:
      "Key conversion strategies:\n1. Follow up within **24 hours** of an enquiry\n2. Share a **personalised shortlist** within 48 hours\n3. **Involve parents early** with a family-appropriate presentation\n4. Use **deadlines and intake timelines** to create urgency\n5. Share relevant **success stories** and case studies\n\nThe key is trust, not pressure.",
    courseRec: "sales-techniques",
  },
  {
    keywords: ["sell", "selling", "pitch", "present", "presentation"],
    response:
      "Way's approach is **consultative, not salesy**:\n• Start with the student's goals, academic background, budget\n• Ask questions, listen actively\n• Guide, don't push — build a plan together\n• Involve parents and address their concerns\n• Use real data (tuition costs, visa stats, career outcomes)\n\nThe best pitch is genuine guidance that puts the student first.",
    courseRec: "sales-techniques",
  },
  {
    keywords: ["parent", "parents", "family", "mum", "dad", "mother", "father", "guardian"],
    response:
      "Way takes a **family-centred approach**:\n• Involve parents in discussions from the start\n• Provide regular updates on student wellbeing\n• Address family concerns with honesty\n• Jay personally ensures parents receive updates\n\nA letter from Jay to parents is shared at the first meeting — it sets the tone for transparent communication.",
  },

  // Case Studies
  {
    keywords: ["smayana", "lse", "case study", "success story", "mathematics statistics business"],
    response:
      "**Smayana Meswani** — Mathematics, Statistics and Business at **London School of Economics**\n\n• Enrolled in Way's mentoring program during summer 2023\n• Got offers from all 5 UK universities\n• Jay helped develop authentic personal statement\n• MAT and TMUA prep with Oxford-educated tutors\n\n*\"If you're serious about studying in the UK, I honestly couldn't recommend them enough. I've been in your shoes. And I know that with the right guidance, you can go further than you think.\"*",
    courseRec: "case-studies",
  },
  {
    keywords: ["anirudh", "edinburgh", "business economics"],
    response:
      "**Anirudh Mody** — Business and Economics MA at **University of Edinburgh**\n\n• Was overwhelmed by the process initially\n• Way turned confusion into clarity and anxiety into action\n• Deep understanding of the application system\n\n*\"Thanks to Way Education, I'm not just studying in the UK. I'm thriving here.\"*",
    courseRec: "case-studies",
  },
  {
    keywords: ["aashna", "patel", "kings college", "kcl", "psychology"],
    response:
      "**Aashna Patel** — Psychology at **King's College London**\n\n• Accepted at all 5 UK universities she applied to\n• Jay's mock interviews were deliberately rigorous\n• Strategic extracurricular and work placement planning\n\n*\"Jay played an instrumental role in achieving these results. His approach to personal statement development is exceptional.\"*",
    courseRec: "case-studies",
  },
  {
    keywords: ["case study", "success story", "student story", "testimonial", "results"],
    response:
      "Way has many success stories:\n• **Smayana Meswani** → LSE (Mathematics, Statistics and Business)\n• **Anirudh Mody** → University of Edinburgh (Business & Economics)\n• **Aashna Patel** → King's College London (Psychology)\n\nAll were accepted at top UK universities. The common thread: authentic personal statements, rigorous interview prep, and strategic university choices.",
    courseRec: "case-studies",
  },

  // Accommodation & Arrival
  {
    keywords: ["accommodation", "housing", "where to live", "student housing", "flat", "apartment"],
    response:
      "Way helps students find safe, student-friendly accommodation. We assist with:\n• Accommodation search and recommendations\n• University-managed vs private housing options\n• Budget planning for living costs\n\nWe also help with airport pickup, SIM cards, and all practical essentials to help students settle in smoothly.",
  },
  {
    keywords: ["arrival", "settling", "moving abroad", "airport", "first days"],
    response:
      "Way's post-arrival support includes:\n• Airport pickup arrangement\n• SIM card and phone setup\n• Orientation tips for the new city\n• Local support and legal formalities\n• Ongoing mentorship\n\nWe don't just help students apply — we help them thrive once they arrive.",
  },

  // Backup Plans
  {
    keywords: ["clearing", "plan b", "backup", "didn't get grades", "extra", "ucsa extra"],
    response:
      "UCAS Clearing and Extra provide backup options:\n\n**UCAS Extra:** If you have no offers, you can add one choice at a time.\n**UCAS Clearing:** After results day, fill remaining spots at universities.\n\nWay supports students through this process without panic — we help find suitable alternatives and submit extra applications when needed.",
    courseRec: "uk-applications",
  },

  // General
  {
    keywords: ["recommend", "suggestion", "advice", "tip", "what should i do", "where to start"],
    response:
      "Great place to start:\n1. **Book a free consultation** — understand the student's goals\n2. **Browse our courses** — understand what we offer\n3. **Check destination pages** — compare UK, US, Canada, Australia\n\nEvery student is different. The best first step is a conversation to understand their goals, budget, and timeline.",
    courseRec: "product-knowledge",
  },
  {
    keywords: ["course", "courses", "training", "module", "what can i learn"],
    response:
      "Way offers 6 training modules:\n1. **Product Knowledge** — our services and framework\n2. **Consultative Selling** — sales approach and objection handling\n3. **UK Applications — UCAS** — 6-milestone process\n4. **US Applications — Common App** — essays and strategy\n5. **Destination Guides** — UK, US, Canada, Australia\n6. **Case Studies** — real student success stories\n\nEach module has multiple training videos.",
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "greetings"],
    response:
      "Hello! Welcome to the Way Training assistant. I'm here to help you learn about our services, destinations, sales techniques, and student success stories.\n\nWhat would you like to know?",
  },
  {
    keywords: ["thank", "thanks", "cheers", "appreciate"],
    response:
      "You're welcome! Is there anything else you'd like to know about Way Education's services or training?",
  },
  {
    keywords: ["help", "how to use", "what can you do", "what do you know"],
    response:
      "I can help with:\n• **Way's services** — what we offer and how we work\n• **Programs** — UCAS (UK) and Common App (US)\n• **Pricing** — fees and tuition costs by destination\n• **Destinations** — UK, US, Canada, Australia\n• **Sales techniques** — consultative selling, objection handling\n• **Case studies** — student success stories\n• **Documents** — visas, personal statements, interviews\n\nJust ask a question and I'll do my best to help!",
  },
];

// Category labels for course recommendations
export const courseLabels: Record<string, string> = {
  "product-knowledge": "Product Knowledge",
  "sales-techniques": "Consultative Selling & Objection Handling",
  "uk-applications": "UK Applications — UCAS Program",
  "us-applications": "US Applications — Common App Program",
  "destinations": "Destination Guides",
  "case-studies": "Student Success Case Studies",
};
