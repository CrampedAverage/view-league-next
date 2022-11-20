import React from "react";
import Link from "next/link";
import { GiBarbute } from "react-icons/gi";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface NavbarProps {
  isMinimized: boolean;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({
  isMinimized,
  setIsDarkMode,
  isDarkMode,
  setIsMinimized,
}: NavbarProps) => {
  return (
    <div
      className={`relative min-h-screen ${
        isMinimized ? "w-72" : "w-16"
      } min-h-screen bg-gray-200 dark:bg-primary`}
    >
      <div className="text-4xl text-slate-400 font-bold mx-auto my-2 w-fit">
        {isMinimized ? "viewLeague" : "vL"}
      </div>
      <div className="flex p-3 items-center ">
        <nav className="text-2xl items-center text-slate-400">
          <Link href="/" className="flex cursor-pointer my-3">
            <AiTwotoneHome size={36} />
            <div className="px-4 ">{isMinimized && "Home"}</div>
          </Link>
          <Link href="/champions" className="flex my-6 cursor-pointer">
            <GiBarbute size={36} />
            <div className="px-4">{isMinimized && "Champions"}</div>
          </Link>
        </nav>
      </div>
      <footer
        className={`absolute bottom-2 flex  items-center ${
          !isMinimized ? "flex-col" : ""
        } min-w-full content-evenly px-2`}
      >
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`bg-zinc-100 dark:bg-secondary font-bold rounded-md w-fit p-1 `}
        >
          {isDarkMode ? <BsMoonFill size={32} /> : <BsFillSunFill size={32} />}
        </button>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className={`bg-zinc-100 dark:bg-secondary font-bold rounded-md w-fit p-1 ${
            isMinimized ? "ml-auto" : "mt-4"
          } `}
        >
          {isMinimized ? (
            <FaLongArrowAltLeft size={32} />
          ) : (
            <FaLongArrowAltRight size={32} />
          )}
        </button>
      </footer>
    </div>
  );
};

export default Navbar;
