import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function VisionSection() {
  return (
    <section className="py-24 px-5 sm:px-8 relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E6E0]/30 to-white pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative mx-auto max-w-4xl text-center py-8"
      >
        <div className="flex justify-center mb-8">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#C9A84C]/20 to-[#7B2D3E]/10">
            <Sparkles size={28} className="text-[#C9A84C]" />
          </div>
        </div>
        <h2 className="font-display text-5xl font-bold text-[#1A1A1A] sm:text-6xl">
          Building for lasting impact.
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#4A4A4A]">
          My vision is to build impactful technology products that solve meaningful problems,
          create opportunities, and empower people. I aspire to combine technology, design, and
          business thinking to develop solutions that improve lives and create lasting impact.
        </p>
        <div className="mx-auto mt-8 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />
      </motion.div>
    </section>
  )
}
