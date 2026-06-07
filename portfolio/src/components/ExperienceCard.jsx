export default function ExperienceCard({ company, role, period, bullets }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      <div className="absolute left-0 top-1.5 bottom-0 w-px bg-divider last:hidden" />
      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-canvas" />
      <div className="bg-surface border border-divider rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">{company}</h3>
            <p className="text-sm text-primary font-medium">{role}</p>
          </div>
          <span className="text-xs text-muted bg-canvas border border-divider px-3 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
            {period}
          </span>
        </div>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm text-muted flex gap-2">
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
