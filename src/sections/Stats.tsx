import { motion } from 'framer-motion'
import { stats } from '../data/portfolio'

export function Stats() {
  return (
    <section className="px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-white/80 bg-white/55 p-4 shadow-[0_20px_70px_rgba(43,45,66,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="rounded-[1.5rem] bg-[#FAF7F2]/75 p-6 text-center"
          >
            <p className="text-3xl font-black text-[#2B2D42]">{stat.value}</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#2B2D42]/55">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
