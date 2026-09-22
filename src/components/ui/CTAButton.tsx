import { site } from '../../config/site'

interface CTAButtonProps {
  label: string
  href?: string
  variant?: 'primary' | 'gold' | 'green' | 'light' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
}

export default function CTAButton({
  label,
  href = site.purchaseUrl,
  variant = 'primary',
  size = 'lg',
  className = '',
}: CTAButtonProps) {
  return (
    <a
      className={`btn btn--${variant} ${size === 'lg' ? '' : 'btn--sm'} ${className}`.trim()}
      href={href}
    >
      <span>{label}</span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}