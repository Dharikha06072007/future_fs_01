import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { achievements, achievementList } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ metric, label, index }: { metric: string; label: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const numericValue = parseInt(metric) || 0
  const count = useCountUp(numericValue, 1500, isVisible)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el) } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white rounded-2xl border-t-[4px] border-t-[#5B6B3A] p-8 text-center shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
    >
      <p className="font-display text-5xl font-bold text-[#7B2D3E]">
        {numericValue > 0 ? count : metric}{metric.includes('+') && '+'}
      </p>
      <p className="mt-2 font-mono text-sm font-medium uppercase tracking-[1px] text-[#4A4A4A]">{label}</p>
    </motion.div>
  )
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#C9A84C]">Achievements</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">Signals of initiative, resilience, and product curiosity.</h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#C9A84C] rounded-full" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <StatCard key={a.label} metric={a.metric} label={a.label} index={i} />
          ))}
        </div>

        <div className="mx-auto max-w-3xl mt-12 space-y-5">
          {achievementList.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3 pl-4 border-l-2 border-[#C9A84C]"
            >
              <Sparkles size={14} className="mt-1 shrink-0 text-[#C9A84C]" />
              <p className="text-lg leading-relaxed text-[#1A1A1A]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
