# MOAST Dance School 💜🩷🩵

> **Motion of Art, Style & Taste**

[**English**](README.md) | [**Português**](README.pt.md)

Um website neo-brutalista para a **MOAST Dance School** — uma academia de dança portuguesa que oferece de Hip-Hop e Breaking a Contemporâneo, Kizomba e programas de formação especializados. Construído com **React 19**, **Vite**, **Tailwind CSS** e **Framer Motion**.

A interface fala **português europeu** (`pt-PT`) aos seus utilizadores; o código mantém convenções em **inglês** para acessibilidade global a programadores.

---

## Funcionalidades

| Funcionalidade | Descrição |
| --- | --- |
| **Catálogo de Aulas** | Catálogo completo com pré-visualizações de vídeo em loop, código de cores por categoria e badges de nível |
| **Horário Semanal** | Grelha interativa filtrável por estúdio (Estúdio 1, Estúdio 2, Grémio) com transições animadas |
| **Aulas Hoje** | Secção dinâmica na página inicial que mostra as aulas do dia atual com paginação |
| **Professores** | Perfis individuais com imagens recortadas, badges de nickname, tags coloridas e biografias |
| **Merch & Preçário** | Galeria polaroid com scroll horizontal, trailer de vídeo integrado e tabela de preços |
| **Inscrições** | Cartões de ação com links para Google Forms para aulas experimentais e matrículas |
| **Manifesto MOAST** | Página de filosofia com cartões dos pilares, secção do método e showcase de vídeo polaroid |
| **Contactos** | Telefone, email, redes sociais (Instagram/Facebook) e mapas Google Maps incorporados a cinzento |
| **Transições Animadas** | Animações de entrada/saída entre rotas via Framer Motion `AnimatePresence` |
| **Menu Mobile** | Overlay de navegação deslizante e animado para ecrãs pequenos |
| **Página 404** | Página personalizada de não encontrado consistente com a linguagem brutalista |

---

## Tecnologias

