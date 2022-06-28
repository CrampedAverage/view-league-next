import React from 'react'

interface NavbarProps {
  isMinimized: Boolean
}

const Navbar = ({ isMinimized }: NavbarProps) => {
  return (
    <div className="w-64 min-h-screen bg-primary" style={{ width: isMinimized && "2rem" }}>
    </div>
  )
}

export default Navbar