import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <SectionTitle
            title="Projects"
            subtitle="A selection of my recent works, combining modern technologies and concrete problem solving."
          />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, index) => (
            <Reveal key={p.title} width="100%" delay={index * 0.2}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
