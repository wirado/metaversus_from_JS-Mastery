'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { fadeIn, staggerContainer,textContainer,textVariant2 } from '../utils/motion'

const ExploreCard = ({id,ind,active,handleClick,imgUrl,title}) => {
  return(
    <motion.div 
    onClick={()=> handleClick(id)}
    variants={fadeIn('right','spring', ind*0.5 , 0.75 )}
    className={`${active === id ? 'lg:flex-[3.5] flex-[10]' :
    'lg:flex-[0.5] flex-[2]' }
    flex justify-center items-center min-w-[170px] h-[500px] 
    transition-[flex] duration-[0.7s] ease-out-flex relative cursor-pointer `} >

      <img src={imgUrl} alt={title} className='absolute w-full h-full object-cover rounded-3xl' />
        
        {active === id &&  <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
       
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter THE Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>}
    </motion.div>
  )
}


export default ExploreCard;
