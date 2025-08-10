import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">My Website</h2>
            <p className="text-gray-400 text-sm">
              Providing high-quality services and content to our users.  
              Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p>Email: info@mywebsite.com</p>
            <p>Phone: +94 71 234 5678</p>
            <p>Address: Colombo, Sri Lanka</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
