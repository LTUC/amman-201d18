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
const cats = [];
function Cat(
  name,
  likes,
  imagePath,
  goodWithKids,
  goodWithDogs,
  goodWithOtherCats,
  breed
) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.imagePath = imagePath;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.breed = breed;
  cats.push(this);
}
Cat.prototype.getAge = function (min, max) {
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
  pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;

  const ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (let i = 0; i < this.likes.length; i++) {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.likes[i];
  }
  const tableEl = document.createElement('table');
  const headerRowEl = document.createElement('tr');
  const dataRowEl = document.createElement('tr');
  const th1El = document.createElement('th');
  th1El.textContent = 'good with cats';
  const th2El = document.createElement('th');
  th2El.textContent = 'good with kids';
  const th3El = document.createElement('th');
  th3El.textContent = 'good with dogs';
  headerRowEl.appendChild(th1El);
  headerRowEl.appendChild(th2El);
  headerRowEl.appendChild(th3El);
  const td1El = document.createElement('td');
  td1El.textContent = this.goodWithOtherCats;
  dataRowEl.appendChild(td1El);
  const td2El = document.createElement('td');
  td2El.textContent = this.goodWithKids;
  dataRowEl.appendChild(td2El);
  const td3El = document.createElement('td');
  td3El.textContent = this.goodWithDogs;
  dataRowEl.appendChild(td3El);
  tableEl.appendChild(headerRowEl);
  tableEl.appendChild(dataRowEl);

  articleEl.appendChild(tableEl);

  const imgEl = document.createElement('img');
  articleEl.appendChild(imgEl);
  imgEl.setAttribute('src', this.imagePath);
};
new Cat(
  'Frankie',
  ['cuddling', 'chasing string', 'napping', 'food'],
  `images/frankie.jpeg`,
  true,
  false,
  true,
  'British Shorthair'
);
new Cat(
  'Jumper',
  ['cuddling', 'napping'],
  `images/jumper.jpeg`,
  false,
  true,
  false,
  'Persian'
);
new Cat(
  'Serena',
  ['cuddling', 'napping', 'chasing string'],
  `images/serena.jpeg`,
  true,
  true,
  false,
  'Persian'
);

for (let i = 0; i < cats.length; i++) {
  cats[i].getAge(3, 7);
  cats[i].render();
}

//helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const form = document.getElementById("cats-form");
form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(event.target);

  const name = event.target.name.value; 
  const breed = event.target.breed.value;
  const likes = event.target.likes.value.split(",");
  const goodWithCats = event.target.cats.checked;
  const goodWithDogs = event.target.dogs.checked;
  const goodWithKids = event.target.kids.checked;

  const cat = new Cat(name,likes,'images/jumper.jpeg',goodWithKids,goodWithDogs,goodWithCats,breed);

  cat.getAge(3,7);
  cat.render();

  form.reset();

})

