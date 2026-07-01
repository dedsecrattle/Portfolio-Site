// Single source of truth for all site content. Edit here, not in components.

export const profile = {
  name: "Prabhat Kumar",
  tagline: "Full Stack Developer & AI/ML Engineer",
  location: "Singapore",
  bio: "Full Stack Developer and AI/ML Engineer with 5+ years building production-grade software. I'm a Software Engineer at Hypotenuse AI (YC S20), where I work end-to-end across the stack — fast React frontends, scalable backends, and DevOps — while shipping AI features that put generative models to real use for enterprise clients. Off the clock I write a lot of systems-level Rust. I care about building things people actually use, and making them fast.",
  roles: ["Full Stack Developer", "AI/ML Engineer", "Rust Enthusiast", "Entrepreneur"],
} as const;

export const socials = {
  github: "https://github.com/dedsecrattle",
  linkedin: "https://www.linkedin.com/in/prabhat0912/",
  email: "itsprabxxx@gmail.com",
  resume: "/prabhat-kumar-resume.pdf",
} as const;

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Rust", "TypeScript", "Python", "Java", "Go", "C/C++", "JavaScript"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "React Native", "Flutter"] },
  { group: "Backend & Data", items: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Cassandra"] },
  { group: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "GitHub Actions"] },
];

export type Project = {
  name: string;
  blurb: string;
  tech: string[];
  repo?: string;
  live?: string;
  stars?: number;
};

