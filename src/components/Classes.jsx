import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

import graffitiOverlay from '../assets/images/graffiti-overlay.png';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';

import { ClockIcon, UserIcon } from './Icons';
import { classes, getCategoryColor } from '../data/classes';
import { formatDaysList } from '../constants/dates';
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

    return (
        <div className="min-h-screen bg-moast-off-white flex flex-col">
            <Navbar />

            <PageHero title="AULAS" badgeText={`EM VIGOR NA ${SEASON_LABEL}`} overlayImage={graffitiOverlay} />

            <section className="w-full bg-moast-off-white px-4 pb-20 md:pb-28 pt-10 overflow-hidden flex-grow">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h1 className="font-serif text-4xl md:text-8xl font-black uppercase tracking-tight text-black">
                                    AULAS
                                </h1>
                                <div className="bg-moast-magenta px-4 py-1 md:px-6 md:py-3 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-2deg] ml-3 md:ml-6 mt-1 md:mt-2">
                                    <span className="font-serif text-2xl md:text-6xl font-black uppercase text-white leading-none">
                                        TODAS
                                    </span>
                                </div>
                            </div>

                            <p className="font-sans text-base md:text-xl font-medium mt-6 text-black max-w-2xl">
                                Explora o nosso catálogo completo. De fundações a coreografia, encontra o estilo que mais combina contigo e vem fazer uma{' '}
                                <span className="border-b-[3px] border-moast-magenta text-moast-magenta font-bold pb-0.5">
                                    aula experimental
                                </span>{' '}
                                :)
                            </p>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-3 mt-4 lg:mt-0">
                            <Link
                                to="/horarios"
                                className="bg-white border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-sans font-bold uppercase px-6 py-3.5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all whitespace-nowrap text-sm"
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
                                className={`${getCategoryColor(danceClass.category)} bg-noise bg-blend-multiply border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6 md:p-8 relative flex flex-col min-h-[280px] w-full`}
                            >
                                <div className="bg-white px-4 py-1.5 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs md:text-sm uppercase w-fit z-10">
                                    {danceClass.level}
                                </div>

                                <h3 className="font-serif text-3xl md:text-5xl font-black uppercase mt-6 text-white z-10 w-full md:w-[70%] drop-shadow-md leading-tight">
                                    {danceClass.title}
                                </h3>

                                <p className="font-sans text-sm font-medium text-white/90 mt-3 z-10 w-full md:w-[70%] leading-relaxed">
                                    {danceClass.description || 'Descrição do estilo'}
                                </p>

                                <div className="flex gap-3 mt-auto pt-10 flex-wrap z-10">
                                    <div className="bg-white px-4 py-2 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs uppercase flex items-center h-10">
                                        <ClockIcon /> {formatDaysList(danceClass.days)}
                                    </div>

                                    <div className="bg-white px-4 py-2 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] font-sans font-bold text-xs uppercase flex items-center h-10">
                                        <UserIcon /> {danceClass.teacher}
                                    </div>
                                </div>

                                <div
                                    className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 border-[8px] md:border-[10px] border-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] w-28 md:w-48 aspect-[3/4] bg-white z-20"
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
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Classes;
