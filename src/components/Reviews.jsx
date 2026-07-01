import { IoStarSharp } from "react-icons/io5";

import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import reviewProfile1 from '../assets/reviewProfile1.png'
import reviewProfile2 from '../assets/reviewProfile2.png'
import reviewProfile3 from '../assets/reviewProfile3.png'

const reviews = [
    {bg : review1, profile : reviewProfile1, name : "Bang Upin", title : "Pedagang Asongan" , dis : "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"},
    {bg : review1, profile : reviewProfile2, name : "Bang Upin", title : "Pedagang Asongan" , dis : "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"},
    {bg : review1, profile : reviewProfile3, name : "Bang Upin", title : "Pedagang Asongan" , dis : "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"},
];

const ReviewCard = ({ bg, profile, name, title, dis }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[370px] h-[476px] shadow-lg rounded-2xl shadow-black/50 items-end flex p-5"
    >
        <div className="bg-white flex flex-col w-fit h-fit rounded-2xl relative gap-1 px-8 py-3 items-center">
            <img className="bg-white rounded-full absolute p-3 -top-8" src={profile} alt="" />
            <h1 className="font-semibold mt-8 text-xl">{name}</h1>
            <h3 className="text-black/60">{title}</h3>
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
    <div>
      <ReviewCard bg={reviews[0].bg} profile={reviews[0].profile} name={reviews[0].name} title={reviews[0].title} dis={reviews[0].dis} />
    </div>
  );
}

export default Reviews;