// Calling a function outside of the function call in which it was defined 

function outer() {
  let counter = 0;
  function incrementCounter() { counter ++;}
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherNewFunction = outer();
anotherNewFunction();
anotherNewFunction();

/*  What can we call it backpack?

. close to variable environemnt (V.E)
. Persistant Lexcial Scope Referenced Data (P.L.S.R.D)
. backpack or closure
The backpack of live data is attacted to the incrementCounter (then to myNewFunciton)
through a hidden property known as "scope" which persist even when the inner function is return
*/
