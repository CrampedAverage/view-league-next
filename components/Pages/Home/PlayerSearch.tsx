"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  openModal: (arg: boolean) => void;
  region: string;
}

const PlayerSearch = ({ openModal, region }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const router = useRouter();

  const searchSummoner = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.length < 3) return;
    router.push(`/summoner/${searchValue}`);
  };

  return (
    <div className="text-slate-400">
      <header className="flex-row text-center mb-6">
        <h1 className="text-6xl my-6 font-bold">viewLeague</h1>
        <p className="text-lg italic">viewPlayers, viewChampions, viewBuilds</p>
      </header>
      <form className="flex h-10 w-96 mx-auto my-6" onSubmit={searchSummoner}>
        <div
          className={`mx-auto flex bg-slate-200 rounded-lg h-12 ${
            inputFocus ? "outline" : ""
          }`}
        >
          <input
            className="w-72 bg-inherit p-3 outline-none rounded-lg"
            placeholder="viewPlayers"
            value={searchValue}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            onClick={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />

          <button className="bg-zinc-300 dark:bg-primary focus:bg-slate-300 dark:focus:bg-slate-600 font-bold h-5/6 mr-1 my-1 px-6 rounded-md hover:outline focus:outline focus:outline-2">
            Search
          </button>
        </div>
      </form>
      <div className="flex mx-auto">
        <button
          onClick={() => openModal(true)}
          className="bg-zinc-300 dark:bg-primary focus:bg-slate-300 dark:focus:bg-slate-600 font-semibold mx-auto p-2 rounded-md hover:outline focus:outline focus:outline-2"
        >
          Region:
          <span className="font-bold text-sm">{` ${region.toUpperCase()}`}</span>
        </button>
      </div>
    </div>
  );
};

export default PlayerSearch;
