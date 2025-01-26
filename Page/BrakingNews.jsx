import Marquee from "react-fast-marquee";
const BrakingNews = () => {
  return (
    <div className="flex w-[1140px] h-20 bg-gray-300 rou text-black font-poppins    ">
      <button className="bg-[#D72050] h-12 w-[200px] text-xl text-gray-200 font-bold m-4">
        Braking News
      </button>
      <Marquee className="text-[18px] font-bold" pauseOnHover="true">
        I can be a React component, multiple React components, or just some
        text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
        error, ullam architecto veritatis asperiores totam sit. Fugiat eligendi
        aliquid eaque repellendus voluptate? Corporis sed numquam vero obcaecati
        eaque reprehenderit doloribus?
      </Marquee>
    </div>
  );
};

export default BrakingNews;
