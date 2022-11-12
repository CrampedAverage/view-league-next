import axios, { AxiosPromise, AxiosResponse } from "axios";
import { IContinent, IRegionValue, ISummonerIDs } from "../utils/types";

const apiKey = process.env.RIOT_API_KEY;

// export async function getVersion() {
//   const url = "https://ddragon.leagueoflegends.com/api/versions.json";
//   const data = await axios.get(url);
//   const version = await data[0];
//   return version;
// }

// export async function championList() {
//   const url =
//     "http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json";
//   let data = await fetchUrl(url);
//   data = Object.values(data.data);
//   return data;
// }

// export async function getChampion(id) {
//   const version = this.getVersion();
//   const url = `https://cdn.communitydragon.org/${version}/champion/${id}/square`;
//   const data = await axios.get(url);
//   return data;
// }

// /**
//  * Static JSON - Get an array of different queues
//  * @param {number} queueId
//  * @returns Queue Data Object
//  */
// export async function queues(queueId) {
//   const url = `https://static.developer.riotgames.com/docs/lol/queues.json`;
//   let data = await axios.get(url);
//   data = data.find(data => data.queueId === queueId)
//   return data;
// }

/**
 * SUMMONER-V4 - Get player information using summoner name
 * @param {IRegionValue} regionValue
 * @param {any} sumName
 * @returns User's info and uuids
 */
export async function getSummonerIDs<T>(
  regionValue: IRegionValue,
  summonerName: string
): Promise<T> {
  const url = `https://${regionValue}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`;
  const response = await axios.get<T>(url);
  return response.data;
}

/**
 * LEAGUE-V4 - Get an array of user's ranks and rank info
 * @param {string} region
 * @param {string} sumID
 * @returns Array of user's rank info
 */
export async function getUserRanks<T>(
  regionValue: IRegionValue,
  summonerID: string
): Promise<T> {
  const url = `https://${regionValue}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID}?api_key=${apiKey}`;
  const response = await axios.get<T>(url);
  return response.data;
}

/**
 * MATCH-V5 - Get a list of match ids by puuid
 * @param {string} continent
 * @param {uuid} puuid
 * @param {int} end
 * @returns list of match ids
 */
export async function getMatchIDs(
  continent: IContinent,
  puuid: string,
  numOfGames = 10
): Promise<number[]> {
  const url = `https://${continent}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${numOfGames}&api_key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
}

// /**
//  * MATCH-V5 - Get a response object with full information on match
//  * @param {string} continent
//  * @param {uuid} matchId
//  * @returns object of match information
//  */
// export async function match(continent, matchId) {
//   const url = `https://${continent}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`;
//   const data = await axios.get(url);
//   return data;
// }
