import React from 'react';

const MemberCardBottom = ({ 
  name, 
  image, 
  linkedinUrl = "", 
  instagramUrl = "", 
}) => {
  // Internal constants for social icons
  const SOCIAL_ICONS = {
    linkedin: "/src/assets/linkedin-blue.jpg",  // Replace with your actual icon path
    instagram: "/src/assets/instagram-color.jpg", // Replace with your actual icon path
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
      case 'instagram':
        if (instagramUrl) {
          const url = instagramUrl.startsWith('http') ? instagramUrl : `https://${instagramUrl}`;
          window.open(url, '_blank', 'noopener,noreferrer');
        }
        break;
      default:
        break;
    }
  };

  return (
    <div 
      className="flex flex-col w-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
      role="article"
      tabIndex={0}
    >
      {/* bg-gradient-to-b from-cyan-800/50 to-cerise-600/50 */}
      <div className="h-64 bg-water-200 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-top rounded-t-lg"
        />
      </div>
      <div className="bg-white p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
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
          {instagramUrl && (
            <button
              onClick={(e) => handleSocialClick(e, 'instagram')}
              className="transform hover:scale-110 hover:opacity-80 transition-all duration-200"
              aria-label={`Visit ${name}'s Instagram profile`}
            >
              <img 
                src={SOCIAL_ICONS.instagram} 
                alt="Instagram" 
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