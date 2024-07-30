// We are interacting with the call stack and the queue in this example 
// to understand how the event loop works in JavaScript.

console.log('1');
setTimeout(() => {
  console.log('2');
}, 1000);
console.log('3');
setTimeout(() => {
  console.log('4');
}, 0);
console.log('5');

// What will be the output of the code above? 🤔

// Becuz of the event loop, the setTimeout function will be pushed to the queue
// when the call stack is empty. The setTimeout function with 0ms will be pushed
// to the queue first, then the setTimeout function with 1000ms will be pushed to
// the queue. The setTimeout function with 0ms will be executed first, then the
// setTimeout function with 1000ms will be executed. The output will be:
// 1
// 3
// 5
// 4
// 2



function promised (val) {
  // ADD CODE HERE
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val)
    }, 2000)
  })
  return promise;
}
const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.cb = cb;
    this.second = 0;
  }
  // ADD METHODS HERE
  start() {
    this.timer = setInterval(() => {
      this.cb(this.second);
      this.second++;
    }, 1000);
  }
  reset() {
    clearInterval(this.timer);
    this.second = 0;
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => { console.log(val) });
console.log("Started Clock.");
clock.start();
setTimeout(() => {
     clock.reset();
     console.log("Stopped Clock after 6 seconds.");
 }, 6000);