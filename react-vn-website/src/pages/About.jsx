import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import VisionMissionValue from "../components/visionMissionValue";
import ScrollToTopButton from '../components/Scroll';
import aboutUsImage from '../assets/About Us.png'

const AboutComponent = () => {
  const cards = [
    {
      title: "Vision",
      bgColor: "bg-gradient-to-t from-white/80 to-blue-600/30",
      description:
        "At Vishwa Netrutvam, we strive to be a platform that empowers Mechanical Engineering students to become not just skilled professionals, but also forward-thinking leaders who can shape the future of engineering and make a positive impact on society.",
    },
    {
      title: "Mission",
      bgColor: "bg-gradient-to-t from-white/80 to-red-400/40",
      description:
        "Our mission is to equip Mechanical Engineering students with tools for academic and professional success. Through industrial visits, workshops, and expert talks, we connect classroom learning to real-world applications, fostering growth and innovation for future challenges.!",
    },
    {
      title: "Values",
      bgColor: "bg-gradient-to-t from-white/80 to-blue-600/30",
      description:
        "We believe in fostering a culture of innovation, teamwork, and mutual respect, where every member feels empowered to contribute and grow. We value excellence, perseverance, and creativity, encouraging our members to push boundaries, explore new ideas, and strive for continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero
        title="About Us"
        description="Torque Your Potential, Power Your Future!"
        imageSrc={aboutUsImage}
      />
      <ScrollToTopButton />

      {/* Main Content */}
      <main className="mt-12 mx-auto px-6 w-full max-w-screen-xl space-y-12">
        {/* College Section */}
        {/* <div className="bg-gradient-to-t from-red-500 to-blue-700 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-start text-justify">
          <img
            src="src/assets/clg.png"
            alt="VIT Pune"
            className="h-64 sm:w-40 sm:h-40 object-cover rounded-2xl md:mr-6"
          />
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl mb-4 font-bold text-center md:text-left">
              Vishwakarma Institute of Technology, Pune
            </h3>
            <p className="text-base sm:text-lg">
              Vishwakarma Institute of Technology, Pune, is an autonomous
              institute permanently affiliated with the Savitribai Phule Pune
              University. The Institute was granted autonomous status in AY
              2008-09, valid until 2030. The Institute ranks among the premier
              technical institutes in the western region of India.
            </p>
          </div>
        </div> */}

        {/* Department Section */}
        {/* <div className="bg-gradient-to-t from-red-500 to-blue-700 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-start text-justify">
          <img
            src="src/assets/dept.jpg"
            alt="Mechanical Engineering Dept"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl md:mr-6"
          />
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl mb-4 font-bold text-center md:text-left">
              Mechanical Engineering Dept, VIT Pune
            </h3>
            <p className="text-base sm:text-lg">
            The Mechanical Engineering Department at VIT Pune is a hub of innovation, offering cutting-edge facilities and an environment that encourages problem-solving, creativity, and leadership. Our focus is on producing future-ready engineers equipped to tackle real-world challenges.

            </p>
          </div>
        </div><br/> */}

        <section className="mb-10 max-w-6xl mx-auto px-4 text-center relative">
          <h1 className="text-5xl align-middle font-title font-bold mb-2">What is Vishwa Netrutvam?</h1>
          <p className="text-gray-600 mt-5 text-2xl mb-1">
          Founded in 2020, Vishwa Netrutvam is the Official Club of the Mechanical Engineering Department at Vishwakarma Institute of Technology, Pune. We foster technical excellence, leadership, and professional growth, preparing students for the dynamic engineering industry. <br/><br/>Through expert lectures, industrial visits, workshops, and webinars on emerging technologies, we bridge the academia-industry gap, providing members with hands-on experience, real-world insights, and essential skills for successful mechanical engineering careers.

          </p>
        </section>
      </main>

      {/* Cards Section */}
      <section className="mb-9 mx-60 px-6 max-w-screen-xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <VisionMissionValue
              key={index}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutComponent;
