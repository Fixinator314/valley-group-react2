import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

/** Fades content up into place the first time it scrolls into view. */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const reducedMotion = usePrefersReducedMotion()
  const shown = reducedMotion || inView

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-1000 ease-out-expo ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: reducedMotion ? '0ms' : `${delay}ms` }}
    >
      {children}
    </div>
  )
}
