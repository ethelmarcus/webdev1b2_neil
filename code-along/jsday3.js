var arr = [4, 8, 15, 16, 23, 42];
console.log(arr);
console.log(arr[2]);
console.log('The value in 3rd index is', arr[3]);
var myName = 'Neil';
console.log(myName[3]);
console.log(myName[10]); //undefined

var cars = ['Honda', 'Toyota', 'Chevrolet', 'Isuzu'];
var cars2 = ['Lamborghini', 'Porsche', 'BMW'];

console.log(cars);
console.log('Using at:', cars.at(2));
cars[3] = 'Mercedes Benz';
console.log(cars);
console.log('concat', cars.concat(cars2));
console.log(cars);
cars = cars.concat(cars2);
console.log(cars); 
console.log(cars.length);
console.log(cars2.length);
console.log('during sort', cars.sort());
console.log('after sort', cars);
console.log('reverse', cars.reverse());
console.log(cars2);
cars2.push('Ferrari');
console.log('after push:', cars2);
var removedCar = cars2.pop();
console.log(cars2);
console.log(removedCar);
console.log(cars.splice(3, 3));
console.log(cars);
cars.unshift('Kia');
console.log(cars);