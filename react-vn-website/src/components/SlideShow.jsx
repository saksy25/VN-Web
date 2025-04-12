import React, { useState, useEffect } from "react";

import e1 from '/images/Events/2024-25/E16/img3.webp';
import e2 from '/images/Events/2024-25/E17/img3.webp';
import e3 from '/images/Events/2024-25/E18/img2.webp';
import e4 from '/images/Events/2024-25/E19/img4.webp';
import e5 from '/images/Events/2024-25/E20/img6.webp';
import e6 from '/images/Events/2024-25/E21/img5.webp';
import e7 from '/images/Events/2024-25/E22/img3.webp';

const Slideshow = () => {
  // Sample slideshow data
  const slides = [
    { image: e1, text: '2-Day Precursor Training Program on Industrial Automation conducted by Mr. Mandar Puranik (Senior Manager (Training) at SMC Corporation (India) Pvt Ltd)'},
    { image: e2, text: 'Expert Lecture Series with Regal Rexnord Corporation on \'Campus to Connect\' by Mr. Amol Mahulikar' },
    { image: e3, text: 'Seminar on \'Weaving Sustainability into Everyday Life\' by Ms. Preet Akolkar & Ms. Shraddha Desai' },
    { image: e4, text: '3-Day Advance Training Program on Industrial Automation conducted by Mr. Mandar Puranik (Senior Manager (Training) at SMC Corporation (India) Pvt Ltd)' },
    { image: e5, text: 'Expert Lecture Series with Regal Rexnord Corporation on \'Gearbox Design Basics\' by Mr. Sachin Jagadale & Mr. Shivakumar Choughule' },
    { image: e6, text: 'Expert Lecture Series with Regal Rexnord Corporation on \'System Design (Conveying)\' by Mr. Swapnil Raut & Mr. Chaitanya Kulkarni' },
    { image: e7, text: 'Expert Lecture on \'A Complete Guide To Build Your Startups\' by Mr. Akash Deshpande, Co-Founder & CTO, Gaana AI' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="mb-16 max-w-7xl mx-auto text-center my-4 px-4">
      <h1 className="text-6xl font-title font-bold mb-8 md:text-6xl">Recent Events</h1>
      
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
        {/* Responsive aspect ratio container - maintain 16:9 on desktop, adjust for mobile */}
        <div className="relative w-full pb-[75%] md:pb-[50%]"> {/* 75% for mobile, 56.25% for desktop */}
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.text} 
                className="w-full h-full object-cover" 
              />
              {/* Text overlay - fixed height and small text size for mobile */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 md:p-4"
                style={{ maxHeight: '40%', overflow: 'auto' }}
              >
                <h3 className="md:text-xl text-xs font-semibold">
                  {slide.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2 flex-wrap">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-colors mb-1 ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slideshow;