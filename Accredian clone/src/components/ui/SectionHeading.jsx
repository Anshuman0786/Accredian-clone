export default function SectionHeading({ title, subtitle, center = true, className = 'mb-12' }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      <h2 className="text-2xl font-bold text-ink-900 md:text-4xl leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-sm sm:text-lg text-ink-600">{subtitle}</p>}
    </div>
  )
}
