import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import mongodb from '../assets/mongodb.png'
import nodejs from '../assets/nodejs.png'
import figma from '../assets/figma.png'
import bootstrap from '../assets/bootstrap.png'

const Skills = () => {
  return (
    <div className='bg-black text-gray-400 md:h-[100px] max-w-[1200px] mx-auto grid grid-cols-3 sm:grid sm:grid-cols-4 place-items-center md:flex md:justify-between md:items-center'>
        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={html} alt="" />
            <p className='mt-2'>HTML</p>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={css} alt="" />
            <p className='mt-2'>CSS</p>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={javascript} alt="" />
            <p className='mt-2'>JavaScript</p>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={react} alt="" />
            <p className='mt-2'>React</p>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={mongodb} alt="" />
            <p className='mt-2'>MongoDB</p>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={nodejs} alt="" />
            <p className='mt-2'>Node.js</p>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={tailwind} alt="" />
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={bootstrap} alt="" />
            <p className='mt-2'>Bootstrap</p>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[70px]'>
            <img src={figma} alt="" />
            <p className='mt-2'>Figma</p>
        </div>
    </div>
  )
}

export default Skills
