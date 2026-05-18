import { motion } from 'framer-motion';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';

import graffitiOverlay from '../assets/images/graffiti-overlay.png';
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
    { step: '01', title: 'TÉCNICA', desc: 'Construção de bases sólidas em cada estilo, do chão à coreografia.' },
    { step: '02', title: 'EXPRESSÃO', desc: 'Liberdade criativa e interpretação musical para encontrar a tua voz.' },
    { step: '03', title: 'PERFORMANCE', desc: 'Presença de palco, confiança no movimento e entrega total.' },
    { step: '04', title: 'COMUNIDADE', desc: 'Crescemos juntos dentro e fora do estúdio... uma verdadeira família.' },
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
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-100px' }}
                        className="flex flex-col gap-12"
                    >

                        {/* Manifesto */}
                        <motion.div variants={staggerItem} className="space-y-6">
                            <h2 className="font-serif text-[3.5rem] md:text-7xl lg:text-[85px] xl:text-[95px] font-black uppercase text-black leading-[0.85] tracking-[-0.03em] flex flex-col py-2">
                                {['MAIS QUE', 'DANÇA...', 'UMA', 'FAMÍLIA'].map((line, i) => (
                                    <span key={i} className="whitespace-nowrap block">
                                        {line}
                                    </span>
                                ))}
                            </h2>
                            <div className="w-24 h-1.5 bg-black" />
                            <p className="font-sans font-bold text-lg md:text-xl text-black leading-relaxed max-w-lg">
                                Na MOAST, a dança é mais do que movimento... é identidade, expressão e comunidade. Cada passo conta uma história, cada aula é uma celebração.
                            </p>
                        </motion.div>

                        {/* Pillars */}
                        <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 md:gap-5">
                            {pillars.map((p) => (
                                <div
                                    key={p.label}
                                    className={`${p.color} px-4 py-2 md:px-5 md:py-2.5 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:rotate-0 transition-transform duration-300 flex items-center`}
                                    style={{ transform: `rotate(${p.rotate})` }}
                                >
                                    <span className="font-serif text-4xl md:text-5xl font-black uppercase text-black leading-[0.85] tracking-tight drop-shadow-sm pt-1">
                                        {p.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        {/* O Nosso Método */}
                        <motion.div
                            variants={staggerItem}
                            className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-10 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

                            <div className="bg-black px-5 py-2.5 w-fit mb-12 -ml-2 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-1deg] relative z-10">
                                <span className="font-serif text-xl md:text-3xl font-black uppercase text-moast-teal leading-none">
                                    O NOSSO MÉTODO
                                </span>
                            </div>

                            <div className="flex flex-col gap-8 relative z-10">
                                {methodSteps.map((m) => (
                                    <div key={m.step} className="flex gap-6 items-start">
                                        <span className="font-serif text-3xl md:text-4xl font-black text-moast-magenta leading-none min-w-[50px] pt-1">
                                            {m.step}
                                        </span>
                                        <div className="flex-1 space-y-2">
                                            <h4 className="font-serif text-xl md:text-2xl font-black uppercase text-black leading-none group-hover:underline">
                                                {m.title}
                                            </h4>
                                            <p className="font-sans font-medium text-base md:text-lg text-black/80 max-w-[90%]">
                                                {m.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT COLUMN — Visuals */}
                    <motion.div
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
                            />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity" />
                        </div>

                        {/* Caption badge */}
                        <div className="bg-moast-teal px-6 py-2.5 border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] -mt-4 rotate-[1deg] w-fit z-20 hover:scale-105 transition-transform">
                            <span className="font-sans font-black uppercase text-xs md:text-sm text-black tracking-widest leading-none">
                                ✦ A NOSSA ESCOLA!! ✦
                            </span>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MoastPage;