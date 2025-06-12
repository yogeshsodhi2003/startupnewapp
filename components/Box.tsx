'use client'
import { motion } from "motion/react"

type boxprops= {
  heading: string
}

const Box = ({heading} : boxprops) => {
  return (
      <motion.div  initial={{ boxShadow: '0px 0px 0 rgba(0, 0, 0, 0)' }}   animate={{ boxShadow: '18px 18px 0 rgba(0, 0, 0)' }}
  transition={{ delay:0.5, duration: 0.5, ease: 'easeOut' }} className="bg-white  h-40 flex items-center  p-10   max-w-2/2
  md:w-1/2 justify-center  border-4 outline-[#FF748B]"><h1 className="text-2xl md:text-3xl font-milker text-[#FF748B] stroke-2 text wrap whitespace-pre-line">{heading}</h1></motion.div>
  )
}

export default Box;
