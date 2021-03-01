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
const leftImageEl = document.getElementById('left-image');
const rightImageEl = document.getElementById('right-image');
const imagesSection = document.getElementById('images-section');
let remainingVotes = 5;
function Goat(name) {
  this.name = name;
  this.path = `assets/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  Goat.all.push(this);
}
Goat.all = [];
for (let i = 0; i < names.length; i++) {
  new Goat(names[i]);
}
function render() {
  const leftIndex = randomNumber(0, Goat.all.length - 1);
  const rightIndex = randomNumber(0, Goat.all.length - 1);
  Goat.all[leftIndex].views++;
  Goat.all[rightIndex].views++;
  leftImageEl.src = Goat.all[leftIndex].path;
  rightImageEl.src = Goat.all[rightIndex].path;
  leftImageEl.alt = Goat.all[leftIndex].name;
  rightImageEl.alt = Goat.all[rightIndex].name;
  leftImageEl.title = Goat.all[leftIndex].name;
  rightImageEl.title = Goat.all[rightIndex].name;
}
imagesSection.addEventListener('click', clickHandler);
function clickHandler(event) {
  remainingVotes--;
  if (remainingVotes === 0) {
    imagesSection.removeEventListener('click', clickHandler);
    createChart();
  } else {
    if (event.target.id !== 'images-section') {
      console.log('hi', event.target);
      for (let i = 0; i < Goat.all.length; i++) {
        if (Goat.all[i].name === event.target.title) {
          Goat.all[i].votes++;
        }
      }
      render();
      console.log(Goat.all);
    }
  }
}

render();
function createChart() {
  const ctx = document.getElementById('myChart').getContext('2d');

  const goatNames = [];
  const goatVotes = [];
  for (let i = 0; i < Goat.all.length; i++) {
    goatNames.push(Goat.all[i].name);
    goatVotes.push(Goat.all[i].votes);
  }
  console.log('Votes', goatVotes);
  new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: goatNames,
      datasets: [
        {
          barPercentage: 0.5,
          // barThickness: 6,
          borderWidth: 5,
          label: '# of votes:',
          backgroundColor: 'rgb(100, 125, 50)',
          borderColor: 'rgb(0, 0, 0)',
          data: goatVotes,
        },
      ],
    },

    // Configuration options go here
    options: {},
  });
}

//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
