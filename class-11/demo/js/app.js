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
const imageSection=document.getElementById('imagesSection');
const leftImage=document.getElementById('leftImage');
const rightImage=document.getElementById('rightImage');

// let goats=[]
function Goat(name){
  this.name=name;
  this.views=0;
  this.votes=0;
  this.path=`./assets/${name}.jpg`;
  // goats.push(this);
  Goat.all.push(this);
}
Goat.all=[];

for(let i=0;i<names.length;i++){
    new Goat(names[i]);
}
// console.table(Goat.all);
// console.log(Goat.all);

//helper functions
// [0,1,2,3,4,5,6,7]
function render(){
  const leftIndex=randomNumber(0,Goat.all.length-1);
  const leftRandomGoat=Goat.all[leftIndex];
  leftImage.src=leftRandomGoat.path;
  leftImage.title=leftRandomGoat.name;
  leftImage.alt=leftRandomGoat.name;

  const rightIndex=randomNumber(0,Goat.all.length-1);
  const rightRandomGoat=Goat.all[rightIndex];
  rightImage.src=rightRandomGoat.path;
  rightImage.title=rightRandomGoat.name;
  rightImage.alt=rightRandomGoat.name;

  // console.log(leftImage);

}

imageSection.addEventListener('click',clickHandler);

function clickHandler(event){
  if (event.target.id === 'leftImage' || event.target.id === 'rightImage'){
    for(let i=0;i<Goat.all.length;i++){
      if (Goat.all[i].name === event.target.title){
        Goat.all[i].votes++;
        console.table(Goat.all[i])
      }
    }
    render();
  }
  // if (event.target.id !== 'imagesSection'){
  //   for(let i=0;i<Goat.all.length;i++){
  //     if (Goat.all[i].name === event.target.title){
  //       Goat.all[i].votes++;
  //       Goat.all[i].views++;
  //       console.table(Goat.all[i])
  //     }
  //   }
  //   render();
  // }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
render();
