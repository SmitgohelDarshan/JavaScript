let fruits = ['apple', 'banana', 'orange'];

function addFruit(fruit) {

  fruits.push(fruit);
  console.log(`Added "${fruit}" to the list.`);
  displayFruits();

}

function displayFruits() {

    console.log('Current Fruits:', fruits);

}

function updateFruit(index, newFruit) {

  if (index >= 0 && index < fruits.length) {

    console.log(`Updating "${fruits[index]}" to "${newFruit}".`);
    fruits[index] = newFruit;
    displayFruits();

  } 
  else {
    console.log('Invalid index provided for update.');
  }

}

function deleteFruit(index) {

  if (index >= 0 && index < fruits.length) {

    const removedFruit = fruits.splice(index, 1);
    console.log(`Removed "${removedFruit}" from the list.`);
    displayFruits();

  } 
  else {
    console.log('Invalid index provided for deletion.');
  }

}

displayFruits();
addFruit('grape');
updateFruit(1, 'kiwi');
deleteFruit(0);
displayFruits();