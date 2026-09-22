import Reveal from './ui/Reveal'
import OfferBlock from './ui/OfferBlock'
import { NailShape } from './ui/NailArt'
import { site } from '../config/site'

/**
 * FECHAMENTO + CTA FINAL
 * Seção emocional de encerramento com progressão COMECE → PRATIQUE → EVOLUA
 * e o CTA de conversão final.
 */
export default function FinalCTA() {
  return (
    <section className="final" id="oferta" aria-labelledby="final-title">
      <div className="final__bg" aria-hidden="true">
        <span className="final__glow" />
        <NailShape className="final__nail final__nail--a" />
        <NailShape className="final__nail final__nail--b" />
      </div>

      <div className="container final__inner">
        <Reveal as="div" className="final__choice">
          <p className="final__choice-ghost">
            “O Molde F1 pode continuar sendo aquela técnica que você olha e pensa{' '}
            <em>‘um dia eu aprendo’</em>…”
          </p>
          <p className="final__choice-real">
            …ou pode ser a técnica que você <strong>começa a dominar agora.</strong>
          </p>
        </Reveal>

        <Reveal as="div" delay={120} className="final__steps-container">
          <ul className="final__steps" aria-label="Progressão: comece, pratique, evolua">
            <li className="final__step">
              <span className="final__step-num" aria-hidden="true">
                01
              </span>
              <span className="final__step-word">Comece</span>
              <span className="final__step-ln" aria-hidden="true" />
            </li>
            <li className="final__step">
              <span className="final__step-num" aria-hidden="true">
                02
              </span>
              <span className="final__step-word">Pratique</span>
              <span className="final__step-ln" aria-hidden="true" />
            </li>
            <li className="final__step">
              <span className="final__step-num" aria-hidden="true">
                03
              </span>
              <span className="final__step-word final__step-word--accent">Evolua</span>
            </li>
          </ul>
          <p className="final__steps-note">
            Comece pelo método. Pratique. Evolua. E transforme conhecimento em resultado no seu
            atendimento.
          </p>
        </Reveal>

        <Reveal as="div" delay={200} className="final__cta-block">
          <h2 id="final-title" className="display final__cta-title">
            Pronta para parar de tentar descobrir o Molde F1 sozinha?
          </h2>
          <OfferBlock label={site.ctas.final} tone="light" className="final__offer" />
          <p className="final__cta-text">
            Clique agora e tenha acesso aos 7 módulos práticos para aprender a técnica,
            desenvolver mais segurança na execução e adicionar uma nova possibilidade de serviço
            ao seu negócio.
          </p>
        </Reveal>
      </div>
    </section>
  )
}