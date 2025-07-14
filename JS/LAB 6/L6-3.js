const num1 = parseFloat(prompt("Enter First Number:"));

const num2 = parseFloat(prompt("Enter Second Number:"));

const operator = prompt("Enter operation =");

switch(operator){

    case '+':
        document.write("Ans:",num1+num2);
        break;
    
    case '-':
        document.write("Ans:",num1-num2);
        break;
    
    case '*':
        document.write("Ans:",num1*num2);
        break;

    case '/':
        document.write("Ans:",num1/num2);
        break;
    
    default:
        document.write("Error!");

}