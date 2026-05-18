import profBibz from '../assets/images/cutout/bibz-cutout.png';
import profBa from '../assets/images/cutout/ba-cutout.png';
import profBia from '../assets/images/cutout/bia-cutout.png';
import profJojo from '../assets/images/cutout/jojo-cutout.png';

export const teachersData = [
  {
    id: 'bibz',
    firstName: 'BEATRIZ MATOS',
    nickname: 'BIBZ',
    description: 'Professora especializada em coreografia e fusão de estilos, com foco no desenvolvimento técnico e artístico.',
    classes: ['BARRA DE CHÃO', 'FUSION', 'TURMAS DE FORMAÇÃO', 'CHOREOGRAPHY'],
    bgColor: 'bg-moast-dark-magenta',
    imgShadow: 'drop-shadow-[6px_6px_0px_#95D1D3]',
    imgPos: 'left',
    imgSrc: profBibz,
    nicknameColor: 'text-moast-pink',
    underlineColor: 'border-moast-pink',
  },
  {
    id: 'ba',
    firstName: 'BÁRBARA MATOS',
    nickname: 'BÁ',
    description: 'Fundadora da MOAST com vasta experiência em formação de jovens e competição de alta performance.',
    classes: ['TURMAS DE FORMAÇÃO', 'TURMAS DE COMPETIÇÃO'],
    bgColor: 'bg-moast-pink',
    imgShadow: 'drop-shadow-[6px_6px_0px_#95D1D3]',
    imgPos: 'right',
    imgSrc: profBa,
    nicknameColor: 'text-moast-magenta',
    underlineColor: 'border-moast-magenta',
  },
  {
    id: 'bia',
    firstName: 'BEATRIZ OLIVEIRA',
    nickname: 'BIA',
    description: 'Especialista em hip-hop kids, trazendo energia e diversão para as aulas dos mais pequenos.',
    classes: ['HIP-HOP KIDS', 'TURMAS DE FORMAÇÃO'],
    bgColor: 'bg-moast-teal',
    imgShadow: 'drop-shadow-[6px_6px_0px_#CF8DBB]',
    imgPos: 'left',
    imgSrc: profBia,
    nicknameColor: 'text-moast-dark-magenta',
    underlineColor: 'border-moast-dark-magenta',
  },
  {
    id: 'jojo',
    firstName: 'LEONOR JORGE',
    nickname: 'JOJO',
    description: 'Especializada no ensino de dança para a primeira infância, criando os primeiros hábitos de movimento.',
    classes: ['HIP-HOP BABIES'],
    bgColor: 'bg-moast-dark-magenta',
    imgShadow: 'drop-shadow-[6px_6px_0px_#95D1D3]',
    imgPos: 'right',
    imgSrc: profJojo,
    nicknameColor: 'text-moast-pink',
    underlineColor: 'border-moast-pink',
  },
];
