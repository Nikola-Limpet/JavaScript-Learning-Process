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

function formatStr (str) {
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  if (/^FOO:/.test(str)) { // test() is a method of regExp for testing whether input str is in
    // the pattern or not

    return str;   
  }
  return str.slice( 4 );
}

  // Closer is when a function remember the vari outside of it. even if u dont pass that elsewhere
function ask(question) {
  setTimeout(function waitASec(){
    console(question);
  },100);
}

ask('what is closer?');

// what is closer?



// Prototypes 

/* a this-aware function can thus have a different context each time it's call
, which makes it more flexible & reusable */

// workShop is an object type so we can call element inside is by usig this similar to workshop.this
var workShop = {
  teacher: "Kyle", 
  ask(question) {
    console.log(this.teacher, question);
   // remember that we can use this.ask or this.teacher
  },
}

workShop.ask("what is implicit binding?");

// Kyle, what is implicit binding?

function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {   // like we have object workshop and inside that
  // object we create function ask but instead we use prototype 
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Isn't prototype is a class?");
reactJS.ask("Is prototype is Ugly");