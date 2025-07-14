let num =  171;
let temp = num;
let sum = 0;

function palindrome(number){
    while(num>0){
        let rem = num%10;
        sum = sum*10 + rem;
        num=Math.floor(num/10);
    }
    return sum;
}

let ans = palindrome(num);

if(temp == ans){
    console.log("The given number is palindrome number");
}
else{
    console.log("The given number is not palindrome number");   
}