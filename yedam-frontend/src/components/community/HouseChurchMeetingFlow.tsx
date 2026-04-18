import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

interface Stage {
  number: string
  title: string
  duration: string
  description: string
}

const stages: Stage[] = [
  {
    number: '01',
    title: '식사 나눔',
    duration: '약 30~40분',
    description: '목자 가정에서 함께 식사하며 한 주간의 안부를 나눕니다.',
  },
  {
    number: '02',
    title: '찬양',
    duration: '약 15분',
    description: '간단한 악기 반주와 함께 마음을 모아 찬양합니다.',
  },
  {
    number: '03',
    title: '말씀 나눔',
    duration: '약 30분',
    description: '주일 설교 말씀을 본문으로, 삶의 적용을 함께 나눕니다.',
  },
  {
    number: '04',
    title: '기도 · 교제',
    duration: '약 20분',
    description: '서로의 기도 제목을 위해 중보하고 격려합니다.',
  },
]

export default function HouseChurchMeetingFlow() {
  return (
    <section className="bg-warm-cream py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Meeting"
          title="목장 모임은 이렇게 진행됩니다"
          description="정해진 양식보다는 서로의 삶을 진솔하게 나누는 것이 목장의 핵심입니다."
          align="center"
        />

        <ol className="mt-12 relative">
          <div
            className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-brand-gold/30 -translate-x-1/2"
            aria-hidden="true"
          />
          <div className="space-y-6 md:space-y-8">
            {stages.map((stage, idx) => (
              <li
                key={stage.number}
                className={`md:flex md:items-center md:gap-8 ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white border border-warm-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-bold text-brand-gold tracking-tight">
                        {stage.number}
                      </span>
                      <h3 className="text-lg font-semibold text-brand-navy tracking-tight">
                        {stage.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-muted-text">{stage.duration}</p>
                    <p className="mt-3 text-sm text-warm-text/80 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" aria-hidden="true" />
              </li>
            ))}
          </div>
        </ol>
      </Container>
    </section>
  )
}
