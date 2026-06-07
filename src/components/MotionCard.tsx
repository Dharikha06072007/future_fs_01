import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

interface MotionCardProps extends PropsWithChildren {
  className?: string
  delay?: number
}

export function MotionCard({ children, className = '', delay = 0 }: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      whileHover={{ y: -5 }}
      className={`rounded-[1.75rem] border border-white/75 bg-white/72 p-6 shadow-[0_18px_55px_rgba(43,45,66,0.08)] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
