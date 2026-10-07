type SectionLabelProps = {
  index: string
  children: string
}

export default function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/50">
      <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
      <span className="tabular-nums">{index}</span>
      <span className="h-px w-8 bg-white/20" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
