import React from 'react';

const Hero = ({ imageSrc }) => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src={imageSrc}
        alt="coming soon" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;