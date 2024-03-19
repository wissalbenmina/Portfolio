import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full sm:h-[90px] p-7 flex justify-between mx-auto font-bold text-xl bg-[#161616]'>
      <span className='primary-color'><a href="#about">Benmina Wissal</a></span>
      <div className='text-gray-600 flex space-x-4 pt-1'>
        <a href='mailto:wissal.benmina@gmail.com' target="_blank"><FaEnvelope /></a>
        <a href='https://github.com/wissalbenmina' target="_blank"><FaGithub /></a>
        <a href='https://www.linkedin.com/in/wissal-benmina/' target="_blank"><FaLinkedin /></a>
      </div>
    </div>
  )
}

export default Footer