import React from 'react';
import assets from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="h-8" />
      </Link>

      <div>
        {menuLinks.map((link,index) => (
          <link. key={index}> to={link.path} className="text-gray-700 hover:text-blue-500">
            {link.name}
          </link>
      </div>

    </div>
  );
};

export default Navbar;
