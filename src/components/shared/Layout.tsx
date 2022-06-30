import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'

export interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout = (props: LayoutProps) => {
  const [minimiseNav, setMinimiseNav] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || isDarkMode) {
      document.documentElement.classList.add('dark')
      console.log("1")
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 dark:bg-secondary flex">
      <Navbar isMinimized={false} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      {props.children}
    </div>
  )
}

export default Layout