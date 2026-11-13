/**
 * ============================================================
 *  PORTFOLIO CONTENT — single source of truth
 * ============================================================
 *  Everything the site renders lives in this one file.
 *  To make the portfolio yours, edit the values below (and swap
 *  the images in /public/images). No component changes required.
 * ============================================================
 */

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'globe'
}

export interface Stat {
  label: string
  value: number | string
  /** Optional suffix rendered after the number, e.g. "+" or "k+" */
  suffix?: string
  /** When set to "github", the value is fetched live from the GitHub API. */
  source?: 'github'
  /** Repository name (owner/repo) used when source === "github" resolves public repos. */
  githubUser?: string
}

export interface ExpertiseTag {
  label: string
  tone: string
}

export interface Project {
  id: string
  name: string
  description: string
  image: string
  year?: string
  status?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  /** Primary programming language shown on repository cards. */
  language?: string
  /** Hex colour for the language dot. */
  languageColor?: string
  /** Repository in "owner/repo" form; enables live star/fork counts. */
  repo?: string
  accent?: string
}

export interface Moment {
  id: string
  image: string
  date: string
  organization: string
  title: string
  description: string
  tags: string[]
  externalUrl: string
  externalLabel: string
}

export interface ExperienceFact {
  icon: string
  label: string
  value: string
}

export interface Experience {
  program: string
  role: string
  company: string
  companyLogo?: string
  period: string
  duration: string
  summary: string
  achievement: string
  credential: string
  linkedinEmbedUrl: string
  linkedinPostUrl: string
  facts: ExperienceFact[]
}

export interface Skill {
  name: string
  icon: string
}

export interface AboutNowCard {
  label: string
  big?: string
  unit?: string
  sub?: string
  mid?: string
  subLabel?: string
  linkText?: string
  linkUrl?: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  grade?: string
  linkText?: string
  linkUrl?: string
}

export interface AboutForm {
  eyebrow: string
  heading: string
  sub: string
  action: string
  subject: string
  emailLabel: string
  emailPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submitLabel: string
}

export interface StorySection {
  eyebrow: string
  heading: string
  narrative: string
}

export interface BuildingSection {
  eyebrow: string
  heading: string
  sub: string
  items: Array<{
    title: string
    description: string
    status: string
    linkText?: string
    linkUrl?: string
  }>
}

export interface ExperienceEntry {
  year: string
  organization: string
  role: string
  duration: string
  description: string
  technologies: string[]
  linkText?: string
  linkUrl?: string
}

export interface EducationEntry {
  year: string
  institution: string
  qualification: string
  description?: string
}

export interface TechCategory {
  category: string
  items: string[]
}

export interface PhilosophyPrinciple {
  number: string
  title: string
  description: string
}

export interface AboutData {
  intro: {
    eyebrow: string
    heading: string
    subHeading: string
    paragraph1: string
    paragraph2: string
    resumeLabel: string
    workLabel: string
    workUrl: string
  }
  whatImUpTo: {
    eyebrow: string
    heading: string
    sub: string
    items: Array<{
      label: string
      title: string
      description: string
      status?: string
      linkText?: string
      linkUrl?: string
      isClock?: boolean
    }>
  }
  rightNow: BuildingSection
  experience: {
    eyebrow: string
    heading: string
    items: ExperienceEntry[]
  }
  education: {
    eyebrow: string
    heading: string
    items: EducationEntry[]
  }
  techStack: {
    eyebrow: string
    heading: string
    categories: TechCategory[]
  }
  philosophy: {
    eyebrow: string
    heading: string
    principles: PhilosophyPrinciple[]
  }
  ama: AboutForm
}

