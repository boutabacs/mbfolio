import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ title, desc, tags, image, github, demo }) {
  return (
    <div className="bg-card border border-divider rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary transition-all duration-300 group">
      {image && (
        <div className="aspect-video overflow-hidden border-b border-divider relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                title="Code source"
              >
                <Github size={20} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                title="Démo en direct"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-3">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface text-muted font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
