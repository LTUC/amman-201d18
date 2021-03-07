'use strict';
// DOM(Document Object Model)
// document.write('<h2>Hello im added from the document object </h2>');
// console.log(document);
// console.log(Math.random());
// let driverName='Issa';

let bmw={
  color:'white',
  year:2015,
  type:'bmw',
  model:'520',
  milage:0,
  image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/2018_BMW_520d_M_Sport_Automatic_2.0_%281%29.jpg',
  drive:function(){
    console.log('the bmw is driving now');
  },
  getData:function(){
    let bmwType=this.type;
    let bmwModel=this.model;
    return bmwType+':'+bmwModel;
  },
  topSellingCountries:['Germany','KSA','Dubai'],
  spareParts:{
    wheel:1,
    leatherCover:false,
    logo:3,
  },
  setMilage:function(){
    let carMilage=this.milage;
    carMilage=randomGenerator(20,30);
    return carMilage;
  }
};

let main=document.getElementById('demo');

let unorderedList=document.createElement('ul');
let type=document.createElement('li');
let year=document.createElement('li');
let color=document.createElement('li');

type.innerText=bmw.getData();
year.innerText=bmw.year;
color.innerText=bmw.color;
type.setAttribute('class','list-item');
unorderedList.appendChild(type);
unorderedList.appendChild(year);
unorderedList.appendChild(color);

main.appendChild(unorderedList);
let carImage=document.createElement('img');
carImage.setAttribute('src',bmw.image);
main.appendChild(carImage);

// console.log(unorderedList);

// please javascript create a ul adn inside the ul put 3 li's
// <ul><li></li></ul>
function randomGenerator(min,max){
  // Random function gives us random number between 0-1
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(bmw.setMilage());

