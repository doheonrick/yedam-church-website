import { Link } from 'react-router-dom'
import Container from '../common/Container'
import { siteInfo } from '../../constants/siteInfo'

export default function VisitSection() {
  return (
    <section className="bg-brand-navy text-white py-16 md:py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Visit Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">처음 방문하시나요?</h2>
          <p className="mt-4 text-white/70">
            예닮교회는 처음 오시는 분들을 따뜻하게 환영합니다.
            <br className="hidden md:block" />
            언제든 부담 없이 찾아오세요.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 text-left bg-white/8 rounded-lg p-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-brand-gold">주소</dt>
              <dd className="mt-1 text-sm text-white/90">{siteInfo.address}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-brand-gold">전화</dt>
              <dd className="mt-1 text-sm text-white/90">{siteInfo.phone}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-semibold rounded-full px-7 py-3 transition-colors"
            >
              오시는 길
            </Link>
            <Link
              to="/worship"
              className="border border-white/40 text-white hover:bg-white/10 rounded-full px-7 py-3 transition-colors"
            >
              예배 시간 보기
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
