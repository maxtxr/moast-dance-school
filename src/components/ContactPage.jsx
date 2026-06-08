import { m } from 'framer-motion';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';
import graffitiOverlay from '../assets/images/graffiti-overlay.png';

const CONTACTS = {
    phones: ['+351 927 360 732', '+351 968 863 157'],
    email: 'moastdanceschool@gmail.com',
};

const SOCIALS = [
    {
        name: 'INSTAGRAM',
        url: 'https://www.instagram.com/_moastdanceschool/',
        bgColor: 'bg-moast-teal',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        name: 'FACEBOOK',
        url: 'https://www.facebook.com/profile.php?id=61563880674990',
        bgColor: 'bg-moast-pink',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
];

const LOCATIONS = [
    {
        title: 'MOAST Dance School',
        subtitle: 'Quinta do Conde',
        address: 'Rua Luís de Camões, Lote 1226 A\n2975-287 Quinta do Conde',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.5743336!2d-9.0454372!3d38.5743336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM0JzI3LjYiTiA5wrAwMicyNS42Ilc!5e0!3m2!1spt-PT!2spt!4v1680000000000!5m2!1spt-PT!2spt',
    },
    {
        title: 'GRÉMIO',
        subtitle: 'Polo de Sesimbra',
        address: 'Largo José António Pereira, Nº 8\n2970-741 Sesimbra',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.284209564619!2d-9.1025531!3d38.4443903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1947b7b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sClube%20Sesimbrense!5e0!3m2!1spt-PT!2spt!4v1680000000000!5m2!1spt-PT!2spt',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
};

const MapEmbed = ({ src, title }) => (
    <div className="border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden w-full h-[300px] md:h-[400px]">
        <iframe
            src={src}
            title={title}
            className="w-full h-full"
            style={{ filter: 'grayscale(1) contrast(1.2) invert(0.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox=""
        />
    </div>
);

const ContactPage = () => (
    <div className="min-h-screen bg-moast-off-white flex flex-col">
        <Navbar />

        <PageHero
            title="CONTACTOS"
            badgeText="MOVE WITH US"
            overlayImage={graffitiOverlay}
        />

        <section className="relative px-4 pb-24 md:pb-32 pt-16 md:pt-24 flex-grow overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none z-0" />

            <m.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="max-w-6xl mx-auto relative z-10 space-y-12 md:space-y-16"
            >
                {/* TOP ROW: Contacts & Socials */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

                    {/* Contacts Card */}
                    <m.div
                        variants={cardVariants}
                        className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8 md:p-12 flex flex-col justify-center"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase mb-10 tracking-tight leading-none text-black">
                            CONTACTOS
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <p className="font-sans font-bold text-sm uppercase tracking-widest mb-3 text-black/70">
                                    TELEFONE
                                </p>
                                <div className="flex flex-col gap-3">
                                    {CONTACTS.phones.map((phone) => (
                                        <a
                                            key={phone}
                                            href={`tel:${phone.replace(/\s+/g, '')}`} 
                                            className="font-sans text-2xl md:text-3xl font-black text-black hover:text-moast-pink transition-colors duration-200 underline decoration-[3px] underline-offset-[6px] w-fit"
                                        >
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="font-sans font-bold text-sm uppercase tracking-widest mb-1 text-black/70">
                                    EMAIL
                                </p>
                                <a
                                    href={`mailto:${CONTACTS.email}`}
                                    className="font-sans text-2xl md:text-2xl font-black text-black hover:text-moast-pink transition-colors duration-200 underline decoration-[3px] underline-offset-[6px] break-all"
                                >
                                    {CONTACTS.email}
                                </a>
                            </div>
                        </div>
                    </m.div>

                    {/* Socials Card */}
                    <m.div
                        variants={cardVariants}
                        className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8 md:p-12 flex flex-col"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase mb-10 tracking-tight leading-none text-black">
                            SEGUE-NOS
                        </h2>

                        <div className="flex flex-col gap-6 justify-center flex-1">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center gap-6 border-[3px] border-black py-4 px-6 md:py-5 md:px-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all duration-200 ${social.bgColor}`}
                                >
                                    <span className="shrink-0 text-black">
                                        {social.icon}
                                    </span>
                                    <span className="font-sans text-2xl md:text-3xl font-black tracking-tight text-black">
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </m.div>
                </div>

                {/* BOTTOM ROW: Maps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {LOCATIONS.map((location) => (
                        <m.div
                            key={location.title}
                            variants={cardVariants}
                            className="flex flex-col gap-6"
                        >
                            {/* Location Info Box */}
                            <div className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6 md:p-8">
                                <h3 className="font-serif text-3xl md:text-3xl font-black uppercase tracking-tight text-black leading-none mb-2">
                                    {location.title}
                                </h3>
                                <p className="font-sans text-lg md:text-xl font-bold uppercase tracking-wider text-moast-magenta mb-6">
                                    {location.subtitle}
                                </p>
                                <p className="font-sans font-bold text-lg md:text-xl leading-snug text-black/90 whitespace-pre-line">
                                    {location.address}
                                </p>
                            </div>

                            {/* Map Box */}
                            <MapEmbed src={location.mapSrc} title={`Mapa - ${location.title}`} />
                        </m.div>
                    ))}
                </div>
            </m.div>
        </section>

        <Footer />
    </div>
);

export default ContactPage;