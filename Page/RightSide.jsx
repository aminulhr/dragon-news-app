import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone4 from "../src/assets/dragon-assets/bg.png";
import qzone2 from "../src/assets/dragon-assets/class.png";
import qzone3 from "../src/assets/dragon-assets/playground.png";
import qzone1 from "../src/assets/dragon-assets/swimming.png";
const RightSide = () => {
  return (
    <div className="w-full">
      {" "}
      {/* Ensure the parent container has a width */}
      {/* login  part*/}
      <div className="w-[282px] h-[134px] relative">
        <h1 className=" font-extrabold text-xl mb-3 left-0">Login With</h1>
        <div>
          <button className="btn btn-outline btn-secondary w-full">
            <FaGoogle></FaGoogle>
            Login With Google
          </button>
          <br />
          <button className="btn btn-outline btn-secondary w-full mt-2 p-2">
            <FaGithub></FaGithub>
            Login With Github
          </button>
        </div>
      </div>
      {/* Find us */}
      <div className="w-[282px]">
        {" "}
        {/* E "Find Us part"  */}
        <h1 className="font-bold text-xl mt-8 mb-5">Find Us On</h1>
        <div>
          <a
            className="flex items-center p-4 border rounded-t-lg w-full"
            href=""
          >
            <FaFacebook className="mr-2 text-3xl text-blue-600"> </FaFacebook>
            <span>Facebook</span>
          </a>
          <a className="flex items-center p-4 border-l border-r w-full" href="">
            <FaTwitter className="mr-2 text-3xl text-blue-600"></FaTwitter>
            Twitter
          </a>
          <a
            className="flex items-center p-4 border rounded-b-lg w-full"
            href=""
          >
            <FaInstagram className="mr-2 text-3xl text-[#f2186f]"></FaInstagram>
            Instagram
          </a>
        </div>
      </div>
      {/* Q-Zone */}
      <div className="bg-gray-200 mt-5 mb-3 w-[282px] flex flex-col items-center">
        <h1 className="font-bold text-xl p-4">Q-Zone</h1>
        <img src={qzone1} alt="" srcSet="" />
        <img src={qzone2} alt="" srcSet="" />
        <img src={qzone3} alt="" srcSet="" />
      </div>
      <img src={qzone4} alt="" srcSet="" />
    </div>
  );
};

export default RightSide;
