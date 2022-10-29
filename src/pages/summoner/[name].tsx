import Cookies from "js-cookie";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/shared/Layout";
import Summoner from "../../components/Pages/Summoner/Summoner";
import { getMatchIDs, getSummonerIDs, getUserRanks } from "../../lib/riotAPI";
import { ISummonerData, ISummonerIDs, ISummonerRanks } from "../../types/types";
import { regions } from "../../utils/commonData";

interface SummonerPageProps {
  data: ISummonerData;
}

const SummonerPage: NextPage<SummonerPageProps> = ({ data }) => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout>
      <Head>
        <title>{`viewLeague || ${name}`}</title>
        <meta name="description" content="Search for any league Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Summoner summonerData={data} />
    </Layout>
  );
};

interface IParams {
  params: { name: string };
}

export async function getStaticProps({ params }: IParams) {
  const region = Cookies.get("region") || "euw";
  const { value: regionValue, continent } =
    regions[region as keyof typeof regions];
  const { name } = params;
  const summonerIDs = await getSummonerIDs<ISummonerIDs>(regionValue, name);
  const { id, puuid } = summonerIDs;
  const ranks = await getUserRanks<ISummonerRanks[]>(regionValue, id);
  const [rankedSolo, rankedFlex] = ranks;
  const rankedSoloMatchesIDs = await getMatchIDs(
    continent,
    puuid,
    rankedSolo.wins + rankedSolo.losses
  );
  const rankedFlexMatchIDs = await getMatchIDs(
    continent,
    puuid,
    rankedFlex.wins + rankedFlex.losses
  );
  const matchIDs = await getMatchIDs(continent, puuid);

  return {
    props: {
      data: { ...summonerIDs, ranks, matchIDs },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default SummonerPage;
