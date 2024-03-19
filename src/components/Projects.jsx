import React from 'react'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='projects'>
      <div className="pb-8">
        <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
        <p className='text-gray-400'>Check out my Projects</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover bg-center relative' style={{backgroundImage: `url(${proj5})`}}>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>ATM</span>
                <p className='text-white text-center px-8 py-4'>Node.js ATM simulation for basic banking operations.</p>
                <div className='text-center'>
                    <a href="https://github.com/wissalbenmina/ATM" target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover bg-center relative' style={{backgroundImage: `url(${proj5})`}}>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>City Temperature</span>
                <p className='text-white text-center px-8 py-4'>Provide real-time temperature updates for various cities.</p>
                <div className='text-center'>
                    <a href="https://github.com/wissalbenmina/cityTemperature" target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover bg-center relative' style={{backgroundImage: `url(${proj5})`}}>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Blog App</span>
                <p className='text-white text-center px-8 py-4'>Manage posts and users, offering CRUD operations with authentication middleware.</p>
                <div className='text-center'>
                    <a href="https://github.com/wissalbenmina/BlogAppBackend" target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover bg-center relative' style={{backgroundImage: `url(${proj4})`}}>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Multi Rooms</span>
                <p className='text-white text-center px-8 py-4'>A real-time chat application that sends and displays messages instantly to recipients.</p>
                <div className='text-center'>
                    <a href="https://github.com/wissalbenmina/multi-room" target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover bg-center relative' style={{backgroundImage: `url(${proj3})`}}>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>E-commerce Web Site</span>
                <p className='text-white text-center px-8 py-4'>An e-commerce website specializing in jewelry</p>
                <div className='text-center'>
                    <a href="https://github.com/wissalbenmina/jewelry-ecomm" target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                    </a>
                </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover bg-center relative' style={{backgroundImage: `url(${proj2})`}}>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Recruitment Application</span>
                <p className='text-white text-center px-8 py-4'>online recruitment application to streamline the online hiring process.</p>
                <div className='text-center'>
                    <a href="https://github.com/wissalbenmina/recruitment-site" target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                    </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
