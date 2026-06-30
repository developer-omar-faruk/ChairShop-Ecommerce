import { FaArrowRightLong } from "react-icons/fa6";
import experienceimg from '../assets/experienceimg.png'

function Experience() {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-20 my-30 md:my-40 items-center justify-between gap-10 md:gap-30 overflow-hidden">
      <div className="">
        <img className=" rounded-xl" src={experienceimg} alt="" />
      </div>
      <div className='flex flex-col flex-wrap gap-3 md:gap-5 md:w-[45%]'>
        <h5 className='text-amber-600 uppercase text-lg'>experiences</h5>
        <h3 className='text-4xl md:text-[42px] capitalize font-semibold'>we provide you the <br /> best experience</h3>
        <p className='text-black/60'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
        <button className='text-amber-600 flex gap-4 hover:gap-6 transition-all cursor-pointer hover:underline items-center'>More info <span><FaArrowRightLong /></span></button>
      </div>
    </div>
  )
}

export default Experience
