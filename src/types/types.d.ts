export interface ISummonerData extends ISummonerIDs {
  ranks: ISummonerRanks[]
  matchIDs: number[]
}

export interface ISummonerRanks {
  leagueId: string
  summonerId: string
  summonerName: string
  queueType: string
  tier: string
  rank: string
  leaguePoints: number
  wins: number
  losses: number
  hotStreak: boolean
  veteran: boolean
  freshBlood: boolean
  inactive: boolean
}

export interface ISummonerIDs {
  puuid: string
  id: string
  name: string
  profileIconId: number
  summonerLevel: number
}

export type IRegionValue = "euw1" | "eun1" | "na1" | "jp1" | "la1" | "la2" | "oc1" | "kr" | "ru1" | "tr1" | "br1"

export type IContinent = "EUROPE" | "AMERICAS" | "ASIA" | "SEA"

export interface IRegions {
  [key: string]: {
    value: IRegionValue
    regionName: string
    continent: IContinent
  }
}
