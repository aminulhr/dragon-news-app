import { Link } from "react-router-dom";
import Navbar from "../src/Componensts/Navbar";

const Register = () => {
  const handleLogInForm = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get("password"));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-[#F3F3F3] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white text-black  max-w-3xl shrink-0 shadow-2xl ">
            <h1 className="text-4xl text-center font-bold mt-4 text-[#403F3F]">
              Register your account
            </h1>
            <form onSubmit={handleLogInForm} className="card-body ">
              <hr className="text-[#E7E7E7] "></hr>
              <div className="form-control">
                <label className="label font-bold text-xl">
                  <span className="label-text mb-2  ">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input  w-full mb-3  bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-bold text-xl">
                  <span className="label-text mb-2">Photo URL</span>
                </label>
                <input
                  type="file"
                  name="file"
                  className="input  w-full mb-3  bg-[#F3F3F3]"
                />
              </div>
              <div className="form-control">
                <label className="label font-bold text-xl">
                  <span className="label-text mb-2">Email address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input  w-full mb-3 bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-bold text-xl ">
                  <span className="label-text mb-2">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input  w-full bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className=" flex ">
                <input type="checkbox" />
                <p className="label-text ml-2">Accept Term & Conditions</p>
              </div>
              <div className="form-control mt-3 text-center">
                <button className="btn  w-full">Register</button>
                <p className="mt-2">
                  <Link to="/login">
                    <a href="http://">
                      Already Have An Account ?
                      <span className="text-purple-600 underline"> Login</span>
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

export default Register;
