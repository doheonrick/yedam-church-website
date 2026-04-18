import Container from '../common/Container'
import Button from '../common/Button'
import { siteInfo } from '../../constants/siteInfo'

export default function WorshipContactSection() {
  return (
    <section className="bg-warm-cream py-16 md:py-20">
      <Container size="md">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-navy">
            Visit Us
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
            예배에 처음 방문하시나요?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            누구든지 부담 없이 찾아오실 수 있습니다.
            <br className="hidden md:block" />
            예닮 가족이 따뜻하게 맞이하겠습니다.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 text-left bg-white rounded-lg border border-gray-200 p-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-gray-400">주소</dt>
              <dd className="mt-1 text-sm text-gray-800">{siteInfo.address}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-gray-400">전화 / 문의</dt>
              <dd className="mt-1 text-sm text-gray-800">
                {siteInfo.phone}
                <br />
                {siteInfo.phoneSecondary}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button to="/contact" size="lg">
              오시는 길 보기
            </Button>
            <Button to="/community" size="lg" variant="outline">
              가정교회 알아보기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
