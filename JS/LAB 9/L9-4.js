for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let space = 0; space <= 5 - space; space++) {
        row += " ";
    }

    for (let j = 1; j <= 6 - i; j++) {
        row += i + " ";
    }

    console.log(row);
}
