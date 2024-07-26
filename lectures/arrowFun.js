// function mul2(input) { return input *2 }

// const mul2 = (input) => input * 2;

// const mul2 = input => input * 2;

// const output = mul2(3); // 6


// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num  + 2;
} 

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const output = [];
	for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  };
  return output;
}

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  const output = [];
	for(let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  };
  
}

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
  const output = [];
  forEach(array, callback);
  return output;
}