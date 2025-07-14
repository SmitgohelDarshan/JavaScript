function hello(name, callback) {
    console.log("Hello, " + name + "!");
    
    callback(name);
}

function bye(name) {
    console.log("Goodbye, " + name + "!");
}

hello("Sumit", bye);