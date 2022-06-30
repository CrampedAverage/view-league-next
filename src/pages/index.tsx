import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/shared/Layout'

const Home: NextPage = () => {
  const [inputFocus, setInputFocus] = useState(false)
  const [region, setRegion] = useState("euw")

  useEffect(() => {

    localStorage.setItem("region", region)
  }, [region])


  return (
    <Layout className="min-h-screen min-w-screen bg-gray-50 dark:bg-secondary flex">
      <Head>
        <title>viewLeague</title>
        <meta name="description" content="Search for any league Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full">
        <div className=" text-slate-400 mx-auto my-auto -translate-y-2/4">
          <header className="flex-row text-center mb-6">
            <h1 className="text-6xl my-6 font-bold">viewLeague</h1>
            <p className="text-lg italic">viewPlayers, viewChampions, viewBuilds</p>
          </header>
          <form className="flex h-10 w-96 relative my-6">
            <div className={`w-full flex bg-slate-200 rounded-lg h-12 ${inputFocus ? "outline" : ""}`}>
              <input
                className="w-72 bg-inherit p-3 outline-none rounded-lg"
                placeholder="viewPlayers"
                type="text"
                onClick={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)} />
              <Link href="/player">
                <button className="bg-zinc-300 dark:bg-primary focus:bg-slate-600 font-bold h-5/6 my-auto mr-1 px-6 rounded-md hover:outline focus:outline focus:outline-2"
                  type="button"
                >
                  Search
                </button>
              </Link>

            </div>

          </form>
          <div className="flex mx-auto">
            <button className="bg-zinc-300 dark:bg-primary focus:bg-slate-600 font-semibold mx-auto p-2 rounded-md hover:outline active:outline active:outline-2">
              Region:
              <span className="font-bold text-sm">{` ${region.toUpperCase()}`}</span>
            </button>

          </div>

        </div>
      </div>

    </Layout>
  )
}

export default Home
