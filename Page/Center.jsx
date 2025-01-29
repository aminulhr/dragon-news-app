import { CiBookmark, CiShare2 } from "react-icons/ci";
import { PiEyeBold } from "react-icons/pi";

import { Link } from "react-router-dom";
const Center = ({ news }) => {
  const { title, image_url, details, author, _id, rating, total_view } = news;
  return (
    <div className="card card-compact  shadow-xl mb-8">
      <div className="flex justify-between w-[558px] h-20 p-1 rounded-md bg-[#F3F3F3]">
        <div className="flex m-4">
          <img className="w-10 h-10 rounded-4xl" src={author.img} alt="" />
          <div className="ml-2">
            <h1 className="font-bold">{author.name}</h1>
            <p className="text-[14px]  text-[#706F6F]">
              {author.published_date}
            </p>
          </div>
        </div>
        <div className="flex mt-7 mr-3 ">
          <CiBookmark className="w-6 h-6 mr-3" />
          <CiShare2 className="w-6 h-6" />
        </div>
      </div>

      <p className="text-xl font-bold p-5 text-[#403F3F]">{title}</p>
      <figure>
        <img src={image_url} alt="image_url" />
      </figure>
      <div className="card-body">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`}>
              <a className="link link-warning font-bold">Read More</a>
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <hr className="mr-5 ml-5 pb-5 text-[#E7E7E7]" />
      <div className="flex justify-between text-[#706F6F]">
        <div className="flex ">
          <div className="rating pl-5 pb-5">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p className="pl-5">{rating.number}</p>
        </div>
        <div className="flex mr-5">
          <PiEyeBold className="w-6 h-6 mr-2" />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default Center;
