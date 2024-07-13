let clickHandler = function () {
  // ...       anonymose function 
};

let keyHandler = function keyHandler () {
  // ...  decleared function 
};




let ids = people.map(person => person.id);    // arrow function 

let useNames  = people.map(function getId(person) {
  return person.id
});



getPerson()
.then(person => getData(person.id))
.then(renderData);

getPerson()
.then(function getDataFrom(person) {
  return getData(person.id);
})


// IIFE: Immediately invoked Function Expression  
let teacher = "Kyle";

( function anotherTeacher() {
  let teacher = "Suzy";
  console.log(teacher); // Suzy 
}) ();  // in the last: ()    to invoked the function

console.log(teacher);  // Kyle
