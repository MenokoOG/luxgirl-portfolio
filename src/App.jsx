import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtGallery from './components/ArtGallery';
import Bio from './components/Bio';
import Quotes from './components/Quotes';
import ImageModal from './components/ImageModal';
import NavBar from './components/NavBar';
import backgroundImage from '../public/A visually appealing digitaures.png'; // Ensure the image file is in the correct directory
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
          <NavBar openModal={openModal} />
          <div className="flex-grow flex flex-col items-center justify-center w-full pt-16">
            <Routes>
              <Route exact path="/" element={<ArtGallery />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/quotes" element={<Quotes />} />
            </Routes>
          </div>
        </div>
        <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} imageSrc={backgroundImage} />
      </div>
    </Router>
  );
};

export default App;