export const projects: Project[] = [
  {
    name: "toon-rust",
    blurb: "Performant Rust implementation of Token-Oriented Object Notation (JSON ↔ TOON). 1.5k+ downloads.",
    tech: ["Rust", "Parsing"],
    repo: "https://github.com/dedsecrattle/toon-rust",
    stars: 11,
  },
  {
    name: "Trading-Engine",
    blurb: "In-memory central limit order book with order matching and trade timestamping.",
    tech: ["Rust", "Low-latency"],
    repo: "https://github.com/dedsecrattle/Trading-Engine",
  },
  {
    name: "PortWatch",
    blurb: "Cross-platform terminal UI for real-time network port monitoring and process management.",
    tech: ["Rust", "TUI"],
    repo: "https://github.com/dedsecrattle/PortWatch",
    stars: 3,
  },
  {
    name: "Qrux",
    blurb: "A QUIC / HTTP/3–terminating proxy that forwards traffic to HTTP/1.1 backends over TCP.",
    tech: ["Rust", "QUIC", "HTTP/3"],
    repo: "https://github.com/dedsecrattle/Qrux",
  },
  {
    name: "veloxlsx",
    blurb: "Fast Python XLSX I/O powered by a Rust core.",
    tech: ["Rust", "Python", "PyO3"],
    repo: "https://github.com/dedsecrattle/veloxlsx",
  },
  {
    name: "OwnSight",
    blurb: "Interactive visualiser for Rust ownership, borrowing, and lifetimes.",
    tech: ["Rust", "Visualisation"],
    repo: "https://github.com/dedsecrattle/OwnSight",
  },
  {
    name: "LuckyJinx",
    blurb: "Collaborative platform for coders to match, pair-program, and solve LeetCode-style questions together.",
    tech: ["TypeScript", "React", "WebSockets"],
    repo: "https://github.com/dedsecrattle/LuckyJinx",
  },
  {
    name: "RetroReader-NLP",
    blurb: "Transformer-based extractive QA system on the Retrospective Reader model — 0.85 F1.",
    tech: ["Python", "NLP", "PyTorch"],
    repo: "https://github.com/dedsecrattle/RetroReader-NLP",
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
  url?: string;
  badge?: string;
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    org: "Hypotenuse AI",
    url: "https://www.hypotenuse.ai",
    badge: "YC S20",
    period: "Jun 2026 — Present",
    points: [
      "Own full-stack features end-to-end — React frontends, backend services, and CI/CD — for an AI content platform used by enterprise clients.",
      "Build AI-powered workflows on top of generative models (LLMs), turning them into reliable, production-grade product features.",
      "Drive performance and reliability across the stack, from database, indexing, and caching layers to frontend load times.",
      "Ship fast against real user feedback, taking features from prototype to production and iterating in tight loops.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Hypotenuse AI",
    url: "https://www.hypotenuse.ai",
    badge: "YC S20",
    period: "Jun 2025 — Apr 2026",
    points: [
      "Shipped across the full stack (React, backend, DevOps), improving deployment speed by 30%.",
      "Automated data integration with external PIMs, increasing enterprise import workflow speed by 80%.",
      "Optimised database queries and indexes, cutting platform load time by 75%.",
      "Added a Redis cache layer to reduce database load and improve latency.",
      "Iterated rapidly on features from real user feedback, cutting delivery timelines by 40%.",
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "National University of Singapore",
    period: "Aug 2023 — May 2025",
    points: [
      "TA for CS1101S, CS2030S, CS2040S, CS2102, and CS3263 at the School of Computing.",
      "Named to the NUS Student Tutor Honour List (2024 & 2025) for teaching contributions.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Block71 Global",
    period: "Jul 2024 — May 2025",
    points: [
      "Built and enhanced a Content Management Platform over a 10-month internship.",
      "Optimised front-end components and website performance by ~30%; tested across 5+ browsers.",
    ],
  },
  {
    role: "Co-Founder & Full Stack Developer",
    org: "Zerdence Technologies LLP",
    period: "May 2020 — Oct 2023",
    points: [
      "Co-founded an IT consultancy delivering production software to 100+ businesses.",
      "Led full-stack delivery and managed a 50+ member cross-functional team.",
    ],
  },
  {
    role: "Co-Founder & CFO",
    org: "HopeTides (NGO)",
    period: "Nov 2019 — Oct 2023",
    points: [
      "Founded an NGO during COVID-19; built a Telegram bot & site for real-time ICU/oxygen-bed tracking, serving 10,000+ families.",
    ],
  },
];

export type Education = {
  school: string;
  details: string[];
  period: string;
};

export const education: Education[] = [
  {
    school: "National University of Singapore",
    details: [
      "Bachelor of Computing in Computer Science (Honours, Distinction) — specialising in AI & Software Engineering.",
      "NUS Science & Technology Undergraduate Scholarship (1 of 7 Indian students, Class of 2026).",
    ],
    period: "Aug 2022 — May 2026",
  },
  {
    school: "Kendriya Vidyalaya No.2, AFS Pune",
    details: [
      "CBSE Class 12 — 97.6% aggregate; highest scorer in school and Mumbai Region.",
      "Merit Certificate for placing in the top 1.5% of students across KVS.",
      "NTSE Scholar.",
    ],
    period: "Aug 2019 — Sep 2021",
  },
];

export type Award = {
  title: string;
  detail: string;
  year?: string;
  url?: string;
};

export const awards: Award[] = [
  {
    title: "NUS Science & Technology Undergraduate Scholarship",
    detail: "One of 7 Indian students awarded in the Class of 2026 — covers tuition and living expenses for the full undergraduate degree.",
    year: "2022",
  },
  {
    title: "Software Engineering Focus Area (Distinction)",
    detail: "National University of Singapore.",
    year: "Jan 2025",
    url: "https://credentials.nus.edu.sg/88994533-c605-433f-8419-921534c4992c",
  },
  {
    title: "Artificial Intelligence Focus Area (Merit)",
    detail: "National University of Singapore.",
    year: "Jan 2025",
    url: "https://credentials.nus.edu.sg/f1c0b87b-0115-4ca9-bc20-df1bf7ab7b12",
  },
  {
    title: "Honour List of Student Tutor, AY24/25",
    detail: "National University of Singapore.",
    year: "Dec 2025",
    url: "https://credentials.nus.edu.sg/8a77bb9f-cc51-4972-a19f-270cd6b260ff",
  },
  {
    title: "Honour List of Student Tutors, AY23/24",
    detail: "National University of Singapore.",
    year: "Dec 2024",
    url: "https://credentials.nus.edu.sg/045dce22-e300-4abe-a7c8-b9fa3aaaf048",
  },
  {
    title: "National Talent Search Examination (NTSE) Scholar",
    detail: "National scholarship for academic merit; also qualified Pre-RMO and RMO (Regional Mathematical Olympiad).",
  },
  {
    title: "KVS Merit Certificate",
    detail: "Placed in the top 1.5% of students across all Kendriya Vidyalayas nationwide.",
    year: "2021",
  },
];

export const stats: { value: string; label: string }[] = [
  { value: "5+", label: "National Awards" },
  { value: "12", label: "Countries Visited" },
  { value: "5+", label: "Years Experience" },
  { value: "1,000+", label: "Cups of Coffee" },
];
