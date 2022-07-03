import { NextPage } from 'next'
import  Head  from 'next/head'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import Home from '../../components/Home/Home'
import Layout from '../../components/shared/Layout'

const Champions: NextPage = ({champions}) => {
  // console.log(champions)

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

        {Object.values(champions).map( (champs,b) =>{
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
  const res = await fetch("http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json")
  const champDataJSON = await res.json()
  return {
    props:{
      champions:champDataJSON.data,
    }
  }
  
}


export default Champions