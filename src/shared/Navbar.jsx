import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="navbar max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Hasan Ali
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-500'
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Social Icons */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-gray-600 hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-blue-600"
          >
            <FaLinkedin />
          </a>

          <div><ThemeToggle></ThemeToggle></div>
        </div>

        {/* Mobile Menu Button (Right Aligned) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (Right Side) */}
      {isOpen && (
        <div className="md:hidden absolute right-0 top-full w-[80%] max-w-xs bg-white shadow-lg px-4 py-4 space-y-4 transition-all duration-300">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold'
                  : 'block text-gray-700 hover:text-blue-500'
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/yourusername" target="_blank">
              <FaGithub className="text-xl text-gray-700" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              <FaLinkedin className="text-xl text-blue-600" />
            </a>
            
          </div>
          <div><ThemeToggle></ThemeToggle></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

