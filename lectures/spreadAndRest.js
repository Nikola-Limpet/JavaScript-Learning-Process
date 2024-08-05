const fruits = [ 'apple', 'banana', 'orange' ];
const berries = [ 'strawberry', 'blueberry', 'blackberry' ];  
const fruitsAndBerries = [ ...fruits, ...berries ]; // ['apple', 'banana', 'orange', 'strawberry', 'blueberry', 'blackberry']
console.log(fruitsAndBerries);

const flying = { wings : 2 };
const car  = { wheels : 4 };
const flyingCar = { ...flying, ...car }; // { wings: 2, wheels: 4 }

console.log(flyingCar);


// another example of spread operator
let myCar = [ "BMW", "Audi", "Toyota" ];
myCar = [...myCar, "Mercedes", "Ford"];
console.log(myCar); // ['BMW', 'Audi', 'Toyota', 'Mercedes', 'Ford']


// another example of spread operator
const greeting = 'Hello';
const arraysOfChars = [...greeting]; // ['H', 'e', 'l', 'l', 'o']
console.log(arraysOfChars);

