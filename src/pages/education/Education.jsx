import React from 'react';
import { FaSchool, FaUniversity } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import { MdArrowDownward } from 'react-icons/md';

const Education = () => {
  const educationData = [
    {
      level: 'BSc in Computer Science & Engineering',
      icon: <FaUniversity />,
      year: '2022 – Present (Graduating August 2026)',
      institution: 'Uttara University',
      result: 'Undergraduate (Running)',
      color: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      level: 'Higher Secondary Certificate (HSC)',
      icon: <PiStudentBold />,
      year: '2021',
      institution: 'Ullapara Science College',
      board: 'Board: Rajshahi',
      result: 'GPA 5.00',
      color: 'bg-yellow-100 dark:bg-yellow-800',
    },
    {

      level: 'Secondary School Certificate (SSC)',
      icon: <FaSchool />,
      year: '2019',
      institution: 'Malotidanga Purbopara High School',
      board: 'Board: Rajshahi',
      result: 'GPA 5.00',
      color: 'bg-green-100 dark:bg-green-900',
    },
  ];

  return (
    <section id="education" className="py-16 px-4 md:px-20">
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl font-bold  mb-12">
          Educational Qualification
        </h2>

        <div className="flex flex-col items-center gap-6 relative">
          {educationData.map((edu, idx) => (
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              key={idx}
              className={`card w-full md: shadow-md ${edu.color} text-gray-900 dark:text-white z-10`}
            >
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="card-body items-center text-center"
              >
                <div className="text-4xl text-blue-600 dark:text-blue-400 mb-2">
                  {edu.icon}
                </div>
                <h3 className="card-title text-lg md:text-xl">{edu.level}</h3>
                <p>{edu.institution}</p>
                {edu.board && <p>{edu.board}</p>}
                <p>{edu.year}</p>
                <p className="font-semibold">{edu.result}</p>
              </div>
            </div>
          ))}

          {/* Arrow chain from top to bottom */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[105px] md:top-[125px] h-[80%] w-0.5 bg-gradient-to-b from-transparent via-blue-300 to-transparent z-0 pointer-events-none" />
          <div className="absolute top-[28%] left-1/2 -translate-x-1/2 text-blue-400 animate-bounce z-0">
            <MdArrowDownward className="text-3xl" />
          </div>
          <div className="absolute top-[68%] left-1/2 -translate-x-1/2 text-blue-400 animate-bounce z-0">
            <MdArrowDownward className="text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
