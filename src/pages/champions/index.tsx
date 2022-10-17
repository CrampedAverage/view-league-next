import axios from 'axios'
import { NextPage } from 'next'
import  Head  from 'next/head'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import Home from '../../components/Home/Home'
import Layout from '../../components/shared/Layout'

interface ChampionType {
  name: string
  image: {
    full: string
  }
}

interface ChampionListType {
  [key: string]: ChampionType
}

const Champions: NextPage = ({ championsList }: ChampionListType) => {

  return (
    <Layout>
    <Head>
      <title>viewLeague</title>
      <meta name="description" content="Search for any league Player" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='flex-col w-3/4 mx-auto max-h-screen overflow-y-scroll '>
        <p className='text-center text-5xl text-slate-400'>Champions</p>
        <p className='text-center text-2xl text-slate-400'>click for champion info</p>
        <ul className='flex flex-wrap p-6 justify-center '>

        {Object.values(championsList).map( (champs) =>{
          return(
            
          <li className='flex-col w-28 h-28 border-2 border-solid dark:border-primary m-5'>
          <img className='w-full h-4/5' src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${champs.image.full}`}></img>
          <p className='text-center text-slate-400'>{champs.name}</p>
        </li>
        )
        })}
        </ul>
    </div>
  </Layout>
  )
}
export async function getStaticProps() {
  const champions = await axios.get("http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json")
  const championList = champions.data
  return {
    props:{
      championsList:championList,
    }
  }
  
}


export default Champions