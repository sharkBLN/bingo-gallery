import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Menu, Home, Info, Mail } from 'lucide-react';

const BingoBerlingo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = Array(15).fill('/api/placeholder/400/320');

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <nav className="relative z-10 bg-gradient-to-b from-gray-900/80 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Home size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Info size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            
            <button className="text-white md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className="relative container mx-auto px-4 pt-4">
        <div className="grid grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsModalOpen(true);
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-4xl max-h-[90vh] relative">
            <img
              src={images[currentImageIndex]}
              alt={`Modal image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BingoBerlingo;