import { ArrowUpRight } from 'lucide-react'
import { Badge } from '../components/Badge'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Product ideas, technical systems, and real-world experiments."
        description="Each project reflects a product-builder lens: the technology matters, but the problem and user value lead."
      />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <MotionCard
            key={project.title}
            delay={index * 0.05}
            className="flex min-h-[280px] flex-col"
          >
            <div
              className="mb-6 h-2 w-20 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold text-[#2B2D42]">
                {project.title}
              </h3>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#BDE0FE]/45 text-[#2B2D42]">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <p className="mt-4 leading-7 text-[#2B2D42]/70">
              {project.description}
            </p>
            {project.tech.length > 0 ? (
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            ) : null}
          </MotionCard>
        ))}
      </div>
    </section>
  )
}
