import { IoStarSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";

import product1 from '../assets/product1.png'

const ProductCard= ()=>{
    return(
        <div className=" p-3 md:p-5 flex items-center overflow-hidden cursor-pointer shadow-sm rounded-md bg-white flex-col gap-5 md:gap-7">
            <img src={product1} alt="" />
            <div className="flex gap-1 w-full items-start flex-col">
                <p className="text-black/60">Chair</p>
                <h3 className="font-semibold text-lg md:text-xl">Sakarias Armchair</h3>
                <div className="flex gap-2 text-lg text-amber-600">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-lg font-semibold"><sup>$</sup> 392</p>
                <button className=" cursor-pointer"><FaCirclePlus className="text-2xl" /></button>
            </div>
        </div>
    )
}


function Product() {
  return (
    <div className="overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 py-30 md:py-40 bg-gray-100 px-5 md:px-20">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default Product
