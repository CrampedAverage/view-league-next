import React from "react";
import Link from "next/link";
// import { GiBarbute } from "react-icons/gi";
// import { AiTwotoneHome } from "react-icons/ai";
// import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface NavbarProps {
  isMinimized: boolean;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isMinimized, setIsDarkMode, isDarkMode }: NavbarProps) => {
  return (
    <div
      className={`relative ${
        !isMinimized ? "w-72" : "w-16"
      } min-h-screen bg-gray-200 dark:bg-primary`}
    >
      <div className="text-4xl text-slate-400 font-bold mx-auto my-2 w-fit">
        viewLeague
      </div>
      <div className="flex p-3  items-center my-8">
        <nav className="text-2xl items-center text-slate-400">
          <li className="flex cursor-pointer my-3">
            {/* <AiTwotoneHome size={36} /> */}
            <Link href="/" className="px-4 ">
              Home
            </Link>
          </li>
          <li className="flex my-6 cursor-pointer">
            {/* <GiBarbute size={36} /> */}
            <Link href="/champions" className="px-4">
              Champions
            </Link>
          </li>
        </nav>
      </div>
      <footer className="absolute bottom-2 flex min-w-full content-evenly px-2">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-zinc-100 dark:bg-secondary font-bold p-1 mr-auto rounded-md "
        >
          {/* {isDarkMode ? (
            <BsMoonFill size={32} color={isDarkMode ? "white" : ""} />
          ) : (
            <BsFillSunFill size={32} color={isDarkMode ? "white" : ""} />
          )} */}
        </button>
        <button className="bg-zinc-100 dark:bg-secondary  font-bold p-1 ml-auto rounded-md ">
          {/* <FaLongArrowAltLeft size={32} color={isDarkMode ? "white" : ""} /> */}
        </button>
      </footer>
    </div>
  );
};

export default Navbar;
