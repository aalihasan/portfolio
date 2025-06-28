import React from 'react';
import profile from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md: bg-base-100  transition-colors duration-500">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900text-white transition-colors duration-500">
          Hasan Ali
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">
          Full Stack Developer
        </p>
        <p className=" dark:text-gray-00 max-w-md mx-auto md:mx-0 leading-relaxed transition-colors duration-500">
          I'm an undergraduate BSc in CSE student, passionate about building
          modern and responsive web applications using React, Node.js, and
          MongoDB.
        </p>
      </div>

      {/* Profile Image */}
      <div className="flex-1 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img
          src={profile}
          alt="Hasan Ali"
          className="w-68 h-68 md:w-96 md:h-96  rounded-full object-cover shadow-lg border-4 border-blue-600"
        />
      </div>
    </section>
  );
};

export default Hero;
