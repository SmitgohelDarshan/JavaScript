var str = 'darshan university';

//toUpperCase Function
str = str.toUpperCase();
console.log(str);

console.log('-------------------------');

//toLowerCase Function
str = str.toLowerCase();
console.log(str);

console.log('-------------------------');

//slice Function
console.log(str.slice(3,8));


console.log('-------------------------');

// valueOf Function

let a = new String("HTML");
let b = new String("CSS");
let c = new String("JS");

console.log(a.valueOf(), b.valueOf(), c.valueOf());

console.log('-------------------------');

//fromCharCode Function
    
let newstr = String.fromCharCode(115,117,109,105,116);
console.log(newstr);