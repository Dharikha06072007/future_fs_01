import { motion } from 'framer-motion'

interface Props { eyebrow?: string; title: string; subtitle?: string }

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      {eyebrow && (
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#C9A84C]">{eyebrow}</span>
      )}
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#4A4A4A]">{subtitle}</p>
      )}
      <div className="mx-auto mt-6 h-[2px] w-16 bg-[#C9A84C]/60 rounded-full" />
    </motion.div>
  )
}
