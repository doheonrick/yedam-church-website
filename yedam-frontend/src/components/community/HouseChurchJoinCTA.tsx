import Container from '../common/Container'
import Button from '../common/Button'

export default function HouseChurchJoinCTA() {
  return (
    <section className="relative bg-brand-navy text-white py-16 md:py-24 overflow-hidden">
      {/* 도트 패턴 */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="join-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#join-dots)" />
        </svg>
      </div>

      <Container>
        <div className="relative text-center max-w-2xl mx-auto">
          <span className="inline-block w-10 h-px bg-brand-gold mb-5" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-balance">
            목장에 방문하고 싶으신가요?
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed">
            예닮의 문은 언제나 열려 있습니다. 교회로 문의해 주시면, 거주 지역과 가족
            구성을 고려해 가까운 목장을 소개해 드립니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="secondary" size="lg">
              문의하기
            </Button>
            <Button to="/worship" variant="outline" size="lg" className="text-white border-white/40 hover:bg-white/10">
              예배 시간 보기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
