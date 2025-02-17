import React from 'react'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MemberCardBottom from '../components/FacultyCard2';


export default function Faculty() {

  const coordinators = [
    {
      name: "Prof. (Dr.) Dattatray Hulwan  ",
      role: "Head of Department",
      image: "/images/Faculty/DATTATRAY BAPU HULWAN 2.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/DATTATRAY-HULWAN",
      linkedinUrl: "https://www.linkedin.com/in/dattatray-hulwan-998765159/"
    },
    {
      name: "Prof. (Dr.) Mukund Nalawade ",
      role: "Professor",
      image: "/images/Faculty/MUKUND KERBA NALAWADE.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/MUKUND-NALAWADE",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Ganesh Dongare ",
      role: "Professor",
      image: "/images/Faculty/GANESH GOVARDHAN DONGRE.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/GANESH-DONGRE",
      linkedinUrl: "https://www.linkedin.com/in/ganesh-dongre-38050914/"
    },
    {
      name: "Prof. (Dr.) Mangesh Chaudhari ",
      role: "Professor",
      image: "/images/Faculty/MANGESH BHAURAO CHAUDHARI.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/MANGESH-CHAUDHARI",
      linkedinUrl: "https://www.linkedin.com/in/mangesh-chaudhari-15076a159/"
    },
    {
      name: "Prof. (Dr.) Rahul Waikar ",
      role: "Professor",
      image: "/images/Faculty/RAHUL ABHAY WAIKAR.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/RAHUL-WAIKAR",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Umesh Chavan",
      role: "Professor",
      image: "/images/Faculty/UMESH SOMALU CHAVAN.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/UMESH-CHAVAN",
      linkedinUrl: "https://www.linkedin.com/in/umesh-chavan-1b8726235/"
    },
    {
      name: "Prof. (Dr.) Prakash Vaidya ",
      role: "Associate Professor",
      image: "/images/Faculty/PRAKASH RAMKRISHNA VAIDYA.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/PRAKASH-VAIDYA",
      linkedinUrl: "https://www.linkedin.com/in/dr-ramkrishna-bharsakade-71b28616/",
    },
    {
      name: "Prof. (Dr.) Girish Kotwal  ",
      role: "Associate Professor",
      image: "/images/Faculty/GIRISH NARAYAN KOTWAL 1.png",
      profileURL: "https://facultyprofile.vit.edu/profile/GIRISH-KOTWAL",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Shirnivas Chippa ",
      role: "Associate Professor",
      image: "/images/Faculty/SHRINIVAS PANDURANG CHIPPA.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/SHRINIVAS-CHIPPA",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Ganesh Korwar ",
      role: "Associate Professor",
      image: "/images/Faculty/GANESH DATTATRAYA KORWAR.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/GANESH-KORWAR",
      linkedinUrl: "https://www.linkedin.com/in/gdkvit"
    },
    {
      name: "Prof. (Dr.) Nishant Kulkarni ",
      role: "Associate Professor",
      image: "/images/Faculty/NISHANT SHASHIKANT KULKARNI.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/NISHANT-KULKARNI",
      linkedinUrl: "#"
    },
    {
      name: "Prof. Rajkumar Bhagat",
      role: "Assistant Professor",
      image: "/images/Faculty/RAJKUMAR KISHOR BHAGAT.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/RAJKUMAR-BHAGAT",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Nitin Borse",
      role: "Assistant Professor",
      image: "/images/Faculty/NITIN VASANT BORSE.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/NITIN-BORSE",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Rajesh Chaudhari ",
      role: "Assistant Professor",
      image: "/images/Faculty/RAJESH JANKIRAM CHAUDHARI.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/RAJESH-CHAUDHARI",
      linkedinUrl: "https://www.linkedin.com/in/dr-rajesh-chaudhari-93b02310/"
    },
    {
      name: "Prof. (Dr.) Laxmikant Mangate",
      role: "Assistant Professor",
      image: "/images/Faculty/LAXMIKANT DADARAO MANGATE.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/LAXMIKANT-MANGATE",
      linkedinUrl: "#"
    },
    {
      name: "Prof. Pramod Kale  ",
      role: "Assistant Professor",
      image: "/images/Faculty/PRAMOD KRISHNA KALE.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/PRAMOD-KALE",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Sunil Shinde ",
      role: "Assistant Professor",
      image: "/images/Team/FA.png",
      profileURL: "https://facultyprofile.vit.edu/profile/PRAMOD-KALE",
      linkedinUrl: "https://www.linkedin.com/in/dr-sunil-shinde-403079113/"
    },
    {
      name: "Prof. (Dr.) Sachin Komble",
      role: "Assistant Professor",
      image: "/images/Faculty/SACHIN PRABHAKAR KOMBLE.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/SACHIN-KOMBLE",
      linkedinUrl: "#"
    },
    {
      name: "Prof. Suvarna Patil ",
      role: "Assistant Professor",
      image: "/images/Faculty/SUVARNA VIJAY PATIL.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/SUVARNA-PATIL",
      linkedinUrl: "https://www.linkedin.com/in/suvarna-mane-patil-6ba10a33/"
    },
    {
      name: "Prof. (Dr.) Ramkrishna Bharsakade ",
      role: "Assistant Professor",
      image: "/images/Faculty/RAMKRISHNA SHANTILAL BHARSAKADE.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/RAMKRISHNA-BHARSAKADE",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Pankaj Gaigole",
      role: "Assistant Professor",
      image: "/images/Faculty/Gaigole.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/PANKAJ-GAIGOLE",
      linkedinUrl: "#"
    },
    {
      name: "Prof. (Dr.) Avadhoot Rajurkar ",
      role: "Assistant Professor",
      image: "/images/Faculty/AVADHOOT UMAKANT RAJURKAR.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/AVADHOOT-RAJURKAR",
      linkedinUrl: "https://www.linkedin.com/in/avadhoot-rajurkar-2975512a/"
    },
    {
      name: "Prof. Gajanan Gambhire ",
      role: "Assistant Professor",
      image: "/images/Faculty/GAJANAN MAHADEO GAMBHIRE.jpg",
      profileURL: "https://facultyprofile.vit.edu/profile/GAJANAN-GAMBHIRE",
      linkedinUrl: "https://www.linkedin.com/in/gajanangambhire11987/"
    },
    {
      name: "Prof. Ketki Shirbavikar",
      role: "Assistant Professor",
      image: "/images/Faculty/KETKI AKSHAY SHIRBAVIKAR.png",
      profileURL: "https://facultyprofile.vit.edu/profile/KETKI-SHIRBAVIKAR",
      linkedinUrl: "https://www.linkedin.com/in/ketki-s-88b451129/"
    },
  ]

  return (
    <div classname='min-h-screen'>
      <Hero
        title="FACULTY CORNER"
        description="Expertise that drives innovation!"
        imageSrc="/src/assets/Home.png"
      />
      <h1 className=" font-bold text-5xl items-center md:items-start text-center mx-10 mt-16 mb-3">From HOD's Desk</h1>

      <div className="bg-blue-100 text-black p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-center text-justify mx-10">
        <div className="flex flex-col">
          <img
            src="/images/Faculty/DATTATRAY BAPU HULWAN.jpg"
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

      <h1 className="text-5xl items-center md:items-start text-center mx-10 mt-16 mb-3 font-bold">Faculty Advisor's Desk</h1>

      <div className="bg-blue-100 text-black p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-center text-justify mx-10">
        <div className="flex flex-col">
          <img
            src="/images/Team/FA.png"
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
      <br />
      <h1 className="text-5xl items-center md:items-start text-center mx-10 mt-16 mb-3 font-bold">Faculty Members of Mechanical Engineering Department</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center my-10">
        {coordinators.map((coordinator, index) => (
          <MemberCardBottom
            key={index}
            name={coordinator.name}
            role={coordinator.role}
            image={coordinator.image}
            linkedinUrl={coordinator.linkedinUrl}
            profileURL={coordinator.profileURL}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}
