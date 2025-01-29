import { useParams } from "react-router-dom";
import Header from "../src/Componensts/Header";
import Navbar from "../src/Componensts/Navbar";
import RightSide from "./RightSide";

const DetailseNews = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="gird md:grid-cols-4 text-black">
        <div className="col-span-3">
          <h1 className="text-4xl">neesssss</h1>
          <p>{id}</p>
        </div>
        <div>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default DetailseNews;
