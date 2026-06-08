import { useState, useMemo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';

import { classes, getCategoryColor } from '../data/classes';
import graffitiOverlay from '../assets/images/graffiti-overlay.png';

const STUDIOS = ['ESTÚDIO 1', 'ESTÚDIO 2', 'GRÉMIO'];
const DAY_ORDER = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const parseTime = (t) => {
    if (t === 'MANHÃ') return 0;
    if (!t || t === 'TBA') return Infinity;
    const raw = t.includes('-') ? t.split('-')[0].trim() : t;
    const m = raw.match(/(\d{2})H(\d{2})/i);
    return m ? +m[1] * 60 + +m[2] : Infinity;
};

const formatTimeSlot = (t) => t.toLowerCase();

const ClassCard = ({ cls }) => (
    <Link to={`/aulas#${cls.id}`} className="block h-full">
        <m.div
            layout
            whileHover={{ scale: 1.05, zIndex: 30, x: -2, y: -2 }}
            className={`${getCategoryColor(cls.category)} border-[3px] border-black p-4 cursor-pointer shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all flex flex-col justify-center items-center text-center h-full min-h-[120px]`}
        >
            <p className="font-sans font-black text-lg md:text-m uppercase leading-tight text-white drop-shadow-md mb-1">
                {cls.title}
            </p>
            <p className="font-sans font-bold text-xs uppercase text-white/90">
                {cls.teacher}
            </p>
            <p className="font-sans font-bold text-[10px] uppercase text-white/80 mt-1">
                {cls.level}
            </p>
        </m.div>
    </Link>
);

const SchedulePage = () => {
    const [activeStudio, setActiveStudio] = useState('ESTÚDIO 1');

    const filteredClasses = useMemo(() => {
        const base = classes.filter((c) => c.studio === activeStudio && c.title !== 'COMPETIÇÃO');

        if (activeStudio === 'ESTÚDIO 1') {
            base.push({
                id: 'class-comp',
                level: 'COMPETIÇÃO',
                title: 'COMPETIÇÃO',
                time: '10H00',
                studio: 'ESTÚDIO 1',
                teacher: 'BÁ',
                dayOfWeek: 'Sábado',
                category: 'special'
            });
        }
        return base;
    }, [activeStudio]);

    const timeSlots = useMemo(() => {
        const times = [...new Set(filteredClasses.map((c) => c.time))];
        return times.sort((a, b) => parseTime(a) - parseTime(b));
    }, [filteredClasses]);

    const getClassAtSlot = (day, time) => {
        return filteredClasses.find((c) => c.dayOfWeek === day && c.time === time);
    };

    const mobileGrouped = useMemo(() => {
        const groups = {};
        DAY_ORDER.forEach((day) => {
            const dayClasses = filteredClasses
                .filter((c) => c.dayOfWeek === day)
                .sort((a, b) => parseTime(a.time) - parseTime(b.time));
            if (dayClasses.length) groups[day] = dayClasses;
        });
        return groups;
    }, [filteredClasses]);

    return (
        <div className="min-h-screen bg-moast-off-white flex flex-col">
            <Navbar />

            <PageHero
                title="HORÁRIOS"
                badgeText="EM VIGOR NA ÉPOCA 25/26"
                overlayImage={graffitiOverlay}
            />

            <section className="w-full px-4 py-16 md:py-24 flex-grow">
                <div className="max-w-[1400px] mx-auto">

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20">
                        {STUDIOS.map((studio) => (
                            <button
                                type="button"
                                key={studio}
                                onClick={() => setActiveStudio(studio)}
                                className={`font-serif font-black uppercase text-xl md:text-3xl px-8 py-3 border-[3px] border-black transition-all duration-200 ${activeStudio === studio
                                    ? 'bg-black text-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] rotate-[-2deg]'
                                    : 'bg-white text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                                    }`}
                            >
                                {studio}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <m.div
                            key={activeStudio}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Desktop Grid */}
                            <div className="hidden lg:block overflow-x-auto pb-12">
                                <div className="grid gap-x-4 gap-y-6 min-w-[1100px]" style={{ gridTemplateColumns: `140px repeat(6, 1fr)` }}>
                                    <div />
                                    {DAY_ORDER.map((day) => (
                                        <div key={day} className="bg-white border-[3px] border-black py-3 flex items-center justify-center text-center">
                                            <span className="font-sans font-black uppercase text-lg text-black">{day}</span>
                                        </div>
                                    ))}

                                    {timeSlots.map((time) => (
                                        <div key={time} className="contents">
                                            <div className="flex items-center justify-end pr-6">
                                                <div className="bg-white border-[3px] border-black px-3 py-1.5">
                                                    <span className="font-sans font-bold text-sm text-black whitespace-nowrap">
                                                        {formatTimeSlot(time)}
                                                    </span>
                                                </div>
                                            </div>

                                            {DAY_ORDER.map((day) => {
                                                const cls = getClassAtSlot(day, time);
                                                return (
                                                    <div key={`${day}-${time}`} className="min-h-[120px]">
                                                        {cls && <ClassCard cls={cls} />}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile List */}
                            <div className="lg:hidden space-y-12 max-w-lg mx-auto">
                                {Object.keys(mobileGrouped).length === 0 ? (
                                    <p className="font-serif font-bold text-center text-xl uppercase opacity-40 py-10">
                                        Sem aulas neste estúdio.
                                    </p>
                                ) : (
                                    Object.entries(mobileGrouped).map(([day, dayClasses]) => (
                                        <div key={day}>
                                            <h3 className="font-serif font-black uppercase text-3xl bg-black text-white py-2 px-6 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-6 inline-block rotate-[-2deg]">
                                                {day}
                                            </h3>
                                            <div className="flex flex-col gap-5">
                                                {dayClasses.map((cls) => (
                                                    <Link to={`/aulas#${cls.id}`} key={cls.id}>
                                                        <div className={`${getCategoryColor(cls.category)} border-[3px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}>
                                                            <div className="flex justify-between items-start gap-4">
                                                                <div>
                                                                    <p className="font-sans font-black text-2xl uppercase text-white drop-shadow-sm leading-tight">{cls.title}</p>
                                                                    <p className="font-sans font-bold text-sm uppercase text-white/90 mt-1">{cls.teacher}</p>
                                                                    <p className="font-sans font-bold text-xs uppercase text-white/80 mt-1">{cls.level}</p>
                                                                </div>
                                                                <div className="bg-white border-[3px] border-black px-2 py-1 shrink-0">
                                                                    <span className="font-sans font-black text-xs uppercase">{formatTimeSlot(cls.time)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </m.div>
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SchedulePage;
