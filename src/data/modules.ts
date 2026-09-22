/**
 * OS 7 MÓDULOS DO TREINAMENTO
 * ============================
 * ATENÇÃO: os nomes e conteúdos específicos dos módulos ainda NÃO foram
 * definidos pela cliente. Não invente conteúdo definitivo.
 *
 * Os campos abaixos são POOL DE EDIÇÃO. Preencha 'title' e 'description'
 * quando a cliente enviar os nomes reais. O texto placeholder é mantido
 * com um tom genérico e editável apenas durante o desenvolvimento.
 *
 * Dica: a descrição deve descrever a etapa, o que a aluna vai aprender na prática.
 */

export interface ModuleItem {
  number: number
  /** Preencher com o nome real do módulo quando enviado pela cliente */
  title: string
  /** Preencher com a descrição real do módulo quando enviado pela cliente */
  description: string
  /** Palavra-curta ilustrativa do momento do percurso (fundamento → execução) */
  stage: string
}

export const MODULES: ModuleItem[] = [
  {
    number: 1,
    title: 'Etapa 01 — Ponto de partida',
    description:
      'Aqui entra o conteúdo real do Módulo 01: o que a aluna vai aprender primeiro. (Conteúdo em desenvolvimento)',
    stage: 'Fundamento',
  },
  {
    number: 2,
    title: 'Etapa 02 — Ponto de partida',
    description:
      'Aqui entra o conteúdo real do Módulo 02. (Conteúdo em desenvolvimento)',
    stage: 'Base',
  },
  {
    number: 3,
    title: 'Etapa 03 — Construção',
    description:
      'Aqui entra o conteúdo real do Módulo 03. (Conteúdo em desenvolvimento)',
    stage: 'Estrutura',
  },
  {
    number: 4,
    title: 'Etapa 04 — Construção',
    description:
      'Aqui entra o conteúdo real do Módulo 04. (Conteúdo em desenvolvimento)',
    stage: 'Aplicação',
  },
  {
    number: 5,
    title: 'Etapa 05 — Execução',
    description:
      'Aqui entra o conteúdo real do Módulo 05. (Conteúdo em desenvolvimento)',
    stage: 'Execução',
  },
  {
    number: 6,
    title: 'Etapa 06 — Execução',
    description:
      'Aqui entra o conteúdo real do Módulo 06. (Conteúdo em desenvolvimento)',
    stage: 'Acabamento',
  },
  {
    number: 7,
    title: 'Etapa 07 — Chegada',
    description:
      'Aqui entra o conteúdo real do Módulo 07. (Conteúdo em desenvolvimento)',
    stage: 'Prática',
  },
]