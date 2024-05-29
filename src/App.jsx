import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArtGallery from './components/ArtGallery';
import Bio from './components/Bio';
import Quotes from './components/Quotes';
import ImageModal from './components/ImageModal';
import backgroundImage from '../public/A visually appealing digitaures.png'; // Ensure the image file is in the correct directory
import headerGraphic from '../public/header-graphic.png';
import './App.css';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-black bg-opacity-50 min-h-screen flex flex-col items-center">
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
          <div className="flex-grow flex flex-col items-center justify-center w-full pt-16">
            <Routes>
              <Route exact path="/" element={<ArtGallery />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/quotes" element={<Quotes />} />
            </Routes>
          </div>
        </div>
        <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} imageSrc={headerGraphic} />
      </div>
    </Router>
  );
};

export default App;
