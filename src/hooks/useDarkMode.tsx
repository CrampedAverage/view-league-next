import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

const useDarkMode = (initialState: boolean | (() => boolean)): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isDarkMode, setIsDarkMode] = useState(initialState)

  useEffect(() => {
    // || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return [isDarkMode, setIsDarkMode]
}

export default useDarkMode

