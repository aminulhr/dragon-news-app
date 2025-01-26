import moment from "moment";
import logo from "../assets/dragon-assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="logo" srcSet="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY ")}</p>
    </div>
  );
};

export default Header;
