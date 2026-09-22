import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'
import OfferBlock from './ui/OfferBlock'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { disclaimer, site } from '../config/site'

const TIERS = [
  { id: 1, label: '1 atendimento extra', prefix: 'R$', value: 100, height: 0.3 },
  { id: 2, label: '2 atendimentos', prefix: '+ R$', value: 200, height: 0.52 },
  { id: 3, label: '5 atendimentos', prefix: '+ R$', value: 500, height: 0.76 },
  { id: 4, label: '10 atendimentos', prefix: '+ R$', value: 1000, height: 1 },
]

function Tier({
  label,
  prefix,
  value,
  height,
  peak,
  delay,
  start,
}: {
  label: string
  prefix: string
  value: number
  height: number
  peak?: boolean
  delay: number
  start: boolean
}) {
  const amount = useCountUp(value, start, 1300)
  const pct = height * 100

  return (
    <div
      className={`revenue__tier ${peak ? 'revenue__tier--peak' : ''}`}
      style={{ ['--fill' as string]: `${pct}%`, ['--d' as string]: `${delay}ms` }}
    >
      <div className="revenue__tier-top">
        <span className="revenue__tier-value">
          <span className="revenue__tier-prefix">{prefix}</span>
          <span className="revenue__tier-amount">
            {start ? amount.toLocaleString('pt-BR') : '0'}
          </span>
        </span>
        <span className="revenue__tier-count">{label}</span>
      </div>
      <div className="revenue__tier-bar-track" aria-hidden="true">
        <div
          className={`revenue__tier-bar ${start ? 'is-in' : ''}`}
          style={{
            ['--fill' as string]: `${pct}%`,
            ['--d' as string]: `${delay + 120}ms`,
          }}
        />
      </div>
    </div>
  )
}

/**
 * IMPACTO E OPORTUNIDADE FINANCEIRA
 * Progressão visual crescente (barras ascendentes + números grandes),
 * em vez de quatro cards genéricos iguais.
 */
export default function RevenueOpportunity() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 })

  return (
    <section className="revenue section" aria-labelledby="revenue-title">
      <div className="revenue__glow" aria-hidden="true" />

      <div className="container">
        <Reveal className="revenue__head">
          <SectionTag>Oportunidade financeira</SectionTag>
          <h2 id="revenue-title" className="display display--lg revenue__title">
            Você pode estar deixando <span className="grad-text">dinheiro na mesa</span> por
            ainda não dominar o <span className="hl-ink">Molde F1</span>.
          </h2>
          <p className="revenue__sub">
            Imagine dominar a técnica e ter a possibilidade de transformar seus próximos
            atendimentos em oportunidade de faturamento.
          </p>
        </Reveal>

        {/* Progressão crescente */}
        <div className="revenue__tiers" ref={ref}>
          {TIERS.map((tier, i) => (
            <Tier
              key={tier.id}
              label={tier.label}
              prefix={tier.prefix}
              value={tier.value}
              height={tier.height}
              peak={i === TIERS.length - 1}
              delay={i * 130}
              start={inView}
            />
          ))}
          <div className="revenue__baseline" aria-hidden="true" />
        </div>

        <Reveal as="p" delay={100} className="revenue__note">
          Não estamos falando de atender dezenas de clientes todos os dias. Estamos falando de
          uma nova técnica que pode ser incorporada aos poucos à sua rotina e criar uma nova
          linha de receita para o seu negócio.
        </Reveal>

        {/* Destaque tipográfico */}
        <Reveal as="div" delay={60} className="revenue__shout">
          <span>Uma nova técnica.</span>
          <span>Um novo serviço.</span>
          <span className="revenue__shout-accent">Uma nova possibilidade de faturamento.</span>
        </Reveal>

        <div className="revenue__split">
          <Reveal as="div" delay={40} className="revenue__split-left">
            <p className="revenue__split-lead">
              E é exatamente isso que você vai aprender aqui.
            </p>
            <p className="revenue__split-text">
              Em 7 módulos práticos, você vai aprender a executar o Molde F1 com mais segurança
              e precisão — desde a preparação correta da unha e escolha do molde até aplicação,
              estrutura e acabamento.
            </p>
            <p className="revenue__split-text">
              Você deixa de olhar para o Molde F1 como uma técnica que “parece difícil” e começa
              a enxergá-lo como mais um serviço que pode oferecer, precificar e vender.
            </p>
          </Reveal>

          <Reveal as="div" delay={160} className="revenue__split-right">
            <blockquote className="revenue__blockquote">
              <p>
                Uma técnica bem desenvolvida pode significar{' '}
                <strong>novos atendimentos.</strong>
              </p>
              <p>
                Novos atendimentos podem significar{' '}
                <strong className="grad-text">mais faturamento.</strong>
              </p>
            </blockquote>
            <OfferBlock label={site.ctas.revenue} tone="light" className="revenue__offer" />
          </Reveal>
        </div>

        {/* Disclaimer — visível, sem competir com a headline */}
        <Reveal as="p" delay={40} className="disclaimer">
          {disclaimer}
        </Reveal>
      </div>
    </section>
  )
}