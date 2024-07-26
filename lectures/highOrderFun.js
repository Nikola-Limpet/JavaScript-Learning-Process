
// function copyArrManipulate(arr, instruction) {
//   const output = []
//   for (let i = 0; i < arr.length; i++) {
//     output.push(instruction(arr[i]))
//   }
//   return output;
// };
// function multiBy2(input) { return input *  2}
// const result = copyArrManipulate([1,2,3], multiBy2);
// console.log(result)


// function copyArrManipulate(arr, instruction) {
//   const output = []
//   for (let i = 0; i < arr.length; i++) {
//     output.push(instruction(arr[i]))
//   }
//   return output;
// };

// const result = copyArrManipulate([1,2,3], input => input * 2);
// console.log(result)

// challenge 3
const addTwo = input => input +2;

function map(arr, callBack) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callBack(arr[i]))
  }
  return output;
}

console.log(map([1,2,3], addTwo)) // [3,4,5]



// Challenge 4
function forEach(array, callback) {
  const output = [];
	for(let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  };
  
}

let alphabet = '';
const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

forEach(letter, function(char) {
  alphabet += char;
});

console.log(alphabet); // abcdefghij

// Challenge 5
// In challenge 3, you've created a function called map. 
// In this challenge, you're going to rebuild the map function by creating a function called mapWith.
// This time you're going to use forEach inside of mapWith instead of using a for loop.

function mapWith(array, callback) {
  const output = [];
  forEach(array, function(value) {
    output.push(callback(value));
  });
  return output;
}


// Challenge 6
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  forEach(array, function(value) {
    accumulator = callback(accumulator, value);
  });
  return accumulator;
}

consolw.log(reduce([1,2,3], (a,b) => a + b, 10)) // 16

// Challenge 7
// Construct a function intersection that takes in an array of arrays, 
// compares the inner arrays, and returns a new array with elements found in all of them. 
// BONUS: Use reduce!

function intersection(arrays) {
  return reduce(arrays, function(a,b) {
    const result = [];
    forEach(a, function(value) {
      if (b.includes(value)) {
        result.push(value);
      }
    });
    return result;
  }, arrays[0]);
}

