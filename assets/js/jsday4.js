var userInput = parseInt('500.00');
var multiplier = 5;

console.log(parseInt(userInput) * multiplier);

console.log(multiplier);
console.log(multiplier.toString());

var pi = 3.141516;
var currencyConverted = userInput * pi;
console.log(currencyConverted);
console.log(currencyConverted.toFixed(2));
console.log(currencyConverted);
console.log(currencyConverted.toFixed(0));

var firstName = 'Jenina';
// var nameInput = prompt('What is your name?');

// if (nameInput.toLowerCase() == firstName.toLowerCase()) {
//     alert ('The same');
// } else {
//     alert ('Not the same!');
// }

var fruits = ['apple', 'orange', 'mango'];

if (fruits.includes('apple')) {
    console.log('Apple is present');
} else {
    console.log('Apple is not present');
}

// OBJECT 
var person = {
    firstName: 'Shiela',
    lastName: 'Bangs',
    gender: 'F',
    age: 7,
};

console.log(person);
person.gender = 'M';
person.age = 21;
console.log(person);
console.log('the age is', person.age);

var phoneBook = [
    {
        name: 'Johnny Cash',
        number: 12345
    },
    {
        name: 'John Doe',
        number: 33313
    },
    {
        name: 'Alphi Holmes',
        number: 177742
    },
    {
        name: 'Kenji San',
        number: 122234
    },
];

console.log(phoneBook);

phoneBook[1].name = 'Carlos Jones';
phoneBook[1].number = 123456789;

console.log(phoneBook);

console.log(phoneBook[2].name);
console.log(phoneBook[1]);

console.log(document.getElementById('companyName'));

document.getElementById('companyName').innerHTML = 'The Coding School';

var contentElement = document.getElementById('contentDiv');
contentElement.innerHTML = 'Coding for the future';

console.log(document.getElementsByClassName('listItem')[0].innerHTML);

var listItems = document.getElementsByClassName('listItem');

for (var counter = 0; counter < listItems.length; counter++) {
    console.log(listItems[counter].innerHTML);
    listItems[counter].innerHTML = listItems[counter].innerHTML = 'is my friend';
}

console.log(document.getElementById('nameForm').value);

/**
 * FUNCTIONS :
 * console.log()
 * alert()
 * prompt()
 * confirm()
 * document.getElementByID
 * document.getElementByClassName
 */

function displayValue() {
    console.log('hello');
};

displayValue();

function add(x, y) {
    return x + y;
};

function diplayInput() {
    var inputValue = document.getElementById('nameForm').value;

    console.log('Hello there', inputValue);
    alert('Welcome' + inputValue);
};

console.log(add(5, 4));

var sum = add(7, 11);

console.log(add(sum, 5));

console.log(sum);