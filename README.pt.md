# MOAST Dance School 💜🩷🩵

> **Motion of Art, Style & Taste**

[**English**](README.md) | [**Português**](README.pt.md)

Repositório oficial da plataforma web da **MOAST Dance School** — academia de dança de referência em Portugal especializada em Hip-Hop, Breaking, Contemporâneo, Kizomba e programas avançados de formação artística.

A aplicação adota uma identidade visual **neo-brutalista**, combinando estética moderna com alto desempenho técnico via **React 19**, **Vite**, **Tailwind CSS** e **Framer Motion**. A interface foi desenvolvida nativamente em **Português Europeu** (`pt-PT`), mantendo a arquitetura de código em **Inglês** para alinhamento com padrões internacionais de engenharia de software.

---

## Funcionalidades da Plataforma

| Funcionalidade | Descrição |
| --- | --- |
| **Catálogo de Modalidades** | Listagem dinâmica com pré-visualizações em vídeo contínuo, segmentação por cores e badges de nível técnico |
| **Grelha de Horários Interativa** | Sistema de filtragem em tempo real por estúdio (Estúdio 1, Estúdio 2, Grémio) com transições suaves |
| **Gestão de Aulas do Dia** | Módulo na página inicial com sincronização horária e paginação automática do dia em curso |
| **Diretório do Corpo Docente** | Perfis individuais com grafismo em recorte, badges de identificação, tags de modalidade e biografias |
| **Montra de Merchandising & Preçário** | Galeria polaroid em scroll horizontal, integração de trailer promocional e tabela de modalidades/mensalidades |
| **Central de Inscrições** | Fluxos de conversão integrados para aulas experimentais e novas matrículas por localização |
| **Manifesto Institucional** | Espaço dedicado à metodologia, valores fundamentais e história da escola |
| **Contactos & Geolocalização** | Informações operacionais, canais diretos (Telefone, E-mail, Redes Sociais) e mapas interativos |
| **Navegação Fluida** | Transições de rota orquestradas com `AnimatePresence` do Framer Motion |
| **Design Totalmente Responsivo** | Otimização multiplataforma com menu de navegação mobile dedicado |
| **Tratamento de Erros (404)** | Página de rota não encontrada alinhada com a identidade visual da marca |

---

## Stack Tecnológica

