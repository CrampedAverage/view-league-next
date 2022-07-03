import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Component {...pageProps} />

  )
}

export default MyApp
