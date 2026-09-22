/**
 * FAQ — Estrutura pronta para receber as perguntas reais da cliente.
 * ==================================================================
 * IMPORTANTE: NÃO foram definidos ainda: prazo de acesso, garantia,
 * certificado, suporte, preço, forma de pagamento, plataforma e bônus.
 *
 * Não invente essas informações comerciais. As perguntas abaixo usam
 * apenas o que já foi confirmado no briefing. Para cada nova resposta,
 * basta adicionar um novo item no array (a ordem exibida segue esta lista).
 *
 * Exemplo de item bloqueado (descomente quando a info existir):
 * {
 *   q: 'Qual o prazo de acesso?',
 *   a: 'Sua resposta aqui.',
 * }
 */

export interface FaqItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Para quem é este treinamento de Molde F1?',
    a: 'Para quem quer aprender a técnica de verdade, entendendo cada etapa do processo — mesmo sendo iniciante ou já tendo tentado e desistido antes.',
  },
  {
    q: 'Preciso ter experiência prévia para acompanhar?',
    a: 'Não. O treinamento é estruturado em 7 módulos que caminham do fundamento à execução, mostrando o porquê de cada etapa para quem está começando.',
  },
  {
    q: 'O curso é apenas assistir vídeos?',
    a: 'Aqui você não apenas assiste: você aprende fazendo. A proposta é praticar cada etapa e desenvolver segurança na execução, sem depender da tentativa e erro.',
  },
]

/**
 * Bloqueio comercial — descomente / preencha SOMENTE quando a cliente
 * fornecer o dado, para não inventar informações na página.
 */
// export const FAQ_EXTRA: FaqItem[] = [
//   { q: 'Qual o prazo de acesso ao conteúdo?', a: '' },
//   { q: 'Existe garantia?', a: '' },
//   { q: 'Vou receber certificado?', a: '' },
//   { q: 'Como funciona o suporte?', a: '' },
//   { q: 'Qual o valor e as formas de pagamento?', a: '' },
//   { q: 'Em qual plataforma fica o material?', a: '' },
//   { q: 'Tem bônus?', a: '' },
// ]