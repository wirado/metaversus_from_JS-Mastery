'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { slideIn,staggerContainer,textVariant } from '../utils/motion'

const Hero = () => (
        <section className={`${styles.yPaddings} mx-auto pl-6 sm:pl-14`} >

          <motion.div  
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{once:false, amount:0.25}} 
          className={`${styles.innerWidth} mx-auto flex flex-col`} >

          <div className="flex justify-center items-center flex-col relative z-10" >
            <motion.h1 
            variants={textVariant(1.3)}
            className={`${styles.heroHeading} text-center`} >
              Metaverse <br/>
              Madness
            </motion.h1>
          </div>

          <motion.div 
          variants={slideIn('right','tween',0.2,1)}
          className='relative w-full -mt-[20px]' >

           
              <img src='/cover.png' alt='cover' className="w-full sm:h-[500px] h-[350px] rounded-tl-[140px] object-cover -top-[30px] -mt-[50px]" />
              <a href="#explore" >
              <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10" >
                <img src='/stamp.png' alt='stamp' className="sm:w-[150px] w-[100px] object-contain"  />
              </div>
            </a>
                      
          </motion.div>

          </motion.div>
        </section>

        );

export default Hero;
