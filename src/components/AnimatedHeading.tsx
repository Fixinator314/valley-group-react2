import { useEffect, useState, type CSSProperties } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type AnimatedHeadingProps = {
  text: string
  className?: string
  style?: CSSProperties
  initialDelay?: number
  charDelay?: number
  duration?: number
}

export default function AnimatedHeading({
  text,
  className = '',
  style,
  initialDelay = 200,
  charDelay = 30,
  duration = 500,
}: AnimatedHeadingProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (reducedMotion) return
    const timeout = setTimeout(() => setAnimate(true), initialDelay)
    return () => clearTimeout(timeout)
  }, [initialDelay, reducedMotion])

  const shown = reducedMotion || animate
  const lines = text.split('\n')
  // Characters on earlier lines, so the stagger runs continuously across line breaks.
  const lineOffsets = lines.map((_, i) =>
    lines.slice(0, i).reduce((total, line) => total + Array.from(line).length, 0),
  )

  return (
    <h1 className={className} style={style} aria-label={text.replace('\n', ' ')}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {Array.from(line).map((char, charIndex) => (
            <span
              key={charIndex}
              aria-hidden="true"
              className="inline-block"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? 'translateX(0)' : 'translateX(-18px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: reducedMotion ? '0ms' : `${duration}ms`,
                transitionDelay: reducedMotion
                  ? '0ms'
                  : `${(lineOffsets[lineIndex] + charIndex) * charDelay}ms`,
              }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}