| Componente | Tecnologia | Finalidade |
| --- | --- | --- |
| **Core UI** | [React 19](https://react.dev/) | Biblioteca principal de componentes de interface |
| **Build & Tooling** | [Vite 8](https://vite.dev/) | Ferramenta de build de alta performance e servidor local HMR |
| **Estilização** | [Tailwind CSS 3](https://tailwindcss.com/) | Framework CSS utilitário |
| **Animações** | [Framer Motion 12](https://www.framer.com/motion/) | Transições declarativas e animações de estado |
| **Roteamento** | [React Router 7](https://reactrouter.com/) | Gestão de rotas client-side (`HashRouter`) |
| **Processamento CSS** | [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) | Compatibilidade cross-browser |
| **Qualidade de Código** | [ESLint 10](https://eslint.org/) | Validação estática de padrões de código (Flat Config) |
| **Deploy** | [gh-pages](https://github.com/tschaub/gh-pages) | Pipeline de publicação contínua |

---

## Sistema de Design (Neo-Brutalismo)

A identidade visual da MOAST assenta em princípios de design arrojados e contrastantes:

* **Tipografia:** Títulos institucionais em **TAN Buster** (`@font-face` display serif robusta); texto corrido em **Futura** para máxima legibilidade.
* **Bordas Estruturadas:** Destaques visuais consistentes com `border-[3px] border-moast-black`.
* **Sombras Sólidas (Hard Offset):** Camadas com `shadow-brutalist` (4px) e `shadow-brutalist-lg` (8px).
* **Texturas Dinâmicas:** Ruído visual via filtro SVG `feTurbulence` (`bg-noise`).
* **Elementos em Destaque:** Badges e molduras polaroid com rotações estratégicas (`rotate-[-2deg]`).

**Paleta de Cores Institucional:**

| Token | Valor Hex | Utilização Principal |
| --- | --- | --- |
| `moast-off-white` | `#f5f5f5` | Fundos de página e contrastes neutros |
| `moast-magenta` | `#DA86D4` | Cor de destaque primária / Acentos |
| `moast-dark-magenta` | `#985A7C` | Elementos de profundidade e contraste |
| `moast-pink` | `#FFBFD5` | Fundos secundários e tags |
| `moast-dark-pink` | `#ff2a6d` | CTAs, alertas e badges de urgência |
| `moast-teal` | `#70ECDF` | Cor de destaque secundária / Tags de nível |
| `moast-black` | `#111111` | Tipografia principal, bordas e sombras |

---

## Desenvolvimento & Configuração

### Pré-requisitos

* **Node.js** >= 18 (recomendada versão LTS)
* **npm** >= 9 (ou gestor de pacotes equivalente)

### Instalação

```bash
# 1. Clonar o repositório
git clone [https://github.com/moast-dance-school/moast-dance-school.git](https://github.com/moast-dance-school/moast-dance-school.git)
cd moast-dance-school

# 2. Instalar dependências de produção e desenvolvimento
npm install

# 3. Executar o servidor de desenvolvimento
npm run dev
```

Aceda [http://localhost:5173](http://localhost:5173) para visualizar a aplicação localmente.

### Scripts Disponíveis

* `npm run dev` — Inicia o servidor local com Hot Module Replacement (HMR).
* `npm run build` — Compila os ficheiros para produção na diretoria ./dist.
* `npm run preview` — Pré-visualiza localmente a build de produção.
* `npm run lint` — Executa a análise estática com ESLint em todos os ficheiros .js e .jsx.
* `npm run deploy` — Executa a build e publica a versão mais recente no GitHub Pages.

---

## Estrutura do Projeto

```bash
moast-dance-school/
├── index.html                     # Entry point da aplicação (lang="pt")
├── vite.config.js                 # Configurações do Vite
├── tailwind.config.js             # Design tokens: cores, fontes, sombras e ruído
├── postcss.config.js              # Configuração do pipeline CSS
├── eslint.config.js               # Regras e padrões de código ESLint
├── public/                        # Ativos estáticos públicos (favicons, manifest)
└── src/
    ├── main.jsx                   # Ponto de montagem React
    ├── App.jsx                    # Configuração de rotas e providers globais
    ├── index.css                  # Folha de estilos global e layers Tailwind
    ├── assets/
    │   ├── fonts/                 # Ficheiros tipográficos locais
    │   ├── images/                # Identidade corporativa, recortes e grafismos
    │   ├── videos/                # Vídeos promocionais e trailers
    │   ├── classes/               # Vídeos de demonstração das modalidades
    │   ├── merch/                 # Fotografias de artigos de vestuário
    │   └── pdfs/                  # Documentação legal, regulamento e calendário
    ├── components/
    │   ├── pages/                 # Controladores de página / Vistas
    │   │   ├── LandingPage.jsx    # Página inicial
    │   │   ├── MoastPage.jsx      # Visão institucional e método
    │   │   ├── Classes.jsx        # Catálogo de modalidades
    │   │   ├── Teachers.jsx       # Diretório de professores
    │   │   ├── SchedulePage.jsx   # Mapa e filtros de horários
    │   │   ├── PricingPage.jsx    # Tabela de preços e merchandising
    │   │   ├── RegistrationPage.jsx # Portal de admissão e inscrições
    │   │   ├── ContactPage.jsx    # Formulários de contacto e localizações
    │   │   └── NotFoundPage.jsx   # Página de erro 404
    │   └── ui/                    # Componentes modulares e reutilizáveis
    │       ├── Navbar.jsx         # Cabeçalho global fixo com menu mobile
    │       ├── Footer.jsx         # Rodapé com mapa do site e ligações legais
    │       ├── Hero.jsx           # Secções principais de impacto
    │       ├── PageHero.jsx       # Cabeçalho padrão de páginas internas
    │       ├── ClassesToday.jsx   # Listagem de aulas ativas
    │       ├── AboutMoast.jsx     # Secção de introdução institucional
    │       ├── BrutalistButton.jsx # Botão padronizado com ações customizadas
    │       └── Icons.jsx          # Biblioteca interna de ícones SVG
    ├── constants/
    │   ├── navigation.js          # Estrutura de links e parâmetros globais
    │   └── dates.js               # Formatadores e utilitários de calendário
    └── data/
        ├── classes.js             # Fonte de dados de turmas e modalidades
        ├── teachers.js            # Base de dados do corpo docente
        └── merch.js               # Catálogo de produtos oficiais
```

---

## Mapeamento de Rotas

| Rota | Componente | Finalidade |
| --- | --- | --- |
| `/` | LandingPage | Apresentação institucional, aulas do dia e resumo da escola |
| `/moast` | MoastPage | Filosofia da marca, pilares e metodologia de ensino |
| `/aulas` | Classes | Catálogo geral de turmas, níveis e faixas etárias |
| `/professores` | Teachers | Biografias e credenciais dos instrutores |
| `/horarios` | SchedulePage | Planeamento semanal filtrável por estúdio |
| `/precario` | PricingPage | Preçário em vigor da linha de vestuário oficial |
| `/contactos` | ContactPage | Canais de suporte, formulário e coordenadas geográficas |
| `/inscricoes` | RegistrationPage | Formulários oficiais de matrícula e aulas de captação |
| `*` | NotFoundPage | Tratamento de rotas inexistentes |

---

## Manutenção & Atualização de Conteúdo

Para atualizar os dados operacionais da escola sem alterar componentes de interface, modifique diretamente os ficheiros em src/data/:

* **Adicionar/Editar Modalidades:** Altere o array de objetos em `src/data/classes.js`.
* **Atualizar Docentes:** Modifique as entradas em `src/data/teachers.js`.
* **Gerir Catálogo de Produtos:** Adicione itens e preços em `src/data/merch.js`.
* **Documentos Oficiais:** Substitua os ficheiros em `src/assets/pdfs/` mantendo as referências nominais em `src/components/ui/Footer.jsx`.

## Suporte & Contactos

Para questões técnicas relativas à infraestrutura digital ou assuntos institucionais da escola:

* Email: <geral@moastdanceschool.pt>
* Website: TBA
* Instagram: [@_moastdanceschool](https://www.instagram.com/_moastdanceschool/)

## Propriedade Intelectual & Termos

© MOAST Dance School. Todos os direitos reservados.

O código-fonte, elementos de design, marcas registadas, conteúdos multimédia e materiais associados presentes neste repositório são propriedade exclusiva da MOAST Dance School. É expressamente proibida a cópia, reprodução, redistribuição ou exploração comercial deste projeto sem autorização prévia por escrito da entidade detentora.

---
