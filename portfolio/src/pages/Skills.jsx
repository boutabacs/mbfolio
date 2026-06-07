import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SkillIcon from "../components/SkillIcon";
import { skillCategories } from "../data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[1].label,
  ); // Default to Frontend

  const activeSkills =
    skillCategories.find((cat) => cat.label === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I use to bring my projects to life."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-gray-200/30 rounded-lg w-fit mx-auto">
          {skillCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`px-8 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.label
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activeSkills.map((skill) => (
            <div
              key={skill}
              className="group relative flex flex-col items-center justify-center p-8 bg-white border border-transparent rounded-xl transition-all duration-300 hover:bg-primary hover:shadow-xl cursor-default"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <SkillIcon
                  skill={skill}
                  size={48}
                  className="text-primary transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:text-white"
                />
              </div>
              <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
