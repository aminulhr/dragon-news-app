import { useLoaderData } from "react-router-dom";
import Header from "../src/Componensts/Header.jsx";
import Navbar from "../src/Componensts/Navbar";
import BrakingNews from "./BrakingNews.jsx";
import Center from "./Center.jsx";
import LeftSide from "./LeftSide.jsx";
import RightSide from "./RightSide.jsx";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div className=" font-poppins bg-white text-black">
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-4 gap-6 ">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-2">
          {news.map((aNews) => (
            <Center key={news._id} news={aNews}></Center>
          ))}
        </div>
        <div>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
