import { useScrolled } from './ui/SectionTag'
import { images, site } from '../config/site'

export default function Header() {
  const scrolled = useScrolled(32)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#inicio" className="site-logo" aria-label={`${site.brand} — início`}>
          <img
            src={scrolled ? images.logo : images.logoDark}
            alt={`Logo ${site.product} · ${site.brand}`}
            className="site-logo__img"
            width={108}
            height={36}
            decoding="async"
          />
        </a>

        <a className="btn btn--gold btn--sm site-header__cta" href={site.purchaseUrl}>
          {site.ctas.header}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="site-header__sheen" aria-hidden="true" />
    </header>
  )
}