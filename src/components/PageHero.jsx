import whiteNeg from '../assets/images/logo/mds_neg.png';

import { m } from 'framer-motion';

const gridPatternStyle = {
    backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
    backgroundSize: '40px 40px',
};

const PageHero = ({ title, badgeText, bgColor = 'bg-moast-magenta', textColor = 'text-black', overlayImage }) => (
    <section className={`w-full ${bgColor} relative py-24 md:py-56 pb-32 md:pb-72 overflow-hidden flex items-center justify-center`}>
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={gridPatternStyle} />

        {overlayImage && (
            <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply">
                <img
                    src={overlayImage}
                    alt="Graffiti overlay"
                    className="w-full h-full object-cover mix-blend-multiply opacity-70"
                />
            </div>
        )}

        <img
            src={whiteNeg}
            alt="Decoração de Fundo"
            className="absolute -bottom-24 -right-24 w-[400px] md:w-[600px] lg:w-[800px] opacity-25 pointer-events-none z-0"
        />  

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="w-24 h-1 bg-black/20 mx-auto mb-11"></div>

                <h1 className={`font-serif text-4xl md:text-9xl lg:text-[7rem] font-black uppercase ${textColor} leading-none tracking-tighter`}>
                    {title}
                </h1>

                <div className="w-24 h-1 bg-black/20 mx-auto mt-10"></div>
            </m.div>

            {badgeText && (
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="bg-moast-teal px-8 py-3 border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] font-sans font-black uppercase text-sm md:text-base text-black w-fit mt-8 rotate-[-1deg] hover:rotate-[0deg] transition-transform duration-300"
                >
                    {badgeText}
                </m.div>
            )}
        </div>

        <div className="absolute -bottom-16 left-0 w-full h-32 bg-moast-off-white origin-bottom-left -rotate-[1.5deg] border-t-[4px] border-black z-20 scale-110"></div>
    </section>
);

export default PageHero;