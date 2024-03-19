import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a MERN Stack developer who loves creating impressive websites and apllications. I know how to work on both the front and back ends of websites, i can also design the interfaces using Figma. I am always trying to learn new things to create even better websites and programs.
                </p>
            </div>
        </div>
        
        <img className='mx-auto mr-7 rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}/>

      </div>

    </div>
  )
}

export default About
