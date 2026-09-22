import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { useInView } from '../../hooks/useInView'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  style?: CSSProperties
  [key: string]: unknown
}

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  style,
  ...rest
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ ...style, ['--d' as string]: `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}