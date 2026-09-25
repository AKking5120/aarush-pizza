import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5',
  secondary:
    'bg-zinc-100 text-charcoal hover:bg-white shadow-md hover:-translate-y-0.5',
  outline:
    'border-2 border-zinc-400/40 text-zinc-100 hover:border-accent hover:text-accent bg-transparent',
  ghost: 'text-zinc-200 hover:text-accent hover:bg-white/5',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm min-h-10',
  md: 'px-6 py-3 text-base min-h-12',
  lg: 'px-8 py-4 text-lg min-h-14',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  disabled?: boolean
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0'

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink
    return (
      <a
        href={href}
        className={classes}
        {...rest}
        aria-disabled={disabled ? true : undefined}
      />
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      {...buttonProps}
    />
  )
}
