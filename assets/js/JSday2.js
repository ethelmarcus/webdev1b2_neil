//declaring a variables and assigning 0 as value
var length = 0;
var width = 0;
var height = 0;

//assigning new values
width = 10;
height = 15;
length = 23;

//multiplying the 3 variables and assigning to product variable
var product = length * width * height;
console.log(product);

//check if product is odd or even
if (product % 2 == 0) {
    console.log('product is an even number');
} else {
    console.log('product is an odd number');
}

//check if product is divisible by 3
if (product % 3 == 0) {
    console.log('divisible by 3');
} else {
    console.log('not divisible by 3');
}

for (var x = 0; x < 10; x++) {
    if (x % 2 == 0) {
        console.log('EVEN');
    } else {
        console.log('ODD');
    }
}

// var y = 0;
// while (y < 10) {

//     y++;
// }


var personName = prompt('Please enter your name');
if (personName == 'Neil') {
    alert('welcome, ' + personName);
} else {
    alert('access denied');
}