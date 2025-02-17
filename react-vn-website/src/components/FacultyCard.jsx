import React from 'react';

const FacultyCard = ({ name, role, image}) => {
  return (
    <div 
      className="flex flex-col w-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer bg-blue-100"
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
      <div className="bg-blue-100 p-6">
        <div className="text-center mb-4">
          <h3 className="text-l font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
        <div className="flex justify-center gap-6">
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;