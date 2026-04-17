import Container from './Container'

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  const style = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(15,35,71,0.7), rgba(15,35,71,0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  return (
    <section
      className={`relative overflow-hidden ${
        backgroundImage ? 'text-white' : 'bg-brand-navy text-white'
      } py-20 md:py-28`}
      style={style}
    >
      {/* 도트 패턴 오버레이 */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="banner-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#banner-dots)" />
        </svg>
      </div>

      <Container>
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-base md:text-lg text-white/70">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  )
}
