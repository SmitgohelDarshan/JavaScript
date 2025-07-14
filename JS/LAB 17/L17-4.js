const input = prompt("Enter a character or string:");

if (/^[a-zA-Z]+$/.test(input)) {
    document.write("You entered  alphabets.");
} else if (/^[0-9]+$/.test(input)) {
    document.write("You entered  numbers.");
} else if (/^[a-zA-Z0-9]+$/.test(input)) {
    document.write("You entered an alphanumeric string.");
} else {
    document.write("You entered a string with special characters or symbols.");
}


// const char = prompt("Enter The Character = ");

// let asciival = char.charCodeAt(0);

// if((asciival>=65 && asciival < 91) || (asciival>=97 && asciival < 123)){
//     document.write("You Entered alphabet.");
// }

// else if(asciival >=48 && asciival < 58){
//     document.write("You Entered number.");
// }

// else{
//     document.write("You Entered special character or symbol.");
// }