import Container from '../common/Container'
import Button from '../common/Button'
import { visionPillars } from '../../constants/visionPillars'

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
        <div className="relative">
          {/* 헤딩 영역 */}
          <div className="max-w-3xl">
            <span className="inline-block w-10 h-px bg-brand-gold mb-5" aria-hidden="true" />
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-[0.18em] mb-4">
              Our Vision
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight tracking-[-0.02em] text-balance">
              영혼구원하여{' '}
              <span className="text-brand-gold">예수 닮은 제자</span>로
            </h2>
            <p className="mt-6 text-base md:text-lg text-warm-text/80 leading-relaxed max-w-2xl">
              예닮교회는 가정교회 목회자를 세우고, 다음 세대의 자녀 교육을 책임지는
              두 가지 비전을 중심으로 달라스에서 예수님을 닮아가는 공동체를 이루어갑니다.
            </p>
          </div>

          {/* 2대 비전 카드 */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {visionPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="relative bg-white border border-warm-border rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="text-2xl font-bold text-brand-gold tracking-tight">
                    {pillar.number}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-brand-navy tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-warm-text/80">
                      <span className="text-brand-gold flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-brand-gold" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/vision" variant="outline">
              비전 자세히 보기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
