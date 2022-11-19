export const capitaliseWord = (str: String) => {
  let lowerWord = str.toLowerCase();
  return lowerWord[0].toUpperCase() + lowerWord.slice(1);
};

export const getWinrate = (wins: number, losses: number) => {
  const totalGames = wins + losses;
  const winrate = (wins / totalGames) * 100;
  return winrate.toPrecision(3);
};
