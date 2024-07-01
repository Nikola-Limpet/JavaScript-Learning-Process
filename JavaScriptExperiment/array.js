// accessing elments in an array

let cities = [
  "Tokyo",
  "Delhi",
  "Shanghai",
  "Sao Paulo",
  "Mexico City",
  "Beijing",
  "New York",
  "Lagos",
  "Buenos Aires",
  "Osaka",
]

// method 1 

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function(city) {
  console.log(city);
});

// function logCity(city){
//   console.log(city);}
// cities.forEach(logCity);

