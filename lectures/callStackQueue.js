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
