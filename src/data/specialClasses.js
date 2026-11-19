import specialClassPhoto from '../assets/optimized/classes/photos/specialClass.webp';

/**
 * SPECIAL CLASSES
 *
 * One-off guest workshops. To announce a new guest, add a new object to this
 * array (or replace the current one). Set `active` to false to keep an old
 * edition in the file without showing it on the site.
 *
 * `img` can be an imported image. Leave it as null to show the branded
 * placeholder until a photo is available.
 *
 * `registrationUrl` accepts an internal route (e.g. '/inscricoes') or an
 * external URL (e.g. a Google Form).
 */
export const specialClasses = [
    {
        id: 'tommy-breaking-2026',
        active: true,
        style: 'BREAKING',
        guestName: 'TOMMY',
        guestHandle: '@__tommy.dl__',
        guestInstagram: 'https://www.instagram.com/__tommy.dl__/',
        img: specialClassPhoto,
        dates: [
            { month: 'OUT', day: '26', level: 'NÍVEL I' },
            { month: 'OUT', day: '27', level: 'NÍVEL II' },
            { month: 'NOV', day: '23', level: 'NÍVEL I' },
            { month: 'NOV', day: '24', level: 'NÍVEL II' },
        ],
        pricing: [
            {
                audience: 'ALUNOS MOAST',
                bgColor: 'bg-moast-teal',
                options: [
                    { label: '1 AULA', price: '5€' },
                    { label: '2 AULAS', price: '7,50€' },
                ],
            },
            {
                audience: 'EXTERNOS',
                bgColor: 'bg-moast-teal',
                options: [
                    { label: '1 AULA', price: '15€' },
                    { label: '2 AULAS', price: '20€' },
                ],
            },
        ],
        registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScjI8p6z-h9voRVit1cyKbpiiL002LK5T-Da4siAweN_eGmxA/viewform',
    },
];

export const activeSpecialClasses = specialClasses.filter((specialClass) => specialClass.active);
