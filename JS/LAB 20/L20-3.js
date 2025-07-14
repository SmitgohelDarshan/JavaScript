const printPrimesBetween = (num1, num2) => {
    
    const isPrime = (num) => {

        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {

            if (num % i === 0) return false;
        }

        return true;
    };

    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
};

let num1 = 0;
let num2 = 30;

printPrimesBetween(num1, num2);