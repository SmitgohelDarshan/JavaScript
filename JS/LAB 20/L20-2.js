const checkPalindrome = (num) => {
    let temp = num;
    let sum = 0;

    while (num > 0) {
        let remainder = num % 10;
        sum = sum * 10 + remainder;
        num = Math.floor(num / 10);
    }

    if (temp === sum) {
        console.log("The given number is a palindrome number");
    } else {
        console.log("The given number is not a palindrome number");
    }
};

let num = 111;
let num2 = 121;
let num3 = 135;

checkPalindrome(num);   
checkPalindrome(num2); 
checkPalindrome(num3); 