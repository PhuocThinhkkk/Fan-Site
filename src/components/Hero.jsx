import React from 'react'
import { FaDownload } from "react-icons/fa";


const Hero = () => {
    let videoId = '66eAN56g7D8';
    return (
      
      <div className="mt-16 relative flex justify-center items-center w-screen h-screen overflow-hidden align-top">
        
        <iframe
          className="scale-130 aspect-video overflow-y-hidden flex object-center object-contain pointer-events-none h-screen overflow-hidden"
          src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&showinfo=0&rel=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}`}
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className='absolute top-1/3 left-16 flex-col w-1/3 backdrop-blur-sm min-w-80'>
          <span className='block font-sans font-extrabold text-white text-7xl shadow-2xl'>
            FORNITE
          </span>
          <span className='font-sans text-2xl font-semibold text-white shadow-transparent'>
            A massive online multiplayer game developed by Epic Games and released in 2017. 
          </span>
          <div className='flex justify-center items-center mt-4 w-60 h-16 rounded-lg bg-yellow-500 gap-3 border-4 border-neutral-300
          hover:bg-yellow-600 hover:cursor-pointer '>
            <FaDownload className='text-2xl'/>
            <span className='font-san text-xl font-bold text-black '> Download
            </span>
          </div>
        </div>
      </div>
      
    );
  };

export default Hero