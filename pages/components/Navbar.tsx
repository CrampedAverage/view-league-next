import React from 'react'

interface NavbarProps {
  isMinimized: boolean
}

const Navbar = ({ isMinimized }: NavbarProps) => {

  return (
    <div className={`${!isMinimized ? "w-64" : "w-16"} min-h-screen bg-primary`}>
    </div >
  )
}

export default Navbar