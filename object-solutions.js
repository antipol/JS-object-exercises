//OBJECTS

//1. Check if a number is within a given range
const range = {min: 0, max: 5};
const {min, max} = range;
const withinRange = num => num >= min && num <= max;
console.log(withinRange(5)); //true


//2. Return Keys and Values
const keysAndValues = (object) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  return [keys, values];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));// [[a, b, c], [1, 2, 3]]


//3. Scrabble
const playerSum = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]

const sumScrabble = lettersObject => {
  let maxScore = 0;
  for (let i of score) {
    maxScore += i.score;
  }
  return maxScore;
}

console.log(sumScrabble(playerSum));


//4. Is it an empty object?
const isEmptyObject = newObj => Object.keys(newObj).length < 1;

console.log(isEmptyObject({})); //true --- object is empty
