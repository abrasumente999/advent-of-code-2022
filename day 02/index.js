const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split(/\n/);
/*
Part one
*/

const partOne = (data) => {
  const outcomes = [...new Set(data)];

  const obj = outcomes.reduce((acc, curr) => {
    switch (curr) {
      case "B X":
        acc[curr] = 1;
        break;

      case "C Y":
        acc[curr] = 2;
        break;

      case "A Z":
        acc[curr] = 3;
        break;

      case "A X":
        acc[curr] = 4;
        break;

      case "B Y":
        acc[curr] = 5;
        break;

      case "C Z":
        acc[curr] = 6;
        break;

      case "C X":
        acc[curr] = 7;
        break;

      case "A Y":
        acc[curr] = 8;
        break;

      case "B Z":
        acc[curr] = 9;
        break;
    }
    return acc;
  }, {});

  let count = 0;
  data.forEach((round) => {
    for (let key in obj) {
      if (round === key) {
        count += obj[key];
      }
    }
  });
  return count;
};

console.log(partOne(input));

/*
Part two
*/

const partTwo = (data) => {
  const outcomes = [...new Set(data)];

  const obj = outcomes.reduce((acc, curr) => {
    switch (curr) {
      case "B X":
        acc[curr] = 1;
        break;

      case "C X":
        acc[curr] = 2;
        break;

      case "A X":
        acc[curr] = 3;
        break;

      case "A Y":
        acc[curr] = 4;
        break;

      case "B Y":
        acc[curr] = 5;
        break;

      case "C Y":
        acc[curr] = 6;
        break;

      case "C Z":
        acc[curr] = 7;
        break;

      case "A Z":
        acc[curr] = 8;
        break;

      case "B Z":
        acc[curr] = 9;
        break;
    }
    return acc;
  }, {});

  let count = 0;
  data.forEach((round) => {
    for (let key in obj) {
      if (round === key) {
        count += obj[key];
      }
    }
  });
  return count;
};

console.log(partTwo(input));
