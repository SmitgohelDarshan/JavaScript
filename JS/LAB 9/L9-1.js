for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 5; j >= 6 - i; j--) {
        row += j;
    }
    console.log(row);
}
