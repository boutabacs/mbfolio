export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && <p className="text-muted max-w-xl mx-auto">{subtitle}</p>}
    </div>
  )
}
