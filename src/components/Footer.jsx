import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import Regulamento from '../assets/pdfs/regulamento2526.pdf';
import Calendario from '../assets/pdfs/calendario2526.pdf';
import { SEASON_YEARS } from '../constants/navigation';

const Footer = () => {
    return (
        <m.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="w-full bg-moast-black"
        >
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="font-serif font-bold text-xl">
                    <span className="text-moast-magenta">MOAST </span>
                    <span className="text-moast-pink">DANCE </span>
                    <span className="text-moast-teal"> SCHOOL</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <a
                        href={Regulamento}
                        className="font-sans font-bold uppercase text-sm tracking-widest text-white hover:text-moast-magenta transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        REGULAMENTO
                    </a>

                    <a
                        href={Calendario}
                        className="font-sans font-bold uppercase text-sm tracking-widest text-white hover:text-moast-teal transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CALENDÁRIO
                    </a>
                    <Link
                        to="/contactos"
                        className="font-sans font-bold uppercase text-sm tracking-widest text-white hover:text-moast-pink transition-colors"
                    >
                        CONTACTOS
                    </Link>
                </div>

                {/* COPYRIGHT */}
                <div className="max-w-[320px]">
                    <p className="font-sans font-bold uppercase text-xs tracking-widest text-white text-center md:text-right leading-loose">
                        ©{SEASON_YEARS || '2025 - 2026'} MOAST DANCE SCHOOL. TODOS OS DIREITOS RESERVADOS.
                    </p>
                </div>
            </div>
        </m.footer>
    );
};

export default Footer;