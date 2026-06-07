import { Rocket } from 'lucide-react'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'

export function Vision() {
  return (
    <section id="vision" className="section-shell">
      <SectionHeader eyebrow="My Vision" title="Building for lasting impact." />
      <MotionCard className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#A8DADC]/60 text-[#2B2D42]">
          <Rocket size={25} />
        </div>
        <p className="text-xl leading-9 text-[#2B2D42]/75">
          My vision is to build impactful technology products that solve
          meaningful problems, create opportunities, and empower people.
        </p>
        <p className="mt-5 text-xl leading-9 text-[#2B2D42]/75">
          I aspire to combine technology, design, and business thinking to
          develop solutions that improve lives and create lasting impact.
        </p>
      </MotionCard>
    </section>
  )
}