export interface PortfolioData {
  meta: {
    title: string
    description: string
    canonical: string
    ogImage: string
    themeColor: string
  }
  personal: {
    name: string
    logoMark: string
    role: string
    location: string
    email: string
    availability: string
    resumeUrl: string
    profileImage: string
    social: SocialLink[]
  }
  nav: Array<{ label: string; href: string }>
  hero: {
    badge: string
    headingLead: string
    highlights: Array<{ text: string; tone: 'green' | 'violet' }>
    headingTail: string
    description: string
    currentProject: { name: string; url: string; blurb: string }
    primaryCta: string
    secondaryCta: string
    primaryHref: string
  }
  about: AboutData
  stats: Stat[]
  expertise: ExpertiseTag[]
  openSource: {
    eyebrow: string
    heading: string
    allReposLabel: string
    allReposUrl: string
    projects: Project[]
  }
  moments: {
    eyebrow: string
    heading: string
    sub: string
    items: Moment[]
  }
  featured: {
    eyebrow: string
    heading: string
    viewAllLabel: string
    viewAllUrl: string
    flagship: Project
    grid: Project[]
  }
  experience: {
    eyebrow: string
    heading: string
    badge: string
    data: Experience
  }
  skills: {
    eyebrow: string
    heading: string
    items: Skill[]
  }
  cta: {
    heading: string
    sub: string
    primaryLabel: string
    secondaryLabel: string
  }
  footer: {
    tagline: string
    copyright: string
  }
}

