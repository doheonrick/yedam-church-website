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
            교회 소개에 관한 자세한 내용은 추후 업데이트될 예정입니다.
          </p>
        </div>
      </Container>
    </section>
  )
}
