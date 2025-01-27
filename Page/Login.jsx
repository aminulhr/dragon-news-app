import { Link } from "react-router-dom";
import Navbar from "../src/Componensts/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-[#F3F3F3] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white text-black  max-w-3xl shrink-0 shadow-2xl ">
            <h1 className="text-4xl text-center font-bold p-4 text-[#403F3F]">
              Login your account
            </h1>

            <form className="card-body">
              <hr className="text-[#E7E7E7] "></hr>
              <div className="form-control">
                <label className="label font-bold text-xl">
                  <span className="label-text mb-4">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered w-full bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-bold text-xl ">
                  <span className="label-text mb-4">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full bg-[#F3F3F3]"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 text-center">
                <button className="btn  w-full">Login</button>
                <p className="mt-4">
                  <Link to="/">
                    {" "}
                    <a href="http://">
                      Dont’t Have An Account ?{" "}
                      <span className="text-purple-600">Register</span>
                    </a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
