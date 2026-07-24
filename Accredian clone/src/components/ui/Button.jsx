const VARIANTS = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  white: 'bg-white text-brand-600 hover:bg-brand-50',
  ghost: 'text-ink-600 hover:text-brand-600',
}

export default function Button({
  as: Comp = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-base font-normal shadow-md transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}
