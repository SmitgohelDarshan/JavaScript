const userArr = prompt("Enter the array elements ',' searated(e.g. 1,2,3,4...)");

const arr = userArr.split(',').map(Number);

//bubble sort.
for(let i = 0 ; i < arr.length - 1 ; i++){
    let swapped = false;
    for(let j = 0 ; j < arr.length - 1 ;j++){
        if(arr[j] > arr[j+1]){
            swapped = true;
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
    if(!swapped){
        break;
    }
}

document.write(`Sorted Array : [  ${arr}  ]`);