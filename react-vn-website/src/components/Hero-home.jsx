import React from 'react';

const Hero = ({ 
  title = "VISHWA NETRUTVAM",
  subtitle = "Official Club ",
  department = " Mechanical Engineering Department, VIT Pune",
  imageSrc = "/src/assets/Home.png",
  logoSrc = "/src/assets/Vn-white.png"
}) => {
  return (
    <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc}
          alt="hero background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-4 max-w-6xl w-full mx-auto gap-4 md:gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={logoSrc} 
            alt="Logo" 
            className="w-24 h-24 md:w-44 md:h-44 object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl text-center font-title md:text-7xl font-bold text-white tracking-wider mb-4">
            {title}
          </h1>
          <p className="text-xl font-title text-center md:text-3xl text-white leading-relaxed">
            <span className="font-light">{subtitle}</span>
            <span className="italic font-serif">of</span>
            <span className="font-light">{department}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;