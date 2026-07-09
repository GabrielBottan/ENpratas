# EN Store Prata — Catálogo de Joias 925

Catálogo-vitrine (não é e-commerce com checkout) para uma loja de joias de prata
925. Todos os pedidos são redirecionados para o **WhatsApp** — cada botão de
produto abre uma conversa `wa.me` já com o nome da peça.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tema em `src/app/globals.css` via `@theme`)
- **Static export** (`output: "export"` em `next.config.mjs`) → gera `/out`, 100%
  estático, deployável na Vercel ou qualquer host de arquivos.
- Fontes via `next/font/google`: Cormorant Garamond (serifada), Jost (sans),
  Sacramento (script).

## Comandos

```bash
npm install      # instala dependências
npm run dev      # servidor de desenvolvimento (http://localhost:3000)
npm run build    # build de produção estático → ./out
npm run start    # (não usado no modo export)
```

> ⚠️ **IMPORTANTE — caractere `#` no caminho da pasta.**
> A pasta atual (`# EN Store Prata jewelry catalog`) contém `#`, o que faz o
> Node/Tailwind injetar um "null byte" no caminho e **quebra `npm run dev` e
> `npm run build` localmente**. O código está correto — o build passa em qualquer
> caminho sem `#`. Para rodar localmente, **mova/renomeie a pasta para um nome sem
> `#`** (ex.: `en-store-prata`). Na Vercel isso não acontece (o repositório é
> clonado num caminho limpo), então o deploy funciona normalmente.

## Estrutura

```
app/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # fontes, <html>, metadata/SEO
│  │  ├─ page.tsx          # composição das seções da home
│  │  └─ globals.css       # tema Tailwind (@theme) + animações
│  ├─ components/          # uma seção por arquivo
│  │  ├─ Header.tsx, Hero.tsx, Benefits.tsx, CategoryCircles.tsx,
│  │  ├─ Highlights.tsx, ProductCard.tsx, ProductCarousel.tsx,
│  │  ├─ CategoryMosaic.tsx, SpecialJewelry.tsx, SocialProof.tsx,
│  │  ├─ Newsletter.tsx, Footer.tsx, FloatingWhatsApp.tsx,
│  │  ├─ ImagePlaceholder.tsx, Reveal.tsx, SectionHeading.tsx, icons.tsx
│  ├─ data/
│  │  ├─ site.ts           # CONFIG: WhatsApp, moeda, parcelas, nav, marca
│  │  └─ products.ts       # todos os produtos/categorias/depoimentos (tipados)
│  └─ lib/
│     ├─ whatsapp.ts       # monta links wa.me (produto/categoria/genérico)
│     └─ format.ts         # formata preço e parcelamento
└─ public/images/
   ├─ logo.png             # logo da marca (usado no header e footer)
   ├─ hero.jpg             # (opcional) imagem do hero — ver abaixo
   └─ hero-2.jpg           # (opcional) segundo banner do hero
```

## Como editar (sem mexer em componentes)

- **Número do WhatsApp / moeda / parcelas / textos:** `src/data/site.ts`
  (`WHATSAPP_NUMBER`, `CURRENCY` `"€"|"R$"`, `INSTALLMENTS`, `SITE`, `NAV_LINKS`).
- **Produtos, categorias, depoimentos:** `src/data/products.ts`. Cada produto tem
  `name`, `price`, e opcionalmente `oldPrice`, `badge`, `rating`/`ratingCount`.
- **Paleta e fontes:** bloco `@theme` em `src/app/globals.css`.

## Imagens

Por decisão do projeto, **não usamos fotos de stock**. Cards de produto,
categorias, mosaico e "joias especiais" usam um **placeholder neutro elegante**
(`ImagePlaceholder.tsx`) até haver fotos reais.

- **Logo:** já incluída em `public/images/logo.png`.
- **Hero:** coloque `public/images/hero.jpg` (e opcionalmente `hero-2.jpg`) para o
  banner. Sem esses arquivos, o hero mostra um gradiente quente elegante como
  fallback — o layout não quebra.
- Para dar foto a um produto no futuro: adicione o campo de imagem no tipo
  `Product` e troque `<ImagePlaceholder>` por `<Image>` no `ProductCard.tsx`.

## Deploy na Vercel

1. Este repositório já é a raiz do projeto Next.
2. Na Vercel: **New Project** → importe o repo.
3. **Root Directory:** raiz do repositório (o próprio projeto Next).
4. Framework detectado automaticamente como **Next.js**. Build: `next build`
   (gera export estático em `out/`). Nenhuma variável de ambiente é necessária.

## Convenções

- Componentes de UI interativa (`Hero`, `Header`, `ProductCard`, `Highlights`,
  `ProductCarousel`, `Newsletter`, `Reveal`) são Client Components (`"use client"`).
  O resto é Server Component estático.
- Todo CTA de compra chama um helper de `lib/whatsapp.ts`. Nunca hardcode um link
  `wa.me` nos componentes — use `productWhatsApp`/`categoryWhatsApp`/`genericWhatsApp`.
- Um arquivo por seção; mantenha os dados em `src/data/`, fora dos componentes.
