import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter,FaBars, FaTimes  } from 'react-icons/fa';


const Nav_bar = () => {
  const [nav1, setNav1] = useState(false);
  const hClick2 = () => setNav1(!nav1);

  const [nav, setNav] = useState(false);
  const hClick = () => setNav(!nav);


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div className='shadow-md shadow-violet-500 hover:scale-110 duration-500 text-4xl font-bold'>
       <span className='text-yellow-500'>D</span>
       <span className=' text-gray-500'>eveloper</span>
   </div>
         
  

     <ul className='hidden md:flex'>

         <li className=' shadow-md shadow-violet-400 hover:text-violet-500 duration-300 hover:scale-110 font-bold cursor-pointe'>
             <Link onClick={closeMenu} to='home' spy={true} smooth={true} offset={-250}  duration={400} > Home </Link>
        </li>
         
        <li className='shadow-md shadow-violet-400 hover:text-violet-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
             <Link onClick={closeMenu} to='about' spy={true} smooth={true} offset={-50}  duration={400} > About </Link>
        </li>
        
        <li className='shadow-md shadow-violet-400 hover:text-violet-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
             <Link to='skills' spy={true} smooth={true} offset={-50} duration={400} onClick={closeMenu} > Skills </Link>

        </li> <li className='shadow-md shadow-violet-400 hover:text-violet-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
             <Link to='projects' spy={true} smooth={true} offset={-130} duration={400} onClick={closeMenu}> Projects </Link>

        </li> <li className='shadow-md shadow-violet-400 hover:text-violet-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
             <Link to='contact' spy={true} smooth={true} offset={-50} duration={400} onClick={closeMenu} > Contact </Link>
        </li>
    </ul>
     

     
      <div onClick={hClick} className='md:hidden z-10 duration-300 hover:scale-110 hover:text-amber-500 font-bold cursor-pointer'>
      {!nav ? <FaBars /> : <FaTimes />}
      </div>

    
       {nav && (
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
          <li className='py-6 text-4xl rounded-full duration-300 hover:scale-110 hover:bg-green-500 hover:text-white'>
            <Link onClick={hClick}  spy={true} to='home' smooth={true} duration={400}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl rounded-full duration-300 hover:scale-110 hover:bg-green-500 hover:text-white'>
            <Link onClick={hClick}  spy={true} to='about' smooth={true} duration={400}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl rounded-full  duration-300 hover:scale-110 hover:bg-green-500 hover:text-white'>
            <Link onClick={hClick}  spy={true} to='skills' smooth={true} duration={400}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl rounded-full duration-300 hover:scale-110 hover:bg-green-500 hover:text-white'>
            <Link onClick={hClick}  spy={true}  to='projects' smooth={true} duration={400}>
              Projects
            </Link>
          </li>
          <li className='py-6 text-4xl rounded-full duration-300 hover:scale-110 hover:bg-green-500 hover:text-white'>
            <Link onClick={hClick}  spy={true} to='contact' smooth={true} duration={400}>
              Contact
            </Link>
          </li>
        </ul>
      )}



<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a
              className='flex justify-between items-center w-full text-white'
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500 '>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-100 '>
            <a
              className='flex justify-between items-center w-full text-blue-500'
              href="https://www.telegram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Nav_bar;



