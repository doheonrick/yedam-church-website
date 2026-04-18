import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: '교회 방문',
    description:
      '주일 예배에 편안한 마음으로 오세요. 처음 방문하신 분은 새가족실에서 안내를 받으실 수 있습니다.',
  },
  {
    number: '02',
    title: '목장 모임 참석',
    description:
      '관심 있는 목장에 초대를 받아 식탁 교제와 말씀 나눔에 함께하세요. 부담 없이 여러 번 참여하셔도 좋습니다.',
  },
  {
    number: '03',
    title: '삶공부',
    description:
      '새생활 → 새가족 → 제자훈련으로 이어지는 단계별 성경공부를 통해 신앙의 기초를 다집니다.',
  },
  {
    number: '04',
    title: '세례 · 헌신',
    description:
      '예수님을 구주로 영접하고 세례를 받으신 후에는 목자로, 선교사로 함께 동역하는 여정이 이어집니다.',
  },
]

export default function HouseChurchFlowSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Journey"
          title="목장에 참여하는 과정"
          description="처음 오신 분도 자연스럽게 공동체의 일원이 되실 수 있습니다."
          align="center"
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <li
              key={step.number}
              className="relative bg-white rounded-xl border border-warm-border p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-brand-gold tracking-tight">
                  {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <svg
                    className="hidden lg:block text-brand-gold/40"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-text leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button to="/contact" variant="primary" size="lg">
            목장 방문 문의하기
          </Button>
          <p className="mt-4 text-sm text-muted-text">
            관심 있으신 분은 교회로 연락 주시면 가까운 목장을 안내해 드립니다.
          </p>
        </div>
      </Container>
    </section>
  )
}
