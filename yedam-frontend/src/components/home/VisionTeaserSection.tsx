import Container from '../common/Container'
import Button from '../common/Button'

export default function VisionTeaserSection() {
  return (
    <section className="relative bg-warm-stone py-20 md:py-28 overflow-hidden">
      {/* 장식 라인 패턴 */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="vision-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0" stroke="#1B3A6B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vision-lines)" />
        </svg>
      </div>

      <Container>
        <div className="relative grid md:grid-cols-12 gap-10 items-center">
          {/* 좌측 대형 구절 */}
          <div className="md:col-span-7">
            <span className="inline-block w-10 h-px bg-brand-gold mb-5" aria-hidden="true" />
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-[0.18em] mb-4">
              Our Vision
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight text-balance">
              말씀을 심고,<br />
              <span className="text-brand-gold">공동체</span>를 세웁니다
            </h2>
            <p className="mt-6 text-lg text-warm-text/80 leading-relaxed max-w-xl">
              예닮교회는 달라스에서 하나님의 말씀 위에 뿌리내린 따뜻한 신앙 공동체를
              이루어갑니다. 세대를 잇는 기도와 섬김으로 이웃과 열방을 향해 나아갑니다.
            </p>
            <div className="mt-8">
              <Button to="/vision" variant="outline">
                비전 자세히 보기
              </Button>
            </div>
          </div>

          {/* 우측 장식 카드 스택 */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-gold/10 rounded-2xl rotate-2" aria-hidden="true" />
              <div className="relative bg-white border border-warm-border rounded-2xl p-8 shadow-sm">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-brand-gold mb-5"
                  aria-hidden="true"
                >
                  <path d="M10 3h4v6h6v4h-6v8h-4v-8H4V9h6V3z" />
                </svg>
                <p className="font-display italic text-xl text-warm-text leading-relaxed">
                  "하나님은 사랑이시라. 사랑 안에 거하는 자는 하나님 안에 거하고 하나님도
                  그 안에 거하시느니라."
                </p>
                <p className="mt-4 text-sm text-muted-text">— 요한일서 4:16</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
