import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  id: string
  label: string
}

export interface Project {
  title: string
  description: string
  features?: string[]
  tech: string[]
  accent: string
}

export interface TimelineItem {
  institution: string
  credential: string
  period: string
  focusAreas?: string[]
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Stat {
  label: string
  value: string
}

export interface IconCard {
  title: string
  icon: LucideIcon
}

export interface ContactLink {
  label: string
  value: string
  href: string
  icon: LucideIcon
  copyValue?: string
}
