/** Os 7 módulos do treinamento, na ordem apresentada à aluna. */

export interface ModuleItem {
  number: number
  title: string
  description: string
  stage: string
}

export const MODULES: ModuleItem[] = [
  {
    number: 1,
    title: 'Seja bem-vinda',
    description:
      'Conheça o treinamento, organize seus estudos e entenda o caminho que vai guiar sua evolução no Molde F1.',
    stage: 'Comece aqui',
  },
  {
    number: 2,
    title: 'Materiais',
    description:
      'Descubra os produtos e as ferramentas necessários para executar a técnica com organização e segurança.',
    stage: 'Kit essencial',
  },
  {
    number: 3,
    title: 'Preparação',
    description:
      'Aprenda a preparar corretamente as unhas para criar uma base limpa, aderente e pronta para a aplicação.',
    stage: 'Base da técnica',
  },
  {
    number: 4,
    title: 'Moldes',
    description:
      'Entenda como escolher, ajustar e posicionar o molde de acordo com as características de cada unha.',
    stage: 'Escolha e ajuste',
  },
  {
    number: 5,
    title: 'Aplicação',
    description:
      'Acompanhe a aplicação do Molde F1 passo a passo, da quantidade de produto ao posicionamento e acabamento.',
    stage: 'Técnica na prática',
  },
  {
    number: 6,
    title: 'Manutenção',
    description:
      'Aprenda os cuidados e o processo de manutenção necessários para preservar a estrutura do trabalho.',
    stage: 'Cuidado contínuo',
  },
  {
    number: 7,
    title: 'Bônus: como fotografar e vender seu trabalho',
    description:
      'Saiba como valorizar seus resultados nas fotos e apresentar seu trabalho de forma mais profissional para vender seus serviços.',
    stage: 'Divulgação e vendas',
  },
]
