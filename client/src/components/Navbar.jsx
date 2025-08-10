import React from 'react';
import assets from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-gray-800">My Website</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button (Optional for hamburger menu) */}
        <button className="md:hidden text-gray-700 hover:text-blue-600">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
