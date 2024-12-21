import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signUpPageImage from "../../Images/SignUp/signUpPageImage.png";
import signalIcon from "../../Images/SignUp/signalIcon.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/v1/users/register", {
        email,
        password,
      });

      // Redirect to homepage immediately after successful registration
      navigate("/signup-success");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="lg:w-[80%] mx-3 md:mx-6 lg:mx-auto grid grid-cols-7 gap-5 border border-gray-200 shadow-sm rounded-xl">
          <div className="h-full hidden lg:flex rounded-xl col-span-7 lg:col-span-3 relative">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={signUpPageImage}
              alt=""
            />
            <img
              className="absolute top-3 right-3 w-9"
              src={signalIcon}
              alt=""
            />
          </div>
          <div className="h-full col-span-7 lg:col-span-4 flex">
            <div className="w-[100%] bg-white p-4 lg:p-8 rounded-xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
                Create an Account
              </h2>
              <div className="flex gap-4">
                <p className="mb-4 text-[#666666]">Already have an account?</p>
                <a href="#" className="text-[#006BDE] font-semibold">
                  Login Here
                </a>
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold"
                >
                  Create Account
                </button>
              </form>
              <div className="flex items-center my-1">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-gray-900 font-semibold">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 justify-center w-[48%] text-[#006BDE] font-[500] border border-gray-300 rounded-full py-2">
                  <FcGoogle className="text-xl" />
                  Google
                </button>
                <button className="flex items-center gap-2 justify-center w-[48%] text-[#006BDE] font-[500] border border-gray-300 rounded-full py-2">
                  <FaFacebook className="text-xl text-[#1877F2]" />
                  Facebook
                </button>
              </div>
              <p className="text-center text-gray-700 font-[500] text-sm mt-6">
                By signing up, you agree to the{" "}
                <a href="#" className="text-blue-600">
                  Terms of use
                </a>{" "}
                of StudySync
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
