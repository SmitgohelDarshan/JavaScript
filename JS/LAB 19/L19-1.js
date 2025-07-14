let square = (num)=>{
    return num*num;
}

let  areaOFRectangle  = (length,width)=>{
    return length*width;
} 

let num = 5;
const ans = square(num);

let len = 10;
let width = 15;

const area = areaOFRectangle(len,width);

console.log("Square of the given number is:",ans);
console.log("Area of the rectangle is :",area);
