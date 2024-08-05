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
function intern() {
  let intern = new Worker();
  intern.goToWork();
  console.log(intern.xp);
  intern.sleep();
  console.log(intern.energy);
  intern.doSomethingFun();

}

// Task 4: Code a manager object, methods
function manager() {
  let manager = new Worker();
  manager.goToWork();
  console.log(manager.xp);
  manager.sleep();
  console.log(manager.energy);
  manager.doSomethingFun();
}