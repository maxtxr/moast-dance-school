import { m } from 'framer-motion';
import Navbar from './Navbar';
import PageHero from './PageHero';
import Footer from './Footer';
import graffitiOverlay from '../assets/images/graffiti-overlay.png';

const cards = [
    {
        href: 'https://forms.gle/CLZvbazrQvWEdDNNA',
        bg: 'bg-moast-magenta',
        title: 'AULA EXPERIMENTAL',
        description: 'Vem descobrir o teu estilo e sente a energia da nossa escola.',
    },
    {
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfo1f4_lpYsblU6_67xLIAFjFafhnmjwJAL3RTUEykfE1NgNQ/viewform',
        bg: 'bg-moast-pink',
        title: 'INSCRIÇÃO (QUINTA DO CONDE)',
        description: 'Garante a tua vaga para a nova época.',
    },
    {
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSct5gYxDHz1excuCoOOjFBshtGz2Ot8-WFmxskMvWADx290cg/viewform',
        bg: 'bg-moast-teal',
        title: 'INSCRIÇÃO (GRÉMIO)',
        description: 'Junta-te às nossas turmas de formação no polo do Grémio.',
    },
];

const containerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const RegistrationPage = () => (
    <div className="min-h-screen bg-moast-off-white flex flex-col">
        <Navbar />

        <PageHero
            title="INSCRIÇÕES"
            badgeText="JUNTA-TE À MOAST!"
            overlayImage={graffitiOverlay}
        />

        <section className="w-full bg-moast-off-white px-4 pb-20 md:pb-28 pt-10 md:pt-16 overflow-hidden flex-grow">
            <div className="max-w-7xl mx-auto">
                <m.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {cards.map((card) => (
                        <m.a
                            key={card.href}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            className={`${card.bg} relative flex flex-col border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8 md:p-10 min-h-[320px] md:min-h-[380px] transition-all duration-200 group cursor-pointer hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]`}
                        >
                            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none z-0" />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="font-serif font-black text-3xl md:text-4xl uppercase leading-tight">
                                    {card.title}
                                </h3>
                                <p className="font-sans font-bold text-base md:text-lg mt-4 md:mt-6 max-w-xs">
                                    {card.description}
                                </p>
                            </div>

                            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-transform duration-200"
                                >
                                    <path
                                        d="M7 17L17 7M17 7H8M17 7V16"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </m.a>
                    ))}
                </m.div>
            </div>
        </section>

        <Footer />
    </div>
);

export default RegistrationPage;
