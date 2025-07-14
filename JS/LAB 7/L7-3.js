let number = 7;

function prime(number) {
    if (number <= 1) {
        console.log("The given number is not a prime number");
        return;
    }

    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0) {
            console.log("The given number is not prime number");
            return;
        }
    }
    console.log("The given number is prime number");
}

prime(number);

// let number = 10;

// function prime(number) {
//     if (number <= 1) {
//         console.log("The given number is not a prime number");
//         return;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {  // Optimizated
//         if (number % i == 0) {
//             console.log("The given number is not a prime number");
//             return;
//         }
//     }
//     console.log("The given number is a prime number");
// }

// prime(number);
