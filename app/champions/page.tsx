import axios from "axios";
import Champions from "../../components/Pages/Champions/Champions";

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
  const response = await axios.get("http://127.0.0.1:4040/api/champions");
  const champions: TChampionList = response.data;

  return champions;
};

export default async function ChampionsPage() {
  const champions = await getChampions();
  return <Champions champions={champions} />;
}
