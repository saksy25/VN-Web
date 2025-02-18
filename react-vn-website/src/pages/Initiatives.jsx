import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Initiatives() {
  const [imageSrc, setImageSrc] = useState('/src/assets/coming soon.png');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)'); // Adjusted for broader mobile compatibility
    const updateImage = () => {
      setImageSrc(mediaQuery.matches ? '/src/assets/coming-soon-mobile.png' : '/src/assets/coming soon.png');
    };

    updateImage(); // Set initial image based on screen size
    mediaQuery.addEventListener('change', updateImage);

    return () => mediaQuery.removeEventListener('change', updateImage);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero imageSrc={imageSrc} />
      {/* <Footer/> */}
    </div>
  );
}