/*import React, { useState } from 'react';
import menu from '../assets/navmenu.svg'
function Navigation(){
  return <ul className='nav-ul'>
    <li className='nav-li'>
    <a className='nav-lnk' href='#home'>Home</a>
    </li>
    <li className='nav-li'>
    <a className='nav-lnk' href='#about'>About</a>
    </li>
    <li className='nav-li'>
    <a className='nav-lnk' href='#work'>Work</a>
    </li>
    <li className='nav-li'>
    <a className='nav-lnk' href='#contact'>Contact</a>
    </li>
    </ul>
}

const Navbar = () => {
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a href='/' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
            Soumi
          </a>
          <button aria-label="Open menu" onClick={()=>setIsOpen(!isOpen)}
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
            <img src={menu} alt="toogle" className='w-6 h-6'/>
          </button>
          <nav className='hidden sm:flex'></nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;*/

import React, { useState } from 'react';
import menu from '../assets/navmenu.svg';
import { motion } from 'motion/react';

function Navigation() {
  return (
    <ul className='nav-ul'>
      <li className='nav-li'>
        <a className='nav-link' href='#home'>Home</a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href='#about'>About</a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href='#work'>Work</a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href='#contact'>Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a
            href='/'
            className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'
          >
            Soumi
          </a>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className='flex sm:hidden text-neutral-400 hover:text-white focus:outline-none'
          >
            <img src={menu} alt="toggle" className='w-6 h-6' />
          </button>

          {/* Desktop Navigation */}
          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen&&(<motion.div className='block overflow-hidden text-center sm:hidden' initial={{opacity:0, x:-10}}
        animate={{opacity:1, x:0}}
        style={{maxWidth:"100vh"}}
        transition={{duration:1}}>
        <nav className='pb-5'>
          <Navigation/>
        </nav>
      </motion.div>)}
      </div>
    </div>
  );
};

export default Navbar;

