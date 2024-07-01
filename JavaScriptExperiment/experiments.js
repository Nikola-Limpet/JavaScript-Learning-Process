console.log("HELLO WORLD");


// const timesToRepeat = 5;
// const dog = "🐕"

// let word = "";
// for (let i = 0; i < timesToRepeat; i++) {
//   word += dog;

// }

// console.log("".padStart(10, "🐕" ));


// string format

let name = "Yuujin"

// console.log("Hello " + name + "!");

console.log(`Hello ${name}!`); // in order to use format string, use backticks and ${}


// function 
function addfive(number) {
  let someVar = "You can't see me outside this function";
  console.log(someVar);
  return number + 5
}

console.log(addfive(5));
console.log(addfive(someVar));  // someVar is out of scope it no long use here outside the function addfive


function alertName(event) {
  const name = event.target.value;
  alert(`Hello ${name}!`);
}