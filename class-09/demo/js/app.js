'use strict';

let form=document.getElementById('carsForm');
let carsList=document.getElementById('carList');
let removeButton=document.getElementById('bmwButton');

form.addEventListener('submit',function(event){
  event.preventDefault();
  let carName=event.target.carName.value;
  if(carName === "" || carName===" " ){
    alert('please provide car name. cant provide empty values');
  }else{
    let listItem=document.createElement('li');
    listItem.textContent=carName;
    carsList.appendChild(listItem);
  }

})
removeButton.addEventListener('click',removeItem);

function removeItem(){
  let bmwCar=document.getElementById('bmwCar');
  carsList.removeChild(bmwCar);
}

// let button=document.getElementById('submitButton');

// button.addEventListener('click',clickHandler);

// function clickHandler(){
//   alert('hello user');
// };

// let form=document.getElementById('messageForm');

// form.addEventListener('submit',function(event){
//   event.preventDefault();
//   let userName=event.target.userName.value;
//   let message=event.target.message.value;
  
//   alert(userName+" says: "+message);

// })
// form.addEventListener('submit',getDataHandler);

// function getDataHandler(event){
//   event.preventDefault();
//   let userName=event.target.userName.value;
//   let message=event.target.message.value;
  
//   alert(userName+" says: "+message);
// }