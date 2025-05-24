import React from 'react';
import { FlipWords } from './FlipWord';
import { motion } from 'framer-motion'; // ✅ Correct import

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>

      {/* Desktop View */}
      <div className='flex-col hidden md:flex c-space space-y-4'>
        <motion.h1
          className='text-4xl font-medium text-white'
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Hi, I'm Soumi
        </motion.h1>

        <motion.p
          className='text-5xl font-medium text-neutral-50'
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          A Developer <br /> Drafting to Crafting
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <FlipWords words={words} className="font-black text-white text-8xl" />
        </motion.div>

        <motion.p
          className='text-4xl font-medium text-neutral-400'
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Web Solutions
        </motion.p>
      </div>

      {/* Mobile View */}
      <div className='flex flex-col space-y-6 md:hidden c-space'>
        <motion.p
          className='text-4xl font-medium text-white'
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Hi, I'm Soumi
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <p className='text-5xl font-black text-neutral-300'>Building</p>
          <div className='mt-2'>
            <FlipWords words={words} className="font-bold text-white text-7xl" />
          </div>
          <p className='text-4xl font-black text-neutral-300'>Web Applications</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
