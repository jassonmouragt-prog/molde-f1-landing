import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'
import CTAButton from './ui/CTAButton'
import { images, site } from '../config/site'

/**
 * PROVA SOCIAL
 * Os prints reais das alunas são o destaque da seção — galeria grande,
 * com o texto de apoio e o CTA como fechamento centralizado.
 */
export default function SocialProof() {
  return (
    <section className="proof section" id="depoimentos" aria-labelledby="proof-title">
      <div className="container">
        <Reveal className="proof__head">
          <SectionTag>Quem já está dentro</SectionTag>
          <h2 id="proof-title" className="display display--lg proof__title">
            Quando o processo começa a fazer sentido, a execução muda.
          </h2>
        </Reveal>

        {/* galeria com os prints reais dos depoimentos — destaque */}
        <div className="proof__gallery">
          {images.socialProofs.map((proof, i) => (
            <Reveal
              as="figure"
              key={proof.src}
              delay={i * 110}
              className={`proof__media ${i === 1 ? 'proof__media--mid' : ''}`}
            >
              <div className="proof__frame">
                <img
                  src={proof.src}
                  alt={proof.alt}
                  className="proof__photo"
                  loading="lazy"
                  width={640}
                  height={820}
                  decoding="async"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* fechamento da seção */}
        <Reveal as="div" delay={200} className="proof__side">
          <p className="proof__side-highlight">
            O processo começa a fazer sentido quando a técnica deixa de ser apenas teoria.
          </p>
          <p className="proof__side-text">
            É isso que o método se propõe: organizar cada etapa para que a prática aconteça
            com mais clareza — do preparo da unha à escolha do molde, estrutura e acabamento.
          </p>
          <CTAButton label={site.ctas.hero} />
        </Reveal>
      </div>
    </section>
  )
}