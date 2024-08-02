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



// Solution 1 - Factory Functions
// Factory functions are functions that create and return objects
// Generate object using a function
function createUser(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = () => newUser.score++;
  return newUser;
}

// const user1 = createUser('Will', 3); 
// const user2 = createUser('Tim', 6);
// const user3 = createUser('Eva', 9);
// user1.increment();


// Solution 2 - Using Object.create

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() { this.score++; },
  login: function() { console.log('You are loggedin'); }
}

const user1 = userCreator('Will', 3);
const user2 = userCreator('Tim', 6);
user1.increment();
