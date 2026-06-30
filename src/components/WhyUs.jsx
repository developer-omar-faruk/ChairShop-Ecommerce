import { FaArrowRightLong } from "react-icons/fa6";

const Whyus=[
    {
        title : "Luxury facilities",
        dis : "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
    },
    {
        title : "Affordable Price",
        dis : "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
    },
    {
        title : "Many Choices",
        dis : "We provide many unique work space choices so that you can choose the workspace to your liking."
    }
]

function WhyUs() {
  return (
    <div className='flex flex-col md:flex-row  items-center justify-between px-5 md:px-20 gap-15 md:gap-40 my-20 md:my-30 overflow-hidden'>
      <h1 className=' leading-tight flex-shrink-0 text-4xl md:text-[42px] font-semibold text-center md:text-start'>Why <br/>Choosing Us </h1>
      <div className='flex flex-col md:flex-row gap-8 md:gap-10'>
        {Whyus.map((d)=>(
            <div className='flex flex-col items-start gap-3 md:gap-5' key={d.title}>
                <h3 className='text-2xl font-semibold'>{d.title}</h3>
                <p className='text-black/60'>{d.dis}</p>
                <button className='text-amber-600 flex gap-4 hover:gap-6 transition-all cursor-pointer hover:underline items-center'>More info <span><FaArrowRightLong /></span></button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs
