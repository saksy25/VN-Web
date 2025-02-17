import React from 'react';

const Hero = ({ 
  title = "",
  description = "",
  imageSrc = "/api/placeholder/1920/600",
}) => {
  return (
    <div className="relative h-96 md:h-[950px] flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc}
          alt="hero background" 
          className="w-full h-full object-cover object-top"
        />
        <div className={`absolute inset-0 bg-gradient-to-r`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-16 md:-mt-64 lg:-mt-40">
        <h1 className="text-4xl font-title md:text-7xl font-bold shadow-black text-white tracking-wide mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-base md:text-2xl shadow-black text-white/90 font-semibold font-title italic leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;