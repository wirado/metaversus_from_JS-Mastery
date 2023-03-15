'use client';

import styles from '../styles'
import { staggerContainer,fadeIn } from '../utils/motion'
import { motion } from "framer-motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-5 `}
    >
      <h1 className='text-center text-white text-lg' > | People On The World</h1>

      <p className='text-center text-3xl text-white font-bold' >Track friends around you and invite them to play together in the same world</p>


      <motion.div
      variants={fadeIn('up','tween', 0.4 ,1)}
      className='w-full  relative  flex mt-[68px] '>

        <img src='/map.png' alt='map' className=' w-full h-full object-cover ' />

        <div className='w-[70px] h-[70px] absolute bottom-20 right-20 rounded-full bg-[#5d6680]' >
        <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute rounded-full top-10 left-20 w-[70px] md:w-[160px]  ">
          <img src="/planet-06.png" alt="people" className="w-full h-full rounded object-cover" />
        </div>

        <div className="absolute rounded-full top-1/2 left-[45%] w-[70px] md:w-[160px] " >
          <img src="planet-09.png" alt="people" className="w-full h-full rounded  object-cover" />
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
