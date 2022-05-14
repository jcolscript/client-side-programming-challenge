const listOfWords = require("./list_of_words.json");

const groupAnagrams = (listOfWords) => {
  let anagrams = {};

  listOfWords.forEach((word) => {
    let sortedWord = word
      .replace(/\s/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    anagrams[sortedWord]
      ? anagrams[sortedWord].push(word)
      : (anagrams[sortedWord] = [word]);
  });

  const keysOfGroupedAnagrams = Object.keys(anagrams);
  const listGroupedAnagrams = keysOfGroupedAnagrams.map((key) => anagrams[key]);

  return listGroupedAnagrams;
};

console.log(groupAnagrams(listOfWords));
