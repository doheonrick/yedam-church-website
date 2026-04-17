import Container from './Container'

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  const style = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(15,35,71,0.75), rgba(15,35,71,0.75)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  const firstLetter = title.charAt(0)

  return (
    <section
      className={`relative overflow-hidden ${
        backgroundImage ? 'text-white' : 'bg-brand-navy text-white'
      } py-20 md:py-28`}
      style={style}
    >
      {/* 도트 패턴 오버레이 */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="banner-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#banner-dots)" />
        </svg>
      </div>

      {/* 장식용 거대 첫 글자 */}
      <div
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-4 -top-6 md:right-8 md:top-4 text-[12rem] md:text-[18rem] leading-none font-bold text-brand-gold/10 select-none"
      >
        {firstLetter}
      </div>

      <Container>
        <div className="relative">
          <span className="inline-block w-10 h-px bg-brand-gold mb-5 align-middle" />
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
