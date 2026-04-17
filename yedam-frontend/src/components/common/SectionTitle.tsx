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
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      {description && <p className="mt-3 text-base text-gray-600">{description}</p>}
    </div>
  )
}
