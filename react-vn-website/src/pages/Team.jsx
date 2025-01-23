import React from 'react';
import Hero from '../components/Hero';
import Hero1 from '../components/Hero-team';
import Footer from '../components/Footer';
import MemberCardFaculty from '../components/MemberCardL';
import MemberCard1 from '../components/CoordsCard';
import MemberCard2 from '../components/MemberCard';

  // Sample coordinator data - replace with your actual data
  const coordinators = [
    {
      name: "Atharva Gumte",
      role: "Finance & Sponsorship Coordinator",
      image: "/path/to/image1.jpg",
      linkedinUrl: "https://www.linkedin.com/in/atharva-gumte/",
      instagramUrl: 'https://www.instagram.com/atharva.gumte/?hl=en'
    },
    {
      name: "Sarthak Pathak",
      role: "Finance & Sponsorship Coordinator",
      image: "/path/to/image2.jpg",
      linkedinUrl: "www.linkedin.com/in/sarthak-pathak-b57887285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagramUrl: 'https://www.instagram.com/invites/contact/?igsh=113x6j7nv3m35&utm_content=kn0le63'
    },
    {
      name: "Pavitra Sardesai",
      role: "Finance & Sponsorship Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "https://www.instagram.com/pavitra__19?igsh=M2hxY2l5c25hbGYy",
      instagramUrl: 'https://www.instagram.com/pavitra__19?igsh=aXNnZWgyN3Z2dDMx'
    },
    {
      name: "Kanad Bamane",
      role: "Content Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "https://www.linkedin.com/in/kanad-bamane-aa4262245",
      instagramUrl: 'https://www.instagram.com/kanad_bravo?igsh=MTh1eHY0ampnd21jYQ=='
    },
    {
      name: "Aniruddha Aher",
      role: "Content Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "https://www.instagram.com/aniruddha.aher?igsh=MXA5NDNjeHViNTNiNw==",
      instagramUrl: 'https://www.instagram.com/aniruddha.aher?igsh=MXA5NDNjeHViNTNiNw=='
    },
    {
      name: "Dhirendra Gundre",
      role: "Management Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "https://www.linkedin.com/in/dhirendra-gundre-0702332ba/",
      instagramUrl: 'https://www.instagram.com/dhirendra_24/'
    },
    {
      name: "Rohit Dane",
      role: "Management Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "https://www.linkedin.com/in/rohit-dane-01a205288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagramUrl: 'https://www.instagram.com/rd23_cric?igsh=NXU0cjgwN2xld2N0'
    },
    {
      name: "Rohit Ramteke",
      role: "Management Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "http://www.linkedin.com/in/rohitgramteke",
      instagramUrl: 'https://www.instagram.com/rishi__ramteke'
    },
    {
      name: "Aryaa Khatavkar",
      role: "Management Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "https://www.linkedin.com/in/aryaa-khatavkar-2a480330b/",
      instagramUrl: 'https://www.instagram.com/iskaryy_05?igsh=Z2w1cWM2ZXY0Zm0w'
    },
    {
      name: "Rutuja Apte",
      role: "Management Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "https://www.linkedin.com/in/rutuja-apte-a88aaa287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagramUrl: 'https://www.instagram.com/_ruta.22?igsh=MW90djVvMW1zeWJ4Zw=='
    },
    {
      name: "Sahil Gholawade",
      role: "Management Coordinator",
      image: "/path/to/image3.jpg",
      linkedinUrl: "https://www.instagram.com/incredible_sa.hil?igsh=MXZoMnVuZXI3ODB6cw==",
      instagramUrl: 'https://www.instagram.com/incredible_sa.hil/profilecard/?igsh=MXZoMnVuZXI3ODB6cw=='
    },
    {
      name: "Anagha Pandit",
      role: "Multimedia Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "https://www.linkedin.com/in/anagha-pandit-ab8a86291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagramUrl: 'https://www.instagram.com/anaghapanditt?igsh=enhxd3BvdHRtaDNh&utm_source=qr'
    },
    {
      name: "Milind Kalse",
      role: "Multimedia Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "https://www.linkedin.com/in/milind-kalse-361378322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagramUrl: 'https://www.instagram.com/milind_kalse?igsh=MTAyeG1tMTF4b3dkNQ=='
    },
    {
      name: "Shreya Gade",
      role: "Social Media Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "https://www.linkedin.com/in/shreya-gade-b73318288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagramUrl: 'https://www.instagram.com/seaborgium601?igsh=czJ3bTNqejFqb2xx'
    },
    {
      name: "Viren Jadhav",
      role: "Technical Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "#",
      instagramUrl: 'https://www.instagram.com/virenjadhav05?igsh=MTFmMXhhOXYxNXpuMw=='
    },
    {
      name: "Keertana Iyer",
      role: "Technical Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "https://www.linkedin.com/in/keertana-iyer-451863293/",
      instagramUrl: 'https://www.instagram.com/kittu_16095/'
    },
    {
      name: "Arnaav Patil",
      role: "Technical Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "https://www.instagram.com/_arnavpatil_1810?igsh=NHMxMG00cHZ6bGpx",
      instagramUrl: 'https://www.instagram.com/_arnavpatil_1810/?utm_source=ig_web_button_share_sheet'
    },
    {
      name: "Omkar Chincolikar",
      role: "Technical Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "https://www.linkedin.com/in/omkar-chincholkar-96320a2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagramUrl: 'https://www.instagram.com/omkar__chincholkar?igsh=MTZnZmNhdHhmajI1Ng=='
    },
    {
      name: "Sumit Lutade",
      role: "Technical Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sumit-lutade-185025294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagramUrl: 'https://www.instagram.com/sumit_lutade08?igsh=MWpsNjg3NTd1OHU5Ng=='
    },
    {
      name: "Akansha Ghule",
      role: "Technical Coordinator",
      image: "/path/to/image4.jpg",
      linkedinUrl: "https://www.instagram.com/akansha_ghule_3?igsh=NXZwanp6MHBkYzZr",
      instagramUrl: 'https://www.instagram.com/akansha_ghule_3/profilecard/?igsh=NXZwanp6MHBkYzZr'
    }
  ];

