import { m } from 'framer-motion';

import Navbar from './Navbar';
import PageHero from './PageHero';
import Footer from './Footer';

import { teachersData } from '../data/teachers';
import graffitiOverlay from '../assets/images/graffiti-overlay.webp';

const Teachers = () => {
  return (
    <div className="min-h-screen bg-moast-off-white flex flex-col">
      <Navbar />

      <PageHero
        title="PROFESSORES"
        badgeText="EQUIPA DE 2025/2026"
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

              <div className={`relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-0 ${teacher.imgPos === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-[45%] h-[300px] md:h-full flex justify-center items-center relative ${teacher.imgPos === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                  <img
                    src={teacher.imgSrc}
                    alt={`Professor ${teacher.nickname || teacher.firstName}`}
                    className={`object-contain w-auto h-[115%] md:h-[125%] absolute top-1/2 -translate-y-1/2 ${teacher.imgShadow} z-20`}
                  />
                </div>

                <div className={`w-full md:w-[55%] flex flex-col justify-center z-30 mt-12 md:mt-0 ${teacher.imgPos === 'left' ? 'items-start md:items-start text-left' : 'items-start md:items-end text-left md:text-right'}`}>
                  <div className={`flex flex-wrap gap-2.5 mb-5 md:mb-6 ${teacher.imgPos === 'right' ? 'md:justify-end' : 'justify-start'}`}>
                    {teacher.classes.map((teacherClass, classIndex) => (
                      <span
                        key={`${teacher.id}-class-${classIndex}`}
                        className="bg-white px-3 py-1.5 border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-sans font-bold text-[10px] md:text-xs uppercase"
                      >
                        {teacherClass}
                      </span>
                    ))}
                  </div>

                  <h2 className={`font-serif text-[clamp(1.5rem,5vw,4rem)] font-black uppercase text-black leading-[1.1] drop-shadow-sm pt-2 flex flex-wrap gap-x-3 md:gap-x-4 gap-y-2 md:gap-y-5 ${teacher.imgPos === 'right' ? 'justify-start md:justify-end' : 'justify-start'}`}>                    {(() => {
                    if (teacher.nickname) {
                      return (
                        <>
                          <span className="flex items-end pb-1 md:pb-2">
                            {teacher.firstName}
                          </span>
                          <span className={`flex items-end ${teacher.nicknameColor} border-b-[4px] md:border-b-[6px] ${teacher.underlineColor} pb-1 md:pb-2 drop-shadow-md`}>
                            {teacher.nickname}
                          </span>
                        </>
                      );
                    }

                    if (teacher.id === 'moikana' || teacher.id === 'alex-sofi') {
                      return (
                        <span className={`flex items-end ${teacher.nicknameColor} border-b-[4px] md:border-b-[6px] ${teacher.underlineColor} pb-1 md:pb-2 drop-shadow-md`}>
                          {teacher.firstName}
                        </span>
                      );
                    }

                    const nameParts = teacher.firstName.split(' ');
                    const firstWord = nameParts[0];
                    const restOfName = nameParts.slice(1).join(' ');

                    return (
                      <>
                        <span className={`flex items-end ${teacher.nicknameColor} border-b-[4px] md:border-b-[6px] ${teacher.underlineColor} pb-1 md:pb-2 drop-shadow-md`}>
                          {firstWord}
                        </span>
                        {restOfName && (
                          <span className="flex items-end pb-1 md:pb-2">
                            {restOfName}
                          </span>
                        )}
                      </>
                    );
                  })()}
                  </h2>

                  <p className="font-sans text-xs sm:text-sm md:text-base font-bold text-black/80 mt-4 md:mt-8 max-w-md leading-relaxed">
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