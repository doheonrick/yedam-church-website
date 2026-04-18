import { siteInfo } from '../../constants/siteInfo'

interface InfoItem {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  sub?: string
}

const ICON_CLASS = 'w-5 h-5 text-brand-navy'

export default function ContactInfo() {
  const items: InfoItem[] = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={ICON_CLASS}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: '주소',
      value: siteInfo.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(siteInfo.address)}`,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={ICON_CLASS}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: '전화',
      value: siteInfo.phone,
      sub: siteInfo.phoneSecondary,
      href: `tel:${siteInfo.phone.replace(/-/g, '')}`,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={ICON_CLASS}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: '이메일',
      value: siteInfo.email,
      href: `mailto:${siteInfo.email}`,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={ICON_CLASS}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      label: '인스타그램',
      value: `@${siteInfo.instagram}`,
      href: `https://instagram.com/${siteInfo.instagram}`,
    },
  ]

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((it) => (
        <li
          key={it.label}
          className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 bg-white"
        >
          <div className="shrink-0 w-10 h-10 rounded-full bg-brand-gold-pale flex items-center justify-center">
            {it.icon}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {it.label}
            </p>
            {it.href ? (
              <a
                href={it.href}
                target={it.href.startsWith('http') ? '_blank' : undefined}
                rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="mt-1 block text-sm text-gray-900 hover:text-brand-navy break-words"
              >
                {it.value}
              </a>
            ) : (
              <p className="mt-1 text-sm text-gray-900 break-words">{it.value}</p>
            )}
            {it.sub && <p className="mt-0.5 text-xs text-gray-500">{it.sub}</p>}
          </div>
        </li>
      ))}
    </ul>
  )
}
