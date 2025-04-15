import React, { useState, useEffect } from "react";


const TestimonialsSection = () => {
  // All testimonials data
  const allTestimonials = [
    {
      id: 1,
      name: "Shivam Rathod",
      title: "(Chairperson, 2022-23)",
      image: "/images/Testimonials/shivam.webp",
      testimonial: "\"As the first Chairperson of the Mechanical Engineering Club, I had the privilege of leading its foundation in 2022-23. From setting the vision to launching key initiatives, the role was both challenging and rewarding. I am confident that the legacy we began will continue to grow and thrive in the coming years. Looking back, this tenure remains one of the most defining and fulfilling chapters of my college life.\""
    },
    {
      id: 2,
      name: "Tushar Chavan",
      title: "(Chairperson, 2022-23)",
      image: "/images/Testimonials/tushar.webp",
      testimonial: "\"In academic year 2022-23, I was fortunate enough to lead Vishwa Netrutvam along with my team during the foundation year. We were able to set processes within Vishwa Netrutvam so that it will carried ahead by the people coming after us and happed so. So, overall I was honoured and will be proud forever to be a part of Vishwa Netrutvam.\""
    },
    {
      id: 3,
      name: "Amol Kawade",
      title: "(Chairperson, 2023-24)",
      image: "/images/Testimonials/amol.webp",
      testimonial: "\"Taking on the role of Chairperson for Vishwa Netrutvam after its foundation year was both an honor and a responsibility. It helped me grow as a leader, listener, mentor, and team player. I learned that true leadership is about creating space for ideas to thrive. This journey strengthened my confidence, empathy, and sense of accountability.\""
    }
   ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  
  // Effect to adjust cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile view
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet view
      } else {
        setCardsToShow(3); // Desktop view
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (allTestimonials.length - cardsToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allTestimonials.length - cardsToShow : prevIndex - 1
    );
  };

  // Get current visible testimonials
  const visibleTestimonials = allTestimonials.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  return (
    <div className="py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">TESTIMONIALS</h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
          Shaped by vision, strengthened by experience—hear from those who've led and grown with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-6 lg:-ml-8 bg-white shadow-lg rounded-full p-1 md:p-2 z-10"
            aria-label="Previous testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`p-4 md:p-5 lg:p-6 rounded-lg relative flex flex-col items-center text-center ${
                  index % 2 === 0 ? 'bg-red-100' : 'bg-blue-100'
                }`}
              >
                {/* Avatar */}
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-2 mb-3 md:mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial text */}
                <p className={`mb-3 md:mb-4 flex-grow text-sm md:text-base ${
                  index % 2 === 0 ? 'text-red-900' : 'text-blue-900'
                }`}>
                  {testimonial.testimonial}
                </p>
                
                {/* Author info */}
                <div className="mt-2 md:mt-3 lg:mt-4">
                  <h4 className="font-bold text-blue-900 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-6 lg:-mr-8 bg-white shadow-lg rounded-full p-1 md:p-2 z-10"
            aria-label="Next testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicators */}
        <div className="flex justify-center mt-4 md:mt-5 lg:mt-6 space-x-2">
          {Array.from({ length: allTestimonials.length - cardsToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${
                currentIndex === index ? 'bg-red-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;