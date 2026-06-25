import { motion } from 'framer-motion'
import { Code2, Briefcase, Globe, ChevronDown } from 'lucide-react'

const socialLinks = [
  { icon: Code2, href: 'https://github.com/DharikhaU', label: 'GitHub' },
  { icon: Briefcase, href: 'https://www.linkedin.com/in/dharikha-u-07343a37a', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Twitter' },
]

const fadeUp = (delay: number, duration = 0.6) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
      <div className="mx-auto max-w-[800px] px-6 pt-[120px] pb-[80px] md:pt-[120px] md:pb-[80px] text-center">
        <motion.span {...fadeUp(0, 0.5)} className="inline-flex items-center rounded-full bg-[#E8EDE3] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#5B6B3A]">
          B.Tech Computer Science
        </motion.span>

        <div className="mt-6 space-y-4">
          <motion.h1 {...fadeUp(0.2)} className="font-display text-5xl font-bold leading-[1.1] text-[#1A1A1A] sm:text-6xl md:text-7xl lg:text-8xl">
            Dharikha <span className="text-[#5B6B3A]">U</span>
          </motion.h1>
          <motion.h2 {...fadeUp(0.4)} className="font-display text-3xl font-light italic leading-tight text-[#5B6B3A] sm:text-4xl">
            Product Builder
          </motion.h2>
        </div>

        <motion.p {...fadeUp(0.6)} className="mx-auto mt-8 max-w-[560px] text-xl leading-relaxed text-[#4A4A4A]">
          Turning ideas into products and problems into opportunities.
        </motion.p>

        <motion.p {...fadeUp(0.8)} className="mt-4 text-base text-[#4A4A4A]">
          Based in Tamil Nadu, India &mdash; B.Tech at Karunya Institute of Technology and Sciences.
        </motion.p>

        <motion.div {...fadeUp(1.0)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full bg-[#7B2D3E] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#5C1F2E] hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore My Work
          </button>
          <a
            href="/resume/Dharikha_U_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#5B6B3A] bg-transparent px-8 py-3.5 text-sm font-medium text-[#5B6B3A] transition-all duration-300 hover:bg-[#5B6B3A] hover:text-white hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div {...fadeUp(1.2)} className="mt-8 flex items-center justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#5B6B3A]/40 text-[#4A4A4A] transition-all duration-300 hover:bg-[#7B2D3E] hover:text-white hover:border-[#7B2D3E]"
                aria-label={link.label}
              >
                <Icon size={17} />
              </a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <div className="h-[1px] w-20 bg-[#C9A84C]" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-[#4A4A4A]">SCROLL</span>
          <ChevronDown size={14} className="text-[#4A4A4A] animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
