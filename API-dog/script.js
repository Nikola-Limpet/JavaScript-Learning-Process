const DOG_URL =   "https://dog.ceo/api/breeds/image/random";

const doggs = document.getElementById("dog-target");

// function addNewDoggo() {
//   const promise = fetch(DOG_URL);
//   promise.then(function(response) {
//     const processingPromise = response.text();   // use .text() instead of .json() to get the response as text
//     return processingPromise;
// })
//   .then(function(processedResponse) { 
//     const dogObj = JSON.parse(processedResponse);
//     const img = document.createElement("img");
//     img.src = dogObj.message;
//     img.alt = "Cute doggo";
//     doggs.appendChild(img);
//   })
//   .catch (function(error) {
//     // handle error
//     alert(error);
//   });
// }

// easy way since we new the response as json
// function addNewDoggo() {
//   fetch(DOG_URL)
//     .then(response => response.json())
//     .then(data => {
//       const img = document.createElement("img");
//       img.src = data.message;
//       img.alt = "Cute doggo";
//       doggs.appendChild(img);
//     });
// }


// use async/await
async function addNewDoggo() {
  const response = await fetch(DOG_URL);
  const data = await response.json();
  const img = document.createElement("img");
  img.src = data.message;
  img.alt = "Cute doggo";
  doggs.appendChild(img);
}
// await is just like .then() 
//but it waits for the promise to resolve before moving on

document.getElementById("dog-btn").addEventListener('click', addNewDoggo);