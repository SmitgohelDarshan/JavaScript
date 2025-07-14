let arr = [10, 20, 30, 40, 50];

const insertElement = (arr, element) => {

    arr.push(element); 
    console.log("Array after insertion:", arr);

};

const updateElement = (arr, index, newValue) => {

    if (index >= 0 && index < arr.length) {

        arr[index] = newValue; 
        console.log(`Array after updating index ${index}:`, arr);

    } 
    else {
        console.log("Invalid index.");
    }

};

const deleteElement = (arr, index) => {
    if (index >= 0 && index < arr.length) {

        arr.splice(index, 1);
        console.log(`Array after deleting element at index ${index}:`, arr);

    } 
    else {
        console.log("Invalid index.");
    }
};

console.log("Initial Array:", arr);

insertElement(arr, 60);

updateElement(arr, 2, 35);

deleteElement(arr, 1); 