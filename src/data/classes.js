import artStyleTaste from '../assets/classes/ast.mp4';
import kizomba from '../assets/classes/kizomba.mp4';
import hipHopI from '../assets/classes/hiphopI.mp4';
import hipHopII from '../assets/classes/hiphopII.mp4';
import hipHopKids from '../assets/classes/hiphopkids.mp4';
import motion from '../assets/classes/motion.mp4';
import afroHouse from '../assets/classes/afrohouse.mp4';
import contemporaneo from '../assets/classes/contemporaneo.mp4';
import gremio from '../assets/classes/motion.mp4'; // TODO
import barraChao from '../assets/classes/barrachao.mp4';
import latinas from '../assets/classes/latinasI.mp4';
import babies from '../assets/classes/hiphopkids.mp4'; // TODO
import choreographyI from '../assets/classes/choreographyI.mp4';
import choreographyII from '../assets/classes/choreographyII.mp4';
import choreographyOpen from '../assets/classes/choreographyII.mp4'; // TODO - no dedicated asset for Nível Aberto/III yet
import fusion from '../assets/classes/fusion.mp4';
import comercial from '../assets/classes/comercial.mp4';
import fitLab from '../assets/classes/specialclass1.mp4'; // TODO - no dedicated Fit Lab asset yet
import oldSchool from '../assets/classes/hiphopII.mp4'; // TODO - no dedicated Old School asset yet
import girlie from '../assets/classes/ast.mp4'; // TODO - no dedicated Girlie asset yet

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
        { level: 'NÍVEL III', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: choreographyII, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
        { level: '+13 ANOS', title: 'ART + STYLE + TASTE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'BIA / BIBZ', img: artStyleTaste, category: 'training', description: 'Treino completo de arte, estilo e performance.' },
        { level: 'NÍVEL ABERTO', title: 'CHOREOGRAPHY', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'MARTA SSULL / TOSTA', img: choreographyOpen, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
        { level: 'NÍVEL I', title: 'TURMA DE FORMAÇÃO', time: '18H15', studio: 'GRÉMIO', teacher: 'BIA', img: gremio, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
        { level: 'NÍVEL II', title: 'TURMA DE FORMAÇÃO', time: '19H00', studio: 'GRÉMIO', teacher: 'BIA', img: gremio, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
    ],
    'Terça': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'LENA', img: hipHopKids, category: 'training', description: 'Primeiros passos no hip-hop de forma lúdica e divertida.' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, category: 'training', description: 'Exploração do movimento com energia e coordenação.' },
        { level: 'NÍVEL ABERTO', title: 'AFRO HOUSE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'DILSON', img: afroHouse, category: 'complementary', description: 'Ritmos africanos encontram o house num groove contagiante.' },
        { level: '+8 ANOS', title: 'CONTEMPORÂNEO', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'SOFIA DAVID LUZ', img: contemporaneo, category: 'complementary', description: 'Expressão corporal livre com base na técnica contemporânea.' },
        { level: '+30 ANOS', title: 'OLD SCHOOL', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'BÁ', img: oldSchool, category: 'training', description: 'Os clássicos do hip-hop revisitados, com estilo e atitude.' },
    ],
    'Quarta': [
        { level: '+8 ANOS', title: 'BARRA DE CHÃO', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: barraChao, category: 'complementary', description: 'Fortalece o corpo com exercícios de barra no chão.' },
        { level: '+13 ANOS', title: 'ART + STYLE + TASTE', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: artStyleTaste, category: 'training', description: 'Treino completo de arte, estilo e performance.' },
        { level: 'NÍVEL ABERTO', title: 'LATINAS', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'RICARDO COELHO', img: latinas, category: 'complementary', description: 'Salsa, merengue e bachata num ambiente descontraído.' },
        { level: 'NÍVEL II', title: 'HIP-HOP', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'GONÇALO CABRAL', img: hipHopII, category: 'complementary', description: 'Técnica apurada e isolamentos para quem já domina o básico.' },
        { level: '3-5 ANOS', title: 'BABIES', time: '18H30', studio: 'ESTÚDIO 2', teacher: 'JOJO', img: babies, category: 'complementary', description: 'Iniciação à dança através do ritmo e da brincadeira.' },
        { level: 'NÍVEL I', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'BIBZ', img: choreographyI, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
        { level: 'NÍVEL I', title: 'HIP-HOP', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'GONÇALO CABRAL', img: hipHopI, category: 'complementary', description: 'Introdução ao hip-hop com passos base e muita atitude.' },
        { level: 'NÍVEL I', title: 'TURMA DE FORMAÇÃO', time: '18H00', studio: 'GRÉMIO', teacher: 'BIBZ', img: gremio, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
        { level: 'NÍVEL II', title: 'TURMA DE FORMAÇÃO', time: '18H45', studio: 'GRÉMIO', teacher: 'BIBZ', img: gremio, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
    ],
    'Quinta': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'LENA', img: hipHopKids, category: 'training', description: 'Primeiros passos no hip-hop de forma lúdica e divertida.' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, category: 'training', description: 'Exploração do movimento com energia e coordenação.' },
        { level: 'NÍVEL ABERTO', title: 'KIZOMBA', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'JOÃO LARANJO', img: kizomba, category: 'complementary', description: 'Dança a dois com fluidez, conexão e muita sensualidade.' },
        { level: '+13 ANOS', title: 'GIRLIE', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'INÊS CUNHA', img: girlie, category: 'complementary', description: 'Feminilidade e atitude ao ritmo de coreografias cheias de energia.' },
        { level: 'NÍVEL II', title: 'CHOREOGRAPHY', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'BIBZ', img: choreographyII, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
    ],
    'Sexta': [
        { level: 'NÍVEL ABERTO', title: 'FIT LAB', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: fitLab, category: 'complementary', description: 'Treino físico focado em condição, força e mobilidade para dançarinos.' },
        { level: '+13 ANOS', title: 'COMERCIAL', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'VERA', img: comercial, category: 'complementary', description: 'Coreografias comerciais com energia de palco.' },
        { level: '+13 ANOS', title: 'FUSION', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: fusion, category: 'complementary', description: 'Fusão de estilos numa só coreografia dinâmica.' },
    ],
};

let classIdCounter = 0;

export const classes = Object.entries(scheduleData).flatMap(([dayOfWeek, dailyClasses]) =>
    dailyClasses.map(classData => ({
        id: `class-${++classIdCounter}`,
        dayOfWeek,
        ...classData
    }))
);