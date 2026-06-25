import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { skillGroups } from '../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(74,93,35,0.03),transparent_50%)] pointer-events-none" />
      <SectionHeader
        eyebrow="Skills"
        title="A practical toolkit, growing with every build."
        subtitle="Every technology I've learned came from building something real. Here's what I work with."
      />
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, gIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: gIndex * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-sage/60 bg-cream/60 p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-wider text-warmgray-light mb-5">
              {group.title}
            </h3>
            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2 text-sm font-medium text-charcoal">
                      {skill.icon && <span className="text-base">{skill.icon}</span>}
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-warmgray-light">{skill.level}%</span>
                  </div>
                  <div className="h-[3px] rounded-full bg-sage/70">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: gIndex * 0.08 + 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full rounded-full bg-gradient-to-r from-gold to-olive"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
