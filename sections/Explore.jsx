'use client';

import {exploreWorlds } from '../constants'
import ExploreCard from '../components/ExploreCard';
import { motion } from "framer-motion";
import { useState } from "react";
import styles from '../styles'
import { staggerContainer,textContainer,textVariant2 } from '../utils/motion'


const Explore = () => {
  const [active,setActive] = useState('world-2')

  return(
    <section className={`${styles.paddings} `} id='explore' >
    <motion.div
    className={`${styles.innerWidth} flex flex-col mx-auto`}
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'>

        <motion.p
        variants={textContainer}
        className={`text-center  text-white text-[14px]`}
        >
          {Array.from('| Choose The Worlds You want').map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}

        </motion.p>
        

        <div className=' mt-14 flex flex-col lg:flex-row min-h-[70vh] gap-6' >
          {exploreWorlds.map((world,ind) => {
            return <ExploreCard {...world} ind={ind} key={world.id} active={active} handleClick={setActive} />
          })}
        </div>


    </motion.div>
    
  </section>
  )
}

export default Explore;
