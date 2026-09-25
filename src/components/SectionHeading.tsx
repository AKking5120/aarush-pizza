type SectionHeadingProps = {
  id?: string
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionHeading({
  id,
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {id && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            light ? 'text-accent' : 'text-accent'
          }`}
        >
          {id}
        </p>
      )}
      <h2
        className={`text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-zinc-400' : 'text-zinc-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
