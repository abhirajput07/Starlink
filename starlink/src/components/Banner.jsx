import React from "react";
import Navbar from "./Navbar";

export default function Banner() {
  return (
    <>
      <Navbar />
      <section className="banner-bg h-[110vh] bg-no-repeat bg-cover mt-[-120px] pt-[120px] xl:pt-[80px] xl:bg-cover">
        <h1 className="lg:text-7xl text-center lg:text-right text-[46px] sm:text-[55px] md:text-[60px] font-medium text-white flex justify-center leading-tight mt-16">
          HIGH-SPEED INTERNET <br />
          AROUND THE WORLD
        </h1>

        <div className="">
          <p className="text-2xl text-center text-white mb-4 mt-5">
            Connect at home or on the go.
          </p>
          <div className=" flex justify-center items-center gap-4 text-white text-xs hover:bg-custom-light px-3 py-2 w-40 m-auto transition-all">
            LEARN MORE{" "}
            <i className="text-xl fa-regular fa-circle-play hover:font-bold transition-all"></i>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-5 m-auto mt-20 w-[85%] lg:w-[60%]">
          <input
            className="py-2 pr-48 pl-5 outline-none rounded-sm border-2 border-gray-300 bg-transparent text-gray-100 placeholder:text-gray-100 "
            type="text"
            placeholder="SERVICE ADDRESS"
          />
          <button className="w-30 text-black rounded-sm px-10 py-2 bg-gray-100">
            ORDER NOW
          </button>
        </div>
        <p className="cursor-pointer text-center mt-4 text-white text-xs hover:bg-black transition-all w-[18%] py-2 m-auto font-semibold ">
          VIEW AVAILABILITY & SPEEDS MAP{" "}
          <i className=" fa-solid fa-greater-than ml-2 "></i>
        </p>
      </section>
    </>
  );
}
