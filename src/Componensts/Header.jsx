import moment from "moment";
import logo from "../assets/dragon-assets/logo.png";
const Header = () => {
  return (
    <div className="text-center ">
      <img className="mx-auto pt-12 mb-3" src={logo} alt="logo" srcSet="" />
      <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="text-xl mt-3 mb-8 text-[#403F3F]">
        {moment().format("dddd, MMMM D, YYYY ")}
      </p>
    </div>
  );
};

export default Header;
