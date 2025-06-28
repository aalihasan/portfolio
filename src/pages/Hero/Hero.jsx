import React from 'react';
import profile from '../../assets/profile.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md: bg-base-100  transition-colors duration-500">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900text-white transition-colors duration-500">
          Hasan Ali
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">
          Web Developer
        </p>
        <p className=" dark:text-gray-00 max-w-md mx-auto md:mx-0 leading-relaxed transition-colors duration-500">
          I'm an undergraduate BSc in CSE student, passionate about building
          modern and responsive web applications using React, Node.js, and
          MongoDB.
        </p>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center items-center md:justify-start gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-800  transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a
            href="/Hasan-Ali-Resume.pdf"
            download
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-1 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img
          src={profile}
          alt="Hasan Ali"
          className="w-68 h-68 md:w-96 md:h-96 p-0.5  rounded-full object-cover shadow-lg border-4 border-blue-600"
        />
      </div>
    </section>
  );
};

export default Hero;
