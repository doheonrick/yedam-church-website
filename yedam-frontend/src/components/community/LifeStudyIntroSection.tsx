import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'

export default function LifeStudyIntroSection() {
  return (
    <section className="py-16 md:py-20">
      <Container size="md">
        <SectionTitle
          eyebrow="Life Study"
          title="삶으로 배우는 성경공부"
          description="지식이 아니라 삶의 변화를 목표로 하는 단계별 성경공부입니다."
          align="center"
        />

        <div className="mt-10 space-y-5 text-warm-text/85 leading-[1.9] text-base md:text-lg">
          <p>
            삶공부는 교리를 외우는 학습이 아니라, 말씀을 내 삶에 적용하며 예수님을 닮아가는
            훈련입니다. 예닮교회의 삶공부는 새신자부터 제자훈련생까지, 각자의 신앙 단계에
            맞는 커리큘럼을 3단계로 제공합니다.
          </p>
          <p>
            각 과정은 8~12주로 구성되어 있으며, 매주 본문을 함께 읽고, 질문을 나누고,
            한 주간의 삶을 돌아봅니다. 혼자 완주할 수 없는 훈련이기에, 소그룹 안에서
            서로를 지지하며 끝까지 갑니다.
          </p>
        </div>

        <div className="mt-10 bg-brand-gold-pale border border-brand-gold/30 rounded-xl px-6 py-5 flex items-center gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand-gold shrink-0"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 11h18" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-semibold text-brand-navy tracking-tight">정기 일정</p>
            <p className="mt-1 text-sm text-warm-text/80">
              매주 <strong className="text-brand-navy">화 · 목요일 오후 7:00</strong> · 본당
              및 코이노니아실
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
