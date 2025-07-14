// normal way..

function isArmstrongNumber(num) {
    let temp = num
    let sum = 0;
    let len = num.toString().length;
    
    while(num>0){
        let digit = num%10;
        sum+=Math.pow(digit,len);
        num = Math.floor(num/10);
    }
    
    if (temp === sum ) {
        console.log('The number is an Armstrong number');
    } else {
        console.log(`The number is not an Armstrong number.`);
    }
}
isArmstrongNumber(153);
isArmstrongNumber(370);
isArmstrongNumber(371);
isArmstrongNumber(407);
isArmstrongNumber(111);



// //another way..
// function isArmstrongNumber(num) {
//     let temp = num;
//     let sum = 0;
//     let digits = num.toString().split('');
    
//     for (let digit of digits) {
//         sum += Math.pow(parseInt(digit), digits.length);
//     }
    
//     if (temp === sum ) {
//         console.log('The number is an Armstrong number');
//     } else {
//         console.log(`The number is not an Armstrong number.`);
//     }
// }

// isArmstrongNumber(153);