import 'dotenv/config'
import config from './payload.config'
import { getPayload } from 'payload'

type ThemePreset =
  | 'elegantLuxury'
  | 'modernMinimal'
  | 'tangerine'
  | 'nature'
  | 'quantumRose'
  | 'sunsetHorizon'
  | 'mochaMousse'

type TechStackKey =
  | 'typescript'
  | 'react'
  | 'next'
  | 'javascript'
  | 'tailwind'
  | 'graphql'
  | 'firebase'
  | 'nodejs'
  | 'mongodb'
  | 'postgresql'
  | 'prisma'
  | 'trpc'
  | 'vue'
  | 'svelte'
  | 'python'
  | 'docker'
  | 'figma'
  | 'framer'
  | 'redux'
  | 'zustand'
  | 'sass'
  | 'threejs'
  | 'gsap'

type SeedStat = { label: string; value: string }
type SeedProjectItem = {
  title: string
  description: string
  techStack?: string
  liveUrl?: string
  githubUrl?: string
}
type SeedBlogPost = {
  title: string
  description: string
  publishAt?: string
  link?: string
}
type SeedContactLink = { label: string; href: string }

type SeedProfile = {
  accentColor: string
  backgroundColor: string
  displayName: string
  fontFamily: string
  headline: string
  order: number
  role: string
  resumeHref?: string
  resumeLabel?: string
  slug: string
  summary: string
  themePreset: ThemePreset
  textColor: string
  content?: {
    hero?: {
      title?: string
      headline?: string
      body?: string
      ctaLabel?: string
      ctaHref?: string
    }
    about?: {
      title?: string
      body?: string
      educationLabel?: string
      educationBody?: string
      showTechStack?: boolean
      techStackItems?: TechStackKey[]
      stats?: SeedStat[]
    }
    projects?: {
      title?: string
      body?: string
      items?: SeedProjectItem[]
    }
    blog?: {
      title?: string
      body?: string
      posts?: SeedBlogPost[]
    }
    contact?: {
      title?: string
      body?: string
      links?: SeedContactLink[]
    }
  }
}

