import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'
import OfferBlock from './ui/OfferBlock'
import { OBJECTIONS } from '../data/objections'
import { site } from '../config/site'

/**
 * GRANDE SEÇÃO DE OBJEÇÕES
 * Estilo conversacional: cada objeção é uma "fala/pensamento" e a resposta vem logo abaixo.
 * Não é um FAQ tradicional — o layout alterna os blocos como em um diálogo.
 */
export default function Objections() {
  return (
    <section className="objections section" id="objetos" aria-labelledby="objections-title">
      <div className="container">
        <Reveal className="objections__head">
          <SectionTag>Antes de decidir</SectionTag>
          <h2 id="objections-title" className="display display--lg objections__title">
            Antes de comprar, provavelmente <span className="grad-text">você está pensando…</span>
          </h2>
          <p className="objections__sub">
            E talvez alguma dessas frases já tenha passado pela sua cabeça.
          </p>
        </Reveal>

        {/* Diálogo: fala x resposta em duas colunas alternadas no desktop */}
        <div className="objections__list">
          {OBJECTIONS.map((item, i) => (
            <ObjectionRow key={item.id} index={i} objection={item.objection} answer={item.answer} />
          ))}
        </div>

        <Reveal as="div" delay={120} className="objections__foot">
          <OfferBlock label={site.ctas.offer} />
        </Reveal>
      </div>
    </section>
  )
}

function ObjectionRow({
  index,
  objection,
  answer,
}: {
  index: number
  objection: string
  answer: string
}) {
  return (
    <Reveal
      as="article"
      delay={(index % 4) * 80}
      className="objection"
      aria-label={`Objeção ${index + 1}`}
    >
      <div className="objection__index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="objection__body">
        <p className="objection__speech">{objection}</p>
        <p className="objection__answer">{answer}</p>
      </div>
    </Reveal>
  )
}