import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Skills"
        title="A practical toolkit, growing with every build."
      />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <MotionCard key={group.title} delay={index * 0.08}>
            <h3 className="text-xl font-bold text-[#2B2D42]">{group.title}</h3>
            <div className="mt-5 grid gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between rounded-2xl bg-white/75 px-4 py-3 shadow-sm"
                >
                  <span className="font-semibold text-[#2B2D42]/80">
                    {skill}
                  </span>
                  <span className="h-2 w-20 rounded-full bg-gradient-to-r from-[#A8DADC] to-[#FFC8DD]" />
                </div>
              ))}
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}
