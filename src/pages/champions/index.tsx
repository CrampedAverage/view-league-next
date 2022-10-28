import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import React, { useEffect, useState } from "react";
import Home from "../../components/Pages/Home/Home";
import Layout from "../../components/shared/Layout";

interface TChampion {
  name: string;
  image: {
    full: string;
  };
}

interface TChampionList {
  data: {
    [key: string]: TChampion;
  };
}

interface ChampionsProp {
  championList: TChampionList;
}

const Champions: NextPage<ChampionsProp> = ({ championList }) => {
  return (
    <Layout>
      <Head>
        <title>viewLeague</title>
        <meta name="description" content="Search for any league Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col w-3/4 mx-auto max-h-screen overflow-y-scroll ">
        <p className="text-center text-5xl">Champions</p>
        <p className="text-center text-2xl">click for champion info</p>
        <ul className="flex flex-wrap p-6 justify-center ">
          {Object.values(championList.data).map((champion: TChampion) => {
            return (
              <li
                className="flex-col w-28 h-28 border-2 border-solid dark:border-primary m-5"
                key={champion.name}
              >
                <Image
                  className="w-full h-4/5 relative"
                  alt={`${champion.name} icon`}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${champion.image?.full}`}
                />
                <p className="text-center overflow-ellipsis">{champion.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};
export async function getStaticProps() {
  const champions = await axios.get("http://127.0.0.1:4040/champions");
  const championList: TChampionList = champions.data;

  return {
    props: {
      championList,
    },
  };
}

export default Champions;
