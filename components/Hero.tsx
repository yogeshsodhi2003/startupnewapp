
import Box from '@/components/Box'

type heroPropes = {
  children?: React.ReactNode;
}

const Hero = () => {

  return (
    <div className="hero w-screen h-100  bg-[#fc3470] flex flex-col items-center justify-center gap-10 p-5 ">
   

      <Box/>
      <p className="w-full md:w-150 lg:w-200 text-white">Stay ahead of the curve with daily insights, founder stories, funding updates, and market trends from the Indian startup ecosystem. Whether you're a builder, investor, or just curious — we bring you the pulse of innovation, straight from the source.</p>
 
    </div>
  )
}

export default Hero
