"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { capitaliseWord } from "utils/helpers";
import { RankInfo } from "utils/types";

function RankView({ ranks }: { ranks: RankInfo[] }) {
  const [rankType, setRankType] = useState("solo");

  return (
    <div>
      <ul className="flex">
        <li
          value="rank-solo"
          className={clsx(
            `pr-4 ${rankType == "solo" && "font-extrabold"} cursor-pointer`
          )}
          onClick={() => setRankType("solo")}
        >
          Ranked Solo
        </li>
        <li
          value="rank-solo"
          className={clsx(
            `${rankType == "flex" && "font-extrabold"} cursor-pointer`
          )}
          onClick={() => setRankType("flex")}
        >
          Ranked Flex
        </li>
      </ul>
      {ranks.map((info) => {
        return (
          <div>
            <div className="flex items-center">
              <Image
                src={`/ranked_icons/Emblem_${info.tier}-min.png`}
                alt={`${info.tier} ranked border`}
                width={120}
                height={120}
              />
              <div className="ml-2 text-lg font-bold">
                {capitaliseWord(info.tier)}
              </div>
              <div className="mx-2 text-lg font-bold">{info.rank}</div>
            </div>
            <div className="flex">
              <div className="mx-2">100W</div>
              <div className="mx-2">20L</div>
              <div className="ml-auto">63% W/R</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RankView;
