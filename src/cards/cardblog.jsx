
import Readbutton from "./readbutton";
import Aos from "aos";

export default function CardBlog({ image, content }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="h-auto bg-red-50 w-full flex flex-col justify-center items-center text-black p-4"
    >
      <img className="h-52 w-72 p-4 " src={image} alt="" />
      <ul className="flex justify-center items-center gap-6 ">
        <li className="h-14 text-lg font-semibold w-14 bg-red-700 text-center text-white">
          15
          <p className="text-sm text-white"> Jan</p>
        </li>
        <li>
          <img className="h-8" src="\image\profile.svg" alt="profile" />
        </li>
        <li className="font-semibold">by admin</li>
      </ul>
      <div className="p-4 font-bold">{content}</div>
      <div>
        <Readbutton />
      </div>
    </div>
  );
}
