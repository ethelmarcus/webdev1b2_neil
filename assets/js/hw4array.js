// Step 1. Create an empty array variable called "fruits".
var fruits = [];

// Step 2. Using prompt boxes, ask the user how many fruits does the user want to enter (minimum 3, maximum 10).
// used a do-while loop to keep asking the user
// and will stop until a valid input is entered.
do {
    var fruitQuantity = parseInt(prompt('How many fruits do you want to enter? (Between 3 and 10)'));
    
    // Validating user input
    if (fruitQuantity < 3 || fruitQuantity > 10) {
      alert("Please enter a valid number of fruits (between 3 and 10).");
    }
} while (fruitQuantity < 3 || fruitQuantity > 10);

// Step 3: Use a for loop and prompt boxes to collect fruit names.
for (var i = 0; i < fruitQuantity; i++) {
    var nameOfFruit = prompt(`Enter the name of fruit #${i + 1}:`);
    fruits.push(nameOfFruit);
}

// Step 4. Console log the array fruits
console.log(fruits);

// Step 5. Console log the first and last fruit entered
console.log('The first fruit entered is', fruits[0]);
console.log('The last fruit entered is', fruits[fruits.length - 1]);

// Step 6. Sort the fruits in descending order
fruits.sort();
console.log('Descending order:', fruits.reverse());

// Step 7. Console log the 2nd fruit in the array
console.log('The second fruit is', fruits[1]);

// Step 8. Devare the 1st and 3rd fruit in the array
fruits.splice(2, 1); // devare the 3rd fruit first, assuming the user only inputs 3 fruits
fruits.splice(0, 1);

// Step 9. Repeat steps 1-8 but this time for array variable called "vegetables".
var vegetables = [];

do {
    var numberOfVeggies = parseInt(prompt('How many vegetables do you want to enter? (Between 3 and 10)'));
    
    if (numberOfVeggies < 3 || numberOfVeggies > 10) {
      alert("Please enter a valid number of vegetables (between 3 and 10).");
    }
} while (numberOfVeggies < 3 || numberOfVeggies > 10);

for (var i = 0; i < numberOfVeggies; i++) {
    var nameOfVeggies = prompt(`Enter the name of vegetable #${i + 1}:`);
    vegetables.push(nameOfVeggies);
}

console.log(vegetables);

console.log('The first vegetable entered is', vegetables[0]);
console.log('The last vegetable entered is', vegetables[vegetables.length - 1]);

vegetables.sort();
console.log('Descending order:', vegetables.reverse());

console.log('The second vegetable is', vegetables[1]);

vegetables.splice(2, 1);
vegetables.splice(0, 1);

// Step 10. Create a new variable "food" and assign the concatenated arrays fruitvar and vegetables.
// Fruit array should be the first in the list, and then concatenate vegetables.
var food = fruits.concat(vegetables);
console.log(food);

// Step 11. Using for loop, display all the contents in the food array one by one
for (i = 0; i < food.length; i++) {
    var foodName = food[i];
    var isEven = i % 2 == 0;
    var foodLength = foodName.length;
    var secondLetter = foodName.charAt(1);
    var reversedFood = foodName.split('').reverse().join('');
  
    console.log(`Index ${i} is ${isEven ? 'even' : 'odd'} and the food inside it is called ${foodName}.`);
    console.log(`The word ${foodName} has ${foodLength} letters, and the second varter is ${secondLetter}.`);
    console.log(`If you reverse it, it becomes ${reversedFood}.`);
}

// Step 12: Using prompt box, ask the user to enter a food and check if it exists in the food array.
var searchFood = prompt('Enter a food to check if it exists in the array:');

// Check if the user's food exists in the food array.
var foodIndex = food.indexOf(searchFood);

if (foodIndex !== -1) {
  // Food is found at index foodIndex.
  alert(`Food is found at index ${foodIndex}.`);
} else {
  // Food is not found.
  alert("Food not found.");
}

// Step 13. Replace the first element in the food array with the word "START", 
// and the last element in the food array as "END". 
// Then, convert all items in the food array to uppercase. 
food[0] = 'START';
food[food.length - 1] = 'END';

for (i = 0; i < food.length; i++) {
    food[i] = food[i].toUpperCase();
}

// Step 14. Console log the array variable food.
console.log(food);