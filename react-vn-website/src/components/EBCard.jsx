import React from 'react';
import yt from "/src/assets/YT.webp"

const MemberCardBottom = ({
  name,
  image,
  youtube = ""
}) => {

  const handleYouTubeClick = (e) => {
    e.stopPropagation();
    if (youtube) {
      const url = youtube.startsWith('http') ? youtube : `https://${youtube}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
      role="article"
      tabIndex={0}
    >
      <div className="relative aspect-video w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-3 sm:p-4 md:p-5">
        <div className="mb-2">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {name}
          </h2>
        </div>
        
        <div className="flex items-center mt-3">
          {youtube && (
            <button
              onClick={handleYouTubeClick}
              className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-all duration-200 border border-gray-300 py-1 px-3 sm:py-2 sm:px-4 rounded-md"
              aria-label={`Watch ${name} on YouTube`}
            >
              <img
                src={yt}
                alt="YouTube"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-xs sm:text-sm font- text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Watch now!
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCardBottom;
