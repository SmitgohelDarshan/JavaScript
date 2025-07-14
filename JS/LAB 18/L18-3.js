const PI = 3.14159;
console.log("The value of PI is:", PI);

// Trying to reassign PI will throw an error
// PI = 3.14; // Error: Assignment to constant variable

// However, properties of a const object can still be modified
const person = {
    name: "Sumit",
    age: 18
};
person.age = 19;
console.log("Updated age:", person.age);