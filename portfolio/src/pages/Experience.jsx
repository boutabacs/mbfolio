import SectionTitle from '../components/SectionTitle'
import ExperienceCard from '../components/ExperienceCard'
import Reveal from '../components/Reveal'
import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <Reveal width="100%">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey and academic internships in the field of software development."
          />
        </Reveal>
        <div className="relative">
          {experiences.map((exp, i) => (
            <Reveal key={i} width="100%" delay={i * 0.2}>
              <ExperienceCard {...exp} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
