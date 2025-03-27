import React from 'react'
import { FaGamepad } from "react-icons/fa";

const Top_Bar = () => {
  return (
    <div className='top-0 z-20 flex justify-between h-20 w-screen bg-slate-900 fixed backdrop-blur-none'>
      <FaGamepad className='w-16 flex justify-center text-6xl text-white ml-6 ease-in-out duration-300 hover:text-red-600 hover:cursor-pointer'/>
      <div className='flex space-x-8 text-2xl mr-8 my-2'>
        <span className='navbar'>Discover</span>
        <span className='navbar'>Character</span>
        <span className='navbar'>News</span>
        <span className='navbar'>Support</span>
      </div>
      <div className='w-1/3 flex justify-end items-center mr-4'>
        <button className='bg-red-500 w-32 h-2/3 rounded-xl font-serif font-bold text-black hover:text-white
        transition-all duration-200 ease-in-out'>PLAY NOW</button>
      </div>
    </div>
  )
}


export default Top_Bar