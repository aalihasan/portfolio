import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

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
    <div className="navbar fixed top-0 left-0 z-50 bg-white shadow-md dark:bg-base-100 px-4 md:px-10">
      <div className="navbar-start">
        <h1 className="text-2xl font-bold text-gray-800">Hasan Ali</h1>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex gap-6">
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
      </div>

      {/* Right Side (Socials + Toggle) */}
      <div className="navbar-end hidden md:flex gap-4">
        <a
          href="https://github.com/aalihasan"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-gray-700 hover:text-black"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/md-hasan-ali-535954251/"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-blue-600"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-700"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-500'
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/yourusername" target="_blank">
              <FaGithub className="text-xl text-gray-700" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              <FaLinkedin className="text-xl text-blue-600" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
