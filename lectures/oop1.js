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
