import React from "react";
import Header from "../../Layout/header";
import { FaRegEye } from "react-icons/fa6";
import successIcon from "../../Images/ForgotPasswordPages/successIcon.png";

const SignUpSuccessPage = () => {
  return (
    <section>
      <Header></Header>
      <div className="container mx-auto">
        {/* Main Container */}
        <div className="lg:w-[80%] mx-3 md:mx-6 lg:mx-auto grid grid-cols-1 gap-5 border border-gray-200 shadow-sm rounded-xl">
          <div className="lg:w-[50%] flex flex-col gap-8 py-12 mx-auto items-center p-2">
            <div className="flex flex-col items-center gap-4">
              <img className="h-[140px] w-[140px] " src={successIcon} alt="" />

              <h2 className=" text-center text-xl sm:text-2xl font-semibold ">
                Account Created Successful !!
              </h2>
              <p className=" text-[#666666] text-center">
                Be sure to keep Account Details in a safe spot - we want your
                next login to be smooth sailing!
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-full py-2 font-semibold"
            >
              Login to Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSuccessPage;
