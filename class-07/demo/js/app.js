'use strict';
// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (eg: cuddling, chasing string, napping, food)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g: Egyptian Mau, Persian,British Shorthair)

// TODO: dynamically generate kitten objects using form data

//constructor function | factory function
// 1 name start with CAPS
// 2 the use of "new" keyword for new objects
// prototype methods
function Cat(name, likes, goodWithDogs, goodWithOtherCats, goodWithKids, breed) {
  console.log(this);
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.goodWithKids = goodWithKids;
  this.breed = breed;
  this.imagePath = `./images/${this.name}.jpeg`;
}
Cat.prototype.getAge = function (min, max) {
  console.table(this);
  this.age = getRandomNumber(min, max);
};
Cat.prototype.render = function () {
  const container = document.getElementById('kitten-profiles');
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);
  const h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;
  const pEl = document.createElement('p');
  articleEl.appendChild(pEl);
  pEl.textContent = `${this.name} is adorable and is ${this.age} months old.`;
  const ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (let i = 0; i < this.likes.length; i++) {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.likes[i];
  }
  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const th1El = document.createElement('th');
  headerRowEl.appendChild(th1El);
  th1El.textContent = 'good with cats';
  const th2El = document.createElement('th');
  headerRowEl.appendChild(th2El);
  th2El.textContent = 'good with dogs';
  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'good with kids';
  const dataRowEl = document.createElement('tr');
  tableEl.appendChild(dataRowEl);
  const td1El = document.createElement('td');
  dataRowEl.appendChild(td1El);
  td1El.textContent = this.goodWithOtherCats;
  const td2El = document.createElement('td');
  dataRowEl.appendChild(td2El);
  td2El.textContent = this.goodWithDogs;
  const td3El = document.createElement('td');
  dataRowEl.appendChild(td3El);
  td3El.textContent = this.goodWithKids;
  const imgEl = document.createElement('img');
  articleEl.appendChild(imgEl);
  imgEl.setAttribute('src', this.imagePath);
};
const frankie = new Cat(
  'frankie',
  ['cuddling', 'chasing string', 'napping'],
  true,
  false,
  true,
  'British Short hair'
);
console.log(frankie);
const jumper = new Cat(
  'jumper',
  ['cuddling', 'chasing string', 'napping'],
  true,
  true,
  true,
  'British Short hair'
);
const serena = new Cat(
  'serena',
  ['cuddling', 'chasing string', 'napping'],
  true,
  false,
  true,
  'British Short hair'
);
frankie.getAge(3, 6);
frankie.render();
jumper.getAge(3, 6);
jumper.render();
serena.getAge(3, 6);
serena.render();
// const frankie = {
//   name: 'Frankie',
//   age: 0,
//   likes: ['cuddling', 'chasing string', 'napping'],
//   goodWithOtherCats: true,
//   goodWithKids: false,
//   goodWithDogs: false,
//   breed: 'British Short hair',
//   imagePath: './images/frankie.jpeg',
//   getAge: function (min, max) {
//     console.table(this);
//     this.age = getRandomNumber(min, max);
//   },
//   render: function () {
//     const container = document.getElementById('kitten-profiles');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const pEl = document.createElement('p');
//     articleEl.appendChild(pEl);
//     pEl.textContent = `${this.name} is adorable and is ${this.age} months old.`;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.likes[i];
//     }
//     const imgEl = document.createElement('img');
//     articleEl.appendChild(imgEl);
//     imgEl.setAttribute('src', this.imagePath);
//   },
// };
// const jumper = {
//   name: 'Jumper',
//   age: 0,
//   likes: ['cuddling', 'chasing string', 'napping'],
//   goodWithOtherCats: true,
//   goodWithKids: true,
//   goodWithDogs: false,
//   breed: 'Persian',
//   imagePath: './images/jumper.jpeg',
//   getAge: function (min, max) {
//     this.age = getRandomNumber(min, max);
//   },
//   render: function () {
//     const container = document.getElementById('kitten-profiles');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const pEl = document.createElement('p');
//     articleEl.appendChild(pEl);
//     pEl.textContent = `${this.name} is adorable and is ${this.age} months old.`;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.likes[i];
//     }
//     const imgEl = document.createElement('img');
//     articleEl.appendChild(imgEl);
//     imgEl.setAttribute('src', this.imagePath);
//   },
// };
// const serena = {
//   name: 'Serena',
//   age: 0,
//   likes: ['cuddling', 'chasing string', 'food'],
//   imagePath: 'images/serena.jpeg',
//   goodWithKids: true,
//   goodWithDogs: true,
//   goodWithOtherCats: true,
//   breed: 'Egyptian Mau',
//   getAge: function (min, max) {
//     this.age = getRandomNumber(min, max);
//   },
//   render: function () {
//     const container = document.getElementById('kitten-profiles');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const pEl = document.createElement('p');
//     articleEl.appendChild(pEl);
//     pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.likes[i];
//     }
//     const imgEl = document.createElement('img');
//     articleEl.appendChild(imgEl);
//     imgEl.setAttribute('src', this.imagePath);
//   },
// };
// helper functions

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
