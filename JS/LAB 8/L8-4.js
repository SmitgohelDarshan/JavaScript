// Brute Force
function gcd(a, b) {
    let min = Math.min(a, b);
    let gcd = 1;
    for (let i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

console.log(gcd(56, 98));  

// Euclidean Algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(56, 98));  