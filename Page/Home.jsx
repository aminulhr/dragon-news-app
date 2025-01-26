import Header from "../src/Componensts/Header.jsx";
import Navbar from "../src/Componensts/Navbar";
import Center from "./Center.jsx";
import LeftSide from "./LeftSide.jsx";
import RightSide from "./RightSide.jsx";

const Home = () => {
  return (
    <div className=" font-poppins ">
      <Header></Header>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-3 gap-6">
        <LeftSide></LeftSide>
        <Center></Center>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Home;
