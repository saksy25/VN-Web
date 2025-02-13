import React from 'react'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FacultyCard from '../components/FacultyCard';

export default function Faculty() {

  const coordinators = [
    {
      name: "GAJANAN GAMBHIRE",
      role: "Assistant Professor",
      image: "/images/Faculty/GAJANAN MAHADEO GAMBHIRE.jpg",
    },
    {
      name: "Avadhoot Rajurkar",
      role: "Assistant Professor",
      image: "/images/Faculty/AVADHOOT UMAKANT RAJURKAR.jpg",
    },
    {
      name: "SHRINIVAS CHIPPA",
      role: "Assistant Professor",
      image: "/images/Faculty/SHRINIVAS PANDURANG CHIPPA.jpg",
    },
    {
      name: "GANESH DONGRE",
      role: "Assistant Professor",
      image: "/images/Faculty/GANESH GOVARDHAN DONGRE.jpg",
    },

  ]

  return (
    <div classname='min-h-screen'>
      <Hero
        // title="Events"
        // description="Celebrating Ideas and Innovation!"
        imageSrc="/src/assets/Home.png"
      />
      <h1 className="text-5xl items-center md:items-start text-center mx-10 mt-16 mb-3">Head of Mechanical Engineering Department</h1>
      <div className="bg-gradient-to-t from-red-500 to-blue-700 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-start text-justify mx-10 mt-4 mb-16">
        <img
          src="/images/Faculty/DATTATRAY BAPU HULWAN 2.jpg"
          alt="DATTATRAY HULWAN"
          className="h-64 sm:w-60  object-cover rounded-2xl md:mr-6"
        />
        <div className="flex-1">
          <div className="mb-5">
            <div className="text-2xl sm:text-3xl  font-bold text-center md:text-left mt-5">DATTATRAY BAPU HULWAN</div>
            <h4 className='xl'>Ph.D in Mechanical Thermod from IIT Dholakpur</h4>
          </div>
          <p className="text-base sm:text-lg">
            Vishwakarma Institute of Technology, Pune, is an autonomous
            institute permanently affiliated with the Savitribai Phule Pune
            University. The Institute was granted autonomous status in AY
            2008-09, valid until 2030. The Institute ranks among the premier
            technical institutes in the western region of India.
          </p>
        </div>
      </div>

      <h1 className="text-5xl items-center md:items-start text-center mx-10 mt-16 mb-3 font-bold">Faculty Advisor, Vishwa Netrutvam</h1>
      <div className="bg-gradient-to-t from-red-500 to-blue-700 text-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-start text-justify mx-10">
        <img
          src="/images/Faculty/SUNIL SHYAM SHINDE.png"
          alt="VIT Pune"
          className="h-64 sm:w-60  object-cover rounded-2xl md:mr-6"
        />
        <div className="flex-1">
        <div className="mb-5">
            <div className="text-2xl sm:text-3xl  font-bold text-center md:text-left mt-5">SUNIL SHYAM SHINDE</div>
            <h4 className='xl'>Ph.D in Mechanical Thermod from IIT Dholakpur</h4>
          </div>
          <p className="text-base sm:text-lg">
            Vishwakarma Institute of Technology, Pune, is an autonomous
            institute permanently affiliated with the Savitribai Phule Pune
            University. The Institute was granted autonomous status in AY
            2008-09, valid until 2030. The Institute ranks among the premier
            technical institutes in the western region of India.
          </p>
        </div>
      </div>
      <br />
      <h1 className="text-5xl items-center md:items-start text-center mx-10 mt-16 mb-3 font-bold">Faculty Members of Mechanical Engineering Department</h1>      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center my-10">
              {coordinators.map((coordinator, index) => (
                <FacultyCard
                  key={index}
                  name={coordinator.name}
                  role={coordinator.role}
                  image={coordinator.image}
                  linkedinUrl={coordinator.linkedinUrl}
                  instagramUrl={coordinator.instagramUrl}
                />
              ))}
            </div>
      <Footer />
    </div>
  )
}
