import { motion } from 'framer-motion';

import PageHero from './PageHero';
import Navbar from './Navbar';
import Footer from './Footer';
import graffitiOverlay from '../assets/images/graffiti-overlay.png';

const Moast = () => {
  return (
    <div className="min-h-screen bg-moast-off-white flex flex-col">
      <Navbar />
      <PageHero
        title="MOAST"
        badgeText="A nossa escola"
        overlayImage={graffitiOverlay}
      />

      <section className="w-full bg-moast-off-white px-4 pb-20 md:pb-28 pt-10 overflow-hidden flex-grow">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-moast-teal px-8 py-3 border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] font-sans font-black uppercase text-sm md:text-base text-black w-fit mx-auto rotate-[-1deg]"
          >
            Conteúdo em desenvolvimento
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Moast;
