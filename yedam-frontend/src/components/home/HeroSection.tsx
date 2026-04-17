import { Link } from 'react-router-dom'
import { siteInfo } from '../../constants/siteInfo'

export default function HeroSection() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden min-h-[80vh] flex items-center">
      {/* SVG 도트 패턴 오버레이 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" className="opacity-[0.08]">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      {/* 좌상단/우하단 골드 글로우 */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-navy-light/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full px-4 max-w-4xl mx-auto py-20 text-center">
        <span className="inline-flex items-center gap-2 border border-brand-gold/50 text-brand-gold text-sm px-4 py-1.5 rounded-full mb-6">
          {siteInfo.nameEn}
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
          달라스{' '}
          <span className="text-brand-gold">예닮</span>
          교회
        </h1>

        <p className="mt-5 text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
          {siteInfo.slogan}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            to="/worship"
            className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-semibold px-8 py-3 rounded-full transition-colors"
          >
            예배 안내
          </Link>
          <Link
            to="/sermons"
            className="border border-white/40 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-colors"
          >
            설교 듣기
          </Link>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-8 text-white/50 animate-bounce"
        aria-hidden="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