| Tecnologia | Propósito |
| --- | --- |
| [**React 19**](https://react.dev/) | Biblioteca de UI |
| [**Vite 8**](https://vite.dev/) | Ferramenta de build e servidor de desenvolvimento (HMR) |
| [**Tailwind CSS 3**](https://tailwindcss.com/) | Framework de estilização utility-first |
| [**Framer Motion 12**](https://www.framer.com/motion/) | Animações declarativas e transições de página |
| [**React Router 7**](https://reactrouter.com/) | Roteamento client-side (HashRouter para GitHub Pages) |
| [**PostCSS**](https://postcss.org/) + **Autoprefixer** | Pipeline de processamento CSS |
| [**ESLint 10**](https://eslint.org/) | Linting de código (flat config) |
| [**gh-pages**](https://github.com/tschaub/gh-pages) | Publicação no GitHub Pages |

### Sistema de Design

Uma estética **neo-brutalista** percorre todo o projeto:

- **Tipografia** — Títulos em **TAN Buster** (serif robusta carregada via `@font-face`), corpo em **Futura**
- **Bordas pretas grossas** (`border-[3px]`) em cartões, botões, secções e media
- **Sombras duras** — `shadow-brutalist` (4px) e `shadow-brutalist-lg` (8px) para um toque físico de "carimbo"
- **Badges rodadas** (`rotate-[-2deg]`) com imperfeição deliberada
- **Textura de ruído** — Filtro SVG `feTurbulence` aplicado como `bg-noise`
- **Molduras polaroid** — Media com bordas brancas, sombra e rotação
- **Paleta de cores**:

| Token | Hex |
| --- | --- |
| `moast-off-white` | `#f5f5f5` |
| `moast-magenta` | `#DA86D4` |
| `moast-dark-magenta` | `#985A7C` |
| `moast-pink` | `#FFBFD5` |
| `moast-dark-pink` | `#ff2a6d` |
| `moast-teal` | `#70ECDF` |
| `moast-black` | `#111111` |

Todos os tokens, fonts, sombras e o padrão de ruído estão configurados em `tailwind.config.js` sob `theme.extend`.

---

## Como Começar

### Pré-requisitos

- **Node.js** >= 18 (LTS recomendado)
- **npm** >= 9 (ou o gestor de pacotes da sua preferência)

### Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/your-username/moast-dance-school.git
cd moast-dance-school

# 2. Instalar dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) — a aplicação recarrega automaticamente com as alterações.

### Build de Produção

```bash
npm run build      # saída para ./dist
npm run preview    # serve a build de produção localmente
```

### Linting

```bash
npm run lint       # ESLint em todos os ficheiros JS/JSX
```

---

## Estrutura do Projeto

```bash
moast-dance-school/
├── index.html                     # Entry point do Vite (lang="pt")
├── vite.config.js                 # Config Vite (base: /moast-dance-school)
├── tailwind.config.js             # Tema: cores, fonts, sombras, ruído
├── postcss.config.js              # PostCSS + Autoprefixer
├── eslint.config.js               # ESLint flat config
├── public/                        # Assets estáticos (favicon, icons)
└── src/
    ├── main.jsx                   # Root do React
    ├── App.jsx                    # HashRouter + rotas animadas
    ├── index.css                  # Layers Tailwind & estilos globais
    ├── assets/
    │   ├── fonts/                 # TAN-BUSTER-Regular.ttf
    │   ├── images/                # Logos, recortes, graffiti overlay
    │   ├── videos/                # Vídeos hero e promocionais
    │   ├── classes/               # Vídeos de demonstração (20)
    │   ├── merch/                 # Fotos de produtos e trailer
    │   └── pdfs/                  # Calendário e regulamento
    ├── components/
    │   ├── pages/                 # Componentes de página (rotas)
    │   │   ├── LandingPage.jsx    # /
    │   │   ├── MoastPage.jsx      # /moast
    │   │   ├── Classes.jsx        # /aulas
    │   │   ├── Teachers.jsx       # /professores
    │   │   ├── SchedulePage.jsx   # /horarios
    │   │   ├── PricingPage.jsx    # /precario
    │   │   ├── RegistrationPage.jsx # /inscricoes
    │   │   ├── ContactPage.jsx    # /contactos
    │   │   └── NotFoundPage.jsx   # 404
    │   └── ui/                    # Primitivas UI partilhadas
    │       ├── Navbar.jsx         # Nav fixa + overlay mobile
    │       ├── Footer.jsx         # Rodapé com links PDF
    │       ├── Hero.jsx           # Secção hero da landing
    │       ├── PageHero.jsx       # Cabeçalho de página reutilizável
    │       ├── ClassesToday.jsx   # Aulas de hoje
    │       ├── AboutMoast.jsx     # Secção "MOAST?" da landing
    │       ├── BrutalistButton.jsx # Botão/link reutilizável
    │       └── Icons.jsx          # Ícones SVG inline
    ├── constants/
    │   ├── navigation.js          # Links de navegação e épocas
    │   └── dates.js               # Utilitários de data (PT)
    └── data/
        ├── classes.js             # 32+ entradas de aulas
        ├── teachers.js            # 13 perfis de professores
        └── merch.js               # 9 artigos de merch
```

---

## Rotas

| Caminho | Página | Descrição |
| --- | --- | --- |
| `/` | LandingPage | Hero, Aulas Hoje, Sobre |
| `/moast` | MoastPage | Filosofia e método da escola |
| `/aulas` | Classes | Catálogo completo de aulas |
| `/professores` | Teachers | Perfis dos professores |
| `/horarios` | SchedulePage | Horário semanal por estúdio |
| `/precario` | PricingPage | Galeria merch e tabela de preços |
| `/contactos` | ContactPage | Contactos e mapas |
| `/inscricoes` | RegistrationPage | CTAs de inscrição |
| `*` | NotFoundPage | 404 fallback |

As transições de página usam `AnimatePresence` com `LazyMotion` (Framer Motion) para animações suaves de entrada/saída.

---

## Localização

A **interface visível ao utilizador** está completamente em **português europeu** (`lang="pt"`). Todo o texto visível — títulos, legendas, descrições, links e atributos alt — está em português. O **código interno** (nomes de componentes, variáveis, ficheiros, props, campos de dados) segue convenções em **inglês** para máxima acessibilidade a programadores internacionais.

---

## Contexto Académico

Este projeto foi desenvolvido no âmbito de um trabalho académico para uma unidade curricular de **Desenvolvimento / Design Web**.

- **Aluna:** Bruna Rossa
- **Curso:** Licenciatura em Engenharia Informática
- **Instituição:** Instituto Politécnico de Setúbal
- **Ano letivo:** 2025/2026

---

## Licença

Todos os direitos reservados. Este projeto é propriedade da MOAST Dance School. A redistribuição ou uso comercial sem autorização não é permitido.
