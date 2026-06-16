import { useState, useMemo } from 'react';
import { m, AnimatePresence } from 'framer-motion';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';

import { classes, getCategoryColor } from '../data/classes';
import graffitiOverlay from '../assets/images/graffiti-overlay.webp';

const STUDIOS = ['ESTÚDIO 1', 'ESTÚDIO 2', 'GRÉMIO'];
const DAY_ORDER = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const parseTime = (t) => {
    if (t === 'MANHÃ') return 0;
    if (!t || t === 'TBA') return Infinity;
    const raw = t.includes('-') ? t.split('-')[0].trim() : t;
    const match = raw.match(/(\d{2})H(\d{2})/i);
    return match ? +match[1] * 60 + +match[2] : Infinity;
};

const formatTimeRange = (startTime, studio) => {
    if (!startTime || startTime === 'TBA' || startTime === 'MANHÃ') {
        return startTime?.toLowerCase() || '';
    }

    const match = startTime.match(/(\d{2})H(\d{2})/i);
    if (!match) return startTime.toLowerCase();

    let hours = parseInt(match[1], 10);
    let minutes = parseInt(match[2], 10);

    let duration = 60;
    if (studio === 'GRÉMIO' || startTime === '18H30' || startTime === '18H45') {
        duration = 45;
    }

    minutes += duration;
    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes %= 60;
    }

    const endHours = hours.toString().padStart(2, '0');
    const endMinutes = minutes.toString().padStart(2, '0');
    const endTime = `${endHours}h${endMinutes}`;

    return `${startTime.toLowerCase()} - ${endTime}`;
};

const ClassCard = ({ cls }) => (
    <m.div
        layout
        className={`${getCategoryColor(cls.category)} border-[3px] border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col justify-center items-center text-center h-full min-h-[130px]`}
    >
        <p className="font-sans font-black text-sm md:text-base lg:text-[17px] uppercase leading-tight text-white drop-shadow-md mb-1.5">
            {cls.title}
        </p>
        <p className="font-sans font-bold text-[11px] md:text-xs uppercase text-white/90">
            {cls.teacher}
        </p>
        <p className="font-sans font-bold text-[9px] md:text-[10px] uppercase text-white/80 mt-1">
            {cls.level}
        </p>
    </m.div>
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
                                className={`font-serif font-black uppercase text-display-badge px-4 md:px-8 py-3 border-[3px] border-black transition-all duration-200 ${activeStudio === studio
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
                            <div className="hidden lg:block overflow-x-auto pb-12 px-2">
                                {/* AUMENTÁMOS A LARGURA DA 1ª COLUNA de 140px para 180px */}
                                <div className="grid gap-x-4 gap-y-6 min-w-[1150px]" style={{ gridTemplateColumns: `180px repeat(6, 1fr)` }}>
                                    <div />
                                    {DAY_ORDER.map((day) => (
                                        <div key={day} className="bg-white border-[3px] border-black py-3 flex items-center justify-center text-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                                            <span className="font-sans font-black uppercase text-lg text-black">{day}</span>
                                        </div>
                                    ))}

                                    {timeSlots.map((time) => (
                                        <div key={time} className="relative" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: `180px repeat(6, 1fr)`, gap: '1rem' }}>

                                            {/* AJUSTÁMOS A LINHA TRACEJADA para começar depois dos 180px (180 + gap de 16px = 196px) */}
                                            <div className="absolute left-[196px] right-0 top-1/2 -translate-y-1/2 border-t-[3px] border-dotted border-black/20 pointer-events-none z-0" />

                                            <div className="flex items-center justify-end pr-4 relative z-10">
                                                <div className="bg-white border-[3px] border-black px-4 py-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                                                    <span className="font-sans font-black text-xs md:text-sm text-black whitespace-nowrap tracking-wide">
                                                        {formatTimeRange(time, activeStudio)}
                                                    </span>
                                                </div>
                                            </div>

                                            {DAY_ORDER.map((day) => {
                                                const cls = getClassAtSlot(day, time);
                                                return (
                                                    <div key={`${day}-${time}`} className="min-h-[130px] relative z-10">
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
                                    <p className="font-serif font-bold text-center text-xl uppercase leading-none opacity-40 py-10">
                                        Sem aulas neste estúdio.
                                    </p>
                                ) : (
                                    Object.entries(mobileGrouped).map(([day, dayClasses]) => (
                                        <div key={day}>
                                            <h3 className="font-serif font-black uppercase text-[clamp(1.25rem,5vw,1.5rem)] bg-black text-white pt-1.5 pb-2.5 px-6 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-6 inline-block rotate-[-2deg]">
                                                {day}
                                            </h3>
                                            <div className="flex flex-col gap-5">
                                                {dayClasses.map((cls) => (
                                                    <div key={cls.id} className={`${getCategoryColor(cls.category)} border-[3px] border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}>
                                                        <div className="flex justify-between items-start gap-4">
                                                            <div>
                                                                <p className="font-sans font-black text-xl md:text-2xl uppercase text-white drop-shadow-sm leading-tight">{cls.title}</p>
                                                                <p className="font-sans font-bold text-sm uppercase text-white/90 mt-1">{cls.teacher}</p>
                                                                <p className="font-sans font-bold text-xs uppercase text-white/80 mt-1">{cls.level}</p>
                                                            </div>
                                                            <div className="bg-white border-[3px] border-black px-2 py-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)] shrink-0 rotate-[2deg]">
                                                                <span className="font-sans font-black text-[10px] md:text-xs uppercase text-black">
                                                                    {formatTimeRange(cls.time, cls.studio)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
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