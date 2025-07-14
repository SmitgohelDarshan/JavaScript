let x = 5;
let y = 10;

console.log(`Before swap: x = ${x}, y = ${y}`);

x = x + y; 
y = x - y; 
x = x - y; 

console.log(`After swap: x = ${x}, y = ${y}`);

//using xor (bitwise operator).

// let x = 5;
// let y = 10;

// console.log(`Before swap: x = ${x}, y = ${y}`);

// x = x ^ y;
// y = x ^ y;
// x = x ^ y;

// console.log(`After swap: x = ${x}, y = ${y}`);
