import artStyleTaste from '../assets/classes/photos/artstyletaste.JPG';
import kizomba from '../assets/classes/photos/kizomba.JPG';
import hipHopI from '../assets/classes/photos/hiphopI.JPG';
import hipHopII from '../assets/classes/photos/hiphopII.JPG';
import hipHopKids from '../assets/classes/photos/kids.JPG';
import motion from '../assets/classes/photos/motion.JPG';
import afroHouse from '../assets/classes/photos/motion.JPG'; // TODO: Substituir quando houver foto própria
import contemporaneo from '../assets/classes/photos/contemporaneo.JPG';
import gremio from '../assets/classes/photos/gremio.JPG';
import barraChao from '../assets/classes/photos/motion.JPG'; // TODO: Substituir quando houver foto própria
import latinas from '../assets/classes/photos/latinasI.JPG';
import babies from '../assets/classes/photos/babies.JPG';
import choreographyI from '../assets/classes/photos/choreographyII.JPG';
import choreographyII from '../assets/classes/photos/choreographyII.JPG';
import choreographyOpen from '../assets/classes/photos/choreographyII.JPG';
import fusion from '../assets/classes/photos/motion.JPG'; // TODO: Substituir quando houver foto própria
import comercial from '../assets/classes/photos/comercial.JPG';
import fitLab from '../assets/classes/photos/motion.JPG'; // TODO: Substituir quando houver foto própria
import oldSchool from '../assets/classes/photos/hiphopII.JPG'; // TODO: Substituir quando houver foto própria
import girlie from '../assets/classes/photos/motion.JPG'; // TODO: Substituir quando houver foto própria

