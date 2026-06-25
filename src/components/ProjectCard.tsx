import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTiltEffect } from '../hooks/useTiltEffect'
import type { Project } from '../types/portfolio'

interface Props { project: Project; index: number }

export default function ProjectCard({ project, index }: Props) {
  const navigate = useNavigate()
  const { ref, handleMouseMove, handleMouseLeave } = useTiltEffect(2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/projects/${project.slug}`)}
      className="group cursor-pointer rounded-2xl border border-[#E8EDE3] bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease, box-shadow 0.3s ease' }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#E8EDE3] to-[#F5E6E0]">
        <div className="h-full w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
          <span className="font-display text-6xl text-[#4A5D23]/20">{project.title[0]}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-[#C9A84C]">
            {project.category}
          </span>
          <ArrowUpRight size={16} className="text-[#4A4A4A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="font-display text-xl font-bold text-[#1A1A1A] group-hover:text-[#4A5D23] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#4A4A4A] line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#4A5D23]/20 bg-transparent px-3 py-1 text-[10px] font-medium text-[#4A5D23] group-hover:bg-[#4A5D23] group-hover:text-white transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
