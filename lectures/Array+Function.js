

// map() function
// The map() function creates a new array with the results of calling a provided function on every element in the calling array.

// Syntax
// map(callback(element, index, array), thisArg)  
// Parameters
// callback: Function that produces an element of the new Array, taking three arguments:
// element: The current element being processed in the array.
// index (Optional): The index of the current element being processed in the array.
// array (Optional): The array map was called upon.
// thisArg (Optional): Value to use as this when executing callback.

// Return value

const a = [1, 2, 3, 4, 5];
const b = a.map((x) => x * 2);
console.log(b); // [2, 4, 6, 8, 10]

// const b = a.map(item, index, array) => { console.log(item, index, array) }