const TeamPage = () => {
  return (
    <>
      <Hero1 title='Vishwa Netrutvam Team'
        description='2024-2025'
        imageSrc='/src/assets/Team.png'
      />
      
      <main className="bg-white min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Faculty Advisors Section */}
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-5xl text-center font-title font-bold text-black mb-4">Guiding with Expertise</h2>
            <p className="text-black text-center text-xl italic mb-8 max-w-2xl">
            Provide invaluable mentorship and strategic guidance, ensuring the committee's activities align with institutional goals and maintain a high standard of excellence.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <MemberCardFaculty
                name="Prof. (Dr.) Dattatray Hulwan"
                role="Head of Mechanical Engineering Department"
                role1="VIT Pune"
                image="/images/Team/HOD.png"
              />
              <MemberCardFaculty
                name="Prof. (Dr.) Sunil Shinde"
                role="Faculty Advisor,"
                role1="Vishwa Netrutvam"
                image="/images/Team/FA.png"
              />
            </div>
          </div>

          {/* Chairperson Section - Left Image, Right Content */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 mb-12">
            <div className="md:w-1/3 m-4">
              <MemberCard2
                name="Atharv Kadam"
                image="/images/Team/kadam.png"
                linkedinUrl='www.linkedin.com/in/atharv-kadam-a832ab231/'
                instagramUrl='www.linkedin.com/in/sakshi-salunke-758014273'
              />
            </div>
            <div className="text-center md:w-1/2 p-2">
              <h2 className="text-5xl font-bold font-title text-black mb-4">Chairperson</h2>
              <p className="text-black text-xl italic">
              Drives the club's mission with passion, ensuring every initiative aligns with the team's goals. A true team player, fostering innovation, teamwork, and success, inspiring every member to give their best.
              </p>
            </div>
          </div>

          {/* Mentor Section - Left Content, Right Image */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-12 mx-4 mb-12 md:ml-12">
            <div className="w-full overflow-x-auto scrollbar-hide ">
              <div className="flex md:flex-row flex-col items-center md:gap-8 gap-8 p-4">
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Prathamesh Mujumdar"
                    image="/images/Team/mujumdar.png"
                    linkedinUrl='http://www.linkedin.com/in/prathamesh-mujumdar-0010b122a'
                    instagramUrl='www.linkedin.com/in/sakshi-salunke-758014273'
                  />
                  </div>
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Yash Digraskar"
                    image="/images/Team/yash.png"
                    linkedinUrl='https://www.linkedin.com/in/yash-digraskar-8669ab22a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    instagramUrl='www.linkedin.com/in/sakshi-salunke-758014273'
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:w-11/12">
              <h2 className="text-5xl font-title font-bold text-black mb-4">Mentor</h2>
              <p className="text-black text-xl italic">
              Provide guidance to steer the team in the right direction, nurturing creativity, problem-solving skills, and the confidence to achieve academic and professional goals.
              </p>
            </div>
          </div>

          {/* Club Exe Section - Left Image, Right Content */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 mb-12">
            <div className="md:w-1/3 m-4">
              <MemberCard2
                name="Omkar Bajpai"
                image="/images/Team/omkar.png"
                linkedinUrl='www.linkedin.com/in/omkar-bajpai-5349aa284'
                instagramUrl='https://www.instagram.com/omkarrr_72?igsh=MTlpcW5seThtaGFvZg=='
              />
            </div>
            <div className="text-center md:w-1/2 p-2">
              <h2 className="text-5xl font-title font-bold text-black mb-4">Club Executive Officer</h2>
              <p className="text-black text-xl italic">
              Oversees the daily operations, ensures collaboration among all domains, and acts as a bridge between team members and leadership.
              </p>
            </div>
          </div>

          {/* Finance Section - Left Content, Right Image */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-12 mx-4 mb-12 md:ml-12">
            <div className="w-full max-w-full overflow-x-auto scrollbar-hide ">
              <div className="flex md:flex-row flex-col items-center md:gap-8 gap-8 p-4">
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Darshan Ghuge"
                    image="/images/Team/darshan.png"
                    linkedinUrl=''
                    instagramUrl='https://www.instagram.com/darsh_437?igsh=a2FueWFxb2hwazJ6'
                  />
                </div>
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Sairaj Abnave"
                    image="/images/Team/sairaj.png"
                    linkedinUrl=''
                    instagramUrl='https://www.instagram.com/sai_raj824?igsh=a2tid2pmOWN0d2c3'
                  />
                </div>
              </div>
            </div>  
            <div className="text-center md:w-11/12">
              <h2 className="text-5xl font-title font-bold text-black mb-4">Finance & Sponsorship Secretary</h2>
              <p className="text-black text-xl italic">
              Manages budgets, secures sponsorships, ensures transparency in financial matters, and allocates resources to different domains efficiently.
              </p>
            </div>
          </div>

          {/* PR Section - Left Content, Right Image */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mx-3 mb-12 md:ml-20 md:mr-8">
          <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex md:flex-row flex-col items-center md:gap-8 gap-8 p-4">
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Disha Borale"
                    image="/path/to/image8.jpg"
                    linkedinUrl='https://www.linkedin.com/in/disha-borale-a80641257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    instagramUrl='https://www.instagram.com/the_none_of_your_business?igsh=YXI1Mm9tMHMzdGk='
                  />
                </div>
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Yash Mane"
                    image="/path/to/image8.jpg"
                    linkedinUrl='https://www.linkedin.com/in/yash-mane-bb7a18228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    instagramUrl='www.linkedin.com/in/sakshi-salunke-758014273'
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:w-11/12">
              <h2 className="text-5xl font-title font-bold text-black mb-4">Head PR & Branding</h2>
              <p className="text-black text-xl italic">
              Manages public relations, builds the committee's brand, oversees promotional campaigns, and ensures strong communication with stakeholders.
              </p>
            </div>
          </div>

          {/* Management Section - Left Content, Right Image */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-12 mx-4 mb-12 md:ml-12">
            <div className="w-full overflow-x-auto scrollbar-hide ">
              <div className="flex md:flex-row flex-col items-center md:gap-8 gap-8 p-4">
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Kalpesh Deore"
                    image="/path/to/image8.jpg"
                    linkedinUrl='https://www.linkedin.com/in/kalpesh-deore-0834ba2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    instagramUrl='https://www.instagram.com/_kalpesh_deore_?igsh=bW5vdjBiNjBxMHJq'
                  />
                  </div>
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Milind Lohar"
                    image="/path/to/image8.jpg"
                    linkedinUrl='https://www.linkedin.com/in/milind-lohar-7b196b265'
                    instagramUrl='https://www.instagram.com/milind_lohar_27?igsh=bXU2MDJkanBiMXVk'
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:w-11/12">
              <h2 className="text-5xl font-title font-bold text-black mb-4">Management Secretary</h2>
              <p className="text-black text-xl italic">
              Coordinates events, tracks progress, and ensures the team stays on schedule and meets deadlines effectively.
              </p>
            </div>
          </div>

          {/* SYDA Secretary Section - Left Image, Right Content */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 mb-12">
            <div className="md:w-1/3 m-4">
              <MemberCard2
                name="Dnyaneshwari Patil"
                image="/images/Team/kadam.png"
                linkedinUrl='https://www.linkedin.com/in/dnyaneshwari-patil-a52613298'
                instagramUrl='https://www.instagram.com/_.dnyaneshwari._14?utm_source=qr&igsh=MW9nYnQ1bGUwemNsZg=='
              />
            </div>
            <div className="text-center md:w-1/2 p-2">
              <h2 className="text-5xl font-title font-bold text-black mb-4">SYDA Secretary</h2>
              <p className="text-black text-xl italic">
              Ensures SYDA students are actively engaged and events run smoothly, fostering connections and effective communication within the team.
              </p>
            </div>
          </div>

          {/* Tech Secretary Section - Left Image, Right Content */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10 mx-4 mb-16 md:ml-12">
            {/* Scrollable Member Cards */}
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex md:flex-row flex-col items-center md:gap-8 gap-8 p-4">
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Vadiraj Tadas"
                    image="/path/to/image5.jpg"
                    linkedinUrl='https://www.linkedin.com/in/vadiraj-tadas-306389290'
                  />
                </div>
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Siddhi Ghuge"
                    image="/path/to/image6.jpg"
                    linkedinUrl='http://linkedin.com/in/siddhi-g-7353b4216'
                    instagramUrl='https://www.instagram.com/siddhi_ghuge7?igsh=MXgxazB5dThmNGVxZA=='
                  />
                </div>
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Rushikesh Dhavane"
                    image="/path/to/image7.jpg"
                    linkedinUrl='https://www.linkedin.com/in/rushikesh-dhavane-a0a841266'
                    instagramUrl='https://www.instagram.com/im_rushidhavane45?igsh=MW1ldGpxOTBycm9zbA=='
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:w-7/12">
              <h2 className="text-5xl font-title font-bold text-black mb-4">Technical Secretary</h2>
              <p className="text-black text-xl italic">
                Develops innovative technical solutions, supports event technology needs, and ensures smooth operation of all tech-related aspects.
              </p>
            </div>
          </div>


          {/* Web Lead Section - Left Content, Right Image */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mx-4 mb-4 md:ml-20 md:mr-8">
            <div className="w-full overflow-x-auto scrollbar-hide ">
              <div className="flex md:flex-row flex-col items-center md:gap-8 gap-8 p-4">
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Sakshi Salunke"
                    image="/images/Team/sakshi.png"
                    linkedinUrl='www.linkedin.com/in/sakshi-salunke-758014273'
                    instagramUrl='https://www.instagram.com/sakshi_en22?igsh=eDc1MmkwdjFkYW1o'
                  />
                </div>
                <div className="flex-none md:mx-0 mx-auto">
                  <MemberCard2
                    name="Prajyot Borikar"
                    role="Website Secretary"
                    image="/images/Team/prajyot.png"
                    linkedinUrl='https://www.linkedin.com/in/prajyotborikar322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    instagramUrl='https://www.instagram.com/kon_prajyot?igsh=OWQ4OGhkMmY4ejZp'
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:w-11/12">
              <h2 className="text-5xl font-title font-bold text-black mb-4">Website Secretary</h2>
              <p className="text-black text-xl italic">
              Designs, develops, and maintains the website, ensuring it reflects the committee's vision and provides easy access to essential information.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-5xl font-title font-bold text-black mb-4">
                Our Coordinators
              </h2>
              <p className="text-black text-xl italic mb-8">
                Our dedicated team of coordinators works tirelessly to ensure smooth operation of all committee activities. They bridge the gap between different departments and play a crucial role in achieving our objectives.
              </p>
            </div>

            {/* Coordinators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
              {coordinators.map((coordinator, index) => (
                <MemberCard1
                  key={index}
                  name={coordinator.name}
                  role={coordinator.role}
                  image={coordinator.image}
                  linkedinUrl={coordinator.linkedinUrl}
                  instagramUrl={coordinator.instagramUrl}
                />
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default TeamPage;