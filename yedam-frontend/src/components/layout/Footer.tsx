import { siteInfo } from '../../constants/siteInfo'
import { worshipSchedule } from '../../constants/worshipSchedule'

const SECTION_HEADER = 'text-brand-gold text-xs uppercase tracking-widest font-semibold mb-4'

export default function Footer() {
  // 새벽 + 목장은 푸터에선 너무 길어 주일/수요만 노출
  const summaryServices = worshipSchedule.filter(
    (s) => s.time.includes('주일') || s.time.includes('수요'),
  )

  return (
    <footer className="bg-brand-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          {/* 컬럼1: 브랜딩 (2칸) */}
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={`${siteInfo.shortName} 로고`}
                className="w-12 h-12 object-contain bg-white/5 rounded-md p-1"
              />
              <div>
                <h3 className="text-white text-xl font-bold">{siteInfo.name}</h3>
                <p className="text-brand-gold text-sm mt-0.5">
                  {siteInfo.nameEn} · {siteInfo.nickname}
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-md">
              {siteInfo.slogan}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={`https://instagram.com/${siteInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 text-white/60 hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* 컬럼2: Contact */}
          <div>
            <p className={SECTION_HEADER}>Contact</p>
            <ul className="text-white/60 text-sm space-y-2">
              <li>{siteInfo.address}</li>
              <li>
                <a href={`tel:${siteInfo.phone.replace(/-/g, '')}`} className="hover:text-white">
                  {siteInfo.phone}
                </a>
              </li>
              <li className="text-white/40 text-xs">문의 {siteInfo.phoneSecondary}</li>
              <li>
                <a href={`mailto:${siteInfo.email}`} className="hover:text-white">
                  {siteInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* 컬럼3: 예배 시간 */}
          <div>
            <p className={SECTION_HEADER}>예배 시간</p>
            <ul className="text-white/60 text-sm space-y-2">
              {summaryServices.map((s) => (
                <li key={s.name} className="flex justify-between gap-3">
                  <span className="truncate">{s.name}</span>
                  <span className="shrink-0 text-white/80">{s.time.replace(/^주일 /, '').replace(/^매주 /, '')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex items-center justify-between flex-wrap gap-4">
          <p className="text-white/40 text-xs">{siteInfo.copyright}</p>
          <a href="#" className="text-white/40 text-xs hover:text-white/60">
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  )
}
