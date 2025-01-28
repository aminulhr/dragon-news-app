import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Navbar from "../src/Componensts/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext); // Updated function name

  const handleLogInForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const file = form.get("file");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        console.log(result);
        // Handle successful registration (e.g., redirect to login page)
      })
      .catch((error) => {
        console.error(error);
        // Handle errors (e.g., display error message to the user)
      });
  };

  return (
    <div>
      <Navbar />
      <div className="hero bg-[#F3F3F3] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white text-black max-w-3xl shrink-0 shadow-2xl">
            <h1 className="text-4xl text-center font-bold mt-4 text-[#403F3F]">
              Register your account
            </h1>
            <form onSubmit={handleLogInForm} className="card-body">
              <hr className="text-[#E7E7E7]" />
              <div className="form-control">
                <label className="label font-bold text-xl">
                  <span className="label-text mb-2">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input w-full mb-3 bg-[#F3F3F3]"
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
                  className="input w-full mb-3 bg-[#F3F3F3]"
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
                  className="input w-full mb-3 bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-bold text-xl">
                  <span className="label-text mb-2">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input w-full bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="label-text ml-2">Accept Term & Conditions</p>
              </div>
              <div className="form-control mt-3 text-center">
                <button className="btn w-full">Register</button>
                <p className="mt-2">
                  Already Have An Account?{" "}
                  <Link to="/login" className="text-purple-600 underline">
                    Login
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
