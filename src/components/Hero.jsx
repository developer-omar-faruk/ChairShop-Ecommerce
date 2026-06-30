import heroimg from '../assets/heroimg.png'
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div 
    className="h-[60vh] md:h-[150vh] w-full bg-cover bg-center bg-no-repeat overflow-hidden "
    style={{backgroundImage: `url(${heroimg})`,}}
    >
        <div className=' pt-25 md:pt-40 mx-auto flex items-center flex-col gap-6 md:gap-8'>
            <h1 className=' text-3xl md:text-7xl items-center capitalize flex flex-col gap-3 md:gap-5 text-white font-bold'>Make your interior more<span>minimalistic & modern</span></h1>
            <p className='text-center text-white/80 text-lg md:text-xl w-[75%] md:w-[40%] mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
            <div className="relative flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                <input
                type="text"
                placeholder="Search furniture"
                className="w-full bg-transparent px-6 py-4 pr-30 text-white placeholder:text-gray-300 outline-none"
                />

                <button className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 transition duration-300 hover:bg-orange-600">
                    <FaSearch className="text-lg text-white" />
                </button>
            </div>
        </div>
      
      
    </div>
  )
}

export default Hero
