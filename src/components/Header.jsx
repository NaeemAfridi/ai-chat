// src/components/Header.jsx

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-16 md:h-20 flex items-center justify-between px-4 bg-[#e6e6ff] shadow-md relative z-10">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center text-2xl font-bold text-gray-800"
      >
        BlogSite
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          className="flex flex-col justify-center items-center gap-1.5"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-[3px] bg-gray-800 rounded-sm transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[8px]" : "rotate-0"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-gray-800 rounded-sm transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-gray-800 rounded-sm transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[8px]" : "rotate-0"
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <nav
          className={`fixed py-5 mt-5 left-0 w-full bg-[#9ff44f] flex flex-col items-center justify-center gap-8 font-medium text-lg transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>
            Trending
          </Link>
          <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>
            Most Popular
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-6 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Login 👋
            </button>
          </Link>
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-gray-800">
        <Link to="/">Home</Link>
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/login">
          <button className="py-2 px-6 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Login 👋
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
