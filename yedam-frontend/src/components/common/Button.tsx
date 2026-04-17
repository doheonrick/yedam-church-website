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
  primary: 'bg-brand-navy text-white hover:bg-brand-navy-dark',
  secondary: 'bg-brand-gold text-brand-navy hover:bg-brand-gold-light',
  outline: 'border border-brand-navy/30 text-brand-navy hover:bg-warm-stone hover:border-brand-navy',
  ghost: 'text-brand-navy hover:bg-warm-stone',
}

const sizeClass: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const base =
  'inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2'

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
