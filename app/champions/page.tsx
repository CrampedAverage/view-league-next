import { getRequest } from "utils/httpUtil";
import Champions from "../../components/Pages/Champions/Champions";

export interface TChampion {
  name: String;
  image: {
    full: String;
  };
}

export interface TChampionList {
  [key: string]: TChampion;
}

const getChampions = async () => {
  const response = await getRequest<TChampionList>({ url: "/champions" });
  const champions: TChampionList = response;

  return champions;
};

export default async function ChampionsPage() {
  const champions = await getChampions();
  return <Champions champions={champions} />;
}
