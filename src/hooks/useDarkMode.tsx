import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'



const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    const getInitialDarkMode = () => {
      return !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    setIsDarkMode(getInitialDarkMode())
  }, [])
  return [isDarkMode, setIsDarkMode]
}

export default useDarkMode

