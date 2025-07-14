function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

function printPrimes(start, end) {
    console.log(`Prime numbers between ${start} and ${end} are:`);
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

let start = 0;
let end = 20;
printPrimes(start, end);