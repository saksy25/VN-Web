import React, { useState, useEffect, useRef } from 'react';

export default function YetToComeCards({ title, description, bgColor, imageSrc }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse position relative to card
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    // Adjust the division values (30 and 20) to control sensitivity
    const rotateY = ((x - rect.width / 2) / 30) * -1;
    const rotateX = (y - rect.height / 2) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`rounded-lg p-6 ${bgColor} shadow-lg flex flex-col items-center w-full sm:w-[300px] md:w-[350px] transition-transform duration-200`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'all 0.2s ease'
      }}
    >
      {/* Image Section */}
      <div className="relative w-80 h-80 aspect-square p-2 flex justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full rounded-lg object-cover transition-transform duration-200"
          style={{
            transform: isHovered 
              ? `translateX(${rotation.y * 0.5}px) translateY(${rotation.x * 0.5}px)`
              : 'translateX(0) translateY(0)',
          }}
        />
      </div>

      {/* Title and Description Section */}
      <div className="flex flex-col items-center flex-grow w-full mt-2">
        <h2 className='text-lg font-title font-bold text-center'>{title}</h2>
        <p className="text-sm sm:text-base text-center">{description}</p>
      </div>
    </div>
  );
}