import React, { useState, useEffect } from 'react';
// import Hero from '../components/HeroComingSoon';
import hero from "../assets/Engineer's Blueprint.webp"
// import ComingSoon1 from '../assets/coming-soon-mobile.png'
import Footer from "../components/Footer";
import Card from '../components/EBCard';
import Hero from '../components/Hero';

export default function EnggBlueprint() {
    const imageSrc = hero;

    return (
        <div className="w-full h-screen">
            <Hero 
                title="ENGINEER'S BLUEPRINT"
                description='Podcasts sharing expert insights on Engineering Avenues!
'
                imageSrc={imageSrc}

            />

            <main className="mt-12 mx-auto px-6 w-full max-w-screen-xl space-y-12">

                <section className="mb-10 max-w-6xl mx-auto px-4 text-center relative">
                    <h1 className="text-5xl align-middle font-title font-bold mb-2">What is Engineer's Blueprint?</h1>
                    <p className="text-gray-600 mt-5 text-2xl mb-1">
                        Engineer's Blueprint aims to bridge the gap between experienced professionals and budding
                        engineers, providing a platform for knowledge sharing, guidance, and mentorship.<br /><br />
                        Through "Engineer's Blueprint", we will be hosting interviews with accomplished alumni from
                        the Mechanical Engineering domain, representing various fields such as Core Industry, R&D,
                        MBA, Higher Studies, and more. These experts will share their invaluable experiences, insights,
                        and advice, offering students a unique opportunity to learn from their journeys.
                    </p>
                </section>

                <section>
                    <div className="mb-10 mx-auto max-w-9xl px-4 flex justify-center gap-8 flex-wrap lg:flex-nowrap">
                    <Card
                        name="Episode 1 | Insights with Mr. Rohit Gavali"
                        image="/images/EngBlueprint/EB01.webp"
                        youtube = "https://youtu.be/8E8oF7jZVto?feature=shared"
                    />
                    <Card
                        name="Episode 2 | Insights with Mr. Rohan Kulkarni"
                        image="/images/EngBlueprint/EB02.webp"
                        youtube = "https://youtu.be/l9_4O1O9AEE?feature=shared"
                    />

                    </div>
                    <div className="mb-10 mx-auto max-w-9xl px-4 flex justify-center gap-8 flex-wrap lg:flex-nowrap">
                    <Card
                        name="Episode 3 | Insights with Mr. Amol Kawade"
                        image="/images/EngBlueprint/EB03.webp"
                        youtube = "https://youtu.be/-3nxKD12EOw"
                    />
                    <Card
                        name="Episode 4 | Insights with Mr. Tushar Chavan"
                        image="/images/EngBlueprint/EB04.webp"
                        youtube = "https://youtu.be/x9amYaXS9_Q"
                    />
                    </div>
                </section>

            </main>

            <Footer />
        </div>


    );
}