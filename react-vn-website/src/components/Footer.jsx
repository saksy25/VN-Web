import React from 'react';
import insta from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.webp'
import whatsapp from '../assets/whatsapp.webp'
import yt from '../assets/youtube.webp'
import VN from '../assets/vnLogo.webp'
import VIT from '../assets/VIT White.webp'

const Footer = () => {
  const socialLinks = [
    { src: insta, url: "https://www.instagram.com/vishwanetrutvam.vitpune?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { src: linkedin, url: "https://www.linkedin.com/company/vishwa-netrutvam-mechanical-student-s-association/" },
    { src: whatsapp, url: "https://whatsapp.com/channel/0029VaozeCbCxoArLFCClM1k " },
    { src: yt, url: "https://www.youtube.com/@vishwanetrutvamvitpune" },
  ];

  const logoLinks = [
    { src: VN, alt: "VN Logo" },
    { src: VIT, alt: "VIT Logo" },
  ];

  return (
    <footer className="bg-gradient-to-r from-red-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-5 md:gap-12">
          {/* Logos with vertical bar */}
          <div className="flex items-center justify-center space-x-4">
            <img
              src={logoLinks[0].src}
              alt={logoLinks[0].alt}
              className="w-30 h-20 object-contain"
            />
            <div className="w-px h-20 bg-white"></div> {/* Vertical white bar */}
            <img
              src={logoLinks[1].src}
              alt={logoLinks[1].alt}
              className="w-30 h-20 object-contain"
            />
          </div>

          {/* Address */}
          <div className="text-center">
            <h3 className="text-2xl font-title font-semibold mb-3">Vishwa Netrutvam - VIT Pune</h3>
            <p className="text-gray-200 font-title text-sm">
            Department of Mechanical Engineering,
            </p>
            <p className="text-gray-200 font-title text-sm">
            Vishwakarma Institute of Technology, Pune,
            </p>
            <p className="text-gray-200 font-title text-sm">
            Maharashtra, INDIA - 411 037
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-title font-semibold mb-3">Let's Connect</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300"
                >
                  <img
                    src={social.src}
                    alt={`Link to ${social.url}`}
                    className="w-10 h-10 hover:opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t-2 border-white/10 mx-auto w-full max-w-7xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center font-title text-sm">
          © 2025 by Vishwa Netrutvam
        </div>
      </div>
    </footer>
  );
};

export default Footer;
