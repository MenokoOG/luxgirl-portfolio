import React, { useEffect, useState } from 'react';
import ArtGallery from './components/ArtGallery';
import background1 from '../public/back-ground1.png';
import background2 from '../public/badass art.png';
import background3 from '../public/digital-art-background.jpg';

const backgrounds = [background1, background2, background3];

const App = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
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
