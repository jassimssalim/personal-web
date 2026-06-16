export const personal = {
  name: 'Jassim S. Mohammed Salim',
  firstName: 'Jassim',
  initials: 'JSM',
  title: 'Full Stack Developer',
  location: 'Bulacan, Philippines',
  email: 'jsmohammedsalim@gmail.com',
  phone: '(+639)055242652',
  linkedin: 'https://linkedin.com/in/jassimssalim',
  github: 'https://github.com/jassimssalim',
  summary:
    'Full Stack Developer with 5 years of experience delivering enterprise-grade applications across OutSystems and modern stacks (Spring Boot, React, Next.js). Expert in designing scalable architectures, integrating RESTful APIs, shipping AI-driven analytics tools, and leveraging LLMs to accelerate development — with a growing footprint in AWS and Docker-based cloud solutions.',
}

export interface Project {
  name: string
  domain: string
  bullets: string[]
}

export interface ExperienceEntry {
  id: number
  company: string
  role: string
  type: string
  period: string
  location: string
  current: boolean
  projects: Project[]
}

export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    company: 'Seven Seven Global Services',
    role: 'App Developer 2',
    type: 'Full Stack Developer',
    period: 'July 2024 – Present',
    location: 'Ortigas, Pasig City, Philippines',
    current: true,
    projects: [
      {
        name: 'Loan Application – Local Bank',
        domain: 'Banking / Financial Services',
        bullets: [
          'Architected dynamic, template-driven loan forms that eliminated hardcoded frontend components, allowing the bank to roll out new loan products without developer UI rewrites.',
          'Designed a secure document management system for sensitive financial files, ensuring customer attachments stay organized, accessible for staff, and compliant with banking data privacy rules.',
          'Implemented strict backend validation rules to catch missing data or files before submission, blocking incomplete applications and saving the internal review team from manual cleanups.',
          'Engineered a flexible approval workflow that automatically routes applications to the right managers and sign-off stages based on loan type, streamlining the internal review process.',
          'Built the platform using reusable backend configurations, dramatically lowering future development costs and making it simple to update application rules later on.',
        ],
      },
      {
        name: 'Examination Portal',
        domain: 'Recruitment / Technical Assessment',
        bullets: [
          'Developed an automated real-time coding evaluator that scores programming exercises instantly, helping recruiters filter out unqualified candidates early and reducing manual screening time.',
          'Implemented strict environment lockdowns and anti-cheating controls during live sessions, protecting test integrity so the client can fully trust the validity of scores.',
          'Built a reliable, time-bound testing mechanism that automatically saves and submits active exams when time runs out, ensuring a fair evaluation process.',
          'Created an automated email system that handles secure exam invites and timed access tokens, streamlining candidate onboarding for HR whenever a new project is assigned.',
          'Designed interactive dashboards and admin control panels that let recruiters track progress and manage question banks, giving the client full self-service control over their hiring pipeline.',
          'Integrated an AI grading engine using Large Language Models to evaluate open-ended essay questions, giving recruiters instant scoring so they no longer read hundreds of long-form responses manually.',
        ],
      },
      {
        name: 'E-Learning Portal',
        domain: 'Learning Management / Internal Enterprise',
        bullets: [
          'Led technical code reviews to enforce quality standards, keeping the codebase clean and scalable so the team could build new features without accumulating technical debt.',
          'Developed and optimized RESTful APIs to slash data latency and boost retrieval speeds, providing internal enterprise users with a smooth, lag-free learning experience.',
          'Designed core backend workflows and system components, optimizing how different teams share data and ensuring the application scales as user traffic grows.',
          'Built a central tracking and analytics dashboard to monitor system health, turning messy log data into clear visuals that help the support team quickly spot bugs and keep the platform running.',
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'Seven Seven Global Services',
    role: 'App Developer 1',
    type: 'OutSystems Developer',
    period: 'May 2021 – June 2024',
    location: 'Ortigas, Pasig City, Philippines',
    current: false,
    projects: [
      {
        name: 'Major Commercial Bank',
        domain: 'Banking / Financial Services',
        bullets: [
          'Engineered 15+ end-to-end mobile and web applications from inception, leveraging Agile methodologies to accelerate delivery cycles.',
          'Developed intuitive, responsive User Interfaces for web and mobile, focusing on seamless UX and high user adoption.',
          'Established robust security protocols, managing Role-Based Access Control (RBAC) and user permissions to safeguard sensitive data.',
          'Architected and integrated REST/SOAP APIs, including the management of OutSystems database logs to ensure optimal performance.',
          'Pioneered innovative solutions on the OutSystems platform, utilizing advanced logic and extensibility to meet complex requirements.',
          'Orchestrated continuous integration and deployment (CI/CD), managing application lifecycles to ensure stable, high-frequency releases.',
          'Managed environment health by proactively monitoring for broken dependencies and versioning conflicts across the SDLC.',
          'Designed complex application features in alignment with OutSystems Discovery and 4-Layer Architecture best practices.',
          'Remediated security vulnerabilities identified through VAPT and provided critical L3 support to resolve production bugs.',
          'Engineered high-value, reusable components and Forge-style assets to standardize development and reduce future effort.',
        ],
      },
    ],
  },
]

export interface PersonalProject {
  name: string
  type: string
  tech: string[]
  description: string
  bullets: string[]
}

export const personalProjects: PersonalProject[] = [
  {
    name: 'Safecast',
    type: 'Mobile App',
    tech: ['Expo', 'React Native', 'TypeScript'],
    description:
      'A smart laundry and tide assistant app that aggregates real-time weather, UV index, humidity, wind, and other environmental data to recommend the best time to do laundry — and checks local tide levels to tell you whether roads in your area are currently passable.',
    bullets: [
      'Analyzes real-time UV index, humidity, wind speed, precipitation, and atmospheric conditions to pinpoint the optimal laundry window for your exact location.',
      'Tide page displays live road passability status and a full daily/weekly tide schedule so users can plan travel and outdoor activities safely.',
      'Built with Expo and React Native for a smooth, cross-platform mobile experience on iOS and Android.',
    ],
  },
  {
    name: 'E-Complain System',
    type: 'Web + Mobile App',
    tech: ['React', 'Spring Boot', 'React Native'],
    description:
      'A barangay-level complaint management system with a dashboard for barangay officials and a multi-platform interface for complainants — modeled after the Philippine barangay complaint and status workflow.',
    bullets: [
      'Barangay dashboard lets officials review, approve, and update complaint statuses through a structured workflow that mirrors the Philippine barangay system.',
      'Complainants can file complaints via mobile app or website, track status updates in real time, and receive notifications as their case progresses.',
      'Role-based access separates barangay staff permissions from public complainant views, ensuring data privacy and process integrity throughout the lifecycle.',
    ],
  },
]

export const skillCategories = [
  {
    name: 'Languages',
    skills: ['Java', 'SQL', 'JavaScript', 'TypeScript', 'HTML5', 'CSS'],
  },
  {
    name: 'Backend / Frontend',
    skills: ['Spring Boot', 'Node.js', 'REST APIs', 'React.js', 'Next.js', 'Tailwind CSS', 'Expo / React Native'],
  },
  {
    name: 'Databases / Platforms',
    skills: ['MariaDB', 'OutSystems Traditional', 'OutSystems Reactive', 'OutSystems Mobile', 'OutSystems Forge'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['AWS', 'Docker', 'Git', 'GitHub', 'Postman', 'Jira', 'DBeaver'],
  },
  {
    name: 'AI / LLMs',
    skills: ['LLM Integration', 'Prompt Engineering', 'AI-assisted Development', 'OpenAI APIs', 'Anthropic Claude'],
  },
]

export const certifications = [
  {
    name: 'Associate Traditional Web Developer',
    issuer: 'OutSystems',
    year: '2020',
  },
]

export const education = [
  {
    school: 'Bulacan State University',
    degree: 'Bachelor of Science in Computer Engineering',
    period: 'June 2015 – Nov 2020',
    location: 'Malolos City, Bulacan, Philippines',
  },
]
