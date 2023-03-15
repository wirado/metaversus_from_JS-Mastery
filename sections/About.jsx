'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { fadeIn,staggerContainer,textContainer,textVariant2 } from '../utils/motion'


const About = () => (
  <section className={`${styles.paddings} relative z-10`} >
    
    <div className="gradient-02 z-0" ></div>

    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false,amount:0.25}}
    className={`${styles.innerWidth} flex justify-center items-center mx-auto flex-col`}>

      <motion.p
        variants={textContainer}
        className={`text-center  text-white text-[14px]`}
        >
          {Array.from('| About Metaversus').map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}

        </motion.p>

        <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className='mt-2 sm:text-[32px] text-[22px] md:px-[120px] text-center text-white'>
           <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
        </motion.p>
     </motion.div>
    

  </section>
);

export default About;
