import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'portfolio.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace building items with new building data
const oldItems = `      items: [
        {
          year: '2026',
          title: 'Summer Internship — Maincrafts Technologies',
          description:
            'Cyber Security internship focused on web security, earning Grade S distinction. 14 November 2026 — 14 February 2027.',
          status: 'Grade S',
          linkText: 'View certificate & LinkedIn story',
          linkUrl: 'https://lnkd.in/p/g54ycVA9',
        },
        {
          year: '2026',
          title: 'AEGIS Gate — Prompt injection firewall',
          description:
            'Built a prompt injection firewall that protects from unusual prompts given to AI. Python, JavaScript, and security hardening.',
        },
        {
          year: '2025',
          title: 'Veylora — Phishing scanner',
          description:
            'AI-powered phishing scanner that scans threats in email, messages, QR codes, and images.',
        },
        {
          year: '2025 —',
          title: 'B.Tech CSE — Quantum University',
          description:
            'Programming, data structures & algorithms, web technologies, and core computer science.',
        },
        {
          year: '2024',
          title: '12th grade — CBSE',
          description:
            'Physics, Chemistry, Mathematics — and a growing pull toward computer science.',
        },
        {
          year: '2022',
          title: '10th grade — TBSE',
          description: 'Completed secondary education.',
        },
      ],
    },
    ama:`;

const newItems = `      items: [
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
          year: '2025 —',
          institution: 'Quantum University',
          qualification: 'B.Tech CSE',
          description: 'Programming, data structures & algorithms, web technologies, and core computer science.',
        },
        {
          year: '2024',
          institution: 'CBSE',
          qualification: '12th Grade',
          description: 'Physics, Chemistry, Mathematics — and a growing pull toward computer science.',
        },
        {
          year: '2022',
          institution: 'TBSE',
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
    ama:`;

if (content.includes(oldItems)) {
  content = content.replace(oldItems, newItems);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully replaced building items');
} else {
  console.log('Could not find building items to replace');
  // Debug
  const idx = content.indexOf('building: {');
  if (idx >= 0) {
    console.log('Found building at:', idx);
    console.log(content.substring(idx, idx + 500));
  }
}
