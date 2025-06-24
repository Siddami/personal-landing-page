import React from 'react'

export const Navbar = () => {
  return (
    <nav className="absolute top-8 w-full flex justify-center z-20">
      <ul className="flex gap-4 bg-gray-900 backdrop-blur-sm px-6 py-3 rounded-full text-base md:text-xl font-medium shadow-md">
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#work" className="hover:underline">
            Work
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="bg-black text-white px-4 py-3 rounded-full hover:bg-gray-300 dark:bg-white dark:text-black"
          >
            Let’s connect
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
