import { Link, NavLink, useLocation } from "react-router-dom";
import userPhoto from "../assets/dragon-assets/user.png";

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; // Ensure this matches your route path

  const navlinks = (
    <>
      <li className="text-[18px] text-[#706F6F]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-[18px] text-[#706F6F]">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-[18px] text-[#706F6F]">
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar ${isLoginPage ? "bg-[#F3F3F3]" : "bg-white"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 ">
          <img
            className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src={userPhoto}
          />
        </div>
        <Link to="/login">
          <button className="w-36 h-11  text-xl text-white ml-2 bg-[#403F3F]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
