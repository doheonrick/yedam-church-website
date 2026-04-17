import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

interface OverviewItem {
  label: string
  value: string
  description: string
}

const items: OverviewItem[] = [
  {
    label: '운영 중인 목장',
    value: '다수',
    description: '연령·삶의 단계별로 다양한 목장이 운영되고 있습니다.',
  },
  {
    label: '모임 시간',
    value: '매주 금요일',
    description: '대부분의 목장이 금요일 저녁, 각 목자 가정에서 모입니다.',
  },
  {
    label: '한 목장 규모',
    value: '10~15명',
    description: '가족과 같은 크기의 소그룹으로, 서로의 이름을 기억하는 공동체입니다.',
  },
]

export default function HouseChurchOverviewSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Overview"
          title="예닮교회 목장 한눈에 보기"
          description="예닮의 목장은 주중에 성도들이 만나는 가장 가까운 공동체입니다."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl border border-warm-border p-8 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                {item.label}
              </p>
              <p className="mt-3 text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
                {item.value}
              </p>
              <p className="mt-3 text-sm text-muted-text leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-text max-w-2xl mx-auto leading-relaxed">
          구체적인 목장 배정은 거주 지역, 연령, 가족 구성 등을 고려하여 이루어집니다.
          관심 있으신 분은 교회로 문의해 주시면 적합한 목장을 안내해 드립니다.
        </p>
      </Container>
    </section>
  )
}
