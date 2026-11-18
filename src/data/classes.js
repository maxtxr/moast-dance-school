import artStyleTaste from '../assets/optimized/classes/photos/artstyletaste.webp';
import kizomba from '../assets/optimized/classes/photos/kizomba.webp';
import hipHopI from '../assets/optimized/classes/photos/hiphopI.webp';
import hipHopII from '../assets/optimized/classes/photos/hiphopII.webp';
import hipHopKids from '../assets/optimized/classes/photos/kids.webp';
import motion from '../assets/optimized/classes/photos/motion.webp';
import afroHouse from '../assets/optimized/classes/photos/afrohouse.webp';
import contemporaneo from '../assets/optimized/classes/photos/contemporaneo.webp';
import gremio from '../assets/optimized/classes/photos/gremio.webp';
import barraChao from '../assets/optimized/classes/photos/barradechao.webp';
import latinas from '../assets/optimized/classes/photos/latinas.webp';
import babies from '../assets/optimized/classes/photos/babies.webp';
import choreographyI from '../assets/optimized/classes/photos/choreographyII.webp';
import choreographyII from '../assets/optimized/classes/photos/choreographyII.webp';
import choreographyOpen from '../assets/optimized/classes/photos/choreography.webp';
import fusion from '../assets/optimized/classes/photos/fusion.webp';
import comercial from '../assets/optimized/classes/photos/comercial.webp';
import fitLab from '../assets/optimized/classes/photos/barradechao.webp';
import oldSchool from '../assets/optimized/classes/photos/hiphopII.webp';
import girlie from '../assets/optimized/classes/photos/girlie.webp';

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
        { level: 'NÍVEL III', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: choreographyII, category: 'complementary' },
        { level: '+13 ANOS', title: 'ART + STYLE + TASTE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'BÁ / BIA / BIBZ', img: artStyleTaste, category: 'training' },
        { level: 'NÍVEL ABERTO', title: 'CHOREOGRAPHY', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'MARTA SSULL / TOSTA', img: choreographyOpen, category: 'complementary' },
        { level: '9-13 ANOS', title: 'MOTION II', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'BÁ', img: motion, category: 'training' },
        { level: '3-5 ANOS', title: 'HIP-HOP BABIES I', time: '18H30', studio: 'ESTÚDIO 2', teacher: 'JOJO', img: babies, category: 'complementary' },
    ],
    'Terça': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'LENA', img: hipHopKids, category: 'training' },
        { level: '9-13 ANOS', title: 'MOTION I', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, category: 'training' },
        { level: 'NÍVEL ABERTO', title: 'AFRO HOUSE', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'DILSON', img: afroHouse, category: 'complementary' },
        { level: '+8 ANOS', title: 'CONTEMPORÂNEO', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'SOFIA DAVID LUZ', img: contemporaneo, category: 'complementary' },
        { level: '+30 ANOS', title: 'OLD SCHOOL', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'BÁ', img: oldSchool, category: 'training' },
        { level: 'NÍVEL I', title: 'TURMA DE FORMAÇÃO', time: '18H15', studio: 'GRÉMIO', teacher: 'BIA', img: gremio, category: 'training' },
        { level: 'NÍVEL II', title: 'TURMA DE FORMAÇÃO', time: '19H00', studio: 'GRÉMIO', teacher: 'BIA', img: gremio, category: 'training' },
    ],
    'Quarta': [
        { level: '+8 ANOS', title: 'BARRA DE CHÃO', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: barraChao, category: 'complementary' },
        { level: '+13 ANOS', title: 'ART + STYLE + TASTE', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ / BIA / BIBZ', img: artStyleTaste, category: 'training' },
        { level: 'NÍVEL ABERTO', title: 'LATINAS', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'RICARDO COELHO', img: latinas, category: 'complementary' },
        { level: 'NÍVEL II', title: 'HIP-HOP', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'GONÇALO CABRAL', img: hipHopII, category: 'complementary' },
        { level: '3-5 ANOS', title: 'HIP-HOP BABIES II', time: '18H30', studio: 'ESTÚDIO 2', teacher: 'JOJO', img: babies, category: 'complementary' },
        { level: 'NÍVEL I', title: 'CHOREOGRAPHY', time: '19H15', studio: 'ESTÚDIO 2', teacher: 'BIBZ', img: choreographyI, category: 'complementary' },
        { level: 'NÍVEL I', title: 'HIP-HOP', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'GONÇALO CABRAL', img: hipHopI, category: 'complementary' },
    ],
    'Quinta': [
        { level: '6-8 ANOS', title: 'HIP-HOP KIDS', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'LENA', img: hipHopKids, category: 'training' },
        { level: '9-13 ANOS', title: 'MOTION', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'BÁ', img: motion, category: 'training' },
        { level: 'NÍVEL ABERTO', title: 'KIZOMBA', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'JOÃO LARANJO', img: kizomba, category: 'complementary' },
        { level: '+13 ANOS', title: 'GIRLIE', time: '21H15', studio: 'ESTÚDIO 1', teacher: 'INÊS CUNHA', img: girlie, category: 'complementary' },
        { level: 'NÍVEL II', title: 'CHOREOGRAPHY', time: '20H15', studio: 'ESTÚDIO 2', teacher: 'BIBZ', img: choreographyII, category: 'complementary' },
        { level: 'NÍVEL I', title: 'TURMA DE FORMAÇÃO', time: '18H00', studio: 'GRÉMIO', teacher: 'BIBZ', img: gremio, category: 'training' },
        { level: 'NÍVEL II', title: 'TURMA DE FORMAÇÃO', time: '18H45', studio: 'GRÉMIO', teacher: 'BIBZ', img: gremio, category: 'training' },
    ],
    'Sexta': [
        { level: 'NÍVEL ABERTO', title: 'FIT LAB', time: '18H30', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: fitLab, category: 'complementary' },
        { level: '+13 ANOS', title: 'COMERCIAL', time: '19H15', studio: 'ESTÚDIO 1', teacher: 'VERA', img: comercial, category: 'complementary' },
        { level: '+13 ANOS', title: 'FUSION', time: '20H15', studio: 'ESTÚDIO 1', teacher: 'BIBZ', img: fusion, category: 'complementary' },
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
