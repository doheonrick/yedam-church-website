import Button from '../common/Button'
import Container from '../common/Container'
import { siteInfo } from '../../constants/siteInfo'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <Container>
        <div className="py-20 md:py-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            {siteInfo.nameEn}
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            {siteInfo.name}에 오신 것을
            <br className="hidden md:block" /> 환영합니다
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            {siteInfo.slogan}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button to="/worship" size="lg" variant="primary" className="bg-white text-blue-900 hover:bg-blue-50">
              예배 안내
            </Button>
            <Button to="/sermons" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              설교 듣기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
