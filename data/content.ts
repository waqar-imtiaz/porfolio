export const profile = {
  name: 'Waqar Imtiaz',
  title: 'Full-Stack Developer & Frontend Lead',
  location: 'Lahore, Pakistan',
  email: 'hello@iwaqar.com',
  tagline:
    'I design and build fast, scalable, user-centric web applications for data-rich and product-driven teams.',
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/iwaqar' },
    { label: 'GitHub', href: 'https://github.com/waqar-imtiaz' },
    { label: 'Email', href: 'mailto:hello@iwaqar.com' },
  ],
};

export const about = {
  summary:
    '15+ years shipping software across retail, FMCG, healthcare, and security. I bridge product vision, clean architecture, and hands-on engineering to deliver polished experiences. Comfortable leading teams, pairing with designers, and diving deep into performance or data visualization work.',
};

export const skills = {
  core: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'Node.js',
    'NestJS',
    'Tailwind CSS',
    'Data Visualization',
  ],
  daily: [
    'React',
    'Next.js',
    'Angular',
    'Node.js',
    'NestJS',
    'TypeORM',
    'Tailwind CSS',
    'D3.js',
    'PostgreSQL',
    'AWS',
    'CI/CD',
    'shadcn/ui',
  ],
  also: [
    'Vue.js',
    'Express',
    'React Native',
    'SCSS / LESS / Stylus',
    'C3.js',
    'Bootstrap',
    'Material UI',
    'SAP Spartacus',
    'MySQL',
    'MongoDB',
    'GCP',
    'Azure',
    'VPS hosting',
    'PWAs',
    'Responsive Design',
    'Git/SVN',
    'Jira',
    'GitHub',
    'GitLab',
    'Bitbucket',
    'ClickUp',
    'Trello',
  ],
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string;
};

export const experiences: Experience[] = [
  {
    company: 'MatchRite Care',
    title: 'Full Stack Developer & Frontend Lead',
    period: 'Aug 2023 – Present · Remote',
    bullets: [
      'Lead build-out of patient, provider, and mobile applications with clear delivery cadences.',
      'Own solution architecture, API integration, R&D spikes, and mentoring for code quality.',
      'Shipped performant PWAs with consistent UI kits and accessibility in mind.',
    ],
    stack: 'NestJS, Angular, React, React Native, Tailwind CSS, PWAs',
  },
  {
    company: 'Freelance Projects',
    title: 'Full Stack Developer',
    period: 'Jun 2024 – Present · Remote',
    bullets: [
      'Autonation Hub: free classified ads platform for cars and parts with CI/CD on GWC.',
      'Advanced File Reader: Angular tool parsing office and scientific formats with in-app charting.',
    ],
    stack: 'NestJS, PostgreSQL, Angular, CI/CD, Data viz',
  },
  {
    company: 'Croyten LLC',
    title: 'Frontend Lead',
    period: 'Nov 2022 – Feb 2024 · Remote',
    bullets: [
      'Led ZenBee sales intelligence platform UI, browser extensions, and responsive PWAs.',
      'Partnered with backend teams on API contracts and front-end architecture.',
    ],
    stack: 'Node.js, Angular, Tailwind CSS, PWAs, Browser extensions',
  },
  {
    company: 'FAIR Consulting Group',
    title: 'Sr. Frontend Consultant',
    period: 'Dec 2021 – Oct 2023 · Remote',
    bullets: [
      'Delivered SAP Spartacus experiences for brands like Incitec Pivot and Essity.',
      'Implemented UI/UX, SCSS, and API integrations for enterprise ecommerce.',
    ],
    stack: 'SAP Spartacus, Angular, SCSS, API integrations',
  },
  {
    company: 'True Meridian',
    title: 'Sr. Frontend Developer',
    period: 'Mar 2020 – Dec 2021 · Remote',
    bullets: [
      'Built Simbet casino collections and Pharma Licensing apps with rich dashboards.',
      'Worked across Angular, Vue, React, and Next.js delivering performant UIs.',
    ],
    stack: 'Angular, Vue, React, Next.js, D3.js, REST',
  },
  {
    company: 'SlashNext',
    title: 'Sr. Frontend Developer',
    period: 'Nov 2018 – Mar 2020 · Lahore',
    bullets: [
      'Shipped security dashboards and browser extensions used by enterprise clients.',
      'Focused on modular React/Vue components, data-heavy tables, and reliability.',
    ],
    stack: 'React, Vue, HTML, CSS, jQuery',
  },
  {
    company: 'Earlier roles & 200+ freelance projects',
    title: 'Frontend Lead & Consultant',
    period: '2009 – 2018',
    bullets: [
      'Led teams at True Meridian, Webinane, Octocs, Zain Technologies, and numerous freelance builds.',
      'Delivered WordPress themes, responsive UI systems, and data-rich dashboards.',
    ],
    stack: 'JavaScript, WordPress, Responsive UI, Team leadership',
  },
];

export type ProjectCategory = 'Frontend' | 'Full Stack' | 'Data Visualization';

export type Project = {
  name: string;
  description: string;
  role: string;
  tech: string[];
  achievement: string;
  category: ProjectCategory[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: 'Autonation Hub',
    description: 'Free classified marketplace for cars and parts with streamlined posting flows.',
    role: 'Full-stack lead',
    tech: ['NestJS', 'PostgreSQL', 'Angular', 'Tailwind', 'CI/CD'],
    achievement: 'Deployed a stable MVP with automated pipelines and observability hooks.',
    category: ['Full Stack'],
  },
  {
    name: 'ZenBee Sales Intelligence',
    description: 'Sales intelligence platform with browser extensions and responsive dashboards.',
    role: 'Frontend lead',
    tech: ['Node.js', 'Angular', 'Tailwind', 'PWAs'],
    achievement: 'Cut page load times and built a unified design system for rapid delivery.',
    category: ['Frontend'],
  },
  {
    name: 'SAP Spartacus Ecommerce',
    description: 'Commerce experiences for large retailers with personalized storefronts.',
    role: 'Senior frontend consultant',
    tech: ['SAP Spartacus', 'Angular', 'SCSS'],
    achievement: 'Improved accessibility and conversion through optimized UX flows.',
    category: ['Frontend'],
  },
  {
    name: 'SlashNext Security Dashboard',
    description: 'Data-dense threat intelligence dashboards and browser extensions.',
    role: 'Senior frontend developer',
    tech: ['React', 'Vue', 'REST APIs'],
    achievement: 'Delivered reliable dashboards with real-time updates for security analysts.',
    category: ['Frontend', 'Data Visualization'],
  },
  {
    name: 'Excel to Charts Lab',
    description: 'Toolkit converting XLSX and scientific files into interactive charts.',
    role: 'Full-stack engineer',
    tech: ['Angular', 'D3.js', 'CSV/TSV parsers'],
    achievement: 'Enabled researchers to visualize lab results without leaving the browser.',
    category: ['Full Stack', 'Data Visualization'],
  },
];

export const highlights = [
  'Set coding standards, reviewed PRs, and mentored engineers across time zones.',
  'Comfortable with Agile rituals, TDD/BDD, and clear technical writing.',
  'Configured CI/CD pipelines on Azure, AWS, and VPS providers with sensible monitoring.',
  'Love building data-rich UIs, charts, and visual narratives that stay fast under load.',
];

export const contactNote =
  'Tell me about your product idea, an in-flight project that needs rescuing, or a team that could use a pragmatic lead. I usually reply within one business day.';
