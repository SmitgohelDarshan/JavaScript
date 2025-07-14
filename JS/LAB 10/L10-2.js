let str = prompt("Enter the string");

alert(`This is an alert! You Enterd ${str}`);

if(confirm("Is this ok to print?")){
    document.write(str);
}
else{
    document.write("nothing!");
}