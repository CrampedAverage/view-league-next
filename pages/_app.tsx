import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'

const darkMode = true

function MyApp({ Component, pageProps }: AppProps) {
  const [minimiseNav, setMinimiseNav] = useState(false)
  const [isDarkMode, setisDarkMode] = useState(true)
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
  return (

    <Component {...pageProps} />

  )
}

export default MyApp
