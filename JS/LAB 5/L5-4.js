let str = "Darshan University";
let str2 = "DARSHAN UNIVERSITY marwadi university"
//charAt Function
console.log(str.charAt(0));
console.log(str.charAt(3));

console.log('-------------------------');

// charCodeAt Function
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(3));

console.log('-------------------------');

// starsWith Function
console.log(str.startsWith('D',0));
console.log(str.startsWith('U',8));
console.log(str.startsWith('s',4));

console.log('-------------------------');

//endsWith Function
console.log(str.endsWith('UNiversity'));
console.log(str.endsWith('y'));
console.log(str.endsWith('n',7));

console.log('-------------------------');

//includes Function

console.log(str.includes("Darshan"));
console.log(str.includes("University"));
console.log(str.includes("Uni"));
console.log(str.includes("sity"));
console.log(str.includes("s",3));
console.log(str.includes("U",9));


console.log('-------------------------');

//indexOF Function

console.log(str.indexOf('s'));
console.log(str.indexOf('n'));
console.log(str.indexOf('i'));

console.log('-------------------------');

//lastIndexOF Function
console.log(str.lastIndexOf('s'));
console.log(str.lastIndexOf('n'));

console.log('-------------------------');

//Match Function

console.log(str.match(/shan/g));
console.log(str.match(/University/g));
console.log(str2.match(/university/i));
console.log(str2.match(/university/gi));

console.log('-------------------------');

//repeat Function
// it will convert the given value into floor value.
console.log(str.repeat(2));
console.log(str.repeat(1.99));
console.log(str.repeat(2.9));

console.log('-------------------------');

//repalce Function

console.log(str.replace("University","university"));
console.log(str.replace("shan","SHAN"));

console.log('-------------------------');

//search Function

console.log(str.search('ver'));
console.log(str.search('ity'));
console.log(str.search('VER'));

console.log('-------------------------');

//spilt Function

const str3 = 'hello world from my side'
console.log(str.split(''));
console.log(str.split(' '));
console.log(str3.split('from'));

console.log('-------------------------');

// substr Function (start,length)

console.log(str3.substr(6,5));
console.log(str3.substr(12,4));

console.log('-------------------------');

// substring Function (start,end)

console.log(str.substring(0,7));
console.log(str.substring(3,7));

console.log('-------------------------');

//toString Function


let num = 123;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));


console.log('-------------------------');

//trim Function
const str4 = "                    Darshan University         ";

console.log(str4);
console.log(str4.trim());