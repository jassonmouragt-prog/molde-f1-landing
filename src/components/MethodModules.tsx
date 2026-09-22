import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'
import CTAButton from './ui/CTAButton'
import { MODULES } from '../data/modules'
import { site } from '../config/site'
import { useInView } from '../hooks/useInView'

/**
 * O QUE A ALUNA VAI ENCONTRAR
 * Percurso de 7 módulos, do fundamento à execução.
 * Layout em timeline alternada (não grid de 7 cards iguais).
 */
export default function MethodModules() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.18 })

  return (
    <section className="modules section" id="metodo" aria-labelledby="modules-title">
      <div className="container">
        <Reveal className="modules__head">
          <SectionTag dark>Método em 7 módulos</SectionTag>
          <h2 id="modules-title" className="display display--lg modules__title">
            O que a aluna vai <span className="grad-text">encontrar</span>
          </h2>
          <p className="modules__sub">
            Um percurso que vai do fundamento à execução — cada módulo conectado ao próximo,
            sem pulos e sem informações jogadas.
          </p>
        </Reveal>

        <div
          className={`journey ${inView ? 'is-filled' : ''}`}
          ref={ref}
          role="list"
          aria-label="Os 7 módulos do treinamento"
        >
          {/* trilha central */}
          <div className="journey__track" aria-hidden="true">
            <span className="journey__track-fill" />
          </div>

          {MODULES.map((m, i) => (
            <Reveal
              as="article"
              key={m.number}
              delay={i * 90}
              className={`journey__item ${i % 2 === 0 ? 'journey__item--left' : 'journey__item--right'}`}
              role="listitem"
            >
              <div className="journey__node" aria-hidden="true">
                <span className="journey__node-num">{String(m.number).padStart(2, '0')}</span>
              </div>

              <div className="journey__card">
                <span className="journey__card-tag">Módulo {String(m.number).padStart(2, '0')}</span>
                <h3 className="journey__card-title">{m.title}</h3>
                <p className="journey__card-text">{m.description}</p>
                <span className="journey__card-stage">{m.stage}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={120} className="modules__foot">
          <CTAButton label={site.ctas.hero} variant="light" />
          <p className="modules__foot-hint">Cada módulo prepara o próximo. Do fundamento à execução.</p>
        </Reveal>
      </div>
    </section>
  )
}