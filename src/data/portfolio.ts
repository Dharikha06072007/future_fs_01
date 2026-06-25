import type { Achievement, BlogPost, Education, NavItem, Project, SkillGroup } from '../types/portfolio'

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'blog', label: 'Writings' },
  { id: 'contact', label: 'Contact' },
]

export const education: Education[] = [
  {
    institution: 'Karunya Institute of Technology and Sciences',
    credential: 'B.Tech Undergraduate',
    period: '2026 – Present',
    description: 'Pursuing a deep understanding of computer science while building products, exploring AI/ML, and cultivating an entrepreneurial mindset.',
    highlights: ['Software Development', 'AI/ML', 'IoT', 'Product Development', 'Entrepreneurship'],
  },
  {
    institution: 'Daniel Thomas Matric Higher Secondary School',
    credential: 'Higher Secondary Education',
    period: 'Completed 2025',
    description: 'Built a strong academic foundation and discovered a deep curiosity for technology, problem-solving, and innovation.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'C', level: 75, icon: '⚙️' },
      { name: 'C++', level: 70, icon: '⚡' },
      { name: 'TypeScript', level: 60, icon: '📘' },
    ],
  },
  {
    title: 'Web',
    skills: [
      { name: 'HTML & CSS', level: 80, icon: '🌐' },
      { name: 'React.js', level: 65, icon: '⚛️' },
      { name: 'Node.js', level: 55, icon: '🟢' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 75, icon: '🔧' },
      { name: 'VS Code', level: 85, icon: '💻' },
    ],
  },
  {
    title: 'Domains',
    skills: [
      { name: 'AI & ML', level: 55, icon: '🤖' },
      { name: 'IoT', level: 60, icon: '📡' },
      { name: 'Product Development', level: 65, icon: '🎯' },
      { name: 'Entrepreneurship', level: 60, icon: '🚀' },
    ],
  },
]

