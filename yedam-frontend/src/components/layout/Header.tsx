import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { mainNav } from '../../constants/navigation'
import { siteInfo } from '../../constants/siteInfo'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900">
          {siteInfo.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {mainNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-700' : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 text-gray-700"
          aria-label="메뉴 열기"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white">
          <ul className="px-4 py-2">
            {mainNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-sm ${isActive ? 'text-blue-700 font-medium' : 'text-gray-700'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
