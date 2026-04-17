import type { ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg' | 'xl'

interface ContainerProps {
  children: ReactNode
  size?: Size
  className?: string
}

const sizeClass: Record<Size, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
}

export default function Container({ children, size = 'lg', className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClass[size]} ${className}`}>
      {children}
    </div>
  )
}
