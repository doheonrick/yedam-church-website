import Container from '../common/Container'
import { siteInfo } from '../../constants/siteInfo'

export default function MissionStatement() {
  return (
    <section className="py-16 md:py-24">
      <Container size="md">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Our Mission
          </p>
          <blockquote className="mt-6 text-2xl md:text-4xl font-bold text-brand-navy leading-snug tracking-[-0.02em]">
            “{siteInfo.slogan}”
          </blockquote>
        </div>

        <div className="mt-12 space-y-5 text-warm-text/85 leading-[1.9] text-base md:text-lg">
          <p>
            <strong className="text-brand-navy font-bold">{siteInfo.name}</strong>는 미국
            최대의 복음주의 교단인 남침례회(SBC)에 속한 교회로, 2001년 6월 24일
            ‘영혼구원하여 예수 닮은 제자로 세우는 교회’라는 존재목적을 가지고 현 담임
            이우철 목사와 몇몇 헌신된 성도들이 중심이 되어 탄생되었습니다.
          </p>
          <p>
            2005년 10월부터는 <strong className="text-brand-navy font-bold">가정교회</strong>로
            전환하여, 사랑과 섬김이 넘치는 목장을 통하여 예수님을 모르던 분들로 하여금
            주님을 만나게 하고, 성장시켜서, 주님의 소원인 전도와 선교에 헌신하는
            제자들이 되게 하기 위해 애쓰고 있습니다.
          </p>
          <p>
            하나님을 모르는 분들, 교회에 대해 궁금한 분들에게 ‘가정교회’, 즉 ‘목장’이라는
            작은 교회를 통해 하나님의 사랑이 올바로 전해지기를 기대합니다.
          </p>
        </div>
      </Container>
    </section>
  )
}
