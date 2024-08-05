const car = {
  engine: true,
  steering : true,
  speed : "slow"
}
const sportCar = Object.create(car);
sportCar.speed = "fast";
console.log("The sportCar object: " , sportCar);

console.log('------- for-in is unreliable ----------');
for (prop in sportCar) {
  console.log(prop);
}
console.log("Iteraing over the object and prototype properties");

console.log('------- for-of is reliable ----------');
for (prop of Object.keys(sportCar)) {
  console.log(prop);
}
console.log("Iteraing over the object properties only");