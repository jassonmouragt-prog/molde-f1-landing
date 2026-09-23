# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Profissionais do ramo de unhas — nail designers e manicures — que atuam (ou querem atuar) com
alongamento de unhas e procuram dominar a técnica Molde F1 para oferecer o serviço com segurança
e aumentar o faturamento. A copy do briefing também contempla iniciantes completos ("mesmo sendo
iniciante ou já tendo tentado e desistido antes"), então o público-alvo é misto, com ênfase em
quem atende ou quer atender.

## Product Purpose

Treinamento pago que ensina a técnica de alongamento de unhas no Molde F1 de forma estruturada,
em 7 módulos que vão do fundamento à execução. O objetivo é que a aluna entenda o porquê de cada
etapa (encaixe, estrutura, posicionamento, preparação) e desenvolva segurança prática — não apenas
assista a vídeos. Sucesso, para quem visita a página, é decidir comprar o acesso ao treinamento.

## Positioning

Diferente de "vídeos soltos gratuitos" e da tentativa e erro: um método com etapas conectadas e
explicadas, onde a técnica deixa de ser teoria e passa a fazer sentido na prática. A narrativa
central é "do ruído à estrutura" — aprender o processo completo, sem juntar informações espalhadas.

## Operating Context

- A profissional significa seu progresso em resultados práticos: alongamento que não fica torto,
  não descola, encaixe e escolha de molde corretos, segurança para atender.
- Objeções reais de mercado estão mapeadas (12 itens, copy definida pela cliente e fixa).
- A página é de alta conversão, com prova social, progressão financeira ilustrativa e CTAs que
  apontam para um único destino de compra (ainda não definido pela cliente).

## Capabilities and Constraints

- Técnica ensinada: alongamento de unhas com Molde F1.
- 7 módulos estruturados: Seja bem-vinda, Materiais, Preparação, Moldes, Aplicação, Manutenção e
  Bônus sobre como fotografar e vender o trabalho.
- NÃO definidos pela cliente (não inventar): prazo de acesso, garantia, certificado, suporte,
  formas de pagamento e plataforma. FAQ usa apenas o confirmado no briefing.
- Link de compra único e centralizado (`purchaseUrl` em src/config/site.ts, hoje `#oferta`).
- Público misto: iniciantes e profissionais; a copy já afirma que não exige experiência prévia.
- Não depender de produtos completos para começar (a copy aborda isso nas objeções).

## Brand Commitments

- Marca: Carol Olmena. Produto: Molde F1.
- Copy do briefing é fixa e verbatim: as 12 objeções e o depoimento de prova social não podem
  ser reescritos.
- Identidade visual definida pela cliente (vinculante): fundo bege editorial, preto em seções de
  destaque, dourado como acento; tipografia 100% sem serifas — Archivo (display) + Manrope (corpo).
- Uso da palavra "Método" e tom de autoridade didática na voz da página.
- Exibição de valores financeiros sempre acompanhada do disclaimer obrigatório (exemplos
  ilustrativos, sem garantia de ganhos).

## Evidence on Hand

- Depoimento real fornecido pela cliente (texto exato); print/foto ainda não entregue
  (`src/config/site.ts` → `images.socialProof`).
- As 12 objeções com respostas, texto fixo do briefing (`src/data/objections.ts`).
- Não há fotos da profissional nem print real ainda — imagens esperadas:
  `public/images/hero-photo.jpg` (hero) e `public/images/social-proof.jpg` (prova social).
- Não foram entregues: informações comerciais de FAQ.
  Sessão de design existente documentada em `SESSION-PROGRESS.md`.

## Product Principles

1. Nunca inventar informação comercial ou pedagógica — o não definido fica em placeholder editável.
2. O método (etapas conectadas e explicadas) é o diferencial — todo design deve reforçar estrutura
   sobre ruído, não apenas entusiasmo.
3. Copy da cliente é autoridade — preserve verbatim o que ela fixou.
4. Clareza de decisão: o visitante deve entender que este é o caminho organizado para dominar a
   técnica, com um único destino de ação (compra).
5. Transparência financeira: qualquer valor mostrado é ilustrativo e sempre com disclaimer.

## Accessibility & Inclusion

Não há exigência específica registrada; o design implementado respeita `prefers-reduced-motion`
(animações via IntersectionObserver + CSS) e usa semântica/aria/labels. Incluir leitores de tela
e público iniciante é consistente com o público misto do briefing.
