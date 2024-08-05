const car = {
  engine: true,
  steering : true,
  speed : "slow"
}
const sportCar = Object.create(car);
sportCar.speed = "fast";
console.log("The sportCar object: " , sportCar);

console.log('------- for-in is unreliable ----------');