import moastVideo from '../assets/videos/moast-video1.mp4';
import graffitiOverlay from '../assets/images/graffiti-overlay.webp';
import whiteLetters from '../assets/images/logo/white_letters.webp';
import whiteNeg from '../assets/images/logo/mds_neg.webp';

import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

const gridPatternStyle = {
    backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
    backgroundSize: '60px 60px',
};

const Hero = () => (
    <section className="w-full bg-moast-magenta relative py-20 md:py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-0" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" style={gridPatternStyle} />

        <div
            className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
            style={{ backgroundImage: `url(${graffitiOverlay})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        <img
            src={whiteNeg}
            alt="Decoração de Fundo"
            className="absolute -bottom-24 -right-24 w-[400px] md:w-[600px] lg:w-[800px] opacity-25 pointer-events-none z-0"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col z-10"
            >
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-8 bg-moast-dark-magenta rounded-full flex items-center justify-center shrink-0">
                    <m.img
                        src={whiteLetters}
                        alt="Selo MOAST"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 w-full h-full object-contain drop-shadow-sm"
                    >
                    </m.img>
                </div>

                <h1 className="font-serif font-black uppercase text-black w-full text-[clamp(3rem,8.5vw,6.5rem)] leading-[0.95] tracking-normal lg:tracking-wide">
                    {['MOAST', 'DANCE', 'SCHOOL'].map((word, i) => (
                        <m.span
                            key={word}
                            initial={{ opacity: 0, y: 60, rotate: i === 1 ? -3 : 3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="block pb-1 sm:pb-2 whitespace-nowrap"
                        >
                            {word}
                        </m.span>
                    ))}
                </h1>

                <div className="w-24 h-1.5 bg-black mt-6 mb-6 md:mt-8"></div>

                <p className="font-sans text-base md:text-xl text-black/90 max-w-lg leading-relaxed">
                    A escola de dança onde o movimento encontra a arte. Vem descobrir o teu estilo.
                </p>

                <Link to="/inscricoes">
                    <m.button
                        whileHover={{ x: 2, y: 2, boxShadow: '2px 2px 0 0 rgba(0,0,0,1)' }}
                        className="bg-black text-white font-sans font-black uppercase px-6 py-3 md:px-10 md:py-5 border-[3px] border-black shadow-[5px_5px_0_0_#95D1D3] hover:bg-gray-900 transition-all mt-6 md:mt-10 w-fit text-sm md:text-lg"
                    >
                        JUNTA-TE!
                    </m.button>
                </Link>
            </m.div>

            <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative border-[8px] md:border-[14px] border-white shadow-[6px_6px_0_0_rgba(0,0,0,1),_10px_10px_0_0_rgba(92,184,178,1)] md:shadow-[8px_8px_0_0_rgba(0,0,0,1),_12px_12px_0_0_rgba(92,184,178,1)] rotate-[2.5deg] overflow-hidden h-[50vh] md:h-[60vh] lg:h-[80vh] hover:rotate-[0deg] transition-transform duration-500 w-full max-w-md md:max-w-lg lg:max-w-none mx-auto mt-8 lg:mt-0"
            >
                <video
                    src={moastVideo}
                    aria-label="Dance crew performing"
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </m.div>
        </div >
    </section >
);

export default Hero;