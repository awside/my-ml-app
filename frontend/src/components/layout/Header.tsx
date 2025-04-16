// src/components/Header.tsx
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          ML Hub
        </Link>

        <nav className="space-x-4 text-sm sm:text-base font-medium">
          {['Home', 'EDA', 'ML', 'Resume', 'Contact'].map((label) => {
            const to = label === 'Home' ? '/' : `/${label.toLowerCase()}`
            return (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }
              >
                {label}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
