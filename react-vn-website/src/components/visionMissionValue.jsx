import React, { useRef } from 'react';

export default function VisionMissionValue({ title, description, bgColor = 'bg-white' }) {
    const cardRef = useRef(null);

    return (
        <div
            ref={cardRef}
            className={`rounded-lg p-6 ${bgColor} shadow-lg flex flex-col items-center w-full sm:w-[400px] md:w-[400px] transition-transform duration-200`}
        >
            {/* Title and Description Section */}
            <div className="flex flex-col items-center flex-grow w-full mt-2">
                <div className="text-4xl font-bold text-center mb-5">{title}</div>
                <p className="text-sm sm:text-base text-center">{description}</p>
            </div>

        </div>
    );
}
