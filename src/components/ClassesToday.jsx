import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { classes, getCategoryColor } from '../data/classes';
import { ClockIcon, UserIcon } from './Icons';
import { getTodayDay, getFormattedDate } from '../constants/dates';
import { BrutalistCard } from './BrutalistCard';

import graffitiOverlay from '../assets/images/graffiti-overlay.png';

const ITEMS_PER_PAGE = 2;

const ClassesToday = () => {
    const [activePage, setActivePage] = useState(0);

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
        <motion.section
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
                            <h2 className="font-serif text-5xl md:text-8xl font-black uppercase tracking-tight text-black">
                                AULAS
                            </h2>
                            <div className="bg-moast-pink px-6 py-2 md:py-3 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-1deg] ml-4 md:ml-6 mt-2">
                                <span className="font-serif text-4xl md:text-6xl font-black uppercase text-white leading-none">
                                    HOJE
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-lg md:text-xl font-medium mt-6 text-black">
                            Estas são as aulas que temos hoje! Vem fazer uma{' '}
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdpDb6w92iLZdmTs_ziQUpN15GgePl0cuaxlYDa12mRQlzTaA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b-[3px] border-moast-pink text-moast-pink font-bold pb-0.5 hover:opacity-80 transition-opacity"
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

                        <a
                            href="/horarios"
                            className="bg-white border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-sans font-bold uppercase px-6 py-3.5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all whitespace-nowrap text-sm"
                        >
                            VER HORÁRIO COMPLETO
                        </a>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch pr-4 md:pr-12 lg:pr-20 min-h-[300px]">
                    <AnimatePresence mode="wait">

                        {visibleClasses.map((danceClass, index) => (
                            <motion.div
                                key={`${activePage}-${danceClass.id || index}`}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                                className={`${getCategoryColor(danceClass.category)} border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6 md:p-8 relative flex flex-col min-h-[280px] w-full`}
                            >
                                <div
                                    className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center opacity-15 mix-blend-screen"
                                    style={{ backgroundImage: `url(${graffitiOverlay})` }}
                                />

                                <div className="bg-white px-4 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs md:text-sm uppercase w-fit z-10">
                                    {danceClass.level}
                                </div>

                                <h3 className="font-serif text-3xl md:text-4xl font-black uppercase mt-6 text-white z-10 w-[70%] drop-shadow-md">
                                    {danceClass.title}
                                </h3>

                                <p className="font-sans text-sm font-medium text-white/90 mt-2 z-10 w-[70%]">
                                    {danceClass.description || 'Descrição do estilo'}
                                </p>

                                <div className="flex gap-3 mt-auto pt-10 flex-wrap z-10">
                                    <div className="bg-white px-4 py-2 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs uppercase flex items-center h-10">
                                        <ClockIcon /> {danceClass.time}, {danceClass.studio}
                                    </div>
                                    <div className="bg-white px-4 py-2 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs uppercase flex items-center h-10">
                                        <UserIcon /> {danceClass.teacher}
                                    </div>
                                </div>

                                <div
                                    className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 border-[8px] md:border-[10px] border-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] w-32 md:w-48 aspect-[3/4] bg-white z-20"
                                    style={{ transform: 'translateY(-50%) rotate(4deg)' }}
                                >
                                    <video
                                        src={danceClass.video || danceClass.img}
                                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        aria-label={`${danceClass.title} class demonstration`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-16 pl-0 lg:pl-24">
                        <button
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
                                    key={idx}
                                    onClick={() => goToPage(idx)}
                                    aria-label={`Ir para a página ${idx + 1}`}
                                    className={`w-3 h-3 rounded-full transition-colors ${activePage === idx ? 'bg-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] border-2 border-black' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>

                        <button
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
        </motion.section>
    );
};

export default ClassesToday;
