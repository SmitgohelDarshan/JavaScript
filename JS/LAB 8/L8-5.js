function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    let gcdValue = gcd(a, b); 
    let lcmValue = (a * b) / gcdValue;
}

console.log(lcm(56, 98));