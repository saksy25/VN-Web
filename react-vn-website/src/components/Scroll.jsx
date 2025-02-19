import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && 
        <div 
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-10 h-10 rounded-full bg-red-600 
                     hover:bg-blue-800 cursor-pointer transition-all duration-300 
                     hover:scale-110 flex items-center justify-center shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp 
            className="w-6 h-6 text-white" 
          />
        </div>
      }
    </>
  );
};

export default ScrollToTopButton;