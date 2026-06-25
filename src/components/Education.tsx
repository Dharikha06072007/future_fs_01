import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import { education } from '../data/portfolio'

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#C9A84C]">Education</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">A foundation built on curiosity.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A4A4A] max-w-2xl mx-auto">From school to university — each step shaped my perspective and deepened my passion for technology.</p>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#C9A84C] rounded-full" />
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-[#5B6B3A]" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative pl-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 150, damping: 12, delay: index * 0.15 }}
                  className="absolute left-[1.15rem] top-2 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-[#5B6B3A] ring-4 ring-white"
                >
                  <span className="h-2 w-2 rounded-full bg-white border-2 border-[#C9A84C]" />
                </motion.div>

                <div className="bg-white rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#E8EDE3]/50">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#E8EDE3] text-[#5B6B3A]">
                      <GraduationCap size={22} />
                    </div>
                    <div className="flex-1">
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A84C]">{item.period}</span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-[#1A1A1A]">{item.institution}</h3>
                      <p className="mt-1 text-base font-medium text-[#5B6B3A]">{item.credential}</p>
                      <p className="mt-3 text-base leading-relaxed text-[#4A4A4A]">{item.description}</p>
                      {item.highlights && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.highlights.map((h) => (
                            <span key={h} className="inline-flex items-center gap-1.5 rounded-full border border-[#5B6B3A]/20 bg-[#E8EDE3]/50 px-4 py-1.5 text-xs font-medium text-[#1A1A1A]">
                              <Sparkles size={10} className="text-[#C9A84C]" />
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
