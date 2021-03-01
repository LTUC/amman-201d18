const names = [
  'cruisin-goat',
  'emotional-goat',
  'float-your-goat',
  'goat-out-of-hand',
  'kissing-goat',
  'sassy-goat',
  'smiling-goat',
  'sweater-goat',
];

const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
console.log(leftImage);
const imagesSection = document.getElementById('images-section');
// const goats = [];
function Goat(name) {
  this.name = name;
  this.path = `./assets/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  //goats.push(this);
  Goat.all.push(this);
}
Goat.all = [];
for (let i = 0; i < names.length; i++) {
  new Goat(names[i]);
}
console.table(Goat.all);
function render() {
  const leftIndex = randomNumber(0, Goat.all.length - 1);
  console.log('LEFT', leftIndex, Goat.all[leftIndex].path);
  leftImage.src = Goat.all[leftIndex].path;
  leftImage.title = Goat.all[leftIndex].name;
  leftImage.alt = Goat.all[leftIndex].name;

  const rightIndex = randomNumber(0, Goat.all.length - 1);
  console.log('Right', rightIndex);
  rightImage.src = Goat.all[rightIndex].path;
  rightImage.title = Goat.all[rightIndex].name;
  rightImage.alt = Goat.all[rightIndex].name;
}
imagesSection.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('Target', event.target.id);
  if (event.target.id !== 'images-section') {
    for (let i = 0; i < Goat.all.length; i++) {
      if (Goat.all[i].name === event.target.title) {
        Goat.all[i].votes++;
        // Goat.all[i].votes = Goat.all[i].votes + 1
      }
    }
    console.log(Goat.all);
    render();
  }
}
//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

render();
