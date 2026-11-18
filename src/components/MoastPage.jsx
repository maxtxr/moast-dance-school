import { m } from 'framer-motion';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';

import graffitiOverlay from '../assets/optimized/images/graffiti-overlay.webp';
import moastVideo from '../assets/videos/moast-video2.mp4';
import videoPoster from '../assets/optimized/classes/photos/choreographyII.webp';
import diretorasImg from '../assets/optimized/classes/photos/diretorasII.webp';

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.15,
        },
    },
};

const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const pillars = [
    { label: 'MOTION', color: 'bg-moast-magenta', rotate: '2deg' },
    { label: 'ART', color: 'bg-moast-pink', rotate: '-2deg' },
    { label: 'STYLE', color: 'bg-moast-teal', rotate: '1deg' },
    { label: 'TASTE', color: 'bg-moast-dark-magenta', rotate: '-1deg' },
];

const methodSteps = [
    {
        step: '01',
        title: 'MISSÃO',
        desc: 'Expandir a dança como arte por todos, fomentando o movimento como ajuda à saúde. Focamo-nos em desenvolver capacidades técnicas e artísticas e contribuir para a formação em diversos estilos.'
    },
    {
        step: '02',
        title: 'VISÃO',
        desc: 'Criar um espaço onde todos se permitam ser, evoluir, crescer e libertar. Mais do que ensinar, queremos ser uma escola de referência para toda a comunidade.'
    },
    {
        step: '03',
        title: 'ESSÊNCIA',
        desc: 'A nossa essência reside na verdade e nas emoções. O principal é estimular que dancem com o coração e se expressem livremente, valorizando cada individualidade.'
    },
    {
        step: '04',
        title: 'VALORES',
        desc: 'Os valores em que a nossa escola se alicerça diariamente são o respeito, a confiança, o amor, a união, a cooperação e a ética.'
    },
];

