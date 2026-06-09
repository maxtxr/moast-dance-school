import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import moastLogo from '../assets/images/logo/moast-logo.png';

import { NAVIGATION_LINKS } from '../constants/navigation';
import BrutalistButton from './BrutalistButton';

const navLinkClasses = 'font-sans font-bold uppercase nav-link-underline';

const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.08, duration: 0.3 },
    }),
};

const NavigationLinks = ({ mobile = false, onLinkClick = () => { } }) => (
    <>
        {NAVIGATION_LINKS.map(({ path, label }, i) => (
            <Link
                key={path}
                to={path}
                className={navLinkClasses}
                onClick={onLinkClick}
                {...(mobile ? { custom: i, variants: mobileLinkVariants, initial: 'hidden', animate: 'visible' } : {})}
            >
                {label}
            </Link>
        ))}
    </>
);

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <m.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 bg-moast-off-white border-b-4 border-black relative"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                        src={moastLogo}
                        alt="MOAST Dance School Logo"
                        className="w-full h-full object-cover"
                    />
                </Link>

                <div className="hidden md:flex gap-8">
                    <NavigationLinks />
                </div>

                <button
                    type="button"
                    className="md:hidden bg-black text-white font-sans font-bold uppercase px-4 py-2 border-[4px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {mobileMenuOpen ? 'FECHAR' : 'MENU'}
                </button>

                <Link to="/inscricoes" className="hidden md:block">
                    <BrutalistButton ariaLabel="Join MOAST Dance School">
                        JUNTA-TE!
                    </BrutalistButton>
                </Link>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden absolute top-full left-0 right-0 bg-moast-off-white border-b-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-40 overflow-hidden"
                    >
                        <m.div
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col p-6 gap-4"
                        >
                            <NavigationLinks mobile onLinkClick={closeMobileMenu} />
                            <Link
                                to="/inscricoes"
                                onClick={closeMobileMenu}
                                className="bg-black text-white font-sans font-bold uppercase px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-left block"
                                variants={mobileLinkVariants}
                                custom={NAVIGATION_LINKS.length}
                            >
                                JUNTA-TE!
                            </Link>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </m.nav>
    );
};

export default Navbar;
