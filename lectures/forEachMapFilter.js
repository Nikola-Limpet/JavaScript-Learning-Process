
// ForEach built-in function

const fruit = ['apple', 'banana', 'grapes', 'mango', 'orange'];

fruit.forEach((item, index) => {
  console.log(index, item);
  }
);

let nums = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.filter(function (num) {
  return num >= 2;
});

nums.map(function (num) {
  return num * 2;
});


const oddNums = [1, 3, 5, 7, 9].map(function (num) {
  return num * 2;
}
);
// console.log(oddNums); // [2, 6, 10, 14, 18]

// Working with objects
const result = [];
const drone = {
  speed : 100,
  color : 'red'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach((key) => {
  result.push(key, drone[key]);
});

console.log(result); // ['speed', 100, 'color', 'red']

