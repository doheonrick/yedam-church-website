interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {description && <p className="mt-3 text-base text-gray-600">{description}</p>}
    </div>
  )
}
