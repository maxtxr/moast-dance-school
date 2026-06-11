import artStyle from '../assets/classes/comercial.mp4'; // TODO 
import kizomba from '../assets/classes/kizomba.mp4';
import house from '../assets/classes/house.mp4';
import hipHopI from '../assets/classes/hiphopI.mp4';
import hipHopII from '../assets/classes/hiphopII.mp4';
import hipHopKids from '../assets/classes/hiphopkids.mp4';
import motion from '../assets/classes/motion.mp4';
import afroHouse from '../assets/classes/motion.mp4'; // TODO
import taste from '../assets/classes/taste.mp4';
import contemporaneo from '../assets/classes/contemporaneo.mp4';
import gremio from '../assets/classes/motion.mp4'; // TODO
import barraChao from '../assets/classes/barrachao.mp4';
import breakingI from '../assets/classes/motion.mp4'; // TODO
import breakingII from '../assets/classes/motion.mp4'; // TODO
import latinasI from '../assets/classes/latinasI.mp4';
import latinasII from '../assets/classes/latinasII.mp4';
import hipHopBabies from '../assets/classes/latinasII.mp4'; // TODO
import choreographyI from '../assets/classes/choreographyI.mp4';
import choreographyII from '../assets/classes/choreographyII.mp4';
import artStyleTaste from '../assets/classes/ast.mp4';
import fusion from '../assets/classes/fusion.mp4';
import comercial from '../assets/classes/comercial.mp4';
import special from '../assets/classes/specialclass1.mp4';
import competicao from '../assets/classes/comercial.mp4'; // TODO

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
        { level: '+13 ANOS', title: 'ART + STYLE', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ / BIBZ', img: artStyle, category: 'training' },
        { level: 'NÍVEL ABERTO', title: 'KIZOMBA FUSION', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'ALEX E SOFI', img: kizomba, category: 'social' },
        { level: 'NÍVEL II', title: 'HIP-HOP', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'GONÇALO CABRAL', img: hipHopII, category: 'complementary' },
        { level: 'NÍVEL ABERTO', title: 'HOUSE', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'TOMMY SANTOS', img: house, category: 'complementary' },
        { level: 'NÍVEL I', title: 'HIP-HOP', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'GONÇALO CABRAL', img: hipHopI, category: 'complementary' },
    ],
    'Terça': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIA', img: hipHopKids, category: 'training' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, category: 'training' },
        { level: 'NÍVEL ABERTO', title: 'AFRO HOUSE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'MOIKANA', img: afroHouse, category: 'complementary' },
        { level: '+13 ANOS', title: 'TASTE', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: taste, category: 'training' },
        { level: '+8 ANOS', title: 'CONTEMPORÂNEO', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'SOFIA DAVID LUZ', img: contemporaneo, category: 'complementary' },
        { level: '+6 ANOS', title: 'TURMA DE FORMAÇÃO', time: '18H45', studio: 'GRÉMIO', teacher: 'LENA', img: gremio, category: 'training' },
    ],
    'Quarta': [
        { level: 'NÍVEL ABERTO', title: 'BARRA DE CHÃO', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: barraChao, category: 'complementary' },
        { level: 'NÍVEL II', title: 'BREAKING', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'RUBEN HOOD', img: breakingII, category: 'complementary' },
        { level: 'NÍVEL I', title: 'BREAKING', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'RUBEN HOOD', img: breakingI, category: 'complementary' },
        { level: 'NÍVEL II', title: 'LATINAS', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'RICARDO COELHO', img: latinasII, category: 'social' },
        { level: '3-5 ANOS', title: 'HIP-HOP BABIES', time: '18H30', studio: 'ESTÚDIO 2', teacher: 'JOJO', img: hipHopBabies, category: 'training' },
        { level: 'NÍVEL I', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'BIBZ', img: choreographyI, category: 'complementary' },
        { level: 'NÍVEL I', title: 'LATINAS', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'RICARDO COELHO', img: latinasI, category: 'social' },
    ],
    'Quinta': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIA', img: hipHopBabies, category: 'training' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, category: 'training' },
        { level: '+13 ANOS', title: 'ART + STYLE + TASTE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'BÁ / BIBZ', img: artStyleTaste, category: 'training' },
        { level: '+13 ANOS', title: 'FUSION', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: fusion, category: 'complementary' },
        { level: '+6 ANOS', title: 'TURMA DE FORMAÇÃO', time: '18H30', studio: 'GRÉMIO', teacher: 'LENA', img: gremio, category: 'training' },
    ],
    'Sexta': [
        { level: 'NÍVEL II', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: choreographyII, category: 'complementary' },
        { level: '+13 ANOS', title: 'COMERCIAL', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'VERA', img: comercial, category: 'complementary' },
        { level: 'ESPECIAL', title: 'SPECIAL CLASS', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'TBA', img: special, category: 'special' },
    ],
    'Sábado': [
        { level: 'COMPETIÇÃO', title: 'COMPETIÇÃO', time: 'TBA', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: competicao, category: 'special' },
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