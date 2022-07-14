import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface HomeProps {
  openModal: (arg: boolean) => void,
  region: string
}

const Home = ({ openModal, region }: HomeProps) => {
  const [inputFocus, setInputFocus] = useState(false)
  const [summonerName, setSummonerName] = useState("")

  const router = useRouter()

  const handleSearch = () => {
    if (summonerName.length < 1) return
    router.push(`/summoner/${encodeURIComponent(summonerName)}`)
  }

  return (
    <div className="flex w-full">
      <div className="  mx-auto my-auto -translate-y-2/4">
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
              onChange={e => setSummonerName(e.target.value)}
              onClick={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)} />
            <button className="bg-zinc-300 dark:bg-primary focus:bg-slate-300 dark:focus:bg-slate-600 font-bold h-5/6 my-auto mr-1 px-6 rounded-md hover:outline  focus:outline focus:outline-2"
              onClick={handleSearch}
              disabled={summonerName.length < 1}
              type="button"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex mx-auto">
          <button
            onClick={() => openModal(true)}
            className="bg-zinc-300 dark:bg-primary focus:bg-slate-300 dark:focus:bg-slate-600 font-semibold mx-auto p-2 rounded-md hover:outline focus:outline focus:outline-2"
          >
            Region:
            <span className="font-bold text-sm">{` ${region.toUpperCase()}`}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home