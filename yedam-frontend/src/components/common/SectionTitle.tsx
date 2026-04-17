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
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
          <span
            className={`inline-block w-6 h-px bg-brand-gold align-middle ${
              align === 'center' ? 'mr-2' : 'mr-2'
            }`}
          />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-warm-text tracking-[-0.02em]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-text leading-relaxed">{description}</p>
      )}
    </div>
  )
}
