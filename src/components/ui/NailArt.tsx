import { useId } from 'react'

/**
 * Elementos gráficos inspirados no universo de unhas.
 * SVGs decorativos leves, usados como detalhe editorial.
 */

interface Props {
  className?: string
}

/** Silhueta de unha/almond com gradiente — detalhe de marca. */
export function NailShape({ className = '' }: Props) {
  const uid = useId().replace(/:/g, '')
  return (
    <svg
      className={className}
      viewBox="0 0 60 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`nailGrad-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d47e" />
          <stop offset="100%" stopColor="#9c7a2b" />
        </linearGradient>
      </defs>
      <path
        d="M30 4c14 12 24 24 24 44 0 30-14 68-24 68S6 78 6 48C6 28 16 16 30 4Z"
        stroke={`url(#nailGrad-${uid})`}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M30 22c7 7 12 14 12 26 0 18-7 42-12 42s-12-24-12-42c0-12 5-19 12-26Z"
        fill={`url(#nailGrad-${uid})`}
        opacity=".14"
      />
    </svg>
  )
}

/** Curva de brilho (highlight) sobre a unha. */
export function NailGlint({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 32c0-12 6-22 24-24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  )
}

/** Ícone de "frasco de esmalte" minimalista — usado como marcador de passo. */
export function DropMark({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 3c4 5.2 6 8.4 6 11a6 6 0 1 1-12 0c0-2.6 2-5.8 6-11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}