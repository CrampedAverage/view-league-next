import Image from "next/image";
import { TChampion, TChampionList } from "../../../app/champions/page";

interface ChampionsProp {
  champions: TChampionList;
}

const Champions = ({ champions }: ChampionsProp) => {
  return (
    <div className="flex-col w-3/4 mx-auto max-h-screen overflow-y-scroll ">
      <p className="text-center text-5xl">Champions</p>
      <p className="text-center text-2xl">click for champion info</p>
      <ul className="flex flex-wrap p-6 justify-center">
        {Object.values(champions?.data).map((champion: TChampion) => {
          return (
            <li
              className="flex-col w-28 h-28 border-2 border-solid dark:border-primary m-5"
              key={champion.name}
            >
              <img
                className="w-full h-4/5"
                width={45}
                height={45}
                alt={`icon`}
                src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${champion.image?.full}`}
              />
              <p className="text-center overflow-ellipsis">{champion.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Champions;
