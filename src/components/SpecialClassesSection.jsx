import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

import graffitiOverlay from '../assets/optimized/images/graffiti-overlay.webp';
import { activeSpecialClasses } from '../data/specialClasses';
import { InstagramIcon } from './Icons';

const ActionLink = ({ href = '/inscricoes', className, children }) => {
    if (href.startsWith('http')) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {children}
            </a>
        );
    }

    return (
        <Link to={href} className={className}>
            {children}
        </Link>
    );
};

const SpecialClassesSection = () => {
    if (!activeSpecialClasses.length) return null;

    return (
        <section className="w-full mb-16 lg:mb-24">
            {/* Full-width header divider */}
            <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10 w-full">
                <m.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4 }}
                    className="bg-black text-white font-serif font-black uppercase text-[clamp(1.1rem,3vw,1.5rem)] leading-none pt-2 pb-3 px-5 md:px-7 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-2deg] whitespace-nowrap"
                >
                    SPECIAL CLASSES
                </m.h2>

                <div className="flex-1 border-t-[3px] border-dotted border-black/30" />

                <span className="bg-moast-teal border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] px-3 py-1.5 font-sans font-bold text-[10px] md:text-xs uppercase text-black whitespace-nowrap rotate-[1deg]">
                    NOVO
                </span>
            </div>

            {/* Centered card container */}
            <div className="flex flex-col items-center gap-8 w-full">
                {activeSpecialClasses.map((specialClass, index) => (
                    <m.article
                        key={specialClass.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.45, delay: index * 0.1 }}
                        className="w-full max-w-4xl bg-moast-pink border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative overflow-hidden flex flex-col md:flex-row"
                    >
                        {/* Subtle noise and texture */}
                        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none z-0" />
                        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply z-0">
                            <img
                                src={graffitiOverlay}
                                alt=""
                                aria-hidden="true"
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* Content side */}
                        <div className="relative z-10 p-6 md:p-8 flex-1 flex flex-col justify-between gap-6">
                            <div className="space-y-4">
                                {/* Title & Guest */}
                                <div>
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                        <h3 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-none font-black uppercase text-white tracking-wide">
                                            {specialClass.style}
                                        </h3>
                                        <span className="font-serif text-[clamp(1.4rem,3.2vw,2.1rem)] leading-none font-black uppercase text-moast-magenta">
                                            C/ {specialClass.guestName}
                                        </span>
                                    </div>

                                    {specialClass.guestInstagram && (
                                        <a
                                            href={specialClass.guestInstagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-sans font-bold uppercase text-[11px] text-white/90 hover:text-moast-magenta transition-colors mt-2"
                                        >
                                            <InstagramIcon className="w-3.5 h-3.5" />
                                            <span className="underline decoration-2 underline-offset-4">
                                                {specialClass.guestHandle}
                                            </span>
                                        </a>
                                    )}
                                </div>

                                {/* Clean Dates Grid */}
                                <div>
                                    <span className="text-[10px] font-sans font-black uppercase tracking-wider text-white/80 block mb-1.5">
                                        Datas & Níveis
                                    </span>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                        {specialClass.dates.map((date) => (
                                            <div
                                                key={`${date.month}-${date.day}-${date.level}`}
                                                className="bg-white border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] px-2.5 py-1.5 text-center flex flex-col justify-center"
                                            >
                                                <span className="font-sans font-black text-xs uppercase text-black leading-tight">
                                                    {date.day} {date.month}
                                                </span>
                                                <span className="font-sans font-bold text-[10px] uppercase text-moast-magenta leading-tight mt-0.5">
                                                    {date.level}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Consolidated Pricing Card */}
                                <div className="bg-white border-[2px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] p-3">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-black/15">
                                        {specialClass.pricing.map((tier, idx) => (
                                            <div key={tier.audience} className={`${idx > 0 ? 'pt-2.5 sm:pt-0 sm:pl-3' : ''}`}>
                                                <span
                                                    className={`${tier.bgColor || 'bg-moast-off-white'} inline-block px-2 py-0.5 border border-black font-sans font-black text-[9px] uppercase tracking-wider text-black`}
                                                >
                                                    {tier.audience}
                                                </span>
                                                <div className="flex items-baseline gap-3 mt-1.5">
                                                    {tier.options.map((option) => (
                                                        <div key={option.label} className="flex items-baseline gap-1">
                                                            <span className="font-sans font-bold text-[10px] uppercase text-black/70">
                                                                {option.label}
                                                            </span>
                                                            <span className="font-serif text-sm md:text-base font-black text-moast-magenta">
                                                                {option.price}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Row */}
                            <div className="flex justify-end pt-1">
                                <ActionLink
                                    href={specialClass.registrationUrl}
                                    className="group bg-black text-white font-sans font-black uppercase text-xs md:text-sm px-7 py-3 border-[2px] border-black shadow-[4px_4px_0_0_#70ECDF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#70ECDF] transition-all whitespace-nowrap w-full sm:w-auto text-center"
                                >
                                    INSCREVE-TE
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="inline-block h-4 w-4 ml-2 stroke-[3px] group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </ActionLink>
                            </div>
                        </div>

                        {/* Poster Column */}
                        <div className="relative w-full md:w-64 lg:w-72 shrink-0 border-t-[3px] md:border-t-0 md:border-l-[3px] border-black bg-black flex items-center justify-center overflow-hidden">
                            <img
                                src={specialClass.img || graffitiOverlay}
                                alt={specialClass.img ? `${specialClass.guestName} - ${specialClass.style}` : ''}
                                aria-hidden={specialClass.img ? undefined : 'true'}
                                className={`w-full h-full object-cover ${specialClass.img ? '' : 'opacity-60 grayscale'}`}
                                loading="lazy"
                                decoding="async"
                            />

                            {!specialClass.img && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 px-3 text-center">
                                    <span className="font-serif text-xl font-black uppercase text-white">
                                        {specialClass.guestName}
                                    </span>
                                    <span className="bg-moast-teal border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] px-2 py-0.5 font-sans font-bold text-[9px] uppercase tracking-wider text-black">
                                        FOTO EM BREVE
                                    </span>
                                </div>
                            )}
                        </div>
                    </m.article>
                ))}
            </div>
        </section>
    );
};

export default SpecialClassesSection;