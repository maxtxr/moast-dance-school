import artStyle from '../assets/classes/artstyle.mp4';
import kizomba from '../assets/classes/kizomba.mp4';
import house from '../assets/classes/house.mp4';
import hipHopI from '../assets/classes/hiphopI.mp4';
import hipHopII from '../assets/classes/hiphopII.mp4';
import hipHopKids from '../assets/classes/hiphopkids.mp4';
import motion from '../assets/classes/motion.mp4';
import afroHouse from '../assets/classes/afrohouse.mp4';
import taste from '../assets/classes/taste.mp4';
import contemporaneo from '../assets/classes/contemporaneo.mp4';
import gremio from '../assets/classes/motion.mp4'; // TODO
import barraChao from '../assets/classes/barrachao.mp4';
import breakingI from '../assets/classes/breakingII.mp4'; // TODO
import breakingII from '../assets/classes/breakingII.mp4';
import latinasI from '../assets/classes/latinasI.mp4';
import latinasII from '../assets/classes/latinasII.mp4';
import hipHopBabies from '../assets/classes/hiphopkids.mp4'; // TODO
import choreographyI from '../assets/classes/choreographyI.mp4';
import choreographyII from '../assets/classes/choreographyII.mp4';
import artStyleTaste from '../assets/classes/ast.mp4';
import fusion from '../assets/classes/fusion.mp4';
import comercial from '../assets/classes/comercial.mp4';
import special from '../assets/classes/specialclass1.mp4';
import competicao from '../assets/classes/ast.mp4'; // TODO

export const getCategoryColor = (category) => {
    switch (category) {
        case 'training': return 'bg-moast-magenta';
        case 'complementary': return 'bg-moast-teal';
        case 'social': return 'bg-moast-pink';
        case 'special': return 'bg-moast-dark-pink';
        default: return 'bg-moast-teal';
    }
};

const scheduleData = {
    'Segunda': [
        { level: '+13 ANOS', title: 'ART + STYLE', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ / BIBZ', img: artStyle, category: 'training', description: 'Fusão de técnicas urbanas com foco em criatividade e estilo.' },
        { level: 'NÍVEL ABERTO', title: 'KIZOMBA FUSION', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'ALEX E SOFI', img: kizomba, category: 'social', description: 'Dança a dois com fluidez, conexão e muita sensualidade.' },
        { level: 'NÍVEL II', title: 'HIP-HOP', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'GONÇALO CABRAL', img: hipHopII, category: 'complementary', description: 'Técnica apurada e isolamentos para quem já domina o básico.' },
        { level: 'NÍVEL ABERTO', title: 'HOUSE', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'TOMMY SANTOS', img: house, category: 'complementary', description: 'Passes rápidos e movimentos soltos ao som de house music.' },
        { level: 'NÍVEL I', title: 'HIP-HOP', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'GONÇALO CABRAL', img: hipHopI, category: 'complementary', description: 'Introdução ao hip-hop com passos base e muita atitude.' },
    ],
    'Terça': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIA', img: hipHopKids, category: 'training', description: 'Primeiros passos no hip-hop de forma lúdica e divertida.' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, category: 'training', description: 'Exploração do movimento com energia e coordenação.' },
        { level: 'NÍVEL ABERTO', title: 'AFRO HOUSE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'MOIKANA', img: afroHouse, category: 'complementary', description: 'Ritmos africanos encontram o house num groove contagiante.' },
        { level: '+13 ANOS', title: 'TASTE', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: taste, category: 'training', description: 'Treino intenso para elevar o nível técnico e artístico.' },
        { level: '+8 ANOS', title: 'CONTEMPORÂNEO', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'SOFIA DAVID LUZ', img: contemporaneo, category: 'complementary', description: 'Expressão corporal livre com base na técnica contemporânea.' },
        { level: '+6 ANOS', title: 'TURMA DE FORMAÇÃO', time: '18H45', studio: 'GRÉMIO', teacher: 'LENA', img: gremio, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
    ],
    'Quarta': [
        { level: 'NÍVEL ABERTO', title: 'BARRA DE CHÃO', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: barraChao, category: 'complementary', description: 'Fortalece o corpo com exercícios de barra no chão.' },
        { level: 'NÍVEL II', title: 'BREAKING', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'RUBEN HOOD', img: breakingII, category: 'complementary', description: 'Power moves e footwork para b-boys e b-girls.' },
        { level: 'NÍVEL I', title: 'BREAKING', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'RUBEN HOOD', img: breakingI, category: 'complementary', description: 'Fundamentos do breaking com foco em top rock e footwork.' },
        { level: 'NÍVEL II', title: 'LATINAS', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'RICARDO COELHO', img: latinasII, category: 'social', description: 'Salsa, merengue e bachata com técnica e parceria avançada.' },
        { level: '3-5 ANOS', title: 'HIP-HOP BABIES', time: '18H30', studio: 'ESTÚDIO 2', teacher: 'JOJO', img: hipHopBabies, category: 'training', description: 'Iniciação à dança através do ritmo e da brincadeira.' },
        { level: 'NÍVEL I', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'BIBZ', img: choreographyI, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
        { level: 'NÍVEL I', title: 'LATINAS', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'RICARDO COELHO', img: latinasI, category: 'social', description: 'Primeiros passos nas danças latinas num ambiente descontraído.' },
    ],
    'Quinta': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIA', img: hipHopBabies, category: 'training', description: 'Primeiros passos no hip-hop de forma lúdica e divertida.' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, category: 'training', description: 'Exploração do movimento com energia e coordenação.' },
        { level: '+13 ANOS', title: 'ART + STYLE + TASTE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'BÁ / BIBZ', img: artStyleTaste, category: 'training', description: 'Treino completo de arte, estilo e performance.' },
        { level: '+13 ANOS', title: 'FUSION', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: fusion, category: 'complementary', description: 'Fusão de estilos numa só coreografia dinâmica.' },
        { level: '+6 ANOS', title: 'TURMA DE FORMAÇÃO', time: '18H30', studio: 'GRÉMIO', teacher: 'LENA', img: gremio, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
    ],
    'Sexta': [
        { level: 'NÍVEL II', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: choreographyII, category: 'complementary', description: 'Coreografia avançada com foco em execução e performance.' },
        { level: '+13 ANOS', title: 'COMERCIAL', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'VERA', img: comercial, category: 'complementary', description: 'Coreografias comerciais com energia de palco.' },
        { level: 'ESPECIAL', title: 'SPECIAL CLASS', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'TBA', img: special, category: 'special', description: 'Aula especial com convidados e temas únicos.' },
    ],
    'Sábado': [
        { level: 'COMPETIÇÃO', title: 'COMPETIÇÃO', time: 'TBA', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: competicao, category: 'special', description: 'Preparação intensiva para competições de dança.' },
    ]
};

let classIdCounter = 0;

export const classes = Object.entries(scheduleData).flatMap(([dayOfWeek, dailyClasses]) =>
    dailyClasses.map(classData => ({
        id: `class-${++classIdCounter}`,
        dayOfWeek,
        ...classData
    }))
);