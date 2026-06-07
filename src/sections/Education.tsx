import { Badge } from '../components/Badge'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { education } from '../data/portfolio'

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeader
        eyebrow="Education"
        title="A timeline shaped by learning and initiative."
      />
      <div className="mx-auto max-w-4xl">
        {education.map((item, index) => (
          <div key={item.institution} className="relative pl-8">
            <span className="absolute left-0 top-2 h-full w-px bg-[#CDB4DB]/55" />
            <span className="absolute left-[-7px] top-2 h-4 w-4 rounded-full bg-[#2B2D42] ring-8 ring-[#FAF7F2]" />
            <MotionCard className="mb-6" delay={index * 0.08}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7D6B91]">
                {item.period}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#2B2D42]">
                {item.institution}
              </h3>
              <p className="mt-2 text-lg font-semibold text-[#2B2D42]/70">
                {item.credential}
              </p>
              {item.focusAreas ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.focusAreas.map((area) => (
                    <Badge key={area}>{area}</Badge>
                  ))}
                </div>
              ) : null}
            </MotionCard>
          </div>
        ))}
      </div>
    </section>
  )
}
