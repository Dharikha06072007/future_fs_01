import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Code2, ExternalLink, Sparkles } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF8F5]">
        <div className="text-center">
          <p className="font-display text-2xl text-[#1A1A1A]">Project not found</p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-4 text-[#7B2D3E] underline hover:text-[#8B3A4B] transition-colors"
          >
            Go back home
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-8">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#E8EDE3] flex items-center justify-center shadow-sm">
            <span className="text-4xl">{project.icon}</span>
          </div>
          <span className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A84C]">
            {project.category}
          </span>
          <h1 className="mt-3 font-display text-5xl font-bold text-[#1A1A1A] sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4A4A]">
            {project.description}
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl border border-[#E8EDE3] bg-white p-8 shadow-xl"
        >
          <div className="grid gap-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1A1A1A] flex items-start gap-3">
                <span className="mt-1.5 block h-5 w-1 shrink-0 rounded-full bg-[#C9A84C]" />
                The Problem
              </h2>
              <p className="mt-4 leading-7 text-[#4A4A4A]">{project.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1A1A1A] flex items-start gap-3">
                <span className="mt-1.5 block h-5 w-1 shrink-0 rounded-full bg-[#C9A84C]" />
                The Solution
              </h2>
              <p className="mt-4 leading-7 text-[#4A4A4A]">{project.solution}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1A1A1A] flex items-start gap-3">
                <span className="mt-1.5 block h-5 w-1 shrink-0 rounded-full bg-[#C9A84C]" />
                Tech Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full bg-[#4A5D23]/10 border border-[#4A5D23]/20 px-5 py-2 text-sm font-medium text-[#4A5D23]"
                  >
                    <Sparkles size={12} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {project.images && project.images.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-[#1A1A1A] flex items-start gap-3">
                  <span className="mt-1.5 block h-5 w-1 shrink-0 rounded-full bg-[#C9A84C]" />
                  Gallery
                </h2>
                <div className="mt-4 columns-2 sm:columns-3 gap-3">
                  {project.images.map((img) => (
                    <div key={img} className="break-inside-avoid mb-3 rounded-xl overflow-hidden bg-[#E8EDE3] shadow-sm hover:shadow-md transition-shadow">
                      <img src={img} alt="" className="w-full h-auto" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {project.learned && (
              <div>
                <h2 className="font-display text-2xl font-bold text-[#1A1A1A] flex items-start gap-3">
                  <span className="mt-1.5 block h-5 w-1 shrink-0 rounded-full bg-[#C9A84C]" />
                  What I Learned
                </h2>
                <p className="mt-4 leading-7 text-[#4A4A4A] italic">{project.learned}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-[#E8EDE3]">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7B2D3E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8B3A4B] transition-all duration-300"
                >
                  <Code2 size={16} /> View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#4A5D23]/30 px-6 py-3 text-sm font-semibold text-[#4A5D23] hover:bg-[#4A5D23] hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={16} /> View Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
