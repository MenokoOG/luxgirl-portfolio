import React, { useState } from 'react';
import images from '../imageData';
import '../ArtGallery.css';

const ArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6; // Adjust this value based on the number of images you want per page

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(images.length / imagesPerPage) - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const displayedImages = images.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  return (
    <div className="background-image min-h-screen relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 fade-in">
        {displayedImages.map((src, index) => (
          <div key={index} className="bg-white p-2 rounded shadow-lg cursor-pointer" onClick={() => openModal(src)}>
            <img
              src={src}
              alt={`Art ${index + 1 + currentPage * imagesPerPage}`}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-center text-xl mt-2">{`Art ${index + 1 + currentPage * imagesPerPage}`}</h2>
          </div>
        ))}
      </div>

      <button
        className={`fixed top-1/2 transform -translate-y-1/2 left-4 bg-white text-black p-2 rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        onClick={handlePrev}
        disabled={currentPage === 0}
      >
        &larr; Previous
      </button>
      <button
        className={`fixed top-1/2 transform -translate-y-1/2 right-4 bg-white text-black p-2 rounded ${currentPage === Math.ceil(images.length / imagesPerPage) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        onClick={handleNext}
        disabled={currentPage === Math.ceil(images.length / imagesPerPage) - 1}
      >
        Next &rarr;
      </button>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20" onClick={closeModal}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 bg-white text-black text-3xl font-bold rounded-full p-2 hover:bg-gray-200"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected Art" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
