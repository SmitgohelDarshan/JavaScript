function varAndLet() {
    if (true) {
        var x = 10; // var has function scope, not block scope
        let y = 20; // let has block scope
    }
    
    console.log(x); // Output: 10
    // console.log(y); // Error: y is not defined (y is block-scoped)

    // realloc  ation
     x = 30;
     console.log(x);
    // var allows redeclaration
    // let y = 40; // Error: y has already been declared
}

varAndLet();