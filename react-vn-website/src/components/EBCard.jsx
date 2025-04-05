import React from 'react';
import yt from "/src/assets/YT.png"

const MemberCardBottom = ({
  name,
  image,
  youtube = "",
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
      className="flex flex-col w-full md:w-4/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl "
    //   transform hover:scale-105 transition-all duration-300 cursor-pointer
      role="article"
      tabIndex={0}
    >
      <div className="bg-water-200 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-top rounded-t-lg"
        />
      </div>
      <div className="bg-white p-6">
        <div className="text-center mb-1">
          <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {name}
          </h3>
        </div>
        <div className="flex justify-center gap-6">
          {youtube && (
            <button
            onClick={handleYouTubeClick}
            className="flex items-center gap-2 transform hover:scale-110 hover:opacity-80 transition-all duration-200"
            aria-label={`Watch ${name} on YouTube`}
          >
            <img
              src={yt}
              alt="YouTube"
              className="w-12 h-12"
            />
            <span className="text-red-600 font-semibold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Watch now!</span>
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCardBottom;
