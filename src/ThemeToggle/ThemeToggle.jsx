import React, { useState, useEffect } from 'react';
import { IoSunny } from 'react-icons/io5';
import { MdDarkMode } from 'react-icons/md';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light'); // Default light

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="mx-4 rounded-full flex items-center justify-center bg-base-100 text-base-content transition-colors duration-500">
      <button className="btn btn-sm btn-circle" onClick={toggleTheme}>
        {theme === 'light' ? (
          <MdDarkMode className="text-xl " />
        ) : (
          <IoSunny className="text-xl" />
        )}
      </button>
    </div>
  );
}
