import { IoStarSharp } from "react-icons/io5";
import { FaCirclePlus, FaArrowRightLong } from "react-icons/fa6";

import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'

const data= [
    {pImage : product1, pCatagory : "Chair", pName : "Sakarias Armchair", pPrize : 392},
    {pImage : product2, pCatagory : "Chair", pName : "Baltsar Chair", pPrize : 299},
    {pImage : product3, pCatagory : "Chair", pName : "Anjay Chair", pPrize : 519},
    {pImage : product4, pCatagory : "Chair", pName : "Nyantuy Chair", pPrize : 921}
]

const ProductCard= ({imag, catagory, name, prize})=>{
    return(
        <div className=" p-3 md:p-5 flex items-center justify-between overflow-hidden cursor-pointer shadow-sm rounded-md bg-white flex-col gap-5 md:gap-7">
            <img src={imag} alt="" />
            <div className="flex gap-1 w-full items-start flex-col">
                <p className="text-black/60">{catagory}</p>
                <h3 className="font-semibold text-lg md:text-xl">{name}</h3>
                <div className="flex gap-2 text-lg text-amber-600">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-lg font-semibold"><sup>$</sup> {prize}</p>
                <button className=" cursor-pointer"><FaCirclePlus className="text-2xl" /></button>
            </div>
        </div>
    )
}


function Product() {
  return (
    <div className="overflow-hidden py-20 md:py-30 bg-gray-100 px-5 md:px-20">

        <div className="flex flex-col gap-8 mb-10 items-center">
            <h1 className="font-semibold text-center text-4xl md:text-[42px]">Best Selling Product</h1>
            <div className="p-2 bg-gray-200 rounded-full flex items-center gap-5">
                <button className="py-2 px-4 rounded-full cursor-pointer bg-white">Chair</button>
                <button className="py-2 px-4 rounded-full cursor-pointer">Beds</button>
                <button className="py-2 px-4 rounded-full cursor-pointer">Sofa</button>
                <button className="py-2 px-4 rounded-full cursor-pointer">Lamp</button>
            </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        {data.map((d)=>(
            <ProductCard key={d.pName} imag={d.pImage} catagory={d.pCatagory} name={d.pName} prize={d.pPrize} />
        ))}
        </div>

        <div className="flex justify-center items-center mt-10 w-full">
            <button className='text-amber-600 flex gap-4 hover:gap-6 transition-all cursor-pointer hover:underline items-center'>View All <span><FaArrowRightLong /></span></button>
        </div>

    </div>
  )
}

export default Product
