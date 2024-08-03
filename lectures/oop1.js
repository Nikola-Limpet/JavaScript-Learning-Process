// An example of inheritan hierachy in JavaScript
// This is a simple example of inheritance in JavaScript

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}
class Bird extends Animal {
  speak() {
    console.log(this.name + ' chirps.');
  }
}
class Eang extends Bird {
  speak() {
    console.log(this.name + ' chirps.');
  }
}


// let dog = new Dog('Rex');
// dog.speak(); // Rex barks.

// let bird = new Bird('Tweety');
// bird.speak(); // Tweety chirps.

// let eang = new Eang('Eang');
// eang.speak(); // Eang chirps. 


// OOP principles: Encapsulation 
// Encapsulation has to do with making a code implementation hidden from the other users.
// In the sense that, the user does not need to know how the code is implemented, 
//but only needs to know how to use it.


// example of encapsulation in JavaScript 

// 'abc'.toUpperCase();
// 'abc'.toLowerCase();
// 'abc'.charAt(1); 

// at this point meaning that you dont need to know how to implement the toUpperCase, toLowerCase, charAt methods
// U just need to knwo how to use it.



 