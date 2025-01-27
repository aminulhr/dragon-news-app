import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; // Ensure this matches your route path

  return (
    <div className={`w-full ${isLoginPage ? "bg-[#F3F3F3]" : "bg-white"}`}>
      <div className="max-w-[1140px] mx-auto font-poppins">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
