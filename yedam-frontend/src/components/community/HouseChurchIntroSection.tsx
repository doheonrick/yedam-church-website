import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

export default function HouseChurchIntroSection() {
  return (
    <section className="py-16 md:py-20">
      <Container size="md">
        <SectionTitle
          eyebrow="House Church"
          title="가정교회란 무엇인가"
          description="교회 안의 작은 교회, 예닮의 목장 공동체입니다."
          align="center"
        />

        <div className="mt-10 space-y-5 text-warm-text/85 leading-[1.9] text-base md:text-lg">
          <p>
            가정교회는 초대교회의 모습을 회복하려는 목회 철학입니다. 10~15명 규모의
            소그룹이 한 주에 한 번 가정에 모여 식탁을 나누고, 말씀을 나누며, 서로를 위해
            기도합니다. 예닮교회는 2005년 10월부터 이 가정교회 체계로 전환하여, 사랑과
            섬김이 넘치는 목장을 통해 복음을 흘려보내고 있습니다.
          </p>
          <p>
            가정교회의 핵심은 “교회 안의 교회”입니다. 주일 예배가 전부가 아니라, 주중에
            작은 공동체 안에서 삶을 나누는 것이 교회의 본질적인 모습이라고 믿습니다.
            그래서 목장은 단순한 친교 모임이 아니라, 비그리스도인(VIP)이 편안하게 초대될
            수 있는 선교의 현장이기도 합니다.
          </p>
          <p>
            목자(리더) 부부가 섬기는 각 목장은, 식사와 대화 속에서 자연스럽게 복음이
            전해지는 자리가 됩니다. 아픈 성도의 눈물이 받아들여지고, 믿음이 작은 사람의
            질문이 존중받는 공간입니다.
          </p>
        </div>

        <blockquote className="mt-12 relative border-l-4 border-brand-gold bg-warm-cream px-6 py-6 rounded-r-lg">
          <p className="text-lg md:text-xl text-warm-text leading-relaxed font-medium">
            “날마다 마음을 같이하여 성전에 모이기를 힘쓰고 집에서 떡을 떼며 기쁨과 순전한
            마음으로 음식을 먹고 하나님을 찬미하며 또 온 백성에게 칭송을 받으니 주께서
            구원 받는 사람을 날마다 더하게 하시니라.”
          </p>
          <footer className="mt-3 text-sm text-muted-text">— 사도행전 2:46-47</footer>
        </blockquote>
      </Container>
    </section>
  )
}
