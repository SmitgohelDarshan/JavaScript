let arr = [10,20,30,40,50,60,70,80,90,100];

//shift method
console.log(arr.shift());
console.log(arr);

console.log('-----------------------');


let array = [1,[2,3,4],5,6];
console.log(array[1].shift());
console.log(array);


console.log('-----------------------');

//unshift method
let arr2 = [23, 76, 19, 94];
console.log(arr2.unshift(28, 65));
console.log(arr2);

console.log('-----------------------');

let newarr =[];
console.log(newarr.unshift(1));
console.log(newarr);

console.log('-----------------------');


//slice method
const slicedArr =arr.slice(0,3);
const slicedArr2 =arr.slice(1,3);
const slicedArr3 =arr.slice(-3);
const slicedArr4 =arr.slice(0,-2);

console.log("Array After the slice operation: ",slicedArr);
console.log('-----------------------');

console.log("Array After the slice operation: ",slicedArr2);
console.log('-----------------------');

console.log("Array After the slice operation: ",slicedArr3);
console.log('-----------------------');

console.log("Array After the slice operation: ",slicedArr4);
console.log('-----------------------');


//splice method
let numbers = [10, 20, 30, 40, 50];
let removednum = numbers.splice(1, 2);
console.log(numbers); 
console.log(removednum); 

console.log('-----------------------');


let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "pink");
console.log(colors); 

console.log('-----------------------');

//reverse method
arr.reverse();
console.log("Array After the reverse operation: ",arr);
console.log('-----------------------');