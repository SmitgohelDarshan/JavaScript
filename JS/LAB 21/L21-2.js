const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes("Mango"));

console.log('--------------------');

const numbers = [1,2,3,4,5,6,7,8,9,0];

console.log(numbers.includes(7,5));

console.log('--------------------');

const num = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 10); //it match only one value
console.log(found);

console.log('--------------------');

const ages = [10,15,20,30];

const foundage = ages.find(age => age > 18); //it match only one value
console.log(foundage);