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
