import type { ReactNode } from 'react'

export interface NavItem {
  id: string
  label: string
}

export interface Project {
  slug: string
  title: string
  description: string
  category: string
  tech: string[]
  icon: string
  images?: string[]
  github?: string
  demo?: string
  problem?: string
  solution?: string
  learned?: string
}

export interface Education {
  institution: string
  credential: string
  period: string
  description: string
  highlights?: string[]
}

export interface Skill {
  name: string
  level: number
  icon?: string
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}

export interface Achievement {
  metric: string
  label: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  icon: string
  date: string
  content?: string
}

export interface SocialLink {
  label: string
  href: string
  icon: ReactNode
}
