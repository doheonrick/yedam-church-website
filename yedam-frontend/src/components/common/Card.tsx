import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface CardProps {
  children: ReactNode
  to?: string
  className?: string
  hoverable?: boolean
}

export default function Card({ children, to, className = '', hoverable = false }: CardProps) {
  const base = `rounded-lg border border-gray-200 bg-white overflow-hidden ${
    hoverable ? 'transition-shadow hover:shadow-md' : ''
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
  return <div className={`p-5 ${className}`}>{children}</div>
}

Card.Image = function CardImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-full h-48 object-cover" />
}
