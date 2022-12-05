const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split(/\n/);

const findMiddleIndex = (str) => Math.floor(str.length / 2);

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letterPriority = {};
const arr = alphabet.split("");

arr.forEach((letter) => {
  letterPriority[letter] = arr.indexOf(letter) + 1;
});

const partOne = (data) => {
  let count = 0;

  data.forEach((rucksack) => {
    const index = findMiddleIndex(rucksack);
    const compartment1 = rucksack.slice(0, index).split("");
    const compartment2 = rucksack.slice(index, rucksack.length).split("");

    const dupe = compartment1.filter((letter) => {
      return compartment2.includes(letter);
    });
    count += letterPriority[dupe[0]];
  });

  return count;
};

console.log(partOne(input));
