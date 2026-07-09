# EN Store Prata

Catálogo-vitrine de joias de prata 925. Sem checkout — os pedidos vão para o
**WhatsApp**. Construído com **Next.js 16 + TypeScript + Tailwind CSS v4** e
exportado como site estático, pronto para a **Vercel**.

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera ./out (site estático)
```

> ⚠️ O caractere `#` no nome da pasta atual quebra o Next/Tailwind localmente
> (dev e build). **Renomeie/mova a pasta para um nome sem `#`** (ex.:
> `en-store-prata`) para rodar na sua máquina. Na Vercel funciona sem alteração.

## Personalizar

- `src/data/site.ts` — número do WhatsApp, moeda (`€`/`R$`), parcelas, textos, nav.
- `src/data/products.ts` — produtos, categorias, depoimentos.
- `src/app/globals.css` (`@theme`) — cores e fontes.
- `public/images/` — `logo.png` (incluída) e `hero.jpg`/`hero-2.jpg` (opcionais).

Veja `CLAUDE.md` para detalhes de arquitetura e deploy.