const MoastPage = () => {
    return (
        <div className="min-h-screen bg-moast-off-white flex flex-col">
            <Navbar />

            <PageHero
                title="MOAST"
                badgeText="A NOSSA ESCOLA"
                overlayImage={graffitiOverlay}
            />

            <section className="w-full relative py-20 md:py-32 overflow-hidden flex-grow flex flex-col">
                <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-0" />

                <div className="w-full max-w-7xl mx-auto px-6 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

                    {/* LEFT COLUMN — Storytelling */}
                    <m.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-100px' }}
                        className="flex flex-col gap-12"
                    >
                        {/* Manifesto */}
                        <m.div variants={staggerItem} className="space-y-6">
                            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase text-black flex flex-col pt-1 pb-3 leading-[1.1] md:leading-[1.15] tracking-[0.01em] gap-1 md:gap-2">
                                <span className="block">MAIS QUE DANÇA...</span>
                                <span className="block">UMA FAMÍLIA</span>
                            </h2>

                            <div className="w-24 h-1.5 bg-black" />

                            <p className="font-sans text-base md:text-xl text-black leading-relaxed max-w-lg text-justify hyphens-auto">
                                A MOAST é uma escola de dança, fundada em 2024, pelas bailarinas, professoras e coreógrafas Bárbara Matos e Beatriz Matos.
                            </p>
                            <p className="font-sans text-base md:text-xl text-black leading-relaxed max-w-lg text-justify hyphens-auto">
                                A escola segue o mote Motion of Art, Style and Taste. Motion refere-se ao movimento físico na dança, mas também simboliza o progresso, a mudança ou a evolução na expressão artística.
                                Art representa a criatividade e a expressão artística em diferentes formas. Style refere-se ao
                                estilo pessoal que define a forma como a arte é expressa. E, por fim, Taste que significa o bom
                                gosto, a sensibilidade e a capacidade de apreciar a arte.
                            </p>
                        </m.div>

                        {/* Pillars */}
                        <m.div variants={staggerItem} className="grid grid-cols-2 gap-4 md:gap-5">
                            {pillars.map((p) => (
                                <div
                                    key={p.label}
                                    className={`${p.color} px-2 py-2 md:px-5 md:py-2.5 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:rotate-0 transition-transform duration-300 flex items-center justify-center`}
                                    style={{ transform: `rotate(${p.rotate})` }}
                                >
                                    <span className="font-serif text-[clamp(1.15rem,6vw,1.6rem)] md:text-5xl font-black uppercase text-black drop-shadow-sm pt-1 tracking-wide whitespace-nowrap leading-none">
                                        {p.label}
                                    </span>
                                </div>
                            ))}
                        </m.div>

                    </m.div>

                    {/* RIGHT COLUMN — Visuals */}
                    <m.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                        className="relative flex flex-col items-center pt-10 lg:pt-20 lg:sticky lg:top-10 lg:self-start"
                    >
                        {/* Background polaroid deco (rotated teal block) */}
                        <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-[90%] h-[90%] bg-moast-teal border-[14px] border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] rotate-[6deg] overflow-hidden z-0">
                            <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
                        </div>

                        {/* Main polaroid video */}
                        <div className="relative border-[10px] md:border-[14px] border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:shadow-[10px_10px_0_0_rgba(0,0,0,1)] rotate-[-2deg] md:rotate-[-3deg] overflow-hidden w-[92%] sm:w-full mx-auto h-[50vh] md:h-[60vh] lg:h-[75vh] hover:rotate-0 transition-all duration-500 z-10 group">
                            <video
                                src={moastVideo}
                                poster={videoPoster}
                                preload="metadata"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                autoPlay
                                loop
                                muted
                                playsInline
                                aria-label="MOAST Dance School promotional video"
                            />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity" />
                        </div>

                        {/* Caption badge */}
                        <div className="bg-moast-teal px-6 py-2.5 border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] -mt-4 rotate-[1deg] w-fit z-20 hover:scale-105 transition-transform">
                            <span className="font-sans font-black uppercase text-xs md:text-sm text-black tracking-widest leading-none">
                                ✦ A NOSSA ESCOLA!! ✦
                            </span>
                        </div>
                    </m.div>

                </div>

                {/* Directors */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-full max-w-7xl mx-auto px-6 mt-20 md:mt-32 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16"
                >
                    <div className="relative w-full md:w-[42%] shrink-0 rotate-[-2deg] group">
                        <div className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-3 md:p-4">
                            <img
                                src={diretorasImg}
                                alt="Bárbara Matos e Beatriz Matos, diretoras da MOAST"
                                className="w-full h-[300px] sm:h-[380px] md:h-[460px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-moast-teal border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] px-5 py-2 rotate-[2deg] w-max"> */}
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex w-max gap-3 justify-center">
                            <div className="bg-moast-pink px-4 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] rotate-[-2deg]">
                                <span className="font-sans font-bold text-xs md:text-sm uppercase text-black">
                                    ✦ Beatriz Matos ✦
                                </span>
                            </div>
                            <div className="bg-moast-magenta px-4 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] rotate-[2deg]">
                                <span className="font-sans font-bold text-xs md:text-sm uppercase text-black">
                                    ✦ Bárbara Matos ✦
                                </span>
                            </div>
                        </div>
                        {/* <span className="font-sans font-black uppercase text-xs md:text-sm tracking-widest text-black leading-none">
                            ✦ AS DIRETORAS ✦
                        </span> */}
                    </div>

                    <div className="flex flex-col gap-5 md:gap-6 items-start text-left">
                        <div className="bg-moast-black px-4 py-2 md:px-6 md:py-3 w-fit -rotate-1 shadow-[6px_6px_0_0_#70ECDF]">
                            <span className="font-serif text-display-badge font-black uppercase text-moast-teal pt-1 block">
                                AS DIRETORAS
                            </span>
                        </div>

                        <p className="font-sans text-base md:text-lg text-black leading-relaxed max-w-xl text-justify hyphens-auto">
                            A MOAST foi fundada em 2024 pelas bailarinas, professoras e
                            coreógrafas{' '}
                            <strong className="font-black uppercase">Bárbara Matos</strong> e{' '}
                            <strong className="font-black uppercase">Beatriz Matos</strong>,
                            as diretoras da escola, com a missão de transformar o Motion of
                            Art, Style and Taste numa comunidade onde todos podem ser,
                            evoluir e libertar.
                        </p>

                        <p className="font-sans text-base md:text-lg text-black leading-relaxed max-w-xl text-justify hyphens-auto">
                            Juntas, acompanham cada aluno de perto, valorizando a
                            individualidade e inspirando todos a dançar com o coração.
                        </p>
                    </div>
                </m.div>

                {/* Missão, Visão, Essência e Valores */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-full max-w-7xl mx-auto px-6 mt-16 md:mt-24 relative z-10"
                >
                    <div className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6 md:p-12 relative overflow-hidden flex flex-col">
                        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

                        <div className="bg-black px-6 py-3 md:px-8 md:py-4 w-fit mb-8 md:mb-12 -ml-2 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-1deg] relative z-10 max-w-[95%]">
                            <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-black uppercase text-moast-teal pt-1 tracking-[0.02em] block leading-[1.15]">
                                MISSÃO, VISÃO, ESSÊNCIA E VALORES
                            </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-10 relative z-10">
                            {methodSteps.map((m) => (
                                <div key={m.step} className="flex gap-6 items-start">
                                    <span className="font-serif text-display-card font-black text-moast-magenta min-w-[32px] md:min-w-[50px] pt-1">
                                        {m.step}
                                    </span>

                                    <div className="flex-1 space-y-1 md:space-y-2">
                                        <h4 className="font-serif text-[clamp(1rem,3vw,1.5rem)] font-black uppercase text-black leading-[1.1] pt-0.5 group-hover:underline">
                                            {m.title}
                                        </h4>

                                        <p className="font-sans font-medium text-sm md:text-lg text-black/80">
                                            {m.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </m.div>
            </section>

            <Footer />
        </div>
    );
};

export default MoastPage;