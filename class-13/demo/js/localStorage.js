'use strict';
// Before adding data to local storage
console.log(localStorage);

// set items (store data into the local storage)
console.log(localStorage.setItem('name','AbdulHakim'));
localStorage.setItem('age',24);

// get data from the local storage
// console.log(typeof localStorage.getItem('age'), localStorage.getItem('age'));
// let items=[24,27,28,30,22,16];
// console.log(typeof items);
// localStorage.setItem('agesList',items);
// console.log(typeof localStorage.getItem('agesList'));

let myObject={
  user:'Omar Alhalika',
  age:27
}
console.log(typeof myObject);
localStorage.setItem('user',myObject);
console.log(typeof localStorage.getItem('user'));

// update an item in the local storage
// localStorage.clear();
console.log(localStorage.setItem('name','Hamza'));
localStorage.removeItem('user');

// CRUD operations
// C --> Create
// R --> Retrieve/Read
// U --> Update
// D --> Delete

