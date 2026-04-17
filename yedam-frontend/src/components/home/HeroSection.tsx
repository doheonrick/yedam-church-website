import { Link } from 'react-router-dom'
import { siteInfo } from '../../constants/siteInfo'

export default function HeroSection() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      {/* SVG 도트 패턴 오버레이 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" className="opacity-[0.07]">
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
        className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-brand-navy-mid/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* 장식용 세로 패널 (왼쪽) */}
      <div
        className="hidden lg:block absolute top-0 left-0 h-full w-24 border-r border-brand-gold/15 pointer-events-none"
        aria-hidden="true"
      >
        <div className="h-full flex flex-col items-center justify-center gap-6 text-brand-gold/50">
          <span className="font-display text-xs tracking-[0.4em] [writing-mode:vertical-rl]">
            SINCE · DALLAS
          </span>
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-6 lg:px-24 min-h-[85vh] flex flex-col justify-center py-24">
        {/* 상단 장식선 + 영문 */}
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-12 h-px bg-brand-gold" aria-hidden="true" />
          <span className="text-brand-gold text-sm md:text-base font-semibold tracking-[0.2em]">
            {siteInfo.nameEn}
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-[-0.02em] text-balance">
          달라스{' '}
          <span className="text-brand-gold">예닮</span>
          교회
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
          {siteInfo.slogan}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/worship"
            className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-brand-gold/20"
          >
            예배 안내
          </Link>
          <Link
            to="/about"
            className="border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full transition-colors"
          >
            교회 소개
          </Link>
        </div>

        {/* 하단 예배 시간 스트립 */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
          <div>
            <p className="text-xl md:text-2xl text-brand-gold font-semibold tracking-tight">
              주일 9:00 · 11:00
            </p>
            <p className="mt-1 text-sm text-white/60">주일 예배 · 본당</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl text-brand-gold font-semibold tracking-tight">
              수요 7:30 PM
            </p>
            <p className="mt-1 text-sm text-white/60">수요예배 · 본당</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl text-brand-gold font-semibold tracking-tight">
              화~금 6:00 AM
            </p>
            <p className="mt-1 text-sm text-white/60">새벽기도회 · Zoom</p>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-6 text-white/40 animate-bounce"
        aria-hidden="true"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
