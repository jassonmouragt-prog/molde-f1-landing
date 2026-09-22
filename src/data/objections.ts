/**
 * AS 12 OBJEÇÕES — fala da visitante + resposta do treinamento.
 * Copy definida pela cliente. Não alterar os textos.
 */

export interface Objection {
  id: number
  objection: string
  answer: string
}

export const OBJECTIONS: Objection[] = [
  {
    id: 1,
    objection: '“Eu ainda sou iniciante…”',
    answer:
      'Melhor ainda. Você vai aprender a técnica entendendo o porquê de cada etapa, sem precisar chegar com anos de experiência.',
  },
  {
    id: 2,
    objection: '“Eu já tentei Molde F1 e não deu certo.”',
    answer:
      'Talvez o problema não seja você — e sim ter aprendido sem entender os detalhes que fazem a técnica funcionar.',
  },
  {
    id: 3,
    objection: '“Tenho medo de errar na escolha do molde.”',
    answer:
      'Você vai aprender a identificar o molde adequado para cada unha, deixando de depender do “olhômetro” na hora da aplicação.',
  },
  {
    id: 4,
    objection: '“Meu alongamento fica torto ou desigual.”',
    answer:
      'Quando você entende encaixe, estrutura e posicionamento, deixa de depender da lixa para tentar consertar o que poderia ter sido feito corretamente desde o início.',
  },
  {
    id: 5,
    objection: '“Meus alongamentos descolam.”',
    answer:
      'A aderência começa muito antes do gel. Aprenda uma preparação correta e entenda os principais cuidados para reduzir problemas de descolamento.',
  },
  {
    id: 6,
    objection: '“Não tenho muito tempo para estudar.”',
    answer:
      'Você não precisa passar meses estudando para começar. Tenha acesso a um método objetivo para aprender e colocar a técnica em prática.',
  },
  {
    id: 7,
    objection: '“E se eu não conseguir fazer?”',
    answer:
      'Você não precisa nascer sabendo. Precisa de um passo a passo claro, demonstração e prática. É exatamente isso que você encontrará no curso.',
  },
  {
    id: 8,
    objection: '“Será que vale a pena pagar por um curso?”',
    answer:
      'Uma única técnica bem executada pode se transformar em mais um serviço no seu menu — e mais uma oportunidade de faturamento para você.',
  },
  {
    id: 9,
    objection: '“Eu já vi vários vídeos gratuitos sobre Molde F1.”',
    answer:
      'Ver vídeos soltos não é o mesmo que seguir um método. Aqui, você encontra as etapas organizadas para entender o processo completo, sem precisar juntar informações espalhadas.',
  },
  {
    id: 10,
    objection: '“Tenho medo de comprar e não usar.”',
    answer:
      'Você não precisa esperar o momento perfeito. Comece pelo conteúdo, pratique no seu ritmo e evolua aplicação após aplicação.',
  },
  {
    id: 11,
    objection: '“E se eu não tiver todos os produtos?”',
    answer:
      'Você pode começar entendendo a técnica e se organizando para praticar. O mais importante é saber exatamente o que fazer antes de investir em produtos sem necessidade.',
  },
  {
    id: 12,
    objection: '“Ainda não me sinto segura para atender.”',
    answer:
      'Segurança vem de entender o processo e repetir a execução. Quanto mais clareza você tem sobre cada etapa, menos você trabalha no improviso.',
  },
]