import { Link } from 'react-router-dom'
import Container from '../common/Container'

interface QuickLink {
  label: string
  description: string
  to: string
  icon: React.ReactNode
}

const links: QuickLink[] = [
  {
    label: '처음 오시나요?',
    description: '예닮교회를 처음 방문하시는 분들을 위한 안내',
    to: '/about',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2 7-7 7 7 2 2v8a2 2 0 01-2 2h-4v-6h-6v6H5a2 2 0 01-2-2v-8z" />
      </svg>
    ),
  },
  {
    label: '예배 안내',
    description: '주일 · 수요 · 새벽 예배 시간과 장소',
    to: '/worship',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    label: '목회칼럼',
    description: '담임 목사님의 칼럼을 만나보세요',
    to: '/columns',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5V4a1 1 0 011-1h14a1 1 0 011 1v15.5a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
  },
  {
    label: '오시는 길',
    description: '위치 · 연락처 · 문의',
    to: '/contact',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
]

export default function QuickLinksSection() {
  return (
    <section className="bg-warm-cream py-16 md:py-20">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative bg-white border border-warm-border rounded-xl p-6 hover:border-brand-gold hover:shadow-md transition-all"
            >
              <div className="text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <h3 className="text-base font-semibold text-warm-text">
                {link.label}
              </h3>
              <p className="mt-1 text-sm text-muted-text leading-relaxed">
                {link.description}
              </p>
              <span
                className="absolute top-6 right-6 text-brand-gold/40 group-hover:text-brand-gold group-hover:translate-x-1 transition-all"
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
