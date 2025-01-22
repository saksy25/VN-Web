import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventCardB = ({ name, description, date, reportUrl, images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextImage = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setStartIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const getSecondImageIndex = () => {
    return (startIndex + 1) % images.length;
  };

  return (
<div className="w-full bg-gradient-to-t from-navy-400/40 to-grey-100 hover:bg-gradient-to-b hover:from-grey-100 hover:to-navy-400/20 transition-all duration-300 rounded-lg shadow-lg p-4 mb-6">      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <h3 className="text-xl font-title font-bold pl-2">{name}</h3>
        {date && (
          <p className="text-gray-600 pl-2 mt-1 md:mt-0">
            {date}
          </p>
        )}
      </div>
      
      <p className="text-gray-600 pl-2 mb-4">{description}</p>
      
      <div className="flex justify-start pl-2 mb-4">
        <a
          href={reportUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 border-2 border-red-600 rounded-lg transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Event Report
        </a>
      </div>

      <div className="relative w-full">
        <div className="flex gap-4">
          <div className="relative w-full md:w-1/2 h-[250px] md:h-[320px] overflow-hidden">
            <img
              src={images[startIndex]}
              alt={`Event ${startIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="hidden md:block relative w-1/2 h-[320px] overflow-hidden">
            <img
              src={images[getSecondImageIndex()]}
              alt={`Event ${getSecondImageIndex() + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
            
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          <span className="md:hidden">
            {startIndex + 1} / {images.length}
          </span>
          <span className="hidden md:inline">
            {startIndex + 1}-{getSecondImageIndex() + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCardB;