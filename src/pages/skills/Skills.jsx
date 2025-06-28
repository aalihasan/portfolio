import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

const skillsList = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaGithub />, name: 'GitHub' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold  mb-10">My Skills</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center">
          {skillsList.map(({ icon, name }, idx) => (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              key={idx}
              className="group flex flex-col items-center p-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <div className="text-5xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {icon}
              </div>
              <p className="text-sm mt-3 text-gray-800 dark:text-gray-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
