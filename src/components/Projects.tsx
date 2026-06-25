import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

const nums = ['01', '02', '03', '04', '05', '06', '07']

export default function ProjectsSection() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLDivElement>(null!)
  const lineRef = useRef<SVGLineElement>(null!)
  const [activeNode, setActiveNode] = useState(-1)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useGSAP(() => {
    if (!lineRef.current) return
    const length = lineRef.current.getTotalLength()
    gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length })
    gsap.to(lineRef.current, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'bottom 30%',
        scrub: 1.5,
      },
    })
  }, { scope: sectionRef })

  useEffect(() => {
    const rows = sectionRef.current?.querySelectorAll('[data-project-row]')
    if (!rows) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.getAttribute('data-index') || '-1')
            setActiveNode(idx)
          }
        })
      },
      { rootMargin: '-10% 0px -50% 0px', threshold: 0.1 }
    )
    rows.forEach((r) => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-5 sm:px-8 bg-[#FAF8F5] overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#C9A84C]">Projects</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">
            A journey of building, learning, and creating impact.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4A4A4A] max-w-2xl mx-auto">
            Each project reflects a product-builder lens: the technology matters, but the problem and user value lead.
          </p>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#C9A84C] rounded-full" />
        </motion.div>

        {/* Desktop: dotted line roadmap */}
        <div className="relative hidden md:block">
          <svg className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 overflow-visible pointer-events-none" aria-hidden="true">
            <line
              ref={lineRef}
              x1="1" y1="0" x2="1" y2="100%"
              stroke="#C9A84C"
              strokeWidth="2"
              strokeDasharray="4 8"
              strokeLinecap="round"
            />
          </svg>

          <div className="space-y-8">
            {projects.map((project, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={project.slug}
                  data-project-row
                  data-index={i}
                  className="relative flex items-start py-6"
                >
                  {/* Left side */}
                  <div className="w-1/2 flex items-start justify-end">
                    {isLeft && (
                      <div className="relative mr-[56px] w-full max-w-[420px]">
                        <div className="absolute right-[-48px] top-[28px] w-[48px] border-t-2 border-dotted border-[#C9A84C]/60 z-0" />
                        <ProjectCard project={project} index={i} onClick={() => navigate(`/projects/${project.slug}`)} isActive={activeNode === i} />
                      </div>
                    )}
                  </div>

                  {/* Node */}
                  <div className="absolute left-1/2 top-[28px] -translate-x-1/2 z-10">
                    <div
                      className={`w-7 h-7 rounded-full bg-[#5B6B3A] border-[2px] border-[#C9A84C] flex items-center justify-center shadow-md transition-all duration-500 ${
                        activeNode === i ? 'scale-130 shadow-[0_0_20px_rgba(201,168,76,0.4)]' : ''
                      }`}
                    >
                      <span className="text-white text-[10px] font-bold font-mono">{nums[i]}</span>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="w-1/2 flex items-start">
                    {!isLeft && (
                      <div className="relative ml-[56px] w-full max-w-[420px]">
                        <div className="absolute left-[-48px] top-[28px] w-[48px] border-t-2 border-dotted border-[#C9A84C]/60 z-0" />
                        <ProjectCard project={project} index={i} onClick={() => navigate(`/projects/${project.slug}`)} isActive={activeNode === i} />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA - centered below */}
          <div className="relative flex justify-center pt-8 pb-4">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10">
              <div className="w-9 h-9 rounded-full bg-[#5B6B3A] border-[2px] border-dashed border-[#C9A84C]/70 flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold font-mono">?</span>
              </div>
            </div>
            <CtaCard />
          </div>
        </div>

        {/* Mobile: single column timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-[2px] border-l-2 border-dotted border-[#C9A84C]" aria-hidden="true" />

          <div className="space-y-8 pl-14">
            {projects.map((project, i) => (
              <div key={project.slug} data-project-row data-index={i} className="relative">
                <div className="absolute left-[-34px] top-3 w-6 h-6 rounded-full bg-[#5B6B3A] border-2 border-[#C9A84C] flex items-center justify-center shadow-md">
                  <span className="text-white text-[9px] font-bold font-mono">{nums[i]}</span>
                </div>
                <MobileProjectCard project={project} onClick={() => navigate(`/projects/${project.slug}`)} />
              </div>
            ))}
            <div className="relative pt-2">
              <div className="absolute left-[-34px] top-3 w-6 h-6 rounded-full bg-[#5B6B3A] border-2 border-dashed border-[#C9A84C]/70 flex items-center justify-center shadow-md">
                <span className="text-white text-[9px] font-bold font-mono">?</span>
              </div>
              <CTASmall />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, onClick, isActive }: {
  project: typeof projects[0]; index: number; onClick: () => void; isActive: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className={`group bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-7 ${
        isActive ? 'ring-2 ring-[#C9A84C]/20' : ''
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-[#E8EDE3] flex items-center justify-center shadow-sm">
          <span className="text-2xl">{project.icon}</span>
        </div>
        <span className="mt-4 font-mono text-[10px] font-medium uppercase tracking-widest text-[#C9A84C]">{project.category}</span>
        <h3 className="mt-2 font-display text-xl font-bold text-[#1A1A1A] group-hover:text-[#5B6B3A] transition-colors duration-300">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A] line-clamp-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-[#E8EDE3] px-3 py-1 text-[11px] font-medium text-[#1A1A1A]">{t}</span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#7B2D3E] group-hover:gap-2.5 transition-all duration-300">
          View Details <ArrowRight size={13} />
        </span>
      </div>
    </motion.div>
  )
}

function MobileProjectCard({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className="group bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-[#E8EDE3] flex items-center justify-center shadow-sm">
          <span className="text-xl">{project.icon}</span>
        </div>
        <span className="mt-3 font-mono text-[10px] font-medium uppercase tracking-widest text-[#C9A84C]">{project.category}</span>
        <h3 className="mt-2 font-display text-lg font-bold text-[#1A1A1A]">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A] line-clamp-2">{project.description}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#7B2D3E] transition-all duration-300">
          View Details <ArrowRight size={13} />
        </span>
      </div>
    </motion.div>
  )
}

function CtaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-[#5B6B3A] rounded-[20px] p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.12)] max-w-[480px] w-full mt-6"
    >
      <h3 className="font-display text-xl font-bold text-white">Have an idea? Let's build it together.</h3>
      <p className="mt-1.5 text-sm text-white/80">Your project could be next on this roadmap.</p>
      <button
        type="button"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#5B6B3A] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      >
        Get in Touch <ArrowRight size={15} />
      </button>
    </motion.div>
  )
}

function CTASmall() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#5B6B3A] rounded-[20px] p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
    >
      <h3 className="font-display text-lg font-bold text-white">Have an idea? Let's build it together.</h3>
      <button
        type="button"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#5B6B3A] transition-all duration-300"
      >
        Get in Touch <ArrowRight size={14} />
      </button>
    </motion.div>
  )
}
