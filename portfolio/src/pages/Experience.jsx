import SectionTitle from '../components/SectionTitle'
import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and academic internships in the field of software development."
        />
        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
