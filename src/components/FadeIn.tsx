import { useEffect, useState, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type FadeInProps = {
  delay: number
  duration?: number
  className?: string
  children: ReactNode
}

export default function FadeIn({ delay, duration = 1000, className = '', children }: FadeInProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reducedMotion) return
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay, reducedMotion])

  const shown = reducedMotion || visible

  return (
    <div
      className={`transition-opacity ${shown ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ transitionDuration: reducedMotion ? '0ms' : `${duration}ms` }}
    >
      {children}
    </div>
  )
}
