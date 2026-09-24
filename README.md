# CE-235 — Sistemas de Tempo Real

V0 do portal acadêmico/portfólio técnico da disciplina CE-235, construída com React + Vite + TypeScript.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Hero

Substitua `public/images/hero-ce235.svg` pela arte final em:

`public/images/hero-ce235.png`

Depois, em `src/data/links.ts`, altere `heroImage` para `/images/hero-ce235.png`.

## Links

Todos os links editáveis ficam em `src/data/links.ts`.
Dados das listas e artefatos ficam em `src/data/lists.ts`.

## GitHub Pages

O projeto usa `HashRouter`, evitando 404 ao atualizar páginas internas no GitHub Pages.

Se publicar em `https://usuario.github.io/repositorio/`, altere `base` em `vite.config.ts` para:

```ts
base: "/repositorio/"
```
