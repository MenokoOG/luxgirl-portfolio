// ArtGallery.jsx
import React from 'react';
import images from '../imageData';

const ArtGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="bg-white p-2 rounded shadow-lg">
          <img
            src={src}
            alt={`Art ${index + 1}`}
            className="w-full h-64 object-cover rounded"
          />
          <h2 className="text-center text-xl mt-2">{`Art ${index + 1}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;