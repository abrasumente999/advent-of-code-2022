const fs = require("fs");

const addCalories = () => {
  const data = fs.readFileSync("input.txt", "utf8").split(/\n\s*\n/);
  const newArr = [];

  data.forEach((element) => {
    newArr.push(element.split(/\n/));
  });

  return newArr.map((nested) => {
    return nested.reduce((acc, curr) => +acc + +curr, 0);
  });
};

//Task 1 - find the highest total number of calories carried by one elf
const mostCalories = () => {
  const totalCals = addCalories();
  return Math.max(...totalCals);
};

//Task 2 - find the total number of calories carried by the top 3 elves
const topThreeMostCalories = () => {
  const totalCals = addCalories().sort((a, b) => b - a);
  return totalCals.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
};

//
console.log("Total calories carried by each elf:", addCalories());

console.log("Highest number of calories carried by one elf:", mostCalories());

console.log(
  "Total number of calories carried by the top 3 elves:",
  topThreeMostCalories()
);
