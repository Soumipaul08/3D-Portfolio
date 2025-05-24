import React from 'react'
import sky from '../assets/sky.jpg'
import mountain3 from '../assets/mountain-3.png'
import planets from '../assets/planets.png'
import mountain2 from '../assets/mountain-2.png'
import mountain1 from '../assets/mountain-1.png'
import {motion, useScroll, useTransform } from 'motion/react'

const ParallaxBackground = () => {
   const { scrollYProgress } = useScroll();
  const mountain3Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "0%"]);
  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>
        {/*Background Sky*/}
        <div className='absolute inset-0 w-full h-screen -z-50'
        style={{
            backgroundImage: `url(${sky})`,
            backgroundPosition:"bottom",
            backgroundSize: "cover",
        }}/>
        {/*Mountain Layer 3*/}
        <motion.div className='absolute inset-0 -z-40 '
         style={{
            backgroundImage: `url(${mountain3})`,
            backgroundPosition:"bottom",
            backgroundSize: "cover",
            y:mountain3Y
        }}/>
        {/*Planets*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-30'
        style={{
            backgroundImage: `url(${planets})`,
            backgroundPosition:"bottom",
            backgroundSize: "cover",
            x:planetsX
        }}/>
        {/*Mountain Layer 2*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-20'
        style={{
            backgroundImage: `url(${mountain2})`,
            backgroundPosition:"bottom",
            backgroundSize: "cover",
            y:mountain2Y
        }}/>
        {/*Mountain Layer 1*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-10'
        style={{
            backgroundImage: `url(${mountain1})`,
            backgroundPosition:"bottom",
            backgroundSize: "cover",
            y:mountain1Y
        }}/>
      </div>
    </section>
  )
}

export default ParallaxBackground
