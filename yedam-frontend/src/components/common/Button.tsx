import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
    href?: undefined
  }

type LinkProps = BaseProps & {
  to: string
  href?: undefined
}

type AnchorProps = BaseProps & {
  href: string
  to?: undefined
  target?: string
  rel?: string
}

type Props = ButtonProps | LinkProps | AnchorProps

const variantClass: Record<Variant, string> = {
  primary: 'bg-blue-700 text-white hover:bg-blue-800',
  secondary: 'bg-gray-800 text-white hover:bg-gray-900',
  outline: 'border border-gray-300 text-gray-800 hover:bg-gray-50',
  ghost: 'text-gray-700 hover:bg-gray-100',
}

const sizeClass: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const base =
  'inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'

export default function Button(props: Props) {
  const { children, variant = 'primary', size = 'md', className = '' } = props
  const cls = `${base} ${variantClass[variant]} ${sizeClass[size]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={cls}>
        {children}
      </a>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps
  void _v
  void _s
  void _c
  void _ch
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
