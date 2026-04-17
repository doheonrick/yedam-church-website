import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface CardProps {
  children: ReactNode
  to?: string
  className?: string
  hoverable?: boolean
}

export default function Card({ children, to, className = '', hoverable = false }: CardProps) {
  const base = `rounded-xl border border-gray-100 bg-white overflow-hidden ${
    hoverable ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''
  } ${className}`

  if (to) {
    return (
      <Link to={to} className={`block ${base}`}>
        {children}
      </Link>
    )
  }
  return <div className={base}>{children}</div>
}

interface CardSectionProps {
  children: ReactNode
  className?: string
}

Card.Body = function CardBody({ children, className = '' }: CardSectionProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

Card.Image = function CardImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-full h-52 object-cover" />
}
