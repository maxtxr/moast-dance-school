import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

import graffitiOverlay from '../assets/optimized/images/graffiti-overlay.webp';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';
import SpecialClassesSection from './SpecialClassesSection';

import { ClockIcon, UserIcon } from './Icons';
import { classes, getCategoryColor } from '../data/classes';
import { SEASON_LABEL } from '../constants/navigation';
import { getTeacherFirstNames } from '../utils/teachers';


const DAY_ORDER = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

const useClassesByDay = () =>
    useMemo(() => {
        const groups = {};
        DAY_ORDER.forEach(day => {
            const dayClasses = classes.filter(cls => cls.dayOfWeek === day);
            if (dayClasses.length) groups[day] = dayClasses;
        });

        return Object.entries(groups);
    }, []);

const Classes = () => {
    const dayGroups = useClassesByDay();

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

                    <SpecialClassesSection />

                    {dayGroups.map(([day, dayClasses]) => (
                        <div key={day} className="mb-16 lg:mb-24 last:mb-0">
                            <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                                <m.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-black text-white font-serif font-black uppercase text-[clamp(1.1rem,3vw,1.5rem)] leading-none pt-2 pb-3 px-5 md:px-7 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-2deg] whitespace-nowrap"
                                >
                                    {day}
                                </m.h2>

                                <div className="flex-1 border-t-[3px] border-dotted border-black/30" />

                                <span className="bg-white border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] px-3 py-1.5 font-sans font-bold text-[10px] md:text-xs uppercase text-black whitespace-nowrap">
                                    {dayClasses.length} {dayClasses.length === 1 ? 'aula' : 'aulas'}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 lg:gap-y-24 items-stretch pr-0 md:pr-16 lg:pr-24">
                                {dayClasses.map((danceClass, index) => (
                                    <m.div
                                        key={danceClass.id || index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-50px' }}
                                        transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
                                        className={`${getCategoryColor(danceClass.category)} border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-5 pr-[6.5rem] sm:pr-[8.5rem] md:p-6 relative flex flex-col min-h-[220px] w-full group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200`}
                                    >
                                        <div className="flex items-center justify-between w-full md:max-w-[70%] z-10">
                                            <div className="bg-white px-4 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs md:text-sm uppercase w-fit">
                                                {danceClass.level}
                                            </div>
                                        </div>

                                        <h3 className="font-serif text-[clamp(0.85rem,4.2vw,1.5rem)] sm:text-2xl lg:text-[1.35rem] xl:text-2xl leading-[1.1] tracking-wide font-black uppercase mt-4 md:mt-6 text-white z-10 w-full md:max-w-[70%] break-words">
                                            {danceClass.title}
                                        </h3>

                                        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3 mt-auto pt-4 md:pt-6 z-10 w-full md:max-w-[65%]">
                                            <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-[10px] md:text-xs uppercase flex items-center min-h-8 md:min-h-10 leading-tight whitespace-nowrap">
                                                <ClockIcon /> {danceClass.time}, {danceClass.studio}
                                            </div>
                                            <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-[10px] md:text-xs uppercase flex items-center min-h-8 md:min-h-10 leading-tight whitespace-nowrap">
                                                <UserIcon /> {getTeacherFirstNames(danceClass.teacher)}
                                            </div>
                                        </div>

                                        <div
                                            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 border-[6px] md:border-[10px] border-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] w-28 sm:w-36 md:w-48 aspect-[3/4] bg-white z-20 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300"
                                            style={{ transform: 'translateY(-50%) rotate(4deg)' }}
                                        >
                                            <img
                                                src={danceClass.img || graffitiOverlay}
                                                alt={danceClass.title}
                                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    </m.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Classes;