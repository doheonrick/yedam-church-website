import Container from '../common/Container'
import { siteInfo } from '../../constants/siteInfo'

export default function MissionStatement() {
  return (
    <section className="py-16 md:py-24">
      <Container size="md">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Mission
          </p>
          <blockquote className="mt-6 text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            “{siteInfo.slogan}”
          </blockquote>
          <p className="mt-8 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {siteInfo.name}는 잃어버린 영혼을 하나님께로 인도하고, 그들을 예수
            그리스도를 닮은 온전한 제자로 세우는 것을 교회의 존재 목적으로 삼습니다.
            2005년부터 이어진 가정교회(목장) 체계를 통해 사랑과 섬김의 공동체를
            세워가고 있습니다.
          </p>
        </div>
      </Container>
    </section>
  )
}
