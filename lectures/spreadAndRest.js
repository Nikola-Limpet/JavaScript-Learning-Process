const fruits = [ 'apple', 'banana', 'orange' ];
const berries = [ 'strawberry', 'blueberry', 'blackberry' ];  
const fruitsAndBerries = [ ...fruits, ...berries ]; // ['apple', 'banana', 'orange', 'strawberry', 'blueberry', 'blackberry']
console.log(fruitsAndBerries);

const flying = { wings : 2 };
const car  = { wheels : 4 };
const flyingCar = { ...flying, ...car }; // { wings: 2, wheels: 4 }

console.log(flyingCar);