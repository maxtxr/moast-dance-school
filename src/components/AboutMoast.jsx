import { m } from 'framer-motion';

import motionImg from '../assets/images/mds/motion.jpg';
import artImg from '../assets/images/mds/art.jpg';
import styleImg from '../assets/images/mds/style.jpg';
import tasteImg from '../assets/images/mds/taste.jpg';

const moastImages = [
  { id: 'motion', src: motionImg, alt: 'Motion' },
  { id: 'art', src: artImg, alt: 'Art' },
  { id: 'style', src: styleImg, alt: 'Style' },
  { id: 'taste', src: tasteImg, alt: 'Taste' },
];

const AboutMoast = () => {
  return (
    <m.section
      id="moast"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-moast-light-pink relative pt-20 pb-0 md:pt-28 md:pb-0 flex flex-col"
    >
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

      <div className="w-full relative flex flex-col items-center h-full">
        <div className="mb-16 z-10">
          <div className="bg-moast-black px-8 py-3 shadow-[6px_6px_0_0_#CF8DBB]">
            <span className="font-serif text-4xl md:text-6xl font-black uppercase text-moast-teal tracking-widest">
              MOAST?
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-0 mt-auto">
          {moastImages.map((img) => (
            <m.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex w-full"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover block"
              />
            </m.div>
          ))}
        </div>
      </div>
    </m.section>
  );
};

export default AboutMoast;
