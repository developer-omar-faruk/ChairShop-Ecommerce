import { FaArrowRightLong } from "react-icons/fa6";
import mat1 from '../assets/mat1.png'
import mat2 from '../assets/mat2.png'
import mat3 from '../assets/mat3.png'

function Materials() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse px-5 md:px-20 my-30 md:my-40 items-center justify-between gap-10 md:gap-30 overflow-hidden">
      <div className="flex gap-3 items-center md:items-start md:gap-5">
        <div className="flex flex-col">
            <img className="w-32 translate-y-5 md:w-56" src={mat1} alt="" />
            <img className="w-32 md:w-56" src={mat2} alt="" />
        </div>
        <img className=" rounded-xl h-60 md:h-[445px]" src={mat3} alt="" />
      </div>
      <div className='flex flex-col flex-wrap gap-3 md:gap-5 md:w-[45%]'>
        <h5 className='text-amber-600 uppercase text-lg'>Materials</h5>
        <h3 className='text-4xl md:text-[42px] capitalize font-semibold'>Very serious materials for making furniture</h3>
        <p className='text-black/60'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
        <button className='text-amber-600 flex gap-4 hover:gap-6 transition-all cursor-pointer hover:underline items-center'>More info <span><FaArrowRightLong /></span></button>
      </div>
    </div>
  )
}

export default Materials
