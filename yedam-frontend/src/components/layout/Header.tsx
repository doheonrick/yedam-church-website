import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { mainNav, type NavItem } from '../../constants/navigation'
import { siteInfo } from '../../constants/siteInfo'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  // 라우트 변경 시 메뉴 모두 닫기
  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    if (!openMenu) return
    const onDown = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [openMenu])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">{siteInfo.shortName}</span>
          <span className="hidden sm:inline text-xs text-gray-400">{siteInfo.nickname}</span>
        </Link>

        <nav ref={navRef} className="hidden xl:flex items-center gap-1">
          {mainNav.map((item) => (
            <DesktopNavItem
              key={item.path}
              item={item}
              open={openMenu === item.path}
              onToggle={() => setOpenMenu(openMenu === item.path ? null : item.path)}
              onClose={() => setOpenMenu(null)}
            />
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="xl:hidden p-2 text-gray-700"
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="xl:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="px-2 py-2">
            {mainNav.map((item) => (
              <MobileNavItem key={item.path} item={item} />
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

interface DesktopNavItemProps {
  item: NavItem
  open: boolean
  onToggle: () => void
  onClose: () => void
}

function DesktopNavItem({ item, open, onToggle, onClose }: DesktopNavItemProps) {
  const linkClass =
    'px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors rounded'
  const activeClass = 'text-blue-700'

  if (!item.children || item.children.length === 0) {
    return (
      <NavLink
        to={item.path}
        end={item.path === '/'}
        className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`${linkClass} inline-flex items-center gap-1`}
      >
        {item.label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M2 4l4 4 4-4z" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-1 min-w-[180px] bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
          {item.children.map((child) => (
            <NavLink
              key={child.path}
              to={child.path}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

interface MobileNavItemProps {
  item: NavItem
}

function MobileNavItem({ item }: MobileNavItemProps) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <li>
        <NavLink
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            `block px-3 py-3 text-sm rounded ${
              isActive ? 'text-blue-700 font-medium bg-blue-50' : 'text-gray-700'
            }`
          }
        >
          {item.label}
        </NavLink>
      </li>
    )
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between px-3 py-3 text-sm text-gray-700"
      >
        <span>{item.label}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="currentColor"
          className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="M3 5l4 4 4-4z" />
        </svg>
      </button>
      {expanded && (
        <ul className="pl-4 pb-2">
          {item.children!.map((child) => (
            <li key={child.path}>
              <NavLink
                to={child.path}
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm rounded ${
                    isActive ? 'text-blue-700 font-medium' : 'text-gray-600'
                  }`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
