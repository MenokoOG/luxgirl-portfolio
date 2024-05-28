import React from 'react';
import ArtGallery from './components/ArtGallery';
import background from '../public/back-ground1.png';

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          LuxGirl OG - Original Geek!'s Digital Art
        </h1>
        <ArtGallery />
      </div>
    </div>
  );
};

export default App;
