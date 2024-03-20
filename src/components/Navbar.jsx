import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='bg-[#161616] text-gray-400 h-[70px] w-full mx-auto px-4 flex justify-between items-center'>

      <h1 className='text-3xl font-bold primary-color ml-4'>Porfolio.</h1>
      <ul className='hidden md:flex'>
        <li className='p-5'><a href="#about">About</a></li>
        <li className='p-5'><a href="#projects">Projects</a></li>
        <li className='p-5'><a href="#contact">Contact</a></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden mr-6'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? 'fixed h-full left-0 top-0 w-[40%] bg-[#202121] ease-in-out duration-500'
                              : 'fixed left-[-100%]'}>
        <ul className='p-8 text-xl'>
          <li className='p-2'><a href="#about">About</a></li>
          <li className='p-2'><a href="#projects">Projects</a></li>
          <li className='p-2'><a href="#contact">Contact</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
