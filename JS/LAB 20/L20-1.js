const checkPrime = (num)=>{
    if (num < 2 || !Number.isInteger(num)) {
        console.log("The given number is not a prime number");
        return;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){

        if(num % i === 0){
            console.log("The given number is not a prime number");
            return;
        }
    }
    console.log("The given number is prime number");
}

let num = 5;
let num2 = 7;
let num3 = 9;
let num4 = 1;
let num5 = -5;
let num6 = 7.5;

checkPrime(num);
checkPrime(num2);
checkPrime(num3);
checkPrime(num4);
checkPrime(num5);
checkPrime(num6);