let number = 1;

for (let i = 1; i <= 4; i++) {
    // Print numbers for each row
    let row = '';
    for (let j = 0; j < i; j++) {
        row += number + ' ';
        number++;
    }
    console.log(row);
}