export const portfolioData: PortfolioData = {
  meta: {
    title: 'Naman Verma — Cyber Security Student & Full-Stack Developer',
    description:
      'Cyber Security student & full-stack developer from Roorkee, India. Builder of AEGIS Gate and privacy tools.',
    canonical: 'https://yourdomain.com/',
    ogImage: '/images/og-image.png',
    themeColor: '#FFFFFF',
  },

  personal: {
    name: 'Naman Verma',
    logoMark: 'NV',
    role: 'Cyber Security Student & Intern',
    location: 'Roorkee, India',
    email: 'naman20474@gmail.com',
    availability: 'Available for freelance & internships',
    resumeUrl: '/resume.pdf',
    profileImage: '/images/naman.jpeg',
    social: [
      { label: 'GitHub', url: 'https://github.com/naman20474-gif', icon: 'github' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/naman-verma-127b333aa',
        icon: 'linkedin',
      },
      { label: 'Email', url: 'mailto:naman20474gmail.com', icon: 'mail' },
    ],
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Stack', href: '/#stack' },
    { label: 'Contact', href: '/#contact' },
  ],

  hero: {
    badge: 'Available for freelance & internships',
    headingLead: 'Building',
    highlights: [
      { text: 'fast', tone: 'green' },
      { text: 'secure', tone: 'violet' },
    ],
    headingTail: 'web things.',
    description: 'Cyber Security student & Intern and Full-stack engineer shipping production apps. Currently building',
    currentProject: {
      name: 'Samajh',
      url: 'https://github.com/naman20474-gif',
      blurb: 'browser privacy testing done right.',
    },
    primaryCta: 'View my work',
    secondaryCta: 'Resume',
    primaryHref: '/#projects',
  },

  about: {
    intro: {
      eyebrow: 'ABOUT / 01',
      heading: 'NAMAN VERMA',
      subHeading: 'Cyber Security Student & Full-Stack Developer',
      paragraph1:
        "I'm a cybersecurity student and full-stack developer from Roorkee, India. I build end-to-end web experiences — from considered frontend interfaces to resilient backends — with a focus on browser privacy, security tooling, and open-source DSA solutions. Currently building Samajh, an AI app that explains how companies use personal data.",
      paragraph2:
        "What I care about: code that stays readable six months later, interfaces that respect the person using them, privacy-first tooling, and getting a little better at both every week.",
      resumeLabel: 'Resume',
      workLabel: 'See my work',
      workUrl: '/#projects',
    },
    whatImUpTo: {
      eyebrow: 'RIGHT NOW',
      heading: "WHAT I'M UP TO",
      sub: 'Current projects and areas of focus',
      items: [
        {
          label: 'LOCAL TIME',
          title: '--:--',
          description: 'probably still coding',
          isClock: true
        },
        {
          label: 'NOW BUILDING',
          title: 'SAMAJH',
          description: 'AI app that explains how companies use personal data — in plain language.',
        },
        {
          label: 'LAST COMMIT',
          title: 'pushing code most days',
          description: 'see GitHub',
          linkText: 'GitHub',
          linkUrl: 'https://github.com/naman20474-gif'
        },
        {
          label: 'LEARNING',
          title: 'System design',
          description: '+ Next.js app router',
        },
      ],
    },
    rightNow: {
      eyebrow: 'RIGHT NOW',
      heading: "WHAT I'M UP TO",
      sub: 'Current projects and areas of focus',
      items: [
        {
          title: 'Samajh',
          description: 'AI app that explains how companies use personal data — in plain language.',
          status: 'In Development',
          linkText: 'View project',
          linkUrl: '/#projects',
        },
        {
          title: 'Browser Privacy Testing',
          description: 'IP & DNS leak detection, WebRTC testing, fingerprint analysis, metadata removal.',
          status: 'Research',
          linkText: 'Learn more',
          linkUrl: 'https://privacytestlab.com',
        },
        {
          title: 'Cybersecurity Fundamentals',
          description: 'Deep dive into web security, prompt injection, and defensive programming.',
          status: 'Learning',
        },
        {
          title: 'Full-Stack Development',
          description: 'Building production-ready MERN applications with a focus on security.',
          status: 'Ongoing',
        },
      ],
    },
    experience: {
      eyebrow: 'EXPERIENCE / 04',
      heading: 'WHERE I\'VE BEEN.',
      items: [
        {
          year: '2026',
          organization: 'Maincrafts Technologies',
          role: 'Cyber Security Intern',
          duration: 'Nov 2026 — Feb 2027',
          description: 'Web security internship focused on cybersecurity, earning Grade S distinction.',
          technologies: ['Web Security', 'Cybersecurity'],
          linkText: 'View certificate',
          linkUrl: 'https://lnkd.in/p/g54ycVA9',
        },
        {
          year: '2026',
          organization: 'Personal Project',
          role: 'Developer',
          duration: '2026 — Present',
          description: 'AEGIS Gate — Prompt injection firewall protecting against unusual AI prompts.',
          technologies: ['Python', 'JavaScript', 'Security'],
        },
        {
          year: '2025',
          organization: 'Personal Project',
          role: 'Developer',
          duration: '2025',
          description: 'Veylora — AI-powered phishing scanner for email, messages, QR codes, and images.',
          technologies: ['AI', 'Security', 'React'],
        },
      ],
    },
    education: {
      eyebrow: 'EDUCATION / 05',
      heading: 'THE LEARNING NEVER STOPS.',
      items: [
        {
          year: '2025 -',
          institution: 'Quantum University',
          qualification: 'B.Tech CSE',
          description: 'Programming, data structures & algorithms, web technologies, and core computer science.',
        },
        {
          year: '2024 -',
          institution: 'CBSE',
          qualification: '12th Grade',
          description: 'Physics, Chemistry, Mathematics — and a growing pull toward computer science.',
        },
        {
          year: '2023 -',
          institution: 'CBSE',
          qualification: '10th Grade',
          description: 'Completed secondary education.',
        },
      ],
    },
    techStack: {
      eyebrow: 'TECHNOLOGY STACK / 06',
      heading: 'TOOLS OF MY TRADE.',
      categories: [
        {
          category: 'Frontend Development',
          items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
        },
        {
          category: 'Backend Development',
          items: ['Node.js', 'Express', 'MongoDB', 'MERN Stack'],
        },
        {
          category: 'Programming Languages',
          items: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'TypeScript'],
        },
        {
          category: 'Databases',
          items: ['MongoDB', 'SQL'],
        },
        {
          category: 'Developer Tools',
          items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'],
        },
        {
          category: 'Cybersecurity Tools & Concepts',
          items: ['Prompt Injection', 'Browser Privacy', 'Web Security', 'DNS Leak Detection', 'WebRTC Testing', 'Fingerprint Analysis'],
        },
      ],
    },
    philosophy: {
      eyebrow: 'MY PHILOSOPHY / 07',
      heading: 'WHAT DRIVES ME.',
      principles: [
        {
          number: '01',
          title: 'Build things that matter.',
          description: 'I focus on creating applications that solve real problems — not just technical exercises.',
        },
        {
          number: '02',
          title: 'Security by design.',
          description: 'Privacy and security aren\'t features to add later — they\'re foundational decisions made from day one.',
        },
        {
          number: '03',
          title: 'Write readable code.',
          description: 'Code is read far more often than it\'s written. Clarity always wins over cleverness.',
        },
        {
          number: '04',
          title: 'Learn in public.',
          description: 'Documenting my journey publicly helps me learn faster and helps others along the way.',
        },
      ],
    },
    ama: {
      eyebrow: 'ASK ME ANYTHING',
      heading: 'Got a question?',
      sub:
        'About a project, my stack, Samajh, browser privacy, or how I built something on this site — send it straight to my inbox.',
      action: 'https://formspree.io/f/mgakvlqz',
      subject: 'Portfolio — AMA question',
      emailLabel: 'Your email (for the reply)',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Your question',
      messagePlaceholder: 'Type your question here…',
      submitLabel: 'Send question',
    },
  },

  stats: [
    { label: 'Shipped projects', value: 4 },
    { label: 'DSA problems solved', value: 0, suffix: '' },
    { label: 'Public repos', value: 4 },
    { label: 'Contributions this year', value: 5, suffix: '+' },
    { label: 'Languages known', value: 5, suffix: '+' },
    { label: 'Building since', value: '2025' },
  ],

  expertise: [
    { label: 'Web Apps', tone: '#8b7cf6' },
    { label: 'Full-Stack', tone: '#d85a30' },
    { label: 'APIs', tone: '#e7b938' },
    { label: 'Open Source', tone: '#7f9f36' },
  ],

  openSource: {
    eyebrow: 'Open source',
    heading: "Things I've built in public",
    allReposLabel: 'All repos',
    allReposUrl: 'https://github.com/naman20474-gif',
    projects: [
      {
        id: 'usb-backup',
        name: 'AEGIS Gate',
        description:
          'AEGIS Gate is a prompt injection firewall - protects from unusual prompt given by Ai.',
        image: '/images/projects/Aegis.png',
        technologies: ['windows', 'backup', 'cli'],
        githubUrl: 'https://github.com/naman20474-gif/Aegis-Gate-a-prompt-injection-firewall.git',
        language: 'Python',
        languageColor: '#3572A5',
        repo: 'naman20474-gif/Aegis-Gate-a-prompt-injection-firewall',
        accent: '#8b7cf6',
      },
      {
        id: 'leetcode-java',
        name: 'Veylora',
        description:
          'It is a phishing scanner that scans all threats in email , messages , Qr , images',
        image: '/images/projects/Codec.png',
        technologies: ['dsa', 'interview-prep'],
        githubUrl: 'https://github.com/naman20474-gif/Veylora.git',
        language: 'Java',
        languageColor: '#B07219',
        repo: 'https://github.com/naman20474-gif/Veylora.git',
        accent: '#15803d',
      },
      {
        id: 'cinesearch',
        name: 'SAMAJH',
        description: 'SAMAJH will be an AI app that explains to people—in their own language—why and how a company intends to use their personal data.',
        image: '/images/projects/moments.jpeg',
        technologies: ['tmdb-api', 'frontend'],
        githubUrl: 'https://github.com/yourusername/CineSearch',
        language: 'Python',
        languageColor: '#F1E05A',
        repo: 'yourusername/CineSearch',
        accent: '#3b82f6',
      },
      {
        id: 'marcos-store',
        name: "Upcoming",
        description: 'Upcomingggggg...............',
        image: '/images/projects/moments.jpeg',
        technologies: ['game', 'javascript'],
        githubUrl: 'https://github.com/yourusername/Marco-s-Store',
        language: 'JavaScript',
        languageColor: '#F1E05A',
        repo: 'yourusername/Marco-s-Store',
        accent: '#a855f7',
      },
    ],
  },

  moments: {
    eyebrow: 'Moments',
    heading: 'Moments along the way',
    sub: 'Hackathon, teammates, and the days worth keeping a photo of.',
    items: [
      {
        id: 'internship-wrap',
        image: '/images/moments/moments.jpeg',
        date: 'Summer 2025',
        organization: 'Quantum University',
        title: 'Wrapping up my first Hackathon',
        description:
          'Completed my first Hackathon. Thank you to the team for the valuable learning experience!',
        tags: ['#webdevelopment', '#hackathon', '#tech',],
        externalUrl: 'https://www.linkedin.com/in/naman-verma-127b333aa',
        externalLabel: 'See the post on LinkedIn',
      },
    ],
  },

  featured: {
    eyebrow: 'Selected work',
    heading: 'Featured projects',
    viewAllLabel: 'View all',
    viewAllUrl: '#projects',
    flagship: {
      id: 'privacytestlab',
      name: 'AEGIS Gate',
      description:
        'AEGIS Gate is a prompt injection firewall - protects from unusual prompt given by Ai.',
      image: '/images/projects/Aegis.png',
      status: 'Live',
      technologies: ['Python', 'JavaScript', 'Security'],
      liveUrl: 'https://github.com/naman20474-gif/Aegis-Gate-a-prompt-injection-firewall.git',
    },
    grid: [
      {
        id: 'infogenie',
        name: 'Veylora',
        description:
          'It is a phishing scanner that scans all threats in email , messages , Qr , images',
        image: '/images/projects/Codec.png',
        year: '2025',
        technologies: ['Typescript', 'Node.js'],
        githubUrl: 'https://github.com/naman20474-gif/Veylora.git',
      },
      {
        id: 'leetcode-solutions',
        name: 'SAMAJH',
        description:
          'SAMAJH is a AI app that explains to people—in their own language—why and how a company intends to use their personal data.',
        image: '/images/projects/moments.jpeg',
        year: '2026',
        technologies: ['Java', 'Algorithms'],
        githubUrl: 'https://github.com/yourusername/LeetCode_Java_Solution',
      },
    ],
  },

  experience: {
    eyebrow: 'Professional experience',
    heading: 'Internship',
    badge: 'Completed · 2026',
    data: {
      program: 'Summer Internship Program 2026',
      role: 'Cyber Security Intern',
      company: 'Maincrafts Technologies',
      companyLogo: '/images/companies/Maincraft.png',
      period: '14 November 2026 — 14 February 2027',
      duration: '3 month',
      summary:
        "Successfully got an offer letter of three-month internship focused on Cyber Security, earning the program's Grade S distinction.",
      achievement: 'Certificate of Achievement · Grade S',
      credential: 'ISPL/SIP/2026/87 · Issued 9 Nov 2026',
      linkedinEmbedUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:share:7523260567583830016?collapsed=1',
      linkedinPostUrl: 'https://lnkd.in/p/g54ycVA9',
      facts: [
        { icon: 'CalendarDays', label: 'Period', value: '14 November 2026 — 14 February 2027' },
        { icon: 'Timer', label: 'Duration', value: '3 months' },
        {
          icon: 'Award',
          label: 'Achievement',
          value: 'Certificate of Achievement · Grade S',
        },
        {
          icon: 'BadgeCheck',
          label: 'Credential',
          value: 'ISPL/SIP/2026/87 · Issued 25 July 2026',
        },
      ],
    },
  },

  skills: {
    eyebrow: 'My tech stack',
    heading:
      'My expertise spans a range of technologies, enabling me to ship reliable & modern solutions.',
    items: [
      { name: 'HTML', icon: 'html.svg' },
      { name: 'CSS', icon: 'css.svg' },
      { name: 'JavaScript', icon: 'javascript.svg' },
      { name: 'TypeScript', icon: 'typescript.svg' },
      { name: 'React', icon: 'react.svg' },
      { name: 'Node.js', icon: 'node.svg' },
      { name: 'MongoDB', icon: 'mongodb.svg' },
      { name: 'Java', icon: 'java.svg' },
      { name: 'Python', icon: 'python.svg' },
      { name: 'C', icon: 'c.svg' },
      { name: 'C++', icon: 'cpp.svg' },
      { name: 'Git', icon: 'git.svg' },
      { name: 'GitHub', icon: 'github.svg' },
      { name: 'Google Cloud', icon: 'gcp.svg' },
    ],
  },

  cta: {
    heading: 'Have a project in mind?',
    sub: 'Tell me about it — I usually reply within 24 hours.',
    primaryLabel: 'Hire me',
    secondaryLabel: 'Just say hello',
  },

  footer: {
    tagline: 'Building fast, secure web things.',
    copyright: '© 2026 Naman Verma. All rights reserved.',
  },
}
