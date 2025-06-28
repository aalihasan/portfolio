import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left Side - Info */}
        <div>
          <h3 className="text-xl font-bold">Hasan Ali</h3>
          <p className="text-sm">Full Stack Developer</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            BSc in CSE | Graduate in August 2026
          </p>
        </div>

        {/* Middle - Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:hasanali.dev@gmail.com"
            className="hover:text-blue-600"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      {/* Right Side - Copyright */}
      <div className="text-sm text-gray-500 text-center dark:text-gray-400">
        © {new Date().getFullYear()} Hasan Ali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
