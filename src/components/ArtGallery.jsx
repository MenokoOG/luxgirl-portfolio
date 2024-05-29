import React, { useState } from 'react';
import images from '../imageData';
import '../ArtGallery.css';

const ArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="background-image min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 fade-in">
        {images.map((src, index) => (
          <div key={index} className="bg-white p-2 rounded shadow-lg cursor-pointer" onClick={() => openModal(src)}>
            <img
              src={src}
              alt={`Art ${index + 1}`}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-center text-xl mt-2">{`Art ${index + 1}`}</h2>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20" onClick={closeModal}>
          <div className="relative">
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={closeModal}>&times;</button>
            <img src={selectedImage} alt="Selected Art" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
