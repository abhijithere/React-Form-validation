// src/Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#101010] p-4">
      <div className="w-full max-w-lg bg-[#1C1C1C] border-[1px] border-[#282828] p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Form Submitted Successfully!</h2>
        <div className="mb-4 gap-4">
          <h3 className="text-xl mb-3 font-semibold text-yellow-600">Submitted Data:</h3>
          <ul className='flex flex-col justify-start items-start gap-1 text-lg'>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key} className="text-gray-500 space-x-4 flex justify-start items-start">
                <strong>{key}:</strong> 
                <span className='text-gray-200 text-justify'>{value}</span> 
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Success;
