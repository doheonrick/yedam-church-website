import Container from './Container'

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  const style = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  return (
    <section
      className={`${backgroundImage ? 'text-white' : 'bg-gray-50 text-gray-900'} py-16 md:py-24`}
      style={style}
    >
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className={`mt-3 text-base md:text-lg ${backgroundImage ? 'text-gray-200' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  )
}
