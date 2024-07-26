
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

const addTwo = input => input +2;

function map(arr, callBack) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(callBack(arr[i]))
  }
  return output;
}

console.log(map([1,2,3], addTwo)) // [3,4,5]