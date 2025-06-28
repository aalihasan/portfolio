import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'TechSpark Solutions',
    duration: 'Jan 2024 – Mar 2024',
    description:
      'Worked on developing responsive React components and collaborated with senior developers to enhance the UI of client projects.',
  },
  {
    role: 'Freelance Web Developer',
    company: 'Upwork / Fiverr',
    duration: '2023 – Present',
    description:
      'Built custom websites for small businesses using React, Tailwind CSS, Firebase. Focused on clean UI/UX and mobile-first development.',
  },
  // You can add more or leave these for placeholder
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-20">
      <div >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        {experiences.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-300">
            No professional experience added yet. Stay tuned!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-3 text-blue-600 dark:text-blue-400">
                  <FaBriefcase className="text-xl" />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                </div>
                <p className="text-gray-800 dark:text-gray-100 font-medium">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {exp.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
