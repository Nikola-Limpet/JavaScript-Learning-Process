// Calling a function outside of the function call in which it was defined 

function outer() {
  let counter = 0;
  function incrementCounter() { counter ++;}
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();
// Output:1,2 

const anotherNewFunction = outer();
anotherNewFunction();
anotherNewFunction();
// Output: 1,2

//Since it is an individual backpack the counter variable use only inside the scope of the function outer()
// Unless the counter decleared in the global execution context then the output must be 1,2,3,4


/*  What can we call it backpack?

. close to variable environemnt (V.E)
. Persistant Lexcial Scope Referenced Data (P.L.S.R.D)
. backpack or closure
The backpack of live data is attacted to the incrementCounter (then to myNewFunciton)
through a hidden property known as "scope" which persist even when the inner function is return
*/
