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