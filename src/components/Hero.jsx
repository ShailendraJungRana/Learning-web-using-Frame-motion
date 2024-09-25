import React from 'react'
import Navbar from './Navbar'
import {IoIosArrowRoundForward } from "react-icons/io";
import Herosection from "../assets/herosection.png";
// import Blob from "../../assets/Blob.png"
import {motion} from "framer-motion";

export const FadeUp = (delay) =>{
return {
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            types:"spring",
            stiffness: 100,
            duration: 0.5,
            delay: delay,
            ease: "easeInOut"
        }
    }
}
};


const Hero = () => {
  return (
    <section className='bg-light overflow-hidden relatives rounded-lg '>
        <Navbar/>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-20 '>
            <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
            <motion.h1
            variants={FadeUp(0.6)}
            initial ="initial"
            animate="animate"
            className='text-3xl lg:text-5xl font-bold !leading-snug'>
                Let's Learn to build a{""}
                <span className='text-secondary hover:text-primary'> Website </span>for your business
                 </motion.h1>
                 <motion.div 
                       variants={FadeUp(0.8)}
                       initial ="initial"
                       animate="animate"
                 className='flex justify-center md:justify-start'>
                    <button className='mt-2 primary-btn flex items-center gap-2 group'>
                        Get Started
                    <IoIosArrowRoundForward className='inline text-3xl group-hover:translate-x-2 group-hover:-rotate-45-300' />
                        </button>
                    </motion.div>
                 </div>
        </div>
        {/* Hero Image */}
        <div className='flex justify-center items-center'>
            <motion.img
            initial={{x:40, opacity:0}}
            animate={{x:10, opacity:1}}
            transition={{duration:0.7, delay:0.5, ease:"easeInOut"}}
             src={Herosection} 
             className="w-[400px] xl:w-[600px] relative z-10 drop-shadow" alt="HeroImage"/>
            {/* <motion.img
            initial={{x:40, opacity:0}}
            animate={{x:10, opacity:1}}
            transition={{duration:0.7, delay:0.5, ease:"easeInOut"}}
             src={Blob} alt=""blob
             className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
            /> */}
            {/* absolute -bottom-32 w-[800px] md:w-[1500px]  z-[1] hidden md:block' */}
        </div>
      </div>
    </section>
  )
}

export default Hero