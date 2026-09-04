import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';

import graffitiOverlay from '../assets/images/graffiti-overlay.webp';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';

import { ClockIcon, UserIcon } from './Icons';
import { classes, getCategoryColor } from '../data/classes';
import { SEASON_LABEL } from '../constants/navigation';

const useGroupedClasses = () =>
    useMemo(() => {
        const classGroups = {};

        classes.forEach(cls => {
            const key = `${cls.title}-${cls.level}`;
            if (!classGroups[key]) {
                classGroups[key] = { ...cls, days: [cls.dayOfWeek] };
            } else if (!classGroups[key].days.includes(cls.dayOfWeek)) {
                classGroups[key].days.push(cls.dayOfWeek);
            }
        });

        return Object.values(classGroups);
    }, []);

const Classes = () => {
    const allClasses = useGroupedClasses();
    const [selectedVideoClass, setSelectedVideoClass] = useState(null);

    return (
        <div className="min-h-screen bg-moast-off-white flex flex-col">
            <Navbar />

            <PageHero title="AULAS" badgeText={`EM VIGOR NA ${SEASON_LABEL}`} overlayImage={graffitiOverlay} />

            <section className="w-full bg-moast-off-white px-4 pb-20 md:pb-28 pt-10 overflow-hidden flex-grow">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[0.85] tracking-normal font-black uppercase text-black">
                                    AULAS
                                </h1>

                                <div className="bg-moast-magenta px-4 pt-2 pb-1 md:px-6 md:pt-4 md:pb-3 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-1deg] ml-3 md:ml-6 mt-1 md:mt-2">
                                    <span className="font-serif text-[clamp(1.2rem,3vw,1.8rem)] leading-none font-black uppercase text-white pt-1 md:pt-1.5">
                                        TODAS
                                    </span>
                                </div>
                            </div>

                            <p className="font-sans text-base md:text-xl font-medium mt-6 text-black max-w-2xl">
                                Explora o nosso horário, descobre os estilos que mais combinam contigo e junta-te a nós numa{' '}
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdpDb6w92iLZdmTs_ziQUpN15GgePl0cuaxlYDa12mRQlzTaA/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-b-[3px] border-moast-magenta text-moast-magenta font-bold pb-0.5 hover:opacity-80 transition-opacity"
                                >
                                    aula experimental
                                </a>{' '}
                                !
                            </p>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-3 mt-4 lg:mt-0">
                            <Link
                                to="/horarios"
                                className="bg-moast-magenta border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-white font-sans font-bold uppercase px-6 py-3.5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all whitespace-nowrap text-sm"
                            >
                                VER HORÁRIOS DA ÉPOCA
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 lg:gap-y-24 items-stretch pr-0 md:pr-16 lg:pr-24">
                        {allClasses.map((danceClass, index) => (
                            <m.div
                                key={danceClass.id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
                                onClick={() => setSelectedVideoClass(danceClass)}
                                className={`${getCategoryColor(danceClass.category)} border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-5 md:p-6 relative flex flex-col min-h-[220px] w-full cursor-pointer group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200`}
                            >
                                <div className="flex items-center justify-between w-full max-w-[65%] md:max-w-[70%] z-10">
                                    <div className="bg-white px-4 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs md:text-sm uppercase w-fit">
                                        {danceClass.level}
                                    </div>
                                    <span className="bg-black text-white text-[10px] md:text-xs font-sans font-black uppercase px-2.5 py-1 border-[2px] border-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        VER VÍDEO ▶
                                    </span>
                                </div>

                                <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.35rem] xl:text-2xl leading-[1.1] tracking-wide font-black uppercase mt-4 md:mt-6 text-white z-10 w-full max-w-[65%] md:max-w-[70%] break-words">
                                    {danceClass.title}
                                </h3>

                                <div className="flex gap-2 md:gap-3 mt-auto pt-4 md:pt-6 flex-wrap z-10 w-full max-w-[60%] md:max-w-[65%]">
                                    <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-[10px] md:text-xs uppercase flex items-center h-8 md:h-10">
                                        <ClockIcon /> {danceClass.time}, {danceClass.studio}
                                    </div>
                                    <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-[10px] md:text-xs uppercase flex items-center h-8 md:h-10">
                                        <UserIcon /> {danceClass.teacher.split(' ')[0]}
                                    </div>
                                </div>

                                <div
                                    className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 border-[6px] md:border-[10px] border-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] w-28 sm:w-36 md:w-48 aspect-[3/4] bg-white z-20 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300"
                                    style={{ transform: 'translateY(-50%) rotate(4deg)' }}
                                >
                                    <img
                                        src={danceClass.img || danceClass.poster || graffitiOverlay}
                                        alt={danceClass.title}
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                                        <div className="w-9 h-9 md:w-12 md:h-12 bg-moast-magenta border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] flex items-center justify-center text-white text-sm md:text-lg pl-0.5">
                                            ▶
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedVideoClass && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideoClass(null)}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <m.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-white border-[4px] border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] p-4 md:p-6"
                        >
                            {/* Header do Popover */}
                            <div className="flex justify-between items-start mb-4 gap-4">
                                <div>
                                    <span className="bg-moast-magenta text-white px-3 py-1 border-[2px] border-black text-xs font-sans font-black uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)] inline-block mb-1">
                                        {selectedVideoClass.level}
                                    </span>
                                    <h3 className="font-serif font-black text-xl md:text-2xl uppercase text-black leading-tight">
                                        {selectedVideoClass.title}
                                    </h3>
                                    <p className="font-sans font-bold text-xs md:text-sm text-black/70 mt-0.5">
                                        Professor: {selectedVideoClass.teacher} | {selectedVideoClass.studio}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedVideoClass(null)}
                                    className="bg-moast-dark-pink text-white font-sans font-black text-sm px-3 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                                >
                                    ✕ FECHAR
                                </button>
                            </div>

                            {/* Conteúdo do Vídeo */}
                            <div className="w-full aspect-video bg-black border-[3px] border-black overflow-hidden relative">
                                {selectedVideoClass.video ? (
                                    <video
                                        src={selectedVideoClass.video}
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-white font-sans text-sm p-4 text-center">
                                        <p className="font-bold">Vídeo de demonstração indisponível para esta modalidade.</p>
                                    </div>
                                )}
                            </div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Classes;