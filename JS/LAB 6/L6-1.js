//Number Handling Functions

//isFinite
console.log(Number.isFinite(7 / 0));
console.log(Number.isFinite(10 / 5));
console.log(Number.isFinite(2.5));
console.log(Number.isFinite(-1));

console.log('---------------------------');

//isInteger
console.log(Number.isInteger(2.5));
console.log(Number.isInteger(-3));
console.log(Number.isInteger(7));

console.log('---------------------------');

//isSafeInteger
console.log(Number.isSafeInteger(2.5));
console.log(Number.isSafeInteger(-3));
console.log(Number.isSafeInteger(7));

console.log('---------------------------');

//isNaN
console.log(Number.isNaN("Hello"));
console.log(isNaN("Hello"));
console.log(Number.isNaN(7));
console.log(Number.isNaN(7/0));
console.log(Number.isNaN(0/0));

console.log('---------------------------');

//parseFloat
console.log(Number.parseFloat('2.5'));
console.log(Number.parseFloat('7.5'));
console.log(Number.parseFloat('2.025'));

console.log('---------------------------');

//parseInt
console.log(Number.parseInt('2.5'));
console.log(Number.parseInt('7.5'));
console.log(Number.parseInt('3.5558'));

console.log('---------------------------');

//toFixed
let num = 354.878499
console.log(num.toFixed());
console.log(num.toFixed(2));
console.log(num.toFixed(3));
console.log(num.toFixed(4));

console.log('---------------------------');