import artStyleTasteVideo from '../assets/classes/videos/artstyle.mp4';
import kizombaVideo from '../assets/classes/videos/kizomba.mp4';
import hipHopIVideo from '../assets/classes/videos/hiphopI.mp4';
import hipHopIIVideo from '../assets/classes/videos/hiphopII.mp4';
import hipHopKidsVideo from '../assets/classes/videos/hiphopkids.mp4';
import motionVideo from '../assets/classes/videos/motion.mp4';
import afroHouseVideo from '../assets/classes/videos/afrohouse.mp4';
import contemporaneoVideo from '../assets/classes/videos/contemporaneo.mp4';
import gremioVideo from '../assets/classes/videos/motion.mp4'; // TODO
import barraChaoVideo from '../assets/classes/videos/barrachao.mp4';
import latinasVideo from '../assets/classes/videos/latinasI.mp4';
import babiesVideo from '../assets/classes/videos/motion.mp4'; // TODO
import choreographyIVideo from '../assets/classes/videos/choreographyI.mp4';
import choreographyIIVideo from '../assets/classes/videos/choreographyII.mp4';
import choreographyOpenVideo from '../assets/classes/videos/choreographyII.mp4'; // TODO
import fusionVideo from '../assets/classes/videos/fusion.mp4';
import comercialVideo from '../assets/classes/videos/comercial.mp4';
import fitLabVideo from '../assets/classes/videos/motion.mp4'; // TODO
import oldSchoolVideo from '../assets/classes/videos/artstyle.mp4'; // TODO
import girlieVideo from '../assets/classes/videos/comercial.mp4'; // TODO

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
        { level: 'NÍVEL III', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: choreographyII, video: choreographyIIVideo, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
        { level: '+13 ANOS', title: 'ART + STYLE + TASTE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'BIA / BIBZ', img: artStyleTaste, video: artStyleTasteVideo, category: 'training', description: 'Treino completo de arte, estilo e performance.' },
        { level: 'NÍVEL ABERTO', title: 'CHOREOGRAPHY', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'MARTA SSULL / TOSTA', img: choreographyOpen, video: choreographyOpenVideo, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
        { level: 'NÍVEL I', title: 'TURMA DE FORMAÇÃO', time: '18H15', studio: 'GRÉMIO', teacher: 'BIA', img: gremio, video: gremioVideo, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
        { level: 'NÍVEL II', title: 'TURMA DE FORMAÇÃO', time: '19H00', studio: 'GRÉMIO', teacher: 'BIA', img: gremio, video: gremioVideo, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
    ],
    'Terça': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'LENA', img: hipHopKids, video: hipHopKidsVideo, category: 'training', description: 'Primeiros passos no hip-hop de forma lúdica e divertida.' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, video: motionVideo, category: 'training', description: 'Exploração do movimento com energia e coordenação.' },
        { level: 'NÍVEL ABERTO', title: 'AFRO HOUSE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'DILSON', img: afroHouse, video: afroHouseVideo, category: 'complementary', description: 'Ritmos africanos encontram o house num groove contagiante.' },
        { level: '+8 ANOS', title: 'CONTEMPORÂNEO', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'SOFIA DAVID LUZ', img: contemporaneo, video: contemporaneoVideo, category: 'complementary', description: 'Expressão corporal livre com base na técnica contemporânea.' },
        { level: '+30 ANOS', title: 'OLD SCHOOL', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'BÁ', img: oldSchool, video: oldSchoolVideo, category: 'training', description: 'Os clássicos do hip-hop revisitados, com estilo e atitude.' },
    ],
    'Quarta': [
        { level: '+8 ANOS', title: 'BARRA DE CHÃO', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: barraChao, video: barraChaoVideo, category: 'complementary', description: 'Fortalece o corpo com exercícios de barra no chão.' },
        { level: '+13 ANOS', title: 'ART + STYLE + TASTE', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: artStyleTaste, video: artStyleTasteVideo, category: 'training', description: 'Treino completo de arte, estilo e performance.' },
        { level: 'NÍVEL ABERTO', title: 'LATINAS', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'RICARDO COELHO', img: latinas, video: latinasVideo, category: 'complementary', description: 'Salsa, merengue e bachata num ambiente descontraído.' },
        { level: 'NÍVEL II', title: 'HIP-HOP', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'GONÇALO CABRAL', img: hipHopII, video: hipHopIIVideo, category: 'complementary', description: 'Técnica apurada e isolamentos para quem já domina o básico.' },
        { level: '3-5 ANOS', title: 'BABIES', time: '18H30', studio: 'ESTÚDIO 2', teacher: 'JOJO', img: babies, video: babiesVideo, category: 'complementary', description: 'Iniciação à dança através do ritmo e da brincadeira.' },
        { level: 'NÍVEL I', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'BIBZ', img: choreographyI, video: choreographyIVideo, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
        { level: 'NÍVEL I', title: 'HIP-HOP', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'GONÇALO CABRAL', img: hipHopI, video: hipHopIVideo, category: 'complementary', description: 'Introdução ao hip-hop com passos base e muita atitude.' },
        { level: 'NÍVEL I', title: 'TURMA DE FORMAÇÃO', time: '18H00', studio: 'GRÉMIO', teacher: 'BIBZ', img: gremio, video: gremioVideo, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
        { level: 'NÍVEL II', title: 'TURMA DE FORMAÇÃO', time: '18H45', studio: 'GRÉMIO', teacher: 'BIBZ', img: gremio, video: gremioVideo, category: 'training', description: 'Formação contínua com foco na evolução técnica e artística.' },
    ],
    'Quinta': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'LENA', img: hipHopKids, video: hipHopKidsVideo, category: 'training', description: 'Primeiros passos no hip-hop de forma lúdica e divertida.' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, video: motionVideo, category: 'training', description: 'Exploração do movimento com energia e coordenação.' },
        { level: 'NÍVEL ABERTO', title: 'KIZOMBA', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'JOÃO LARANJO', img: kizomba, video: kizombaVideo, category: 'complementary', description: 'Dança a dois com fluidez, conexão e muita sensualidade.' },
        { level: '+13 ANOS', title: 'GIRLIE', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'INÊS CUNHA', img: girlie, video: girlieVideo, category: 'complementary', description: 'Feminilidade e atitude ao ritmo de coreografias cheias de energia.' },
        { level: 'NÍVEL II', title: 'CHOREOGRAPHY', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'BIBZ', img: choreographyII, video: choreographyIIVideo, category: 'complementary', description: 'Criação e execução de coreografias com estilo próprio.' },
    ],
    'Sexta': [
        { level: 'NÍVEL ABERTO', title: 'FIT LAB', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: fitLab, video: fitLabVideo, category: 'complementary', description: 'Treino físico focado em condição, força e mobilidade para dançarinos.' },
        { level: '+13 ANOS', title: 'COMERCIAL', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'VERA', img: comercial, video: comercialVideo, category: 'complementary', description: 'Coreografias comerciais com energia de palco.' },
        { level: '+13 ANOS', title: 'FUSION', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: fusion, video: fusionVideo, category: 'complementary', description: 'Fusão de estilos numa só coreografia dinâmica.' },
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