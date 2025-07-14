function search(array, value) {
    return array.indexOf(value);
  }
  

  const fruits = ["apple", "banana", "pinapple", "mango"];
  const searchValue = "mango";
  const index = search(fruits, searchValue);
  
  console.log(index);