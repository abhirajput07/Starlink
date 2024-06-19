import React from "react";

export default function Footer() {
  return (
    <>
      <section className="bg-black pb-5 lg:pb-40">
        <h1 className="pt-32 text-3xl lg:text-6xl font-medium text-white flex justify-center ">
          30 DAY TRIAL
        </h1>

        <div className="">
          <p className="text-base lg:text-2xl text-center text-white mb-4 mt-5">
            If not satisfied, return Starlink for a full refund.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-center md:gap-3 m-auto mt-16 lg:w-[60%]">
          <input
            className="py-2 w-[90%] lg:pr-48 pl-5 outline-none rounded-sm border-2 border-gray-300 bg-transparent text-gray-100 placeholder:text-gray-100 "
            type="text"
            placeholder="SERVICE ADDRESS"
          />
          <button className="text-black w-[90%] mt-5 lg:mt-0 rounded-sm px-10 py-2 bg-gray-100 ">
            ORDER NOW
          </button>
        </div>
        <p className="cursor-pointer text-center mt-4 text-white text-xs hover:bg-black transition-all lg:w-[18%] py-2 m-auto font-semibold">
          VIEW AVAILABILITY & SPEEDS MAP{" "}
          <i className=" fa-solid fa-greater-than ml-2 "></i>
        </p>
      </section>

      <div className="flex flex-col lg:flex-row justify-between items-center bg-black pt-3 pb-5">
        <div>
          <ul className="flex flex-col lg:flex-row items-center text-center lg:text-right order-2 lg:order-1 text-[13px] gap-3 font-semibold ml-6 text-white">
            <li>Careers</li>
            <li>Satellite Operators</li>
            <li>Authorized Reseller</li>
            <li>Privacy & Legal</li>
            <li>Privacy Preferences</li>
            <li>Gear Store</li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row text-[13px] mt-5 order-1 lg:order-2 gap-3 font-semibold ml-6 justify-between items-center">
          <p className="text-gray-300">
            Interested in staying up to date with Starlink?
          </p>
          <div className="flex items-center gap-10">
            <input
              type="email"
              placeholder="Email"
              className="placeholder:text-gray-400 bg-transparent border-b-2 border-gray-400 text-white outline-none  focus:border-b-2 focus:border-white transition-all duration-300 pb-1"
            />
            <p className="text-white mr-12 font-bold text-[11px]">
              SIGN UP
              <i className=" fa-solid fa-greater-than ml-2 text-[10px]"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex justify-between items-center pb-5">
        <div className="flex lg:w-[70%] flex-col lg:flex-row lg:justify-between items-center text-sm ml-6 gap-4">
          <p>Starlink © 2024</p>
          <p className="text-center lg:text-right">
            Starlink is a division of SpaceX. Visit us at{" "}
            <span className="font-bold">spacex.com</span>
          </p>
        </div>
        <div className="text-xs lg:w-full text-end hidden lg:block mr-3">
          By clicking Sign Up, you agree to our{" "}
          <span className="font-bold">Privacy Policy</span>
        </div>
      </div>
    </>
  );
}
