import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

const BEFORE = ['informação espalhada', 'insegurança', 'tentativa', 'retrabalho', 'correção na lixa', 'dúvidas na escolha do molde']

const PROCESS = ['entender', 'observar', 'praticar', 'repetir', 'aperfeiçoar']

const AFTER = ['mais clareza', 'mais segurança', 'execução mais consciente', 'nova possibilidade de serviço']

/**
 * PROCESSO / TRANSFORMAÇÃO
 * Antes → Processo → Depois, sem promessas de transformação milagrosa.
 */
export default function Transformation() {
  return (
    <section className="transform section" aria-labelledby="transform-title">
      <div className="container">
        <Reveal className="transform__head">
          <SectionTag dark>O caminho</SectionTag>
          <h2 id="transform-title" className="display display--md transform__title">
            Do improviso ao <span className="grad-text">processo.</span>
          </h2>
        </Reveal>

        <div className="transform__lanes">
          {/* ANTES */}
          <Reveal as="div" delay={40} className="lane lane--before">
            <span className="lane__cap">Antes</span>
            <ul className="lane__list">
              {BEFORE.map((item) => (
                <li key={item} className="lane__item">
                  <span className="lane__mark lane__mark--minus" aria-hidden="true">
                    −
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* PROCESSO */}
          <Reveal as="div" delay={140} className="lane lane--process">
            <span className="lane__cap">Processo</span>
            <ol className="lane__list">
              {PROCESS.map((item, i) => (
                <li key={item} className="lane__item lane__item--step">
                  <span className="lane__mark lane__mark--num" aria-hidden="true">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <span className="lane__flow" aria-hidden="true">
              ↓
            </span>
          </Reveal>

          {/* DEPOIS */}
          <Reveal as="div" delay={240} className="lane lane--after">
            <span className="lane__cap">Depois</span>
            <ul className="lane__list">
              {AFTER.map((item) => (
                <li key={item} className="lane__item">
                  <span className="lane__mark lane__mark--plus" aria-hidden="true">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}