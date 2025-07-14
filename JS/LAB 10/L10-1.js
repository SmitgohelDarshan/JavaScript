function calculateAreaOfCircle(radius){
    return Math.PI*radius
}

function checkPrime(number){
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            console.log("The given number is not a prime number");
            return;
        }
    }  
    console.log("The given number is prime number");
}

let radius = 7;
let area = calculateAreaOfCircle(radius);
area = area.toFixed(4);

console.log("The area of circle of given radius is:",area);
checkPrime(5);
checkPrime(9);