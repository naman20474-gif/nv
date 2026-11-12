$path = "C:\Users\naman\Desktop\portfolio2\src\data\portfolio.ts"
$content = Get-Content $path -Raw

# Find and replace journey section
$startIndex = $content.IndexOf("    journey: {")
if ($startIndex -ge 0) {
    # Find the end of the journey section (the closing }, after items array)
    $braceCount = 0
    $inJourney = $false
    $endIndex = -1
    
    for ($i = $startIndex; $i -lt $content.Length; $i++) {
        $char = $content[$i]
        if ($char -eq '{') { $braceCount++; $inJourney = $true }
        if ($char -eq '}') { 
            $braceCount--
            if ($inJourney -and $braceCount -eq 0) {
                $endIndex = $i + 1
                break
            }
        }
    }
    
    if ($endIndex -gt 0) {
        $newSections = @"
    building: {
      eyebrow: 'CURRENTLY BUILDING / 03',
      heading: "WHAT I'M UP TO.",
      sub: 'Active projects and areas of focus',
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
"@

        $content = $content.Substring(0, $startIndex) + $newSections + $content.Substring($endIndex)
        Set-Content $path $content
        Write-Host "Done"
    } else {
        Write-Host "Could not find end of journey section"
    }
} else {
    Write-Host "Could not find journey section"
}