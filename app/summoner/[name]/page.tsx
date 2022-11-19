import { RankInfo } from "utils/types";
import { regions } from "utils/commonData";
import { capitaliseWord } from "utils/helpers";
import { getRequest } from "utils/httpUtil";
import RankView from "./RankView";
import { cookies } from "next/headers";
interface TSummonerData {
  info: {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
  };
  match_ids: string[];
  ranks: RankInfo[];
}

const getSummonerData = async (params: { name: string }) => {
  const nextCookies = cookies();
  const { name } = params;
  const region = nextCookies.get("region")?.value || "euw";

  const { continent, value } = regions[region];

  const summonerData = await getRequest<TSummonerData>({
    url: "/summoner/get-data",
    data: { summoner_name: name, region: value, continent },
  });

  const { match_ids } = summonerData;
  const matchPromises = [];
  for (let id of match_ids) {
    let promise = getRequest<any>({
      url: `/match/${continent}/${id}`,
    });
    matchPromises.push(promise);
  }
  const [...matches] = await Promise.all(matchPromises);

  const { info, ranks } = summonerData;
  return { info, ranks, matches };
};

export default async function SummonerPage({
  params,
}: {
  params: { name: string; region: string };
  searchParams: { id: string };
}) {
  const { info, matches, ranks } = await getSummonerData(params);
  return (
    <div className="">
      <div className="flex m-12">
        <div className="flex items-center ">
          <img
            className="rounded-full"
            src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${info.profileIconId}.jpg`}
            alt="Summoner Icon"
          />
          <h1 className="text-3xl px-2">{info.name}</h1>
        </div>
        <div className="w-96 border border-slate-600 rounded-lg ml-auto p-4">
          <RankView ranks={ranks} />
        </div>
        <div className="rank-solo">
          {/* {{#if user.league.ranked_solo.tier}}
                <img className="rank-border" src="/img/Emblem_{{user.league.ranked_solo.tier}}.png" alt="Rank border">
                <div className="rank-title">{{info.league.ranked_solo.tier}} {{user.league.ranked_solo.rank}}</div>   
                <div className="rank-points">{{user.league.ranked_solo.points}} LP</div>
            {{else}}
                <img className="rank-border" src="/img/Emblem_Unranked.png" alt="Rank border">
                <div className="rank-title">Unranked</div>
            {{/if}} */}
        </div>
        <div>
          {/* {{#if user.league.ranked_solo.tier}}
                <div className="total-games">{{user.league.ranked_solo.wins}}W {{user.league.ranked_solo.loss}}L</div>
                <div id="wr">{{user.league.ranked_solo.wr}}%</div>
            {{else}}
                <div className="total-games">0W 0L</div>
            {{/if}} */}
        </div>
      </div>
      <div className="rank-flex inactive-rank">
        <div>
          {/* {{#if user.league.ranked_flex.tier}}
                <img className="rank-border" src="/img/Emblem_{{user.league.ranked_flex.tier}}.png" alt="Rank border">
                <div className="rank-title">{{user.league.ranked_flex.tier}}</div>
                <div>{{user.league.ranked_flex.rank}}</div>
                <div className="rank-points">{{user.league.ranked_flex.points}} LP</div>

            {{else}}
                <img className="rank-border" src="/img/Emblem_Unranked.png" alt="Rank border" />
                <div className="rank-title">Unranked</div>
            {{/if}} */}
        </div>
        <div>
          {/* {{#if user.league.ranked_flex.tier}}
                <div className="total-games">{{user.league.ranked_flex.wins}}W {{user.league.ranked_flex.loss}}L</div>
                <div id="wr">{{user.league.ranked_flex.wr}}%</div>
            {{else}}
                <div className="total-games">0W 0L</div>
            {{/if}} */}
        </div>
      </div>
    </div>
  );
}
