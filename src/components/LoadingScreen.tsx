import { motion } from 'framer-motion'

interface LoadingScreenProps { isLoading: boolean }

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#FAF8F5]"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative grid place-items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="h-20 w-20 rounded-full border-2 border-[#C9A84C]/20 border-t-[#4A5D23]"
        />
        <span className="absolute text-sm font-bold text-[#7B2D3E]">DU</span>
      </div>
    </motion.div>
  )
}
