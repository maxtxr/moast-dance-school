import { m } from 'framer-motion';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';

import graffitiOverlay from '../assets/images/graffiti-overlay.webp';
import moastVideo from '../assets/videos/moast-video2.mp4';

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

            <section className="w-full relative py-20 md:py-32 overflow-hidden flex-grow">
                <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-0" />

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">

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

                            <p className="font-sans font-bold text-base md:text-xl text-black leading-relaxed max-w-lg">
                                Na MOAST, a dança é mais do que movimento... é identidade, expressão e comunidade. Cada passo conta uma história, cada aula é uma celebração.
                            </p>
                        </m.div>

                        {/* Pillars */}
                        <m.div variants={staggerItem} className="grid grid-cols-2 gap-4 md:gap-5">
                            {pillars.map((p) => (
                                <div
                                    key={p.label}
                                    className={`${p.color} px-4 py-2 md:px-5 md:py-2.5 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:rotate-0 transition-transform duration-300 flex items-center justify-center`}
                                    style={{ transform: `rotate(${p.rotate})` }}
                                >
                                    <span className="font-serif text-3xl md:text-5xl font-black uppercase text-black drop-shadow-sm pt-1 tracking-wide">
                                        {p.label}
                                    </span>
                                </div>
                            ))}
                        </m.div>


                        <m.div
                            variants={staggerItem}
                            className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

                            <div className="bg-black px-6 py-3 md:px-8 md:py-4 w-fit mb-12 -ml-2 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-1deg] relative z-10 max-w-[95%]">
                                <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-black uppercase text-moast-teal pt-1 tracking-[0.02em] block leading-[1.15]">
                                    MISSÃO, VISÃO, ESSÊNCIA E VALORES
                                </span>
                            </div>

                            <div className="flex flex-col gap-8 relative z-10">
                                {methodSteps.map((m) => (
                                    <div key={m.step} className="flex gap-6 items-start">
                                        <span className="font-serif text-display-card font-black text-moast-magenta min-w-[32px] md:min-w-[50px] pt-1">
                                            {m.step}
                                        </span>

                                        <div className="flex-1 space-y-1 md:space-y-2">
                                            <h4 className="font-serif text-[clamp(1rem,3vw,1.5rem)] font-black uppercase text-black leading-[1.1] pt-0.5 group-hover:underline">
                                                {m.title}
                                            </h4>

                                            <p className="font-sans font-medium text-sm md:text-lg text-black/80 max-w-[90%]">
                                                {m.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </m.div>

                    </m.div>

                    {/* RIGHT COLUMN — Visuals */}
                    <m.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                        className="relative flex flex-col items-center pt-10 lg:pt-20 lg:sticky lg:top-10"
                    >
                        {/* Background polaroid deco (rotated teal block) */}
                        <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-[90%] h-[90%] bg-moast-teal border-[14px] border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] rotate-[6deg] overflow-hidden z-0">
                            <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
                        </div>

                        {/* Main polaroid video */}
                        <div className="relative border-[14px] border-white shadow-[10px_10px_0_0_rgba(0,0,0,1)] rotate-[-3deg] overflow-hidden w-full h-[50vh] md:h-[60vh] lg:h-[75vh] hover:rotate-0 transition-all duration-500 z-10 group">
                            <video
                                src={moastVideo}
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
            </section>

            <Footer />
        </div>
    );
};

export default MoastPage;