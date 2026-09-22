/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * =============================
 * Altere aqui apenas: link de compra, imagens e identidade.
 */

export const site = {
  brand: 'Carol Olmena',
  product: 'Molde F1',
  modulesCount: 7,

  /**
   * ÚNICO LINK DE COMPRA DA PÁGINA.
   * Todos os CTAs apontam para este endereço.
   * Substitua "#oferta" pelo link real do checkout quando estiver definido.
   */
  purchaseUrl: '#oferta',

  // Oferta — valores confirmados pela cliente (DE → POR)
  offer: {
    eyebrow: 'Oferta especial',
    de: 'de',
    old: 'R$ 197',
    por: 'por',
    price: 'R$ 47',
    note: 'Acesse os 7 módulos práticos e comece agora',
  },

  // Rótulos constantes dos CTAs (todos apontam para purchaseUrl)
  ctas: {
    hero: 'QUERO ACESSAR POR R$ 47',
    offer: 'GARANTIR AGORA POR R$ 47',
    revenue: 'QUERO APRENDER MOLDE F1 POR R$ 47',
    header: 'QUERO ACESSAR',
    final: '🔥 QUERO DOMINAR O MOLDE F1 POR R$ 47',
  },
}

/**
 * IMAGENS
 * =======
 * Local padrão das imagens: pasta /public/images.
 *
 * Banners do hero (fornecidos pela cliente):
 *   - images.heroBannerDesktop → banner wide (landscape) em telas largas (>=768px)
 *   - images.heroBannerMobile  → banner vertical em telas pequenas (<768px)
 *   - images.heroAlt           → texto alternativo dos banners
 *
 * Depoimentos (prints reais de alunas):
 *   - images.socialProofs[] → lista de imagens (src + alt)
 */
export const images = {
  logo: '/images/logo-molde-f1-branco.png',
  logoDark: '/images/logo-molde-f1-preto.png',
  heroBannerDesktop: '/images/hero-banner-desktop.png',
  heroBannerMobile: '/images/hero-banner-mobile.png',
  heroAlt: 'Banner do treinamento Molde F1 — de R$ 197 por R$ 47, 7 módulos práticos',

  socialProofs: [
    {
      src: '/images/depoimento-01.jpg',
      alt: 'Print do depoimento de uma aluna sobre o treinamento de Molde F1',
    },
    {
      src: '/images/depoimento-02.jpg',
      alt: 'Print do depoimento de uma aluna sobre o treinamento de Molde F1',
    },
    {
      src: '/images/depoimento-03.jpg',
      alt: 'Print do depoimento de uma aluna sobre o treinamento de Molde F1',
    },
  ],
  socialProofCaption:
    'Resultados começam quando a técnica deixa de ser apenas teoria e começa a fazer sentido na prática.',
}

export const disclaimer =
  'Os valores são exemplos ilustrativos de faturamento bruto e não representam garantia de ganhos.'