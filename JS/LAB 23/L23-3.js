const numbers = [1, 2, 3, 4, 2, 5, 3, 6, 7, 5];

const uniqueNumbers = numbers.reduce((accumulator, currentValue) => {

        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue);
        }
        return accumulator;
}, []);

console.log(uniqueNumbers);