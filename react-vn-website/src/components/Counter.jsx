import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime = null;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  
  return <>{count}</>;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="stats-section" className="mb-16 max-w-7xl px-8 sm:px-14 mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="bg-gradient-to-r from-blue-800/90 to-red-600/90 p-4 text-white text-center rounded-3xl transform transition-transform duration-300 hover:scale-105">
          <div className="text-4xl text-center sm:text-5xl font-bold">
            {isVisible ? <AnimatedCounter end={30} />: 0}+
          </div>
          <p className="text-xl font-title text-center sm:text-2xl">Events Conducted</p>
        </div>
        <div className="bg-gradient-to-l from-blue-800/90 to-red-600/90 p-4 text-white text-center rounded-3xl transform transition-transform duration-300 hover:scale-105">
          <div className="text-4xl sm:text-5xl font-bold">
            {isVisible ? <AnimatedCounter end={25} />: 0}+
          </div>
          <p className="text-xl font-title sm:text-2xl">Speaker's Invited</p>
        </div>
        <div className="bg-gradient-to-r from-blue-800/90 to-red-600/90 p-4 text-white text-center rounded-3xl transform transition-transform duration-300 hover:scale-105">
          <div className="text-4xl sm:text-5xl font-bold">
            {isVisible ? <AnimatedCounter end={2000} />: 0}+
          </div>
          <p className="text-xl font-title sm:text-2xl">Students Impacted</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;