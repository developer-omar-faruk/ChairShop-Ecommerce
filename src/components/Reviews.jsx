import { IoStarSharp } from "react-icons/io5";

import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import reviewProfile1 from '../assets/reviewProfile1.png'
import reviewProfile2 from '../assets/reviewProfile2.png'
import reviewProfile3 from '../assets/reviewProfile3.png'

const reviews = [
    {bg : review1, profile : reviewProfile1, name : "Bang Upin", title : "Pedagang Asongan" , dis : "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"},
    {bg : review2, profile : reviewProfile2, name : "Ibuk Sukijan", title : "Ibu Rumah Tangga", dis : "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“"},
    {bg : review3, profile : reviewProfile3, name : "Mpok Ina", title : "Karyawan Swasta" , dis : "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“"}
];

const ReviewCard = ({ bg, profile, name, title, dis }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" shadow-lg rounded-2xl w-fit shadow-black/50 items-end flex p-5"
    >
        <div className="bg-white mt-56  flex flex-col w-fit h-fit rounded-2xl relative gap-1 px-8 py-3 items-center">
            <img className="bg-white rounded-full absolute p-3 -top-8" src={profile} alt="" />
            <h1 className="font-semibold mt-8 text-xl">{name}</h1>
            <h3 className="text-black/60 text-sm">{title}</h3>
            <p className="text-center mt-3 text-black/60">{dis}</p>
            <div className="flex gap-2 mt-4 text-lg text-amber-600">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp className="text-amber-600/40" />
            </div>
        </div>
    </div>
  );
};

function Reviews() {
  return (
    <div className="overflow-hidden px-5 md:px-20">
        <div className="mb-10">
            <h3 className="text-amber-600 text-lg text-center uppercase">Testimonials</h3>
            <h1 className=" className='text-4xl md:text-[42px] capitalize font-semibold text-center">Our Client Reviews</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
            {reviews.map((d)=>(
                <ReviewCard key={d.name} bg={d.bg} profile={d.profile} name={d.name} title={d.title} dis={d.dis}/>
            ))}
        </div>
    </div>
  );
}

export default Reviews;