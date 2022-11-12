export const capitaliseWord = (str: String) => {
  let lowerWord = str.toLowerCase();
  return lowerWord[0].toUpperCase() + lowerWord.slice(1);
};
