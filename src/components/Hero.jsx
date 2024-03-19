import React from 'react'
import heroimage from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return(
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img src={heroimage} alt="hero image" />
            </div>

            <div className="col-span-2 px-5 my-auto">
                <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='primary-color'>
                        I'm Wissal Benmina
                    </span> <br />
                    <TypeAnimation 
                    sequence={[
                        "Front Developer",
                        1000,
                        "Backend Developer",
                        1000,
                        "MERN Stack Developer",
                        1000,
                        "UI/UX Designer",
                        1000
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>

                <div className='my-8'>
                    <a href="/CV.pdf" download className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-[#ff5f6d] to-[#ffc371] text-white'>
                        Download CV
                    </a>
                    <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-[#ff5f6d] to-[#ffc371] text-white hover:border-none'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
