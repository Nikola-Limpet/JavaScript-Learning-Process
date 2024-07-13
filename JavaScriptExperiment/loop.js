let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// for each loop

for( ele of array){
    console.log(ele);
}
// increatment by one 

while (array.length > 0) {
  console.log(array.shift());
}
// pop() get the last ele
// shifting elements from an array. take the first element of array and remove it from the array.
