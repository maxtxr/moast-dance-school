import { m } from 'framer-motion';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';

import { merchItems } from '../data/merch';
import merchTrailerVideo from '../assets/merch/merch.mp4';
import merchGroup from '../assets/merch/merch.jpg';
import hoodieImg from '../assets/merch/hoodie.jpg';
import toteImg from '../assets/merch/tote.jpg';
import tshirt1Img from '../assets/merch/tshirt1.jpg';
import tshirt2Img from '../assets/merch/tshirt2.jpg';
import topImg from '../assets/merch/top.jpg';
import sockImg from '../assets/merch/sock.jpg';
import graffitiOverlay from '../assets/images/graffiti-overlay.png';
import { SEASON_LABEL } from '../constants/navigation';

const merchPhotos = [
    { src: merchGroup, alt: 'Coleção MOAST' },
    { src: hoodieImg, alt: 'Hoodie' },
    { src: tshirt1Img, alt: 'Groove Tee' },
    { src: tshirt2Img, alt: 'T-shirt' },
    { src: toteImg, alt: 'Sway Tote' },
    { src: topImg, alt: 'Flow Fit' },
    { src: sockImg, alt: 'Rhythm Feet' },
];

const PricingPage = () => (
    <div className="min-h-screen bg-moast-off-white flex flex-col">
        <Navbar />

        <PageHero
            title="MERCH"
            badgeText={`EM VIGOR NA ${SEASON_LABEL}`}
            overlayImage={graffitiOverlay}
        />

        <section className="relative px-4 pb-24 md:pb-32 pt-16 flex-grow overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none z-0" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="overflow-x-auto pb-2 mb-14 scrollbar-thin">
                    <div className="flex gap-4 w-max px-1 py-1">
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
                            whileHover={{ y: -6, scale: 1.03 }}
                            className="flex-shrink-0 w-52 md:w-60 group"
                        >
                            <div className="bg-white border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] p-1.5 group-hover:translate-x-[-3px] group-hover:translate-y-[-3px] group-hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all">
                                <div className="relative w-full aspect-[3/4] overflow-hidden border-[2px] border-black">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                        aria-label="MOAST Merch collection trailer"
                                    >
                                        <source src={merchTrailerVideo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="pt-1.5 pb-0.5 text-center">
                                    <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-wider text-black opacity-70">
                                        ✦ MOAST MERCH ✦
                                    </span>
                                </div>
                            </div>
                        </m.div>

                        {merchPhotos.map((photo) => (
                            <m.div
                                key={photo.alt}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06, type: 'spring', stiffness: 100, damping: 16 }}
                                whileHover={{ y: -6, scale: 1.03 }}
                                className="flex-shrink-0 w-52 md:w-60 group"
                            >
                                <div className="bg-white border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] p-1.5 group-hover:translate-x-[-3px] group-hover:translate-y-[-3px] group-hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all">
                                    <div className="w-full aspect-[3/4] overflow-hidden border-[2px] border-black">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            draggable={false}
                                        />
                                    </div>
                                    <div className="pt-1.5 pb-0.5 text-center">
                                        <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-wider text-black opacity-70">
                                            {photo.alt}
                                        </span>
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>

                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-moast-magenta border-[4px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-4 md:p-6 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0" />

                        <div className="relative z-10 grid grid-cols-[2fr_1fr] md:grid-cols-[5fr_2fr] gap-3 md:gap-4">
                            <div className="bg-moast-teal border-[3px] border-black flex items-center justify-center py-4 px-2 text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                                <h2 className="font-serif text-2xl md:text-3xl font-black text-white uppercase drop-shadow-sm">
                                    MERCH
                                </h2>
                            </div>
                            <div className="bg-moast-teal border-[3px] border-black flex items-center justify-center py-4 px-2 text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                                <h2 className="font-serif text-2xl md:text-3xl font-black text-white uppercase drop-shadow-sm">
                                    VALOR
                                </h2>
                            </div>

                            {merchItems.map((item) => (
                                <div key={item.name} className="contents group">
                                    <div className="bg-white border-[3px] border-black flex flex-col items-center justify-center py-5 md:py-6 px-4 md:px-8 text-center text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all">
                                        <span className="font-sans font-black text-lg md:text-xl uppercase leading-tight">
                                            {item.name}
                                        </span>
                                        {item.details && (
                                            <span className="font-sans font-bold text-xs md:text-sm mt-1.5 whitespace-pre-line leading-snug opacity-70 uppercase">
                                                {item.details}
                                            </span>
                                        )}
                                    </div>

                                    <div className="bg-white border-[3px] border-black flex items-center justify-center py-5 md:py-6 px-4 md:px-8 text-center text-moast-magenta shadow-[4px_4px_0_0_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all">
                                        <span className="font-serif font-black text-2xl md:text-3xl">
                                            {item.price}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </m.div>
                </div>
            </section>

            <Footer />
        </div>
    );

export default PricingPage;
