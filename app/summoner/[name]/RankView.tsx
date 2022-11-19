"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { capitaliseWord, getWinrate } from "utils/helpers";
import { RankInfo } from "utils/types";

function RankView({ ranks }: { ranks: RankInfo[] }) {
  const [queueType, setQueueType] = useState("RANKED_SOLO_5x5");

  return (
    <div>
      <ul className="flex">
        <li
          value="rank-solo"
          className={clsx(
            `pr-4 ${
              queueType == "RANKED_SOLO_5x5" && "underline underline-offset-4"
            } cursor-pointer`
          )}
          onClick={() => setQueueType("RANKED_SOLO_5x5")}
        >
          Ranked Solo
        </li>
        <li
          value="rank-solo"
          className={clsx(
            `${
              queueType == "RANKED_FLEX_SR" && " underline underline-offset-4"
            } cursor-pointer `
          )}
          onClick={() => setQueueType("RANKED_FLEX_SR")}
        >
          Ranked Flex
        </li>
      </ul>
      {ranks.map((info) => {
        if (queueType !== info.queueType) return null;
        return (
          <div>
            <div className="flex items-center">
              <div className="h-36">
                <Image
                  src={`/ranked_icons/Emblem_${info.tier}-min.png`}
                  alt={`${info.tier} ranked border`}
                  width={120}
                  height={120}
                />
              </div>
              <div className="ml-2 text-lg font-bold">
                {capitaliseWord(info.tier)}
              </div>
              <div className="mx-2 text-lg font-bold">{info.rank}</div>
            </div>
            <div className="flex">
              <div className="mx-2">{info.wins}W</div>
              <div className="mx-2">{info.losses}L</div>
              <div className="ml-auto">
                {getWinrate(info.wins, info.losses)}% W/R
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RankView;
