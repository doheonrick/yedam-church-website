import Container from '../common/Container'
import Button from '../common/Button'
import { siteInfo } from '../../constants/siteInfo'

export default function VisitSection() {
  return (
    <section className="bg-blue-900 text-white py-16 md:py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Visit Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">처음 방문하시나요?</h2>
          <p className="mt-4 text-blue-100">
            예닮교회는 처음 오시는 분들을 따뜻하게 환영합니다.
            <br className="hidden md:block" />
            언제든 부담 없이 찾아오세요.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 text-left bg-blue-800/40 rounded-lg p-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-blue-200">주소</dt>
              <dd className="mt-1 text-sm">{siteInfo.address}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-blue-200">전화</dt>
              <dd className="mt-1 text-sm">{siteInfo.phone}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button
              to="/contact"
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              오시는 길
            </Button>
            <Button
              to="/worship"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              예배 시간 보기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
