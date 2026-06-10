import moastVideo from '../assets/videos/moast-video1.mp4';
import graffitiOverlay from '../assets/images/graffiti-overlay.png';
import whiteLetters from '../assets/images/logo/white_letters.png';
import whiteNeg from '../assets/images/logo/mds_neg.png';

import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

const gridPatternStyle = {
    backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
    backgroundSize: '60px 60px',
};

const Hero = () => (
    <section className="w-full bg-moast-magenta relative py-32 md:py-48 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
            <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
            >
                <div className="relative w-36 h-36 md:w-44 md:h-44 mb-10 bg-moast-dark-magenta rounded-full flex items-center justify-center">
                    <m.img
                        src={whiteLetters}
                        alt="Selo MOAST"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 w-full h-full object-contain drop-shadow-sm"
                    >
                    </m.img>
                </div>

                <h1 className="font-serif text-6xl md:text-9xl lg:text-[7rem] font-black uppercase text-black leading-[0.85] tracking-tighter">
                    {['MOAST', 'DANCE', 'SCHOOL'].map((word, i) => (
                        <m.span
                            key={word}
                            initial={{ opacity: 0, y: 60, rotate: i === 1 ? -3 : 3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="block"
                        >
                            {word}
                        </m.span>
                    ))}
                </h1>

                <div className="w-32 h-1.5 bg-black mt-8 mb-6"></div>

                <p className="font-sans text-base md:text-xl text-black/90 max-w-lg leading-relaxed">
                    A escola de dança onde o movimento encontra a arte. Vem descobrir o teu estilo.
                </p>

                <Link to="/inscricoes">
                    <m.button
                        whileHover={{ x: 2, y: 2, boxShadow: '2px 2px 0 0 rgba(0,0,0,1)' }}
                        className="bg-black text-white font-sans font-black uppercase px-8 py-4 md:px-10 md:py-5 border-[3px] border-black shadow-[5px_5px_0_0_#95D1D3] hover:bg-gray-900 transition-all mt-8 md:mt-10 w-fit text-base md:text-lg"
                    >
                        BORA DANÇAR?
                    </m.button>
                </Link>
            </m.div>

            <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative border-[10px] md:border-[14px] border-white shadow-[8px_8px_0_0_rgba(0,0,0,1),_12px_12px_0_0_rgba(92,184,178,1)] rotate-[2.5deg] overflow-hidden h-[40vh] md:h-[70vh] lg:h-[80vh] hover:rotate-[0deg] transition-transform duration-500 w-full max-w-lg lg:max-w-none mx-auto"
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
