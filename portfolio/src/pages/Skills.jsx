import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SkillIcon from "../components/SkillIcon";
import Reveal from "../components/Reveal";
import { skillCategories } from "../data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[1].label,
  ); // Default to Frontend

  const activeSkills =
    skillCategories.find((cat) => cat.label === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 px-6 bg-surface/60">
      <div className="max-w-5xl mx-auto">
        <Reveal width="100%">
          <SectionTitle
            title="Skills"
            subtitle="Technologies and tools I use to bring my projects to life."
          />
        </Reveal>

        {/* Tabs */}
        <Reveal width="100%">
          <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-surface rounded-lg w-fit mx-auto">
            {skillCategories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-4 sm:px-8 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.label
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {activeSkills.map((skill, index) => (
            <Reveal key={skill} width="100%" delay={index * 0.1}>
              <div className="group relative flex flex-col items-center justify-center p-4 sm:p-8 bg-card border border-transparent rounded-xl transition-all duration-300 hover:bg-primary hover:shadow-xl cursor-default">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  <SkillIcon
                    skill={skill}
                    size={48}
                    className="text-primary transition-colors duration-300 group-hover:text-primary-foreground"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                  {skill}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
