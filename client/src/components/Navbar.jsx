// src/components/Navbar.jsx
import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
       

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

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 hover:text-blue-600">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;