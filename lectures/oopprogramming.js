// Task 1: Code a Person class
class Person {
  constructor(name="Tom", age=20, energy=100) {
      this.name = name;
      this.age = age;
      this.energy = energy;
  }
  sleep() {
      return this.energy += 10;

  }
  doSomethingFun() {
      return this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(xp=0, hourlyWage=0) {
      this.xp = xp;
      this.hourlyWage = hourlyWage;
  }
  goToWork() {
      
      return this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
// Inside the intern function instantiate the `Worker` class to code a new intern object.

// The intern should have the following characteristics:
// ```
// name: Bob

// age: 21

// energy: 110

// xp: 0

// hourlyWage: 10
// ```

// Run the `goToWork()` method on the intern object. Then `return` the intern object.
function intern() {
  let worker = new Worker("Bob", 21, 110, 0, 10);
  worker.goToWork();

  return worker;

}

// Inside the manager function instantiate the `Worker` class to code a new `manager` object.

// The manager object should have the following characteristics:
// ```
// name: Alice

// age: 30

// energy: 120

// xp: 100

// hourlyWage: 30
// ```

// Run the `doSomethingFun()` method on the manager object. Then `return` the manager object.

// Task 4: Code a manager object, methods
function manager() {
  let manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}