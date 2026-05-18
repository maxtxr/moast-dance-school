# MOAST Dance School

[**English**](README.md) | [**Português**](README.pt.md)

> **Motion of Art, Style & Taste**

Um website neo-brutalista para a **MOAST Dance School** — construído com React 19, Vite, Tailwind CSS e Framer Motion. A interface está em **português europeu** para os seus utilizadores, enquanto o código segue convenções em **inglês** para naming de variáveis, componentes e ficheiros.

---

## Sobre

A MOAST é uma escola de dança sediada em Portugal, que oferece aulas de Hip-Hop e Breaking a Contemporâneo, Kizomba e programas de formação especializados. Este website serve como a casa digital da escola, disponibilizando:

- Um **catálogo de aulas** completo com pré-visualizações de vídeo em loop.
- Um **horário semanal** interativo filtrável por estúdio (Estúdio 1, Estúdio 2, Grémio).
- Uma **montra de merch** que combina uma galeria polaroid horizontal com um trailer de vídeo integrado e uma tabela de preços.
- Um **hub de inscrições** com links para Google Forms para aulas experimentais e matrículas.
- Uma **página do manifesto** da escola detalhando a filosofia MOAST (Motion, Art, Style, Taste).
- Uma **página de contactos** com mapas Google Maps incorporados para ambas as localizações e links para redes sociais.
- Uma secção **"Aulas Hoje"** na página inicial que mostra dinamicamente o horário do dia atual.

O design segue a estética **neo-brutalista**: tipografia TAN Buster em destaque, bordas pretas grossas, sombras duras, texturas de ruído e uma paleta vibrante de magenta, teal e rosa.

---

## Funcionalidades

- **Horário Semanal Responsivo** — Grelha semanal completa no desktop, agrupada por dia no mobile. Alterna entre estúdios (Estúdio 1, Estúdio 2, Grémio) com transições animadas.
- **Catálogo de Aulas** — Todas as aulas exibidas com código de cores por categoria, badges de nível, informações do professor, dias da semana e vídeos de fundo em loop com efeitos hover.
- **Aulas Hoje** — Secção dinâmica na página inicial que filtra as aulas do dia corrente, com navegação paginada.
- **Secção de Professores** — Perfis individuais com imagens recortadas, badges de nickname, tags de aulas coloridas e texto biográfico.
- **Merch & Preçário** — Galeria de fotos polaroid com scroll horizontal (com trailer de vídeo auto-play incorporado), seguida de uma tabela de preços de duas colunas com animações de elevação brutalistas.
- **Hub de Inscrições** — Três cartões de ação com links para Google Forms para aulas experimentais e matrículas em ambas as localizações.
- **Página MOAST** — Página de filosofia da escola com manifesto, quatro cartões de pilares (Motion, Art, Style, Taste), secção de método numerado ("O Nosso Método") e um grande showcase de vídeo em estilo polaroid com rotação hover.
- **Página de Contactos** — Telefone, email, redes sociais (Instagram e Facebook com SVGs inline) e duas localizações com caixas de informação e mapas Google Maps incorporados (escala de cinzentos, borda brutalista).
- **Transições de Página Animadas** — Animações de entrada/saída a nível de rota via Framer Motion e `AnimatePresence`.
- **Página 404** — Página personalizada de não encontrado consistente com a linguagem brutalista.
- **Menu Mobile** — Overlay de navegação animado deslizante para ecrãs pequenos.

---

## Tecnologias

