import React, { useState, useEffect } from 'react';
import Hero from '../components/HeroComingSoon';

export default function Resources() {
  const [imageSrc, setImageSrc] = useState('/src/assets/coming soon.png');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    
    const updateImage = () => {
      setImageSrc(mediaQuery.matches 
        ? '/src/assets/coming-soon-mobile.png' 
        : '/src/assets/coming soon.png'
      );
    };

    updateImage();
    mediaQuery.addEventListener('change', updateImage);

    return () => mediaQuery.removeEventListener('change', updateImage);
  }, []);

  return (
    <div className="w-full h-screen">
      <Hero imageSrc={imageSrc} />
    </div>
  );
}