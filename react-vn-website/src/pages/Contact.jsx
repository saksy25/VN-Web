import React from 'react';
import Hero from '../components/Hero';
import EmailForm from '../components/EmailForm';
import ScrollToTopButton from '../components/Scroll';
import Footer from '../components/Footer';
import contactImage from '../assets/Contact Us.png'


const Contact = () => {
  const committeeMembers = [
    {
      name: "Prof. (Dr.) Sunil Shinde",
      position: "Faculty Advisor - Vishwa Netrutvam",
      mail: "Mail Address: sunil.shinde@vit.edu",
      phone: "Contact Number: +91 +98906 02638"
    },
    {
      name: "Atharv Kadam",
      position: "Chairperson",
      mail: "Mail Address: atharv.kadam21@vit.edu",
      phone: "Contact Number: +91 91689 42393"
    },
    {
      name: "Prathamesh Mujumdar",
      position: "Mentor",
      mail: "Mail Address: prathamesh.mujumdar21@vit.edu",
      phone: "Contact Number: +91 79727 14215"
    },
    {
      name: "Yash Digraskar",
      position: "Mentor",
      mail: "Mail Address: yash.digraskar21@vit.edu",
      phone: "Contact Number: +91 77740 07375"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Hero 
      title="Contact Us"
      description='Connect with us anytime!'
      imageSrc={contactImage}
      />
      <ScrollToTopButton />

      <main className="flex-grow py-6 px-6 sm:px-6 lg:px-8 mt-8 mb-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Section: Committee Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Committee Info */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-4xl font-semibold text-gray-800 mb-8">
                CONTACT US
              </h2>
              <div className="space-y-6">
                {committeeMembers.map((member, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="text-lg  font-title font-medium text-gray-800">
                      {member.name} ({member.position})
                    </h3>
                    <p className="text-gray-600">{member.mail}</p>
                    <p className="text-gray-600">{member.phone}</p>
                  </div>
                ))}
              </div>
              
              {/* Red bar separator - centered in mobile, left-aligned in desktop */}
              <div className="flex justify-center lg:justify-start w-full">
                <div className="h-2 rounded bg-red-600 w-8/12 mt-8"></div>
              </div>
            </div>

            {/* Right Column - Email Form */}
            <div className="flex justify-self-center lg:justify-self-center w-10/12 mt-10">
              <div className="w-full px-4 sm:px-0">
                <EmailForm />
              </div>
            </div>
          </div>

          {/* Bottom Section: Address + Map */}
          <div className="space-y-8">
            <div className="bg-gradient-to-b from-red-600/20 to-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-2">ADDRESS:</h3>
              <p className="text-gray-600 font-title">
              Department of Mechanical Engineering
              </p>
              <p className="text-gray-600 font-title">
              Vishwakarma Institute of Technology, Pune - 
              </p>
              <p className="text-gray-600 font-title">
              411037 (Maharashtra), INDIA
              </p>
            </div>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.442016683995!2d73.86562877465086!3d18.463626970912337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2cea9f064!2sVishwakarma%20Institute%20of%20Technology%20(VIT)!5e0!3m2!1sen!2sin!4v1735902794208!5m2!1sen!2sin"
                className="w-full h-64 rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;