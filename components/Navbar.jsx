'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { navVariants } from '../utils/motion'
const Navbar = () => (

  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={` relative ${styles.xPaddings} py-8 `}
  >
   <div className="gradient-01 w-1/2 absolute inset-0 " ></div> 
    <div  className={`${styles.innerWidth}  flex justify-between gap-x-6`} >

      <img 
      src='/search.svg'
      className="w-[24px] object-contain" />

      <h2 className="font-bold text-xl leading-[30px] text-white" >
        METAVERRSUS
      </h2>

      <img
       src='/menu.svg'
       className="w-[24px] object-contain" />

    </div>
  </motion.nav>

);

export default Navbar;
