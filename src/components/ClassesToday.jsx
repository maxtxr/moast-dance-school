import { useState } from 'react';
import { Link } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';

import { classes, getCategoryColor } from '../data/classes';
import { ClockIcon, UserIcon } from './Icons';
import { getTodayDay, getFormattedDate } from '../constants/dates';

import graffitiOverlay from '../assets/images/graffiti-overlay.webp';

const ITEMS_PER_PAGE = 2;

const ClassesToday = () => {
    const [activePage, setActivePage] = useState(0);
    const [selectedVideoClass, setSelectedVideoClass] = useState(null);

    const currentDay = getTodayDay();
    const todayClasses = classes.filter(cls => cls.dayOfWeek === currentDay);
    const totalPages = Math.ceil(todayClasses.length / ITEMS_PER_PAGE);
    const visibleClasses = todayClasses.slice(
        activePage * ITEMS_PER_PAGE,
        (activePage + 1) * ITEMS_PER_PAGE
    );

    const nextPage = () => setActivePage(prev => (prev + 1) % totalPages);
    const prevPage = () => setActivePage(prev => (prev - 1 + totalPages) % totalPages);
    const goToPage = (index) => setActivePage(index);

    return (
        <m.section
            id="aulas"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-moast-off-white px-4 py-20 md:py-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <h2 className="font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[0.85] tracking-normal font-black uppercase text-black">
                                AULAS
                            </h2>

                            <div className="bg-moast-magenta px-4 pt-2 pb-1 md:px-6 md:pt-4 md:pb-3 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-1deg] ml-3 md:ml-6 mt-1 md:mt-2">
                                <span className="font-serif text-[clamp(1.2rem,3vw,1.8rem)] leading-none font-black uppercase text-white pt-1 md:pt-1.5">
                                    HOJE
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-base md:text-xl font-medium mt-6 text-black">
                            Estas são as aulas que temos hoje! Vem fazer uma{' '}
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdHQckhQQOBCV7jAc_WFhIeNQq37VrpYO1w7DLNo-xiQxFKJA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b-[3px] border-moast-magenta text-moast-magenta font-bold pb-0.5 hover:opacity-80 transition-opacity"
                            >
                                aula experimental
                            </a>{' '}
                            :)
                        </p>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-3 mt-4 lg:mt-0">
                        <p className="font-sans font-bold uppercase text-sm text-gray-700 tracking-wide">
                            {getFormattedDate()}
                        </p>

                        <Link
                            to="/aulas"
                            className="bg-moast-magenta border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-white font-sans font-bold uppercase px-6 py-3.5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all whitespace-nowrap text-sm"
                        >
                            VER TODAS AS AULAS
                        </Link>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch pr-0 md:pr-12 lg:pr-20 min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {visibleClasses.map((danceClass, index) => (
                            <m.div
                                key={`${activePage}-${danceClass.id || index}`}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedVideoClass(danceClass)}
                                className={`${getCategoryColor(danceClass.category)} border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-5 md:p-6 relative flex flex-col min-h-[220px] w-full cursor-pointer group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200`}
                            >
                                <div
                                    className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center opacity-15 mix-blend-screen"
                                    style={{ backgroundImage: `url(${graffitiOverlay})` }}
                                />

                                <div className="flex items-center justify-between w-full max-w-[65%] md:max-w-[70%] z-10">
                                    <div className="bg-white px-4 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs md:text-sm uppercase w-fit">
                                        {danceClass.level}
                                    </div>
                                    <span className="bg-black text-white text-[10px] md:text-xs font-sans font-black uppercase px-2.5 py-1 border-[2px] border-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        VER VÍDEO ▶
                                    </span>
                                </div>

                                <h3 className="font-serif text-[clamp(0.95rem,2.5vw,1.75rem)] leading-[1.1] tracking-wide font-black uppercase mt-4 md:mt-6 text-white z-10 w-full max-w-[65%] md:max-w-[70%]">
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
                    </AnimatePresence>
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-16 pl-0 lg:pl-24">
                        <button
                            type="button"
                            onClick={prevPage}
                            className="bg-white border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] w-10 h-10 flex items-center justify-center hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
                            aria-label="Página anterior"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-black stroke-[3px]" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex gap-2 mx-2">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    type="button"
                                    key={idx}
                                    onClick={() => goToPage(idx)}
                                    aria-label={`Ir para a página ${idx + 1}`}
                                    className={`w-3 h-3 rounded-full transition-colors ${activePage === idx ? 'bg-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] border-2 border-black' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={nextPage}
                            className="bg-white border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] w-10 h-10 flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
                            aria-label="Próxima página"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-black stroke-[3px]" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

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
        </m.section>
    );
};

export default ClassesToday;