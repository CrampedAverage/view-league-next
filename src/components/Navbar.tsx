import React from 'react'
import { GiBarbute } from "react-icons/gi";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"

interface NavbarProps {
  isMinimized: boolean,
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ isMinimized, setIsDarkMode, isDarkMode }: NavbarProps) => {

  return (
    <div className={`relative ${!isMinimized ? "w-64" : "w-16"} min-h-screen bg-gray-200 dark:bg-primary`}>
      <div className='text-4xl text-slate-400 font-bold mx-auto my-2 w-fit'>viewLeague</div>
      <div className='flex p-3  items-center my-8'>
        <div className='text-slate-200 '>
          <AiTwotoneHome size={32} />
        </div>
        <div className='text-xl text-slate-400 pl-3'>Home</div>
      </div>
      <div className='flex p-3  items-center my-8'>
        <div className='text-slate-200 '>
          <GiBarbute size={32} />
        </div>
        <div className='text-xl text-slate-400 pl-3'>Champions</div>
      </div>
      <footer className="absolute bottom-2 flex min-w-full content-evenly px-2">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-zinc-100 dark:bg-secondary font-bold p-1 mr-auto rounded-md "
        >
          {isDarkMode ? (
            <BsMoonFill size={32} color={isDarkMode ? "white" : ""} />
          ) : (
            <BsFillSunFill size={32} color={isDarkMode ? "white" : ""} />
          )}
        </button>
        <button className="bg-zinc-100 dark:bg-secondary  font-bold p-1 ml-auto rounded-md ">
          <FaLongArrowAltLeft size={32} color={isDarkMode ? "white" : ""} />
        </button>
      </footer>
    </div >
  )
}

export default Navbar