import React from 'react';
import li from '../assets/linkedin-blue.jpg'
import profileLink from '../assets/link.png'

const MemberCardBottom = ({ 
  name, 
  image, 
  linkedinUrl = "", 
  profileURL = "", 
}) => {
  // Internal constants for social icons
  const SOCIAL_ICONS = {
    profile: profileLink, // Replace with your actual icon path
    linkedin: li,  // Replace with your actual icon path
  };

  const handleSocialClick = (e, type) => {
    e.stopPropagation();
    
    switch (type) {
      case 'linkedin':
        if (linkedinUrl) {
          const url = linkedinUrl.startsWith('http') ? linkedinUrl : `https://${linkedinUrl}`;
          window.open(url, '_blank', 'noopener,noreferrer');
        }
        break;
      case 'profile':
        if (profileURL) {
          const url = profileURL.startsWith('http') ? profileURL : `https://${profileURL}`;
          window.open(url, '_blank', 'noopener,noreferrer');
        }
        break;
      default:
        break;
    }
  };

  return (
    <div 
      className="flex flex-col w-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer bg-white"
      role="article"
      tabIndex={0}
    >
      <div className="h-64 bg-gradient-to-b from-cerise-600/50 to-cyan-800/50 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-top rounded-t-2xl"
        />
      </div>
      <div className="bg-white px-5 py-6">
        <div className="text-center mb-4">
          <h3 className="text-l font-semibold text-gray-800">{name}</h3>
        </div>
        <div className="flex justify-center gap-6">
          {linkedinUrl && (
            <button
              onClick={(e) => handleSocialClick(e, 'linkedin')}
              className="transform hover:scale-110 hover:opacity-80 transition-all duration-200"
              aria-label={`Visit ${name}'s LinkedIn profile`}
            >
              <img 
                src={SOCIAL_ICONS.linkedin} 
                alt="LinkedIn" 
                className="w-10 h-10"
              />
            </button>
          )}
          {profileURL && (
            <button
              onClick={(e) => handleSocialClick(e, 'profile')}
              className="transform hover:scale-110 hover:opacity-80 transition-all duration-200"
              aria-label={`Visit ${name}'s profile profile`}
            >
              <img 
                src={SOCIAL_ICONS.profile} 
                alt="profile" 
                className="w-10 h-10"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCardBottom;
