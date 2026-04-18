import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

interface Feature {
  emoji: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    emoji: '🏠',
    title: '소그룹 공동체',
    description:
      '10~15명이 한 가정에 모여 식탁을 나누며, 서로의 이름을 기억하고 안부를 묻는 작은 교회입니다.',
  },
  {
    emoji: '🤝',
    title: '목자 리더십',
    description:
      '목자 부부가 헌신하여 목장을 섬깁니다. 평신도 리더를 세우고 동역하는 것이 가정교회의 핵심입니다.',
  },
  {
    emoji: '💌',
    title: '비그리스도인 환영',
    description:
      '교회가 낯선 분도 부담 없이 찾아올 수 있는 편안한 자리입니다. VIP를 초대하여 자연스럽게 복음을 나눕니다.',
  },
  {
    emoji: '💬',
    title: '진솔한 삶 나눔',
    description:
      '일주일의 삶을 있는 그대로 나눕니다. 기도제목을 주고받으며 주님 안에서 한 가족이 되어갑니다.',
  },
]

export default function HouseChurchFeaturesSection() {
  return (
    <section className="bg-warm-cream py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Features"
          title="목장의 네 가지 모습"
          description="예닮교회가 지향하는 가정교회의 특징입니다."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-xl border border-warm-border p-6 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl" aria-hidden="true">
                {f.emoji}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-navy tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-text leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
