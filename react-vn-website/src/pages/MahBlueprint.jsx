import React from 'react'
import { useState, useEffect } from 'react';
import Hero from '../components/HeroComingSoon';
import hero from "../assets/MahBlueprint.webp"
// import ComingSoon1 from '../assets/coming-soon-mobile.png'
import Footer from "../components/Footer";
import Card from '../components/EBCard';

export default function MahBlueprint() {
  const imageSrc = hero

  return (
    <div className="w-full h-screen">
      <div className='mt-20'>
        <Hero imageSrc={imageSrc} />
      </div>

      <div style={{ backgroundColor: '#2d0701' }}>
        
        <main className="mx-auto px-6 w-full max-w-screen-xl space-y-12">
          
          <section className="max-w-6xl mx-auto px-4 text-center relative">
            <br/>
            <br/>
            <br/>
            <h1 className="text-5xl text-orange-400 align-middle font-title font-bold mb-2">What is Maharashtra's Blueprint?</h1>
            <br />
            
            <p className="text-orange-300 mt-5 text-2xl">
              महाराष्ट्राने सहकार, संतपरंपरा, ऐतिहासिक लढे, उद्योग, तंत्रज्ञान, क्रिडा, लोककला आणि सांस्कृतिक वारशाच्या माध्यमातून देशाला दिशा दिली आहे आणि भविष्यातही देत राहील. ही परंपरा नव्या युगाच्या गरजेनुसार पुढे नेत, तरुणांना प्रेरित करणे आणि नवकल्पना रुजवणे हा 'महाराष्ट्राचा ब्लूप्रिंट' या पॉडकास्टचा उद्देश असेल.
              <br /><br />
              विश्वनेतृत्वम् क्लब, विश्वकर्मा इन्स्टिट्यूट ऑफ टेक्नॉलॉजी, पुणे यांच्या वतीने सुरू होणाऱ्या या मालिकेत विज्ञान, उद्योग, शिक्षण, सामाजिक परिवर्तन, क्रिडा, सहकार आणि संशोधन यांसारख्या क्षेत्रांतील तज्ज्ञ, उद्योजक आणि विचारवंत सहभागी होतील. ते महाराष्ट्राच्या उज्ज्वल भविष्यासाठी ठोस आराखडा मांडतील आणि राज्याच्या सर्वांगीण विकासावर प्रेरणादायी संवाद घडवतील.
            </p>
              <br />
              <p className="text-white mt-5 text-4xl italic">लवकरच येत आहे आपल्या भेटीला...
              </p>
            <br />
            <br />
          </section>
        </main>
      </div>

      <Footer />
    </div>


  );
}
