const fs = require("fs");
const path = require("path");

//Utils

const extractNums = (arr) => {
  const newArr = [];

  arr.forEach((str) => {
    if (str.length === 18) {
      newArr.push([str[5], str[12], str[17]]);
    } else {
      let doubleDigit = "";
      doubleDigit += str[5];
      doubleDigit += str[6];
      newArr.push([doubleDigit, str[13], str[18]]);
    }
  });
  return newArr;
};

let part1 = true;

//Part one

const partOne = () => {
  const stack = [
    [], //0
    ["D", "H", "N", "Q", "T", "W", "V", "B"], //1
    ["D", "W", "B"], //2
    ["T", "S", "Q", "W", "J", "C"], //3
    ["F", "J", "R", "N", "Z", "T", "P"], //4
    ["G", "P", "V", "J", "M", "S", "T"], //5
    ["B", "W", "F", "T", "N"], //6
    ["B", "L", "D", "Q", "F", "H", "V", "N"], //7
    ["H", "P", "F", "R"], //8
    ["Z", "S", "M", "B", "L", "N", "P", "H"], //9
  ];

  const input = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf8")
    .split(/\n/);

  let newStack = [...stack];
  const nums = extractNums(input);

  nums.forEach((num) => {
    const cratesToMove = +num[0];
    const fromColumn = +num[1];
    const toColumn = +num[2];

    const removed = newStack[fromColumn].splice(
      newStack[fromColumn].length - cratesToMove,
      cratesToMove
    );

    //If running partOne, reverse the array so the last box out gets put down first
    if (part1 === true) {
      removed.reverse();
    }

    removed.forEach((number) => {
      newStack[toColumn].push(number);
    });
  });
  return newStack.map((stack) => {
    return stack[stack.length - 1];
  });
};

//Part 2

const partTwo = () => {
  part1 = false;

  const result = partOne();
  return result;
};

console.log(partOne());
console.log(partTwo());

module.exports = { extractNums };
