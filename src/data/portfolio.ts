import {
  Brain,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react'
import type {
  ContactLink,
  IconCard,
  NavItem,
  Project,
  SkillGroup,
  Stat,
  TimelineItem,
} from '../types/portfolio'

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
]

export const interests = [
  'Software Development',
  'Product Development',
  'Entrepreneurship',
  'Artificial Intelligence',
  'Sports Technology',
  'Design Thinking',
]

export const mindsetCards: IconCard[] = [
  { title: 'Critical Thinking', icon: Brain },
  { title: 'Analogical Thinking', icon: Network },
  { title: 'Product Innovation', icon: Lightbulb },
  { title: 'Design Thinking', icon: Sparkles },
  { title: 'Entrepreneurial Problem Solving', icon: Rocket },
  { title: 'Strategic Decision Making', icon: Target },
  { title: 'Continuous Learning', icon: GraduationCap },
]

export const education: TimelineItem[] = [
  {
    institution: 'Karunya Institute of Technology and Sciences',
    credential: 'B.Tech Undergraduate',
    period: '2026 - Present',
    focusAreas: [
      'Software Development',
      'AI/ML',
      'IoT',
      'Product Development',
      'Entrepreneurship',
    ],
  },
  {
    institution: 'Daniel Thomas Matric Higher Secondary School',
    credential: 'Higher Secondary Education',
    period: 'Completed 2025',
  },
]

export const projects: Project[] = [
  {
    title: 'EduTwin',
    description:
      'Education-focused platform designed to enhance learning experiences through technology.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    accent: '#A8DADC',
  },
  {
    title: 'Athletica',
    description:
      'Sports ecosystem platform connecting athletes, coaches, academies, turf owners, clinics, sports associations, and communities.',
    tech: [],
    accent: '#CDB4DB',
  },
  {
    title: 'Animal Intrusion Detection System',
    description: 'Detects animal intrusions and provides real-time alerts.',
    tech: ['Python', 'Machine Learning', 'IoT'],
    accent: '#FFC8DD',
  },
  {
    title: 'AI Dialect Translator',
    description:
      'Translates speech and text across languages and regional dialects.',
    tech: ['Python', 'Artificial Intelligence', 'NLP'],
    accent: '#BDE0FE',
  },
  {
    title: 'Smart Attendance Management System',
    description: 'Automated attendance tracking solution.',
    tech: ['Python', 'Database Systems'],
    accent: '#A8DADC',
  },
  {
    title: 'Smart Light Control System',
    description: 'Energy-efficient smart lighting automation.',
    tech: ['IoT', 'Embedded Systems'],
    accent: '#CDB4DB',
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Strong In', skills: ['Python', 'C', 'C++'] },
  {
    title: 'Currently Learning',
    skills: ['TypeScript', 'HTML', 'CSS', 'React.js', 'Node.js', 'Git', 'GitHub'],
  },
  {
    title: 'Interests',
    skills: ['AI/ML', 'IoT', 'Product Development', 'Entrepreneurship'],
  },
]

export const achievements = [
  'Secured stipend-based internship through project development and innovation.',
  'Active participant in innovation initiatives.',
  'Exploring startup ecosystems.',
  'Learning product strategy.',
  'Building real-world solutions.',
]

export const stats: Stat[] = [
  { label: 'Projects Built', value: '6+' },
  { label: 'Technologies Explored', value: '10+' },
  { label: 'Product Ideas', value: '2+' },
  { label: 'Learning', value: 'Every Day' },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'dharikha27@gmail.com',
    href: 'mailto:dharikha27@gmail.com',
    icon: Mail,
    copyValue: 'dharikha27@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Dharikha06072007',
    href: 'https://github.com/Dharikha06072007',
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dharikha-u-07343a37a',
    href: 'https://www.linkedin.com/in/dharikha-u-07343a37a',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: '#contact',
    icon: MapPin,
    copyValue: 'Tamil Nadu, India',
  },
]
