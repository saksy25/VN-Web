import React, { useState, useEffect } from 'react';
import Hero from '../components/HeroComingSoon';
import ComingSoon from '../assets/coming soon.webp'
import ComingSoon1 from '../assets/coming-soon-mobile.webp'

export default function Resources() {
  const [imageSrc, setImageSrc] = useState(ComingSoon);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    
    const updateImage = () => {
      setImageSrc(mediaQuery.matches 
        ? ComingSoon1
        : ComingSoon
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