const seedProfiles: SeedProfile[] = [
  {
    accentColor: '#3b82f6',
    backgroundColor: '#0a1628',
    displayName: 'Kevin Llanes',
    fontFamily: 'Jost',
    headline: 'Evolving digital experiences through code and simulation.',
    order: 0,
    role: 'Full Stack Developer & CS Student',
    resumeHref: 'https://example.com/resume/kevin-llanes',
    resumeLabel: 'Resume',
    slug: 'kevin-llanes',
    summary:
      '4th-year Computer Science student at UCC, specializing in building robust web applications and exploring evolutionary algorithms.',
    themePreset: 'modernMinimal',
    textColor: '#f0f6ff',
    content: {
      hero: {
        title: "It's Kevin Llanes",
        headline: 'Where logic meets creativity.',
        body: 'A developer passionate about full-stack web development, offline-first systems, and the intersection of biology and AI through sims',
        ctaLabel: 'Contact Me',
        ctaHref: '#contact',
      },
      about: {
        title: 'Evolve or Perish.',
        body: 'Currently finishing my BSCS degree at the University of Caloocan City. I specialize in building scalable web apps using Laravel and Next.js, while also diving deep into evolutionary algorithms and neural networks for my thesis project. I enjoy creating practical solutions like POS systems and event management tools.',
        educationLabel: 'Education',
        educationBody: 'Bachelor of Science in Computer Science, University of Caloocan City',
        showTechStack: true,
        techStackItems: [
          'typescript',
          'react',
          'next',
          'javascript',
          'tailwind',
          'nodejs',
          'python',
          'figma',
          'postgresql',
          'firebase',
        ],
        stats: [
          { label: 'Years of Coding', value: '7' },
          { label: 'Major Projects', value: '12' },
          { label: 'Coffee Consumed', value: '∞' },
        ],
      },
      projects: {
        title: 'Projects',
        body: 'A selection of projects I have built and contributed to.',
        items: [
          {
            title: 'Lakbay ni Pepe',
            description:
              'A pure C++ Offline E-Book Application that contains content about the Philippine National Hero, Dr. José Protasio Rizal Mercado y Alonso Realonda, and his great novels "Noli Me Tángere" and "El Filibusterismo" in summarized Filipino form, as well as the characters and a glossary to make reading easier for readers.',
            techStack: 'C++',
            liveUrl: '',
            githubUrl: 'https://github.com/Meixii/E-Book',
          },
          {
            title: 'FourSeasons',
            description:
              "Four seasons animation: The website's main feature is an impressive CSS animation that transitions smoothly between the four seasons. Users can watch as leaves fall from trees during autumn, snowflakes gently land on the ground in winter, flowers bloom in spring, and the sun shines brightly in summer.",
            techStack: 'HTML5, CSS3, JavaScript',
            liveUrl: '',
            githubUrl: 'https://github.com/Meixii/FourSeasons',
          },
          {
            title: 'JavaRice',
            description:
              'A food ordering system designed to make the process of ordering food easier for users. The system is built using Java and Maven GUI, which provides an interactive and user-friendly experience. The purpose of this system is to allow users to order their favorite meals with ease and convenience.',
            techStack: 'Java',
            liveUrl: '',
            githubUrl: 'https://github.com/PP-Namias/Java-Rice',
          },
          {
            title: 'EduHub',
            description:
              'A centralized digital ecosystem designed to streamline the complexities of academic life. By mimicking the dynamics of a physical classroom within a virtual space, EduHub serves as a collaborative dashboard where students can manage assignments, track milestones, and stay aligned with class-wide announcements in real-time.',
            techStack: 'Java',
            liveUrl: '',
            githubUrl: 'https://github.com/kopiibara/EduHub',
          },
        ],
      },
      blog: {
        title: 'Dev Logs',
        body: 'Tracking my progress in AI simulations and web engineering.',
        posts: [
          {
            title: 'MASH in iTechtivity!',
            description: 'Showcasing a year of work on the MASH ecosystem this March 26-27.',
            publishAt: 'March 2026',
            link: '',
          },
        ],
      },
      contact: {
        title: "Let's Connect",
        body: 'Have a project in mind or just want to chat? Feel free to reach out through any of the links above.',
        links: [
          { label: 'GitHub', href: 'https://github.com/Meixii' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/llaneskevin/' },
          { label: 'Facebook', href: 'https://facebook.com/Kaizen.Melix/' },
          { label: 'Email', href: 'mailto:kevsllanes@gmail.com' },
        ],
      },
    },
  },
  {
    accentColor: '#4f46e5',
    backgroundColor: '#111827',
    displayName: 'Ronan Renz Valencia',
    fontFamily: 'Jost',
    headline: 'Engineering robust and scalable software solutions.',
    order: 8,
    role: 'Software Engineer',
    slug: 'ronan-renz-valencia',
    summary:
      'A dedicated software engineer with a strong foundation in backend development and cloud architecture.',
    themePreset: 'elegantLuxury',
    textColor: '#f9fafb',
    content: {
      hero: {
        title: "Hi, I'm Ronan Renz Valencia",
        headline: 'Bridging the gap between complex problems and elegant solutions.',
        body: 'Specializing in building resilient backend systems and optimizing performance for modern web applications.',
        ctaLabel: 'Get in Touch',
        ctaHref: '#contact',
      },
      about: {
        title: 'Driven by logic, built for scale.',
        body: 'I am a Software Engineer passionate about crafting clean, efficient code and building architectures that stand the test of time. My journey in tech revolves around solving challenging problems and continuously pushing the boundaries of what software can achieve.',
        educationLabel: 'Education',
        educationBody: 'Bachelor of Science in Computer Science/Engineering.',
        showTechStack: true,
        techStackItems: ['typescript', 'nodejs', 'postgresql', 'docker', 'python'],
        stats: [
          { label: 'Years of Experience', value: '4' },
          { label: 'Systems Scaled', value: '15+' },
          { label: 'Lines of Code', value: '1M+' },
        ],
      },
      projects: {
        title: 'Projects',
        body: 'Highlighting my recent backend architectures and system integrations.',
        items: [
          {
            title: 'Microservices Framework',
            description:
              'A responsive microservices framework utilizing Node.js and Docker for rapid deployment of scalable APIs.',
            techStack: 'Node.js, Docker, TypeScript, Redis',
            githubUrl: 'https://github.com/ronan/micro-framework',
          },
          {
            title: 'Data Pipeline Automator',
            description:
              'A Python-based pipeline that processes gigabytes of data with high throughput and low latency.',
            techStack: 'Python, PostgreSQL, AWS',
          },
        ],
      },
      blog: {
        title: 'Blog',
        body: 'Documenting my adventures in software engineering.',
        posts: [
          {
            title: 'Optimizing Node.js Performance',
            description:
              'Deep dive into event loop management and memory tuning for high-load applications.',
            publishAt: 'April 2024',
          },
        ],
      },
      contact: {
        title: 'Contact',
        body: 'Interested in working together or discussing system design?',
        links: [
          { label: 'GitHub', href: 'https://github.com' },
          { label: 'LinkedIn', href: 'https://linkedin.com' },
        ],
      },
    },
  },
  {
    accentColor: '#ef4444',
    backgroundColor: '#1f2937',
    displayName: 'Jin Harold Failana',
    fontFamily: 'Jost',
    headline: 'Full Stack Developer & Software Engineering Student',
    order: 9,
    role: 'Full Stack Developer & Software Engineering Student',
    slug: 'jin-harold-failana',
    summary:
      'Computer Science student at the University of Caloocan City building web, mobile, desktop, and IoT projects.',
    themePreset: 'tangerine',
    textColor: '#f9fafb',
    content: {
      hero: {
        title: "It's Jin Harold Failana",
        headline: 'Building practical software across web, mobile, and hardware.',
        body: 'Full stack developer focused on useful applications, from Wix Studio marketing sites to Flutter, .NET, and IoT-driven tools.',
        ctaLabel: 'Contact Me',
        ctaHref: '#contact',
      },
      about: {
        title: 'Education',
        body: 'I build practical systems across web, mobile, desktop, and IoT, with experience in frontend, backend, design tools, and embedded development.',
        educationLabel: 'Education',
        educationBody: 'University of Caloocan City · Bachelor of Science in Computer Science · 2022 - 2026',
        showTechStack: true,
        techStackItems: [
          'javascript',
          'react',
          'next',
          'tailwind',
          'nodejs',
          'firebase',
          'mongodb',
          'postgresql',
          'figma',
        ],
        stats: [
          { label: 'Projects', value: '5' },
          { label: 'Focus Areas', value: '4' },
          { label: 'Study Years', value: '4' },
        ],
      },
      projects: {
        title: 'Projects',
        body: 'Selected work from the resume, including OJT, mobile, desktop, and thesis projects.',
        items: [
          {
            title: 'Activations Advertising Inc.',
            description:
              'OJT experience building the Activations Advertising website using Wix Studio and embedded custom code for brand activations, experiential marketing, and event management.',
            techStack: 'Wix Studio, Embedded Code',
            liveUrl: 'https://www.activationsadvertising.com/',
          },
          {
            title: 'Fitscale',
            description:
              'A smart fitness tracking system that combines a digital weight scale with a mobile app to help users monitor and manage their fitness journey.',
            techStack: 'Firebase, Dart, Flutter, Arduino',
            githubUrl: 'https://github.com/jinfailana/Fitscale',
          },
          {
            title: 'SunnySideUp',
            description:
              'A full-stack Windows desktop weather application built with C# and .NET, providing real-time weather information and historical tracking.',
            techStack: 'MySQL, C#, .NET, GunaUI2',
            githubUrl: 'https://github.com/jinfailana/Sunny-Side-Up',
          },
          {
            title: 'MASH Mushroom Automation',
            description:
              'Thesis project focused on mushroom automation and control workflows for a more efficient growing process.',
            techStack: 'Automation, IoT, Software Engineering',
            githubUrl: 'https://github.com/MASH-Mushroom-Automation',
          },
        ],
      },
      blog: {
        title: 'Experience',
        body: 'Selected OJT and project experience from the resume.',
        posts: [
          {
            title: 'Activations Advertising Inc. | Wix Studio, Embedded Code',
            description:
              'Applied in Cloud Walk Digital as a developer to create the Activations Advertising website using Wix Studio and embedded custom code for enhanced functionality.',
            publishAt: 'May 2025 - Jul 2025',
            link: 'https://www.activationsadvertising.com/',
          },
          {
            title: 'Fitscale | Firebase, Dart, Flutter, Arduino',
            description:
              'Built a smart fitness tracking system with a mobile app integrated with IoT hardware and handled frontend development for the user flows.',
            publishAt: 'Jan 2025 - Apr 2025',
            link: 'https://github.com/jinfailana/Fitscale',
          },
          {
            title: 'PetFeeds | MongoDB, React, Node.js, EC2, Arduino',
            description:
              'Designed and integrated hardware components for a smart IoT-based pet feeder system with real-time camera integration and scheduling features.',
            publishAt: 'Mar 2025',
          },
          {
            title: 'SunnySideUp | MySQL, C#, .NET, GunaUI2',
            description:
              'Developed a full-stack Windows desktop weather application providing real-time weather information and historical data tracking.',
            publishAt: 'Mar 2024 - Apr 2024',
            link: 'https://github.com/jinfailana/Sunny-Side-Up',
          },
          {
            title: 'BookWiseee | MySQL, C#, .NET, GunaUI2',
            description: 'Developed a comprehensive Windows Forms frontend using the Guna UI2 framework.',
            publishAt: 'Mar 2024 - Apr 2024',
          },
        ],
      },
      contact: {
        title: "Let's Connect",
        body: '+(0910) 363 3455 | jinharold2004@gmail.com | github.com/jinfailana',
        links: [
          { label: 'GitHub', href: 'https://github.com/jinfailana' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jinfailana/' },
          { label: 'Facebook', href: 'https://www.facebook.com/pabjin.0' },
          { label: 'Email', href: 'mailto:jinharold2004@gmail.com' },
          { label: 'Website', href: 'https://www.activationsadvertising.com/' },
        ],
      },
    },
  },
  {
    accentColor: '#10b981',
    backgroundColor: '#0f172a',
    displayName: 'Emannuel Pabua',
    fontFamily: 'Jost',
    headline: 'Innovating through elegant code and dynamic interfaces.',
    order: 10,
    role: 'Frontend Architect',
    slug: 'emannuel-pabua',
    summary:
      'A proactive frontend expert focused on building inclusive, accessible, and high-performance user interfaces.',
    themePreset: 'nature',
    textColor: '#f8fafc',
    content: {
      hero: {
        title: "Hello, I'm Emannuel Pabua",
        headline: 'Shaping the future of web interfaces.',
        body: 'I build accessible, responsive, and visually engaging web applications that provide seamless user experiences across all devices.',
        ctaLabel: 'Say Hello',
        ctaHref: '#contact',
      },
      about: {
        title: 'Dedicated to the craft of UI engineering.',
        body: 'My focus is on creating web experiences that are both beautiful and highly accessible. I believe that good design is invisible, and great engineering makes everything feel effortless. I constantly strive to master the latest frontend technologies.',
        educationLabel: 'Education',
        educationBody: 'Bachelor of Science in Computer Science.',
        showTechStack: true,
        techStackItems: ['vue', 'react', 'tailwind', 'sass', 'javascript'],
        stats: [
          { label: 'Years of Experience', value: '4' },
          { label: 'Components Built', value: '200+' },
        ],
      },
      projects: {
        title: 'Featured Work',
        body: "Check out some of the distinct interfaces I've engineered.",
        items: [
          {
            title: 'Accessible UI Library',
            description:
              'An open-source component library focused strictly on WAI-ARIA standards and keyboard navigation.',
            techStack: 'React, TypeScript, Radix UI',
          },
        ],
      },
      blog: {
        title: 'Thoughts',
        body: 'Writing about accessibility, CSS architectures, and modern JS frameworks.',
        posts: [
          {
            title: 'A Guide to Accessible Web Forms',
            description: 'Ensuring your digital inputs can be used by everyone, everywhere.',
            publishAt: 'June 2024',
          },
        ],
      },
      contact: {
        title: 'Reach Out',
        body: "Looking for a frontend specialist? Let's talk.",
        links: [
          { label: 'GitHub', href: 'https://github.com' },
          { label: 'LinkedIn', href: 'https://linkedin.com' },
        ],
      },
    },
  },
]

const buildResumeHref = (slug: string) => `https://example.com/resume/${slug}`

async function seed() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const payloadApi = payload as any

  let created = 0

  for (const profile of seedProfiles) {
    const existing = await payloadApi.find({
      collection: 'profiles',
      limit: 1,
      where: { slug: { equals: profile.slug } },
    })

    const profileData = {
      ...profile,
      ctaHref: `/${profile.slug}`,
      ctaLabel: 'Open profile',
      resumeHref: profile.resumeHref ?? buildResumeHref(profile.slug),
      resumeLabel: profile.resumeLabel ?? 'Resume',
      isActive: true,
    }

    if (existing.docs.length > 0) {
      await payloadApi.update({
        collection: 'profiles',
        id: existing.docs[0].id,
        data: profileData,
      })
      console.log(`Updated "${profile.displayName}".`)
    } else {
      await payloadApi.create({
        collection: 'profiles',
        data: profileData,
      })
      created++
      console.log(`Created "${profile.displayName}".`)
    }
  }

  await payloadApi.updateGlobal?.({
    slug: 'site-settings',
    data: {
      defaultAccentColor: '#05cd77',
      defaultBackgroundColor: '#0f172a',
      defaultTextColor: '#f8fafc',
      selectorDescription:
        'Pick a person to view their custom page, layout details, and theme tokens.',
      selectorTitle: 'Choose a person',
      siteName: 'MASH Profiles',
    },
  })

  console.log(`Done. Created ${created} new profiles (rest were updated).`)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
