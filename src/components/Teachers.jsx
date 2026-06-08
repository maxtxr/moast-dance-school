import { m } from 'framer-motion';

import Navbar from './Navbar';
import PageHero from './PageHero';
import Footer from './Footer';

import { teachersData } from '../data/teachers';
import graffitiOverlay from '../assets/images/graffiti-overlay.png';

const Teachers = () => {
  return (
    <div className="min-h-screen bg-moast-off-white flex flex-col">
      <Navbar />

      <PageHero
        title="PROFESSORES"
        badgeText="LINDOS E MARAVILHOSOS :)"
        overlayImage={graffitiOverlay}
      />

      <section className="w-full bg-moast-off-white px-4 pb-24 md:pb-32 pt-16 flex-grow">
        <div className="max-w-[1232px] mx-auto flex flex-col gap-16 md:gap-20">
          {teachersData.map((teacher, index) => (
            <m.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
              className={`${teacher.bgColor} w-full min-h-[400px] md:h-[450px] border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative overflow-visible flex flex-col justify-center`}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
              </div>

              <div className={`relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-0 ${teacher.imgPos === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-[45%] h-[300px] md:h-full flex justify-center items-center relative ${teacher.imgPos === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                  <img
                    src={teacher.imgSrc}
                    alt={`Professor ${teacher.nickname}`}
                    className={`object-contain w-auto h-[115%] md:h-[125%] absolute top-1/2 -translate-y-1/2 ${teacher.imgShadow} z-20`}
                  />
                </div>

                <div className={`w-full md:w-[55%] flex flex-col justify-center z-30 mt-12 md:mt-0 ${teacher.imgPos === 'left' ? 'items-start md:items-start text-left' : 'items-start md:items-end text-left md:text-right'}`}>
                  <div className={`flex flex-wrap gap-2.5 mb-5 ${teacher.imgPos === 'right' ? 'md:justify-end' : 'justify-start'}`}>
                    {teacher.classes.map((teacherClass, classIndex) => (
                      <span
                        key={`${teacher.id}-class-${classIndex}`}
                        className="bg-white px-3 py-1.5 border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-sans font-bold text-[10px] md:text-xs uppercase"
                      >
                        {teacherClass}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-serif text-4xl md:text-[3.5rem] lg:text-[4rem] font-black uppercase text-black leading-[1.1] drop-shadow-sm">
                    {teacher.firstName} AKA{' '}
                    <span className={`${teacher.nicknameColor} border-b-[4px] ${teacher.underlineColor} pb-1 drop-shadow-md inline-block`}>
                      {teacher.nickname}
                    </span>
                  </h2>

                  <p className="font-sans text-sm md:text-base font-bold text-black/80 mt-6 max-w-md">
                    {teacher.description}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachers;
