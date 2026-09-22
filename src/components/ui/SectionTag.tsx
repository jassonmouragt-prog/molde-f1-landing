import { useEffect, useState } from 'react'

interface SectionTagProps {
  children: string
  dark?: boolean
}

/** Pequeno tag de seção com linha superior (eyebrow). */
export default function SectionTag({ children, dark = false }: SectionTagProps) {
  return <span className={dark ? 'eyebrow eyebrow--dark' : 'eyebrow'}>{children}</span>
}

/**
 * Marca de scroll do header: anima um "véu" translúcido conforme o scroll.
 */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}