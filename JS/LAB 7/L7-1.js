function factorial(n) {
    if (n < 0) {
        return "Factorial of a negative number is not possible.";
    }
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function recfactorial(n) {
    if (n < 0) {
        return "Factorial of a negative number is not possible.";
    }
    
    else if(n==0 || n==1) return 1;
    else return n* recfactorial(n-1);
    
}

let num = 5; 

console.log("Factorial of the given number is :",factorial(num));


console.log("Factorial of the given number is :",recfactorial(num));