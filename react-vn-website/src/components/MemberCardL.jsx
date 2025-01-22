import React from 'react';

const MemberCardRight = ({ name, role, role1, image, linkedinUrl = "#" }) => {
  const handleClick = () => {
    if (linkedinUrl) {
      // Ensure URL starts with http:// or https://
      const url = linkedinUrl.startsWith('http') ? linkedinUrl : `https://${linkedinUrl}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <div 
      className="flex flex-col w-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
          handleClick();
        }
      }}
    >
      <div className="h-64 bg-gradient-to-r from-cerise-600/50 to-cyan-800/50 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-top rounded-t-lg"
        />
      </div>
      <div className="bg-white p-4 text-center">
        <h3 className="text-base font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-gray-600">{role1}</p>
      </div>
    </div>
  );
};

export default MemberCardRight;