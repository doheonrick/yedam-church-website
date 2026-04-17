import { Link } from 'react-router-dom'
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
          description={siteInfo.welcome}
          align="center"
        />
        <div className="mt-10 text-gray-700 leading-relaxed text-lg space-y-4">
          <p className="text-center text-xl font-medium text-gray-900">
            “{siteInfo.slogan}”
          </p>
          <p>
            {siteInfo.name}({siteInfo.nameEn}, {siteInfo.nickname})는 텍사스
            루이스빌(Lewisville, TX)에 위치한 한인 교회입니다. 2005년부터 가정교회(목장)
            체계로 운영하며, 사랑과 섬김을 통해 영혼 구원과 제자 양성에 집중하고
            있습니다.
          </p>
          <p>
            미국 최대 복음주의 교단인{' '}
            <strong className="text-brand-navy">남침례회(SBC)</strong> 소속으로, 한인 회중
            예배와 함께{' '}
            <strong className="text-brand-navy">영어회중 예배(ANF, A New Fellowship)</strong>를
            운영하여 세대와 언어를 아우르는 공동체를 세워가고 있습니다.
          </p>
          <p>
            예배 시간, 목장 참여, 새가족 등록 등 궁금하신 점이 있으시다면 언제든{' '}
            <Link to="/contact" className="text-brand-navy underline underline-offset-2 hover:text-brand-navy-dark">
              연락처 페이지
            </Link>
            를 통해 문의해 주세요. 처음 오시는 분들을 따뜻하게 맞이하겠습니다.
          </p>
        </div>
      </Container>
    </section>
  )
}
