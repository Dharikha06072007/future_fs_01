import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[3px] origin-left bg-gradient-to-r from-[#C9A84C] via-[#7B2D3E] to-[#4A5D23]"
      style={{ scaleX, width: '100%' }}
    />
  )
}
