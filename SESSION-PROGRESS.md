# SESSION-PROGRESS.md

## Status atual

Landing Page de alta conversão — **Molde F1 / Carol Olmena** — construída e funcional.

Stack: Vite + React 18 + TypeScript + CSS custom (design system próprio).
Sem bibliotecas pesadas: animações via IntersectionObserver + CSS (respeita `prefers-reduced-motion`).

## Concluído

- [x] Estrutura em componentes (Header, Hero, ProblemSection, RevenueOpportunity,
      MethodModules, Objections, BigStatement, SocialProof, Transformation,
      FinalCTA, FAQ, Footer)
- [x] Copy do briefing preservada integralmente (headlines, objeções, depoimento)
- [x] Reserva de espaço para foto da profissional no hero (desktop: texto+imagem | mobile: composição própria)
- [x] Prova social com print real OU card fiel ao depoimento enquanto a imagem não é fornecida
- [x] Progressão financeira (1→10 atendimentos) com barras ascendentes + contadores
- [x] Timeline de 7 módulos editável (`src/data/modules.ts`)
- [x] 12 objeções em formato conversacional (`src/data/objections.ts`)
- [x] FAQ estruturada pronta para receber dados comerciais (`src/data/faq.ts`)
- [x] CTAs centralizados em `src/config/site.ts` (mesmo destino de compra)
- [x] SEO (title, description, OG, favicon), semântica, aria-labels, lazy loading fora do hero
- [x] Responsivo (desktop / tablet / mobile), reduções específicas de mobile
- [x] `npm run typecheck` e `npm run build` OK (sem erros)
- [x] Seção Identificação reimaginada: "do ruído à estrutura" — fio dourado que se desenha
      conectando fragmentos soltos a etapas numeradas e estruturadas (SVG animado por scroll,
      selos "sem processo" → "caminho completo"; mobile vira pilha vertical com timeline)
- [x] `PRODUCT.md` criado no projeto (contexto duradouro de produto p/ futuras decisões de design)
- [x] Paleta atualizada para **preto + cinza claro (quase branco) + dourado**: neutros bege/castanha
      removidos dos tokens e de todos os valores fixos (bgs #f0f0f2/#e4e4e7/#fafafa, ink #0b0b0f,
      dourado mais vibrante #d4ad3f/#a3822a/fundo grad-rose mais luminoso); theme-color, favicon e
      og-cover sincronizados (fundos pretos neutros, texto quase branco, acentos dourados)
- [x] Cartão da seção revenue agora é um **painel noir** com borda/glow dourados e bloco de citação
      em dourado-claro; botão corrigido (variant `rose`→`gold`, antes renderizava `btn--rose` sem CSS)
- [x] Mobile da seção Identificação redesenhado: painel noir com chips de "ruído", fio dourado
      vertical que se desenha (scaleY) atravessando os nós numerados, selos com realce dourado
- [x] **Oferta "DE R$ 197 POR R$ 47" implementada** (valores fornecidos pela cliente):
      `src/config/site.ts` centraliza preços antigo/atual, nota de apoio e rótulos de CTA;
      novo componente reutilizável `OfferBlock` (`src/components/ui/OfferBlock.tsx` + `offer.css`)
      com hierarquia de infoproduto (eyebrow "Oferta especial" → "de R$ 197" riscado → "por R$ 47"
      em destaque dourado → apoio → CTA). Tons `noir` (painel escuro c/ glow dourado) e `light`
      (ticket claro p/ superfícies escuras)
- [x] **CTA principal VERDE com glow** — nova variante `btn--green` em `base.css` + tokens
      (`--green/-deep`, glow suave); botões de oferta usam labels com preço
      ("QUERO ACESSAR POR R$ 47" / "GARANTIR AGORA POR R$ 47" / "…POR R$ 47")
- [x] Oferta inserida nos **4 pontos**: Hero (logo abaixo do subheadline), apó s impacto financeiro
      (painel noir `revenue__split-right`, ticket claro), após objeções (`objections__foot`) e
      CTA final (`final__cta-block`, ticket claro); todos os CTAs apontam p/ `purchaseUrl`
- [x] Detector impeccable: borda lateral 3px do `.hero__highlight` suavizada p/ 2px dourada; build+typecheck OK
- [x] **Banners do hero adicionados como fundo full-bleed**: `banner hero desktop.png` (landscape
      ≥769px) e `banner hero mobile.png` (portrait <769px) copiados p/ `public/images/`; `<picture>`
      dentro de `.hero__bg` preenche TODO o espaço do hero (object-fit cover) com overlay de
      legibilidade; conteúdo por cima em coluna única (max-width 720px); orbs/grain/placeholder
      removidos; CSS de hero e responsivo atualizados

## Pendente (depende da cliente)

- [ ] Link real de compra → preencher `purchaseUrl` em `src/config/site.ts` (hoje `#oferta`)
- [ ] Print real do depoimento → salvar em `public/images/social-proof.jpg` e definir `images.socialProof`
- [ ] Nomes e descrições dos 7 módulos → preencher `src/data/modules.ts`
- [ ] Informações comerciais p/ FAQ (prazo de acesso, garantia, certificado, suporte, preço,
      pagamento, plataforma, bônus) → ativar itens bloqueados em `src/data/faq.ts`
- [ ] Imagem Open Graph final → substituir `public/images/og-cover.svg` (usar JPG ~1200x630)
- [ ] Confirmar acessibilidade/conversão do bloco de oferta em visual real (screencheck) antes do deploy
- [ ] Revisar visualmente os banners exibidos no hero (não pude ver as imagens — este modelo não
      suporta leitura de imagem); verificar se o enquadramento/posicionamento agrada em desktop e mobile

## Comandos

- Dev: `npm run dev`
- Build: `npm run build`
- Preview do build: `npm run preview`

## Decisões tomadas

- Sem garantia/prazo inventados — apenas placeholders editáveis.
- Preço agora é **fato fornecido pela cliente**: DE R$ 197 POR R$ 47, exibido em 4 pontos da página.
- Link de checkout: todos os CTAs apontam para `purchaseUrl` (único ponto de configuração).
- Disclaimer dos valores sempre presente após a seção financeira.
- Depoimento exibido com texto exato fornecido; imagem real é trocada por configuração.
- Paleta: preto, bege e dourado (tokens em `src/styles/tokens.css`).
- Tipografia 100% sem serifa: Archivo (display, variável 400..900) + Manrope (corpo, 200..800).
  Títulos em peso alto (800) para destacar; corpo continua leve.
- Identidade visual: base bege editorial, preto em seções de destaque, dourado como acento
  (gradientes, barras financeiras, CTAs `btn--gold` e detalhes SVG/favicon/og-cover).