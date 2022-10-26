import React from "react";
import { ISummonerData } from "../../types/types";

interface SummonerProps {
  summonerData: ISummonerData;
}

const Summoner = ({ summonerData }: SummonerProps) => {
  return (
    <div className="flex flex-col m-8 w-full">
      {/* Basic Player detail */}
      <div className="flex w-full justify-between border border-red-600 ">
        <div className="flex items-center border border-red-600 flex-1">
          <div className="rounded-full bg-white h-32 w-32"></div>
          <h1 className="text-4xl p-4">TrueChainz</h1>
        </div>
        <div className="w-80 h-72 bg-primary"></div>
      </div>
      {/* */}
      {/* Match History or Champion Stats */}
    </div>
  );
};

export default Summoner;
