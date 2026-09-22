import OfferBlock from './ui/OfferBlock'
import Reveal from './ui/Reveal'
import { images, site } from '../config/site'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Banner full-bleed preenchendo todo o espaço do hero */}
      <div className="hero__bg" aria-hidden="true">
        <picture>
          {images.heroBannerDesktop && (
            <source media="(min-width: 769px)" srcSet={images.heroBannerDesktop} />
          )}
          <img
            src={images.heroBannerMobile || images.heroBannerDesktop}
            alt=""
            className="hero__bg-img"
            width={941}
            height={1672}
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="container hero__grid">
        {/* ---------- CONTEÚDO ---------- */}
        <div className="hero__content">
          <Reveal as="div" className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Treinamento prático · Molde F1
          </Reveal>

          <Reveal as="h1" delay={70} id="hero-title" className="hero__title">
            DESTRAVE O <span className="hero__title-accent">MOLDE F1</span> E APRENDA A
            EXECUTAR ALONGAMENTOS COM <span className="hero__title-accent">MAIS SEGURANÇA</span>{' '}
            EM APENAS <span className="hero__title-accent">7 MÓDULOS</span>.
          </Reveal>

          <Reveal as="p" delay={140} className="hero__sub">
            Chega de assistir vídeos aleatórios, tentar reproduzir técnicas e continuar sem
            entender onde está errando.
          </Reveal>

          {/* Oferta — logo abaixo do subheadline */}
          <Reveal as="div" delay={200} className="hero__offer">
            <OfferBlock label={site.ctas.hero} />
          </Reveal>

          <Reveal as="p" delay={260} className="hero__lead">
            Você vai ter um método estruturado, com 7 módulos de aprendizagem prática, para
            entender cada etapa do Molde F1 e colocar a técnica em execução — do preparo da
            unha à aplicação, estrutura e acabamento.
          </Reveal>

          <Reveal as="div" delay={260} className="hero__highlight">
            <p className="hero__highlight-strong">
              Aqui você não apenas assiste: <em>você aprende fazendo.</em>
            </p>
            <p className="hero__highlight-text">
              Entenda o processo, pratique cada etapa e desenvolva a segurança necessária para
              deixar de depender da tentativa e erro.
            </p>
          </Reveal>

          {/* Faixa de resumo */}
          <Reveal as="ul" delay={320} className="hero__strip">
            <li>7 Módulos</li>
            <li aria-hidden="true" className="hero__strip-sep">
              •
            </li>
            <li>Passo a passo</li>
            <li aria-hidden="true" className="hero__strip-sep">
              •
            </li>
            <li>Prática de verdade</li>
          </Reveal>

          <Reveal as="p" delay={380} className="hero__closer">
            Um caminho mais claro para dominar o Molde F1.
          </Reveal>
        </div>
      </div>
    </section>
  )
}