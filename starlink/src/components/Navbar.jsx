import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        console.log(window.scrollY);
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "sticky inset-0 flex px-[5%] py-10 justify-between items-center text-white z-[100] transition-all duration-300",
          isScrolled ? "bg-black/80" : "bg-transparent"
        )}
      >
        <div className="flex justify-between w-[30%] items-center">
          <div className="font-mono text-2xl font-bold tracking-widest cursor-pointer">
            <Link to={"/"}>STARLINK</Link>
          </div>

          <div className="hidden lg:block">
            <ul className="flex text-sm font-bold ml-32 space-x-10 cursor-pointer">
              <li>RESIDENTIAL</li>
              <li>ROAM</li>
              <li>BOATS</li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex items-center gap-2 text-sm font-bold space-x-3 ">
            <li className="cursor-pointer hidden lg:block border-b-2">PERSONAL</li>
            <li className=" hidden lg:block  ">|</li>
            <li className="cursor-pointer  hidden lg:block">BUSINESS</li>
            <li className="text-xl cursor-pointer">
              <i onClick={() => setMenu(true)} className="fa-solid fa-bars"></i>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={clsx(
          " fixed w-full h-full backdrop-blur-sm top-0 left-0 transition-all ease-in-out delay-200 z-[200]",
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <section className="text-white bg-black flex flex-col absolute top-0 right-0 h-screen pt-10 px-10 scroll-m-7 max-h-full overflow-y-scroll z-50">
          <i
            onClick={() => {
              setMenu(false);
            }}
            className="fa-regular fa-circle-xmark text-2xl cursor-pointer mb-10"
          ></i>

          <ul className="font-semibold flex flex-col">
          
          <div className="lg:hidden flex gap-2">
          <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              PERSONAL
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              |
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              BUSINESS
            </Link>
          </div>
            <Link
              className="lg:hidden border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              RESIDENTIAL
            </Link>
            <Link
              className="lg:hidden border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              ROAM
            </Link>
            <Link
              className="lg:hidden border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              BOATS
            </Link>
            
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              US <i className="fa-solid fa-globe"></i>
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"/signin"}
            >
              SIGN IN
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              SUPPORT
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              AVAILABILITY MAP
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              SPECIFICATION
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              SERVICE PLANS
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              VIDEO GUIDES
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              TECHNOLOGY
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              TECHNOLOGY
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              TECHNOLOGY
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              TECHNOLOGY
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              TECHNOLOGY
            </Link>
            <Link
              className="border-b py-4 border-gray-700 hover:bg-gray-800 transition-all delay-200"
              to={"#"}
            >
              TECHNOLOGY
            </Link>

            {/* <li className="border-b pb-3 border-gray-700"><Link href="#">SUPPORT</Link></li>
      <li className="border-b pb-3 border-gray-700"><a href="#">AVAILABILITY MAP</a></li>
      <li className="border-b pb-3 border-gray-700"><a href="#">SPECIFICATION</a></li i>
      <li className="border-b pb-3 border-gray-700"><a href="#">SERVICE PLANS</a></li>
      <li className="border-b pb-3 border-gray-700"><a href="#">VIDEO GUIDES</a></li>
      <li className="border-b pb-3 border-gray-700"><a href="#">TECHNOLOGY</a></li> */}
          </ul>
        </section>
      </div>
    </>
  );
}
