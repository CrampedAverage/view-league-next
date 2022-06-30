import React from 'react'
import { GiBarbute } from "react-icons/gi";
import { AiTwotoneHome } from "react-icons/ai";

interface NavbarProps {
  isMinimized: boolean
}

const Navbar = ({ isMinimized }: NavbarProps) => {

  return (
    <div className={`${!isMinimized ? "w-64" : "w-16"} min-h-screen p-7 bg-gray-200 dark:bg-primary`}>
      <div className='text-4xl text-slate-400 font-bold'>viewLeague</div>
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
    </div>
  )
}

export default Navbar