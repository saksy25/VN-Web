import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import VisionMissionValue from "../components/visionMissionValue";
import ScrollToTopButton from '../components/Scroll';
import aboutUsImage from '../assets/About Us.webp'

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

      {/* Main Content */}
      <main className="mt-12 mx-auto px-6 w-full max-w-screen-xl space-y-12">
        {/* College Section */}
        {/* <div className="bg-gradient-to-t from-red-500 to-blue-700 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-start text-justify">
          <img
            src="src/assets/clg.webp"
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
      <section className="mb-9 mx-auto px-6 max-w-screen-xl ">
        <div className="flex flex-wrap justify-center gap-4">
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

      <h1 className=" font-bold text-5xl items-center md:items-start text-center mx-10 mt-16 mb-5">From HOD's Desk</h1>

      <div className="bg-blue-100 text-black p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-center text-justify mx-10">
        <div className="flex flex-col">
          <img
            src="/images/Faculty/HOD.webp"
            alt="VIT Pune"
            className="min-h-96 sm:w-72  object-cover rounded-2xl md:mr-6"
          />
        </div>
        <div className="flex-1 mr-5">
          <div className="mb-5">
            <div className="text-2xl sm:text-3xl  font-bold text-center md:text-left mt-5">PROF. (DR.) DATTATRAY HULWAN</div>
            <h4 className='xl md:italic mb-2'>Head of Mechanical Engineering Department, VIT Pune</h4><hr className = "border-t border-gray-400"/>
          </div>
          <p className="text-base sm:text-l">
            Our focus has always been on creating a comprehensive ecosystem that harmonizes education, research, and innovation. Through a carefully designed curriculum, we ensure students build a strong foundation in core areas such as Design, Manufacturing, Thermal Sciences, and Fluid Mechanics, while also enabling them to explore dynamic and emerging fields like Automation, Artificial Intelligence in Engineering, Renewable Energy, and Advanced Materials.<br /><br />
            A standout initiative of the department is the Vishwa Netrutvam Club, the official club of Mechanical Engineering. This student-led organization epitomizes leadership, creativity, and collaboration. The club has been instrumental in organizing technical workshops, expert lectures, research seminars, and industrial visits, providing students with opportunities to apply theoretical knowledge to practical challenges, develop critical skills, and grow into capable professionals ready to contribute meaningfully to the industry.<br /><br />
            Our commitment to research excellence is evident in the projects undertaken by our faculty and students. From driving sustainable technological solutions to engaging in cutting-edge collaborations with industry, our department is actively addressing some of the most pressing engineering challenges of today.<br /><br />
            I take great pride in the collective achievements of our students, faculty, and alumni, who continue to uphold the values and reputation of the department. Their efforts drive our mission of creating a meaningful impact in the field of engineering. As we move forward, let us remain steadfast in our pursuit of excellence, embrace innovation, and uphold the standards that define the Department of Mechanical Engineering at VIT Pune.


          </p>
        </div>
      </div>

      <h1 className="text-5xl items-center md:items-start text-center mx-10 mt-16 mb-5 font-bold">Faculty Advisor's Desk</h1>

      <div className="bg-blue-100 text-black p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-center text-justify mx-10">
        <div className="flex flex-col">
          <img
            src="/images/Faculty/FA.webp"
            alt="VIT Pune"
            className="min-h-96 sm:w-72  object-cover rounded-2xl md:mr-6"
          />
        </div>
        <div className="flex-1 mr-5">
          <div className="mb-5">
            <div className="text-2xl sm:text-3xl  font-bold text-center md:text-left mt-5">PROF. (DR.) SUNIL SHINDE</div>
            <h4 className='xl md:italic mb-2'>Assistant Professor and Faculty Advisor, Vishwa Netrutvam</h4><hr className = "border-t border-gray-400"/>
          </div>
          <p className="text-base sm:text-l">
            It gives me immense pride to share the remarkable journey and achievements of Vishwa-Netrutvam, the official Mechanical Engineering Student Council at VIT Pune. Established on 10th June 2020, this vibrant platform has been a cornerstone for leadership, innovation, and holistic development among mechanical engineering students. The club embodies the spirit of progress and has grown steadily by fostering technical excellence, professional skills, and social responsibility. <br /><br />
            The Mission of Vishwa-Netrutvam is to enhance students' technical and soft skills, promote a culture of research and innovation, and create opportunities for all-round personality development. Its Vision lies in the holistic growth of students, enabling them to tackle global challenges with competence and confidence.<br/><br/>
            Under my mentorship and the relentless enthusiasm of the students, Vishwa-Netrutvam has conducted impactful sessions such as webinars on Leadership Principles, CAE Applications, Six Sigma Tools, and Managing the VUCA World, as well as practical activities like resume-building workshops. These initiatives have not only bridged the gap between academics and industry but also instilled a sense of responsibility and teamwork in students.<br /><br />
            It is a privilege to guide this talented group of future leaders and innovators. Through continuous learning and collaboration, Vishwa-Netrutvam has created an ecosystem where students are encouraged to excel academically, professionally, and socially. I am confident that this club will continue to set new benchmarks, shaping individuals who lead with vision and purpose.<br /><br />

          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutComponent;
