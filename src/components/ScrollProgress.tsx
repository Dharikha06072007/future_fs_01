import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-[#A8DADC] via-[#CDB4DB] to-[#FFC8DD]"
      style={{ scaleX: progress, width: '100%' }}
      aria-hidden="true"
    />
  )
}
