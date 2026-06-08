import { GraduationCap, Award } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ProfileImage from '../components/ProfileImage'
import Reveal from '../components/Reveal'
import { stats, education, certifications, workingStyle, profile } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <SectionTitle
            title="About Me"
            subtitle="Discover my background, my education, and what fuels my passion for web development."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal width="100%">
            <div>
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-center mb-8">
                <ProfileImage size="md" />
                <div className="text-center sm:text-left flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{profile.name}</h3>
                  <p className="text-lg text-primary font-medium">Junior Full Stack Developer</p>
                </div>
              </div>
              <div className="space-y-4 text-muted leading-relaxed text-sm">
                <p>
                  Hello, I am <strong className="text-foreground">{profile.name}</strong>.
                  {' '}{profile.intro}
                </p>
                {profile.story.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-surface border border-divider rounded-xl p-4 text-center"
                  >
                    <p className="text-lg font-bold text-primary">{s.value}</p>
                    <p className="text-xs text-muted mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.5}>
            <div className="space-y-6">
              <div className="bg-surface border border-divider rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 text-foreground font-semibold">
                  <GraduationCap size={18} className="text-primary" />
                  Education
                </div>
                <h4 className="font-semibold text-foreground">{education.degree}</h4>
                <p className="text-sm text-accent mt-0.5">{education.school}</p>
                <p className="text-xs text-muted mt-1">
                  {education.period} · {education.location}
                </p>
                {education.honor && (
                  <p className="text-xs text-muted mt-1 italic">{education.honor}</p>
                )}
              </div>

              <div className="bg-surface border border-divider rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 text-foreground font-semibold">
                  <Award size={18} className="text-primary" />
                  Certifications
                </div>
                <ul className="space-y-2">
                  {certifications.map((c) => (
                    <li key={c} className="text-sm text-muted flex gap-2">
                      <span className="text-accent shrink-0">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal width="100%">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              My Way of Working
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workingStyle.map((w) => (
                <div
                  key={w.title}
                  className="bg-surface border border-divider rounded-2xl p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-sm font-bold">✦</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">{w.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
