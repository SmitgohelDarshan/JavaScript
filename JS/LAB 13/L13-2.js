const input = prompt("Enter numbers separated by commas (e.g. 1,2,3,4...):");
const numArr = input.split(",").map(Number);
const max = Math.max(...numArr);
const min = Math.min(...numArr);
 
 if (numArr.length > 0) {
    
    document.write("Max number: ", max +"<br>");
    document.write("Min number: ", min);

 } 
 else {
    console.log("No valid numbers entered.");
 }