// need to work on responsiveness, need to add images and fix the animation
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero-home';
import Footer from '../components/Footer';
import YetToComeCards from '../components/yetToComeCards';
import Counter from '../components/Counter';
import ContactImg from '../assets/contact-img.jpg';
import syda from '/public/images/Events/Home/syda.png';
import magazineImg from '../assets/magazine.png';
import membershipImg from '../assets/membership.png';
import podcastImg from '../assets/podcast.png';
import { Link } from 'react-router-dom';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const slides = [
    { image: ContactImg, text: 'Workshop on AutoCad' },
    { image: syda, text: 'SYDA Induction' },
    { image: ContactImg, text: 'DRDO Visit' },
    { image: ContactImg, text: 'Expert Session by Hof University Professor' },
  ];
  const cards = [
    {
      title: "Magazine",
      bgColor: "bg-gradient-to-t from-white/80 to-blue-600/30",
      imageSrc: magazineImg,
      description: "Discover the latest in mechanical engineering with our vibrant magazine. From cutting-edge innovations to expert insights, it's your go-to source for inspiration and knowledge. Dive in and stay ahead of the curve!"
    },
    {
      title: "Membership",
      bgColor: "bg-gradient-to-t from-white/80 to-red-400/40",
      imageSrc: membershipImg,
      description: "Join a community of innovators and leaders. Our membership offers exclusive opportunities to learn, grow, and connect through workshops, events, and mentorship programs. Be a part of the future of engineering!"
    },
    {
      title: "Podcasts",
      bgColor: "bg-gradient-to-t from-white/80 to-blue-600/30",
      imageSrc: podcastImg,
      description: "Tune into insightful podcasts featuring industry experts, alumni, and student leaders. Gain valuable advice, technical tips, and inspiring stories that fuel your passion for mechanical engineering."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <section className="mb-16 max-w-6xl mx-auto my-10 px-4 text-center relative">
        <h1 className="text-6xl font-title font-bold mb-2">Who Are We?</h1>
        <p className="text-gray-600 mt-5 text-2xl">
          Vishwa Netrutvam, launched in 2020, is VIT Pune's Mechanical Engineering club. We host industrial visits, workshops, and talks to connect students with industry insights and career guidance.
        </p>
      </section>

      <section className="mb-16 max-w-7xl px-8 sm:px-14 mx-auto text-center">
        <Counter/>

        <h2 className="font-bold mb-6 font-title text-4xl sm:text-6xl">Recent Events</h2>

        <div className="relative h-[220px] sm:h-[550px] mb-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-100 
                ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white text-center">
                {slide.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <h2 className="font-bold mb-8 text-4xl font-title text-center sm:text-6xl">Team Vishwa Netrutvam</h2>
      <div className="flex justify-center items-center mb-4 mx-2">
      <Link to="/team" className="w-full max-w-5xl">
        <div 
        className="aspect-video bg-gray-200 rounded-lg mb-16 mx-2 max-w-5xl cursor-pointer overflow-hidden"
        onClick={() => navigate('/team')}
        >
        <img
          src="src/assets/team-home.png"
          alt="Our Team"
          className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />
        </div>
        </Link>
      </div>

      <section className="mb-14 mx-4 px-4">
        <h2 className="text-center font-title text-5xl mb-16 font-bold">Coming Soon...</h2>
        <div className="flex flex-wrap justify-center gap-14">
          {cards.map((card, index) => (
            <YetToComeCards
              key={index}
              title={card.title}
              bgColor={card.bgColor}
              imageSrc={card.imageSrc}
              description={card.description}
            />
          ))}
        </div>
    </section>

      <Footer />
    </div>
  );
}