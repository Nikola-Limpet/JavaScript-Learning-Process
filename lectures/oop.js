// Objects - stores functions with their associated data

// this is the principle of encapsulation- and it's going to tranform the way 
//you write code

const user1 = {
  name: 'will', 
  score : 3,
  increment: () => user1.score++
};

user1.increment(); // user1.score = 4


// Creating user2 use dot notation
// Decleare an empty object and add  properties to it with dot notation


const user2 = {};

// assign properties to that object
user2.name = 'Tim';
user2.score = 6;
user2.increment = () => user2.score++;



// Creating user3 use Object.create
// Object.create takes in an object as a parameter and creates a new object with that object as its prototype

const user3 = Object.create(null);

user3.name = 'Eva';
user3.score = 9;  
user3.increment = () => user3.score++;

// Creating user4 use Object.create