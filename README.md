# MouTube v2

Loja e descoberta de jogos — portfolio front-end por **Wilker Rwaik Eloi**.

A v2 reformula a UI/UX e a stack: de Create React App + styled-components + catálogo estático para **Vite + React + TypeScript + Tailwind + shadcn/ui**, com **animações (Motion)** e catálogo **100% RAWG**.

## Visão do produto

Experiência **híbrida**:

- **Home estilo loja** — hero, destaques, bem avaliados, lançamentos e em alta
- **Busca central** — pesquisa no catálogo RAWG
- **Detalhe do jogo** — galeria, metadados, rating e CTAs de comprar / carrinho / wishlist (**somente UI**, sem checkout)

## Stack e porquê das escolhas

| Tecnologia | Por quê |
|---|---|
| **Vite** | Substitui o Create React App (legado). Dev server e HMR rápidos, build moderno e configuração simples. |
| **React + TypeScript** | Continuidade da v1 com tipagem forte para a API RAWG e componentes. |
| **Tailwind CSS** | Design tokens e iteração rápida de UI sem CSS-in-JS espalhado. |
| **shadcn/ui** | Componentes acessíveis (Base UI / Radix-style) com código no repositório — ownership total, alinhado ao Tailwind. |
| **Motion** | Animações declarativas (hero, stagger de cards, entradas de página) sem reinventar timing/easing. |
| **TanStack Query** | Cache, loading, erro e retry para as queries RAWG — evita waterfall e estado async manual. |
| **React Router** | SPA com rotas claras (`/`, `/search`, `/game/:id`). |
| **RAWG API** | Catálogo real (busca, imagens, ratings, plataformas) sem backend próprio. |
| **lucide-react** | Ícones consistentes com o ecossistema shadcn. |

### O que saiu da v1

- Create React App (`react-scripts`)
- styled-components + `px2vw`
- Catálogo mock em `data.js`
- react-icons (substituído por lucide)

## Rotas

| Rota | Página |
|---|---|
| `/` | Home (seções alimentadas pela RAWG) |
| `/search?q=` | Busca |
| `/game/:id` | Detalhe do jogo |
| `*` | 404 |

## Estrutura

```
src/
  components/ui/       # shadcn
  components/layout/   # Header, Footer, AppShell
  components/games/    # GameCard, Hero, Section, estados
  features/home/
  features/search/
  features/detail/
  lib/rawg/            # client, api, types, query keys
  pages/
  assets/
```

## Setup

### Requisitos

- Node.js 20+ (recomendado)
- Conta/chave gratuita na [RAWG API](https://rawg.io/apidocs)

### Instalação

```bash
npm install
cp .env.example .env
```

Edite `.env` e coloque sua chave:

```env
VITE_RAWG_API_KEY=sua_chave_aqui
```

### Scripts

```bash
npm run dev       # http://localhost:5173
npm run build     # build de produção
npm run preview   # servir o build (com proxy RAWG)
```

### Proxy da API

Em desenvolvimento (e no `preview`), o Vite encaminha `/api/rawg/*` para `https://api.rawg.io/api/*` e injeta a chave. Isso evita CORS e mantém a key fora do path do browser durante o proxy.

## Limitações (v2)

- CTAs de compra / carrinho / wishlist são **mock** (toast apenas)
- Em deploy **estático puro** (GitHub Pages etc.), a variável `VITE_*` entra no bundle — aceitável para portfolio com key gratuita; para produção real use um backend/proxy
- Rate limits da RAWG se aplicam

## Design

- Dark store evoluída da v1: fundo `#191E29`, accent teal `#01C38D`, superfícies `#132D47`
- Tipografia: **Syne** (display) + **Outfit** (corpo)
- Animações sutis no hero e nos grids de cards

## v1 → v2

| | v1 | v2 |
|---|---|---|
| Bundler | CRA | Vite |
| Estilo | styled-components | Tailwind + shadcn |
| Dados | `data.js` estático | RAWG API |
| Busca | — | `/search` |
| Animações | — | Motion |

## Contatos

- LinkedIn: [Wilker Rwaik Eloi](https://www.linkedin.com/in/wilker-rwaik-eloi-91b2621a0/)
- Instagram: [Rwaik](https://www.instagram.com/wilkerr/)
- WhatsApp: [Wilker](https://wa.me/5531992468296?text=Oi+Wilker)

---

Dados de jogos fornecidos pela [RAWG](https://rawg.io/).
