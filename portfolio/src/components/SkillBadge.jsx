import SkillIcon from './SkillIcon'

export default function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-divider text-sm text-foreground/80 bg-surface hover:border-primary hover:text-primary transition-colors cursor-default">
      <SkillIcon skill={label} size={16} className="text-primary" />
      {label}
    </span>
  )
}
