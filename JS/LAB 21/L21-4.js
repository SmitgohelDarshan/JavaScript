const numbers = [1, 3, 5, 7, 8];
const hasEven = numbers.some(element => element % 2 === 0);

console.log(hasEven);


const strings = ["hello", "", "world", "JavaScript"];
const hasEmptyString = strings.some(str => str === "");

console.log(hasEmptyString);


const nestedArrays = [[1, 2], [3, 4, 5], [6]];

const hasLongSubarray = nestedArrays.some(subarray => subarray.length > 2);

console.log(hasLongSubarray);