'use strict';

// target our order form from the html
const orderForm = document.getElementById('orderForm');
const orders = document.getElementById('orders');


// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType){
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);
  localStorage.setItem('order',JSON.stringify(Coffee.drinks));
}

// set the global array to empty
Coffee.drinks = [];

Coffee.prototype.sayHi=function(){
  console.log('hi user');
}
// event handler function to run everytime the form is submitted
function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);
  // get all the values from the form
  const drink = event.target;
  const name = drink.userName.value;
  const size = drink.size.value;
  const isHot = drink.isHot.checked;
  const drinkType  = drink.drinkType.value;
  const milk = drink.milk.value;
  new Coffee(name, size, milk, isHot, drinkType);
  // update the previous orders with the new order
  renderOrders();
  // console.log(Coffee.drinks);

}
function renderOrders(){
  
  // clear all my current uls to prevent duplicate information
  orders.textContent = '';
  let ordersList=getData();
  
  // go through the array and output the details of each drink in the array
  if(ordersList === null){
      ordersList=Coffee.drinks;
  }

  for(let i = 0; i < ordersList.length; i++){
    const drinkLi = document.createElement('li');
    const orderInfo = document.createElement('p');
    let temp;
    if(ordersList[i].isHot !== true){
      temp = 'cold';
      // console.log('im working');
    } else{
      // console.log('im not working');
      temp = 'hot';
    }
    
    orderInfo.textContent = `${ordersList[i].name} orderd a ${temp} ${ordersList[i].size} ${ordersList[i].drinkType} with ${ordersList[i].milk}`;
    drinkLi.appendChild(orderInfo);
    orders.appendChild(drinkLi);
  }
}

function getData(){
  let data=localStorage.getItem('order');
  data=JSON.parse(data);
  console.log(data);
  return data
}
// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit);

renderOrders();

// JSON
/*JavaScript Object Notation*/

