import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

import graffitiOverlay from '../assets/images/graffiti-overlay.png';
import whiteNeg from '../assets/images/logo/mds_neg.png';

const gridPatternStyle = {
    backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
    backgroundSize: '60px 60px',
};

const NotFoundPage = () => (
    <div className="min-h-screen bg-moast-off-white flex flex-col">
        <Navbar />

        <section className="w-full bg-moast-magenta relative flex-grow flex items-center justify-center overflow-hidden">
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

            <div className="relative z-10 text-center px-6">
                <m.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <h1 className="font-serif text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] font-black uppercase text-black leading-[1.0] tracking-wide">
                        404
                    </h1>
                </m.div>

                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-32 h-1.5 bg-black mx-auto mt-6 mb-8"
                />

                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="font-sans text-lg md:text-2xl text-black/80 max-w-md mx-auto mb-10"
                >
                    Página não encontrada...
                </m.p>

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link to="/">
                        <m.button
                            whileHover={{ x: 2, y: 2, boxShadow: '2px 2px 0 0 rgba(0,0,0,1)' }}
                            className="bg-black text-white font-sans font-black uppercase px-8 py-4 md:px-10 md:py-5 border-[3px] border-black shadow-[5px_5px_0_0_#95D1D3] hover:bg-gray-900 transition-all text-base md:text-lg"
                        >
                            VOLTAR AO INÍCIO
                        </m.button>
                    </Link>
                </m.div>
            </div>
        </section>

        <Footer />
    </div>
);

export default NotFoundPage;
