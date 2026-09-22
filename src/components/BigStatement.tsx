import Reveal from './ui/Reveal'
import { NailShape } from './ui/NailArt'

/**
 * GRANDE QUEBRA DE OBJEÇÃO
 * Momento emocional. Pouco conteúdo, muito impacto.
 */
export default function BigStatement() {
  return (
    <section className="big" aria-labelledby="big-title">
      <div className="big__bg" aria-hidden="true">
        <span className="big__orb" />
        <span className="big__grain" />
        <NailShape className="big__nail big__nail--a" />
        <NailShape className="big__nail big__nail--b" />
      </div>

      <div className="container big__inner">
        <Reveal as="span" delay={40} className="big__pre">
          Antes de continuar…
        </Reveal>

        <Reveal as="h2" delay={120} id="big-title" className="display big__title">
          Você não precisa ser uma <span className="big__title-accent">expert</span> para
          começar.
        </Reveal>

        <Reveal as="p" delay={240} className="big__sub">
          Precisa parar de tentar descobrir tudo sozinha.
        </Reveal>
      </div>
    </section>
  )
}