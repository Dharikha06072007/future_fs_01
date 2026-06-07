import { motion } from 'framer-motion'

interface LoadingScreenProps {
  isLoading: boolean
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#FAF7F2]"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative grid place-items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
          className="h-20 w-20 rounded-full border-4 border-[#CDB4DB]/30 border-t-[#2B2D42]"
        />
        <span className="absolute text-sm font-bold text-[#2B2D42]">DU</span>
      </div>
    </motion.div>
  )
}
