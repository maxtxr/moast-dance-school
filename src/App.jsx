import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';

import LandingPage from './components/LandingPage';
import SchedulePage from './components/SchedulePage';
import PricingPage from './components/PricingPage';
import Classes from './components/Classes';
import Teachers from './components/Teachers';
import MoastPage from './components/MoastPage';
import NotFoundPage from './components/NotFoundPage';
import RegistrationPage from './components/RegistrationPage';
import ContactPage from './components/ContactPage';

const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: 'easeIn' } },
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <LazyMotion features={domAnimation}>
                <m.div
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Routes location={location}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/moast" element={<MoastPage />} />
                        <Route path="/aulas" element={<Classes />} />
                        <Route path="/professores" element={<Teachers />} />
                        <Route path="/horarios" element={<SchedulePage />} />
                        <Route path="/precario" element={<PricingPage />} />
                        <Route path="/contactos" element={<ContactPage />} />
                        <Route path="/404" element={<NotFoundPage />} />
                        <Route path="/inscricoes" element={<RegistrationPage />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                    </Routes>
                </m.div>
            </LazyMotion>
        </AnimatePresence>
    );
};

function App() {
    return (
        <HashRouter>
            <div className="w-full min-h-screen bg-moast-off-white">
                <AnimatedRoutes />
            </div>
        </HashRouter>
    );
}

export default App;