| Tecnologia | Propósito |
| --- | --- |
| [React 19](https://react.dev/) | Biblioteca de UI |
| [Vite](https://vite.dev/) | Ferramenta de build e servidor de desenvolvimento |
| [Tailwind CSS 3](https://tailwindcss.com/) | Estilização utility-first |
| [Framer Motion](https://www.framer.com/motion/) | Animações declarativas |
| [React Router 7](https://reactrouter.com/) | Roteamento client-side |

---

## UI & Sistema de Design

### Abordagem Neo-Brutalista

Cada decisão visual reforça o ethos brutalista:

- **Tipografia** — Títulos usam **TAN Buster** (carregado via `@font-face`), uma typeface display serif robusta. Corpo de texto usa **Futura**, aplicado através da configuração de font-family do Tailwind.
- **Bordas pretas grossas** (`border-[3px]`) em cartões, botões, secções e contentores de media.
- **Sombras duras** — `shadow-[4px_4px_0_0_#000]` e `shadow-[8px_8px_0_0_#000]` criam uma sensação física de "carimbo". Definidas como `shadow-brutalist` e `shadow-brutalist-lg` na config do Tailwind.
- **Badges rodadas** (`rotate-[-2deg]`) que introduzem imperfeição deliberada.
- **Sobreposições de textura de ruído** — Aplicadas via um filtro SVG `feTurbulence` como `background-image`, camadas por toda a UI em secções hero, cartões e cabeçalhos de página.
- **Tipografia maiúscula e negra** em quase todo o texto visível.
- **Media em estilo polaroid** — Thumbnails de vídeo de aulas e itens da galeria de merch são apresentados como cartões polaroid com bordas brancas, sombras e ocasionais desvios de rotação.

### Paleta de Cores

| Token | Hex |
| --- | --- |
| `moast-off-white` | `#f5f5f5` |
| `moast-magenta` | `#DA86D4` |
| `moast-dark-magenta` | `#985A7C` |
| `moast-pink` | `#FFBFD5` |
| `moast-light-pink` | `#FEBFD4` |
| `moast-dark-pink` | `#ff2a6d` |
| `moast-teal` | `#70ECDF` |
| `moast-black` | `#111111` |

Cores, sombras, fontes e o padrão de ruído estão definidos em `tailwind.config.js` sob `theme.extend`, disponíveis como classes utilitárias em todo o projeto.

---

## Como Começar

### Pré-requisitos

- **Node.js** >= 18 (testado na LTS atual)
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

Abra [http://localhost:5173](http://localhost:5173) no seu navegador. A aplicação será recarregada automaticamente quando alterar ficheiros fonte.

### Build de Produção

```bash
npm run build     # saída para ./dist
npm run preview   # serve a build de produção localmente
```

### Linting

```bash
npm run lint
```

Executa o ESLint em todos os ficheiros JavaScript e JSX.

---

## Estrutura do Projeto

```bash
moast-dance-school/
├── index.html                    # Entry point do Vite (lang="pt")
├── vite.config.js                # Configuração do Vite
├── tailwind.config.js            # Tema: cores, fontes, sombras, ruído
├── postcss.config.js             # PostCSS com Autoprefixer
├── eslint.config.js              # Configuração flat do ESLint
├── public/                       # Assets estáticos (servidos como estão)
└── src/
    ├── main.jsx                  # Root do React
    ├── App.jsx                   # Router + rotas animadas
    ├── index.css                 # Estilos globais & layers Tailwind
    ├── assets/
    │   ├── fonts/                # TAN-BUSTER-Regular.ttf
    │   ├── images/               # Logos, recortes, graffiti overlay
    │   ├── videos/               # Vídeos hero, página moast e aulas
    │   ├── classes/              # Vídeos de demonstração por aula
    │   ├── merch/                # Fotos de produtos e trailer merch
    │   └── pdfs/                 # PDFs de regulamento e calendário
    ├── components/
    │   ├── LandingPage.jsx       # Home — Hero + AulasHoje + About
    │   ├── MoastPage.jsx         # /moast — manifesto, pilares, vídeo
    │   ├── Classes.jsx           # /aulas — catálogo completo
    │   ├── Teachers.jsx          # /professores — perfis
    │   ├── SchedulePage.jsx      # /horarios — grelha semanal
    │   ├── PricingPage.jsx       # /precario — galeria merch + tabela
    │   ├── ContactPage.jsx       # /contactos — info, mapas, redes
    │   ├── RegistrationPage.jsx  # /inscricoes — cartões Google Forms
    │   ├── NotFoundPage.jsx      # Página 404
    │   ├── Navbar.jsx            # Nav fixa com overlay mobile
    │   ├── Footer.jsx            # Rodapé com links PDF
    │   ├── PageHero.jsx          # Cabeçalho de página reutilizável
    │   ├── Hero.jsx              # Hero da landing (vídeo bg)
    │   ├── ClassesToday.jsx      # Secção de aulas de hoje
    │   ├── AboutMoast.jsx        # Secção "MOAST?" da landing
    │   ├── BrutalistCard.jsx     # Primitivas: cartão, badge, botão
    │   └── Icons.jsx             # Ícones SVG inline
    ├── constants/
    │   ├── navigation.js         # Links de navegação e épocas
    │   └── dates.js              # Helpers de formatação de data (PT)
    └── data/
        ├── classes.js            # Dataset completo de horários
        ├── teachers.js           # Dataset de perfis de professores
        └── merch.js              # Dataset de artigos de merch
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
| `*` | NotFoundPage | Fallback 404 |

---

## Localização

A **interface visível ao utilizador** está completamente em **português europeu** (`lang="pt"`). Todo o texto visível — títulos, legendas de botões, links de formulários, descrições e atributos alt — está em português. O **código interno** (nomes de componentes, nomes de variáveis, nomes de ficheiros, chaves de props, nomes de campos de dados) segue convenções em **inglês** para máxima acessibilidade a programadores internacionais.

---

## Licença

Todos os direitos reservados. Este projeto é propriedade da MOAST Dance School. A redistribuição ou uso comercial sem autorização não é permitido.
