import { useId } from 'react'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

/**
 * TRANSIÇÃO / IDENTIFICAÇÃO
 * "Você não precisa de mais um vídeo solto sobre Molde F1."
 * Narrativa visual: fragmentos soltos (ruído) convergindo
 * para um único fio dourado = etapas conectadas (método).
 */
export default function ProblemSection() {
  const uid = useId().replace(/:/g, '')

  return (
    <section className="problem section" aria-labelledby="problem-title">
      <div className="container">
        <Reveal className="problem__head">
          <SectionTag>Identificação</SectionTag>
          <h2 id="problem-title" className="display display--lg problem__title">
            Você não precisa de mais um <span className="grad-text">vídeo solto</span> sobre
            Molde F1.
          </h2>
          <p className="problem__sub">Você precisa entender como cada etapa se conecta.</p>
        </Reveal>

        <Reveal
          as="figure"
          delay={80}
          className="problem__canvas"
          aria-label="Fragmentos de informação solta se conectam em um método estruturado"
        >
          <svg
            className="problem__line"
            viewBox="0 0 1200 420"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id={`thr-${uid}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f0d47e" />
                <stop offset="55%" stopColor="#d4ad3f" />
                <stop offset="100%" stopColor="#9c7a2b" />
              </linearGradient>
            </defs>

            {/* fragmentos soltos (ruído) */}
            <g className="problem__scatter">
              <line x1="60" y1="120" x2="150" y2="142" />
              <line x1="90" y1="300" x2="176" y2="258" />
              <line x1="160" y1="82" x2="226" y2="150" />
              <line x1="224" y1="352" x2="294" y2="304" />
              <line x1="120" y1="206" x2="176" y2="234" />
              <path d="M252 118 l0 26 M238 131 l28 0" strokeLinecap="round" />
            </g>

            {/* origem do fio */}
            <circle className="problem__knot" cx="280" cy="250" r="7" />

            {/* trilho + fio principal */}
            <path
              className="problem__thread-echo"
              pathLength={1}
              d="M 280 250 C 460 238 545 220 624 210 C 705 199 740 178 780 160 C 830 137 905 128 972 113 C 1025 102 1060 100 1090 98"
            />
            <path
              className="problem__thread"
              pathLength={1}
              stroke={`url(#thr-${uid})`}
              d="M 280 250 C 460 238 545 220 624 210 C 705 199 740 178 780 160 C 830 137 905 128 972 113 C 1025 102 1060 100 1090 98"
            />

            {/* orb final */}
            <circle className="problem__orb" cx="1090" cy="98" r="20" />
            <circle className="problem__orb-core" cx="1090" cy="98" r="5" />
            <circle className="problem__pulse" cx="1090" cy="98" r="10" />
          </svg>

          <span className="problem__zone-tag problem__zone-tag--neg">Vídeos soltos</span>
          <span className="problem__zone-tag problem__zone-tag--pos">Método</span>

          {/* fragmentos espalhados */}
          <div className="problem__frags">
            <span
              className="problem__frag problem__frag--a"
              style={{ ['--rot' as string]: '-7deg', ['--d' as string]: '150ms' }}
            >
              informações fragmentadas
            </span>
            <span
              className="problem__frag problem__frag--b"
              style={{ ['--rot' as string]: '4deg', ['--d' as string]: '300ms' }}
            >
              tentativa e erro
            </span>
            <span
              className="problem__frag problem__frag--c"
              aria-hidden="true"
              style={{ ['--rot' as string]: '-3deg', ['--d' as string]: '450ms' }}
            >
              <svg viewBox="0 0 46 20" aria-hidden="true">
                <line x1="0" y1="18" x2="46" y2="18" />
                <line x1="0" y1="10" x2="30" y2="10" />
                <line x1="8" y1="2" x2="38" y2="2" />
              </svg>
            </span>
          </div>

          {/* etapas conectadas */}
          <ol className="problem__nodes">
            <li
              className="problem__node problem__node--one"
              style={{ ['--d' as string]: '500ms' }}
            >
              <span className="problem__node-dot">1</span>
              <span className="problem__node-label">processo estruturado</span>
            </li>
            <li
              className="problem__node problem__node--two"
              style={{ ['--d' as string]: '640ms' }}
            >
              <span className="problem__node-dot">2</span>
              <span className="problem__node-label">prática</span>
            </li>
            <li
              className="problem__node problem__node--three"
              style={{ ['--d' as string]: '780ms' }}
            >
              <span className="problem__node-dot">3</span>
              <span className="problem__node-label">mais clareza na execução</span>
            </li>
          </ol>

          <span className="problem__stamp problem__stamp--warn">sem processo</span>
          <span className="problem__stamp problem__stamp--good">caminho completo</span>
        </Reveal>
      </div>
    </section>
  )
}