export const projects: Project[] = [
  {
    slug: 'edutwin',
    title: 'EduTwin',
    description: 'Education-focused platform designed to enhance learning experiences through technology.',
    category: 'Web Application',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: '📚',
    problem: 'Students often struggle with fragmented learning tools and lack a unified platform for collaboration and personalized education.',
    solution: 'Built a comprehensive education platform with course management, real-time collaboration, and adaptive learning features.',
    learned: 'This project taught me how to think about education through the lens of product design — understanding user needs and iterating based on feedback.',
  },
  {
    slug: 'athletica',
    title: 'Athletica',
    description: 'A sports ecosystem connecting athletes, coaches, academies, turf owners, clinics, sports associations, and communities.',
    category: 'Web Application',
    tech: ['React', 'TypeScript', 'Node.js'],
    icon: '🏃',
    problem: 'The sports ecosystem in India is fragmented — athletes, coaches, and facilities lack a unified platform to connect and collaborate.',
    solution: 'Built a multi-sided platform connecting all stakeholders in the sports ecosystem with profiles, booking, and community features.',
    learned: 'I learned how to design platforms serving multiple user types with different needs — a crucial skill for any product builder.',
  },
  {
    slug: 'ai-dialect-translator',
    title: 'AI Dialect Translator',
    description: 'Translates speech and text across languages and regional dialects using AI and NLP.',
    category: 'AI Project',
    tech: ['Python', 'AI', 'NLP'],
    icon: '🌐',
    problem: 'India has hundreds of regional dialects, and standard translation tools often miss the nuance of local languages.',
    solution: 'Developed an AI-powered translation system that handles both speech and text across multiple Indian languages and regional dialects.',
    learned: 'Working with NLP taught me how language models process context and nuance — and how technology can bridge communication gaps.',
  },
  {
    slug: 'homemade-happiness',
    title: 'Homemade Happiness',
    description: 'A modern bakery web application where customers can browse homemade cakes, brownies, and desserts, then order seamlessly through WhatsApp and UPI payments.',
    category: 'Web Application',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp API', 'UPI'],
    icon: '🍰',
    images: [
      '/images/bakery/bakery-01.svg', '/images/bakery/bakery-02.svg', '/images/bakery/bakery-03.svg', '/images/bakery/bakery-04.svg',
      '/images/bakery/bakery-05.svg', '/images/bakery/bakery-06.svg', '/images/bakery/bakery-07.svg', '/images/bakery/bakery-08.svg',
      '/images/bakery/bakery-09.svg', '/images/bakery/bakery-10.svg', '/images/bakery/bakery-11.svg', '/images/bakery/bakery-12.svg',
      '/images/bakery/bakery-13.svg', '/images/bakery/bakery-14.svg', '/images/bakery/bakery-15.svg', '/images/bakery/bakery-16.svg',
      '/images/bakery/bakery-17.svg', '/images/bakery/bakery-18.svg', '/images/bakery/bakery-19.svg', '/images/bakery/bakery-20.svg',
      '/images/bakery/bakery-21.svg', '/images/bakery/bakery-22.svg', '/images/bakery/bakery-23.svg', '/images/bakery/bakery-24.svg',
      '/images/bakery/bakery-25.svg', '/images/bakery/bakery-26.svg', '/images/bakery/bakery-27.svg', '/images/bakery/bakery-28.svg',
      '/images/bakery/bakery-29.svg', '/images/bakery/bakery-30.svg', '/images/bakery/bakery-31.svg', '/images/bakery/bakery-32.svg',
    ],
    problem: 'Home bakers struggle to showcase their products and manage orders professionally without expensive platforms.',
    solution: 'Created an elegant bakery storefront with product management, image gallery, WhatsApp ordering, and UPI payment integration.',
    learned: 'This project combined my love for design with practical commerce — I learned about payment flows, order management, and creating delightful user experiences.',
  },
  {
    slug: 'animal-intrusion-detection',
    title: 'Animal Intrusion Detection System',
    description: 'Detects animal intrusions in farmlands and provides real-time alerts to protect crops and property.',
    category: 'IoT Project',
    tech: ['Python', 'Machine Learning', 'IoT', 'Sensors'],
    icon: '🐾',
    problem: 'Farmers in India lose significant crops to animal intrusions, and existing solutions are either too expensive or unreliable.',
    solution: 'Built an IoT-based detection system using sensors and ML to identify animal intrusions and send real-time alerts.',
    learned: 'This was my first end-to-end IoT project — I learned about sensor integration, embedded systems, and building for real-world constraints.',
  },
  {
    slug: 'smart-attendance',
    title: 'Smart Attendance Management System',
    description: 'Automated attendance tracking solution using biometric sensors and cloud storage.',
    category: 'IoT Project',
    tech: ['Python', 'Database', 'IoT'],
    icon: '📋',
    problem: 'Manual attendance tracking is time-consuming and error-prone in educational institutions.',
    solution: 'Developed an automated system using biometric sensors that records attendance in real-time and syncs to the cloud.',
    learned: 'I learned how to integrate hardware with software and build a reliable system that works consistently in real-world conditions.',
  },
  {
    slug: 'smart-light-control',
    title: 'Smart Light Control System',
    icon: '💡',
    description: 'Energy-efficient smart lighting automation using IoT and embedded systems.',
    category: 'IoT Project',
    tech: ['IoT', 'Embedded Systems'],
    problem: 'Conventional lighting systems waste significant energy due to lack of intelligent automation.',
    solution: 'Built a smart lighting system that automatically adjusts based on occupancy, ambient light, and user preferences.',
    learned: 'This project deepened my understanding of embedded systems and energy-efficient design — and how small solutions can create big impact.',
  },
]

export const achievements: Achievement[] = [
  { metric: '7+', label: 'Projects Built' },
  { metric: '10+', label: 'Technologies Explored' },
  { metric: '2+', label: 'Product Ideas' },
  { metric: 'Every Day', label: 'Learning' },
]

export const achievementList: string[] = [
  'Secured stipend-based internship through project development and innovation.',
  'Active participant in innovation initiatives and startup ecosystems.',
  'Exploring product strategy and entrepreneurial thinking.',
  'Building real-world solutions that create measurable impact.',
  'Learning from every project — iterating, improving, and shipping.',
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'smart-attendance-system-python-iot',
    title: 'How I Built a Smart Attendance System Using Python and IoT',
    excerpt: 'From concept to working prototype — my journey building an automated attendance tracking system using biometric sensors, Python, and cloud integration.',
    icon: 'H',
    date: '2026',
  },
  {
    slug: 'building-athletica-sports-platform-react',
    title: 'Building Athletica: A Sports Ecosystem Platform with React',
    excerpt: 'Designing and developing a multi-sided platform connecting athletes, coaches, and sports facilities — the challenges and breakthroughs.',
    icon: 'B',
    date: '2026',
  },
  {
    slug: 'homemade-happiness-bakery-whatsapp-api',
    title: 'Homemade Happiness: Creating a Bakery E-Commerce App with WhatsApp API',
    excerpt: 'How I combined React, WhatsApp API, and UPI payments to build a delightful bakery ordering experience.',
    icon: 'H',
    date: '2026',
  },
]
