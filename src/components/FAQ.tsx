import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'
import { FAQ_ITEMS } from '../data/faq'

/**
 * FAQ — as perguntas vêm do array em src/data/faq.ts.
 * Informações comerciais (prazo, garantia, preço etc.) são adicionadas
 * lá pela cliente quando forem definidas — nada é inventado aqui.
 */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <Reveal className="faq__head">
          <SectionTag>Dúvidas frequentes</SectionTag>
          <h2 id="faq-title" className="display display--md faq__title">
            Ficou com alguma dúvida?
          </h2>
        </Reveal>

        <div className="faq__list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal as="div" key={item.q} delay={i * 60} className="faq__item">
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`faq__a ${isOpen ? 'is-open' : ''}`}
                  role="region"
                >
                  <p>{item.a}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}