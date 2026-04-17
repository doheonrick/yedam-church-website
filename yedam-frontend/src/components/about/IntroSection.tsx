import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { siteInfo } from '../../constants/siteInfo'

export default function IntroSection() {
  return (
    <section className="py-16 md:py-20">
      <Container size="md">
        <SectionTitle
          eyebrow="About"
          title={`${siteInfo.name}에 오신 것을 환영합니다`}
          description={siteInfo.slogan}
          align="center"
        />
        <div className="mt-10 prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            예닮교회는 예수 그리스도를 닮아가는 제자들의 공동체입니다. 저희 교회는
            2010년 개척 이래로 말씀과 기도, 예배와 선교를 중심으로 한 영혼의
            공동체로 성장해왔습니다.
          </p>
          <p className="mt-4">
            세상에 지치고 상처받은 영혼들이 주님 안에서 참된 안식과 치유를 경험하고,
            예수님을 닮아가는 변화된 삶을 살아가도록 돕는 교회가 되기를 소망합니다.
          </p>
          <p className="mt-4">
            누구든지 부담 없이 찾아오실 수 있습니다. 예닮 가족이 따뜻하게 맞이하겠습니다.
          </p>
        </div>
      </Container>
    </section>
  )
}
