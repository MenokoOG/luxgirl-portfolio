import React from 'react';
import { Link } from 'react-router-dom';
import headerGraphic from '../../public/header-graphic.png';

const NavBar = ({ openModal }) => {
  return (
    <nav className="w-full p-4 flex justify-between items-center text-white fixed top-0 bg-black bg-opacity-70 z-10">
      <div className="flex items-center">
        <img
          src={headerGraphic}
          alt="LuxGirl OG - Original Geek"
          className="h-32 cursor-pointer"
          onClick={openModal}
        />
      </div>
      <div>
        <Link to="/" className="mx-2 p-2 hover:bg-white hover:text-black transition-colors">Gallery</Link>
        <Link to="/bio" className="mx-2 p-2 hover:bg-white hover:text-black transition-colors">Bio</Link>
        <Link to="/quotes" className="mx-2 p-2 hover:bg-white hover:text-black transition-colors">Inspirational Quotes</Link>
      </div>
    </nav>
  );
};

export default NavBar;
