import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import React, { use, useEffect, useState } from "react";
import Champions from "../../components/Pages/Champions/Champions";
import Home from "../../components/Pages/Home/Home";
import Layout from "../../components/shared/Layout";

export interface TChampion {
  name: string;
  image: {
    full: string;
  };
}

export interface TChampionList {
  data: {
    [key: string]: TChampion;
  };
}

const getChampions = async () => {
  const champions = await axios.get("http://127.0.0.1:4040/api/champions");
  const championList: TChampionList = champions.data;

  return championList;
};

export default async function ChampionsPage() {
  const championList = await getChampions();
  return <Champions championList={championList} />;
}
