import CTAButton from './CTAButton'
import { site } from '../../config/site'

interface OfferBlockProps {
  label?: string
  tone?: 'noir' | 'light'
  className?: string
}

/**
 * BLOCO DE OFERTA — DE R$ 197 POR R$ 47
 * Hierarquia de infoproduto premium:
 * eyebrow → preço antigo riscado → preço atual em destaque → apoio → CTA verde com glow.
 */
export default function OfferBlock({
  label = site.ctas.offer,
  tone = 'noir',
  className = '',
}: OfferBlockProps) {
  const o = site.offer

  return (
    <div className={`offer offer--${tone} ${className}`.trim()}>
      <span className="offer__eyebrow">
        <span className="offer__eyebrow-dot" aria-hidden="true" />
        {o.eyebrow}
      </span>

      <p className="offer__prices">
        <span className="offer__old">
          {o.de} {o.old}
        </span>
        <span className="offer__por">{o.por}</span>
        <span className="offer__price">{o.price}</span>
      </p>

      <p className="offer__note">{o.note}</p>

      <CTAButton label={label} variant="green" className="offer__btn" />
    </div>
  )
}