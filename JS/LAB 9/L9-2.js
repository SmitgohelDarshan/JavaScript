for (let i = 1; i <= 5; i++) {
    let row = "";
    
    for (let space = 1; space <= 5 - i; space++) {
        row += " ";
    }
    
    for (let num = 1; num <= i; num++) {
        row += num;
    }
    
    console.log(row);
}