// need to work on responsiveness, need to add images and fix the animation
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero-home';
import Footer from '../components/Footer';
import YetToComeCards from '../components/yetToComeCards';
import Counter from '../components/Counter';
import syda from '/public/images/Events/Home/syda.png';
import team from '../assets/team-home.png';
import magazineImg from '../assets/magazine.png';
import membershipImg from '../assets/membership.png';
import podcastImg from '../assets/podcast.png';
import DRDO from '../assets/DRDO.png';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../components/Scroll';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const slides = [
    { image: syda, text: 'Workshop on AutoCad' },
    { image: syda, text: 'SYDA Induction' },
    { image: DRDO, text: 'DRDO Visit' },
    { image: syda, text: 'Expert Session by Hof University Professor' },
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
        Established in 2020, Vishwa Netrutvam serves as the Official Club of the Mechanical Engineering Department of the Vishwakarma Institute of Technology, Pune. <br/><br/>We organize expert lectures, industrial visits, technical workshops, and webinars on emerging technologies, helping students bridge the gap between academics and industry. Through these initiatives, members gain hands-on experience, understand real-world applications, and refine the skills required for successful careers in mechanical engineering.
        </p>
      </section>

      <section className="mb-16 max-w-7xl px-8 sm:px-14 mx-auto text-center">
        <Counter/>
      </section>

      <h2 className="font-bold mb-8 text-4xl font-title text-center sm:text-6xl">Team Vishwa Netrutvam (2024-25)</h2>
      <div className="flex justify-center items-center mb-4 mx-2">
      <Link to="/team" className="w-full max-w-5xl">
        <div 
        className="aspect-video bg-gray-200 rounded-lg mb-16 mx-2 max-w-5xl cursor-pointer overflow-hidden"
        onClick={() => navigate('/team')}
        >
        <img
          src={team}
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
      <ScrollToTopButton />
    </div>
  );
}