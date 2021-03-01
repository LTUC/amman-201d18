'use strict';

const catForm = document.getElementById('cat-form');
const catList = document.getElementById('cat-list');

function Cat(name){
  this.name = name;
  Cat.all.push(this);
}
Cat.all = [];
Cat.prototype.render = function(){
  const listItem = document.createElement('li');
  listItem.textContent = this.name;
  catList.appendChild(listItem);
}

function handleCatSubmit(e){
  e.preventDefault();
  const newCat = new Cat(e.target.catName.value);
  console.log(newCat)
  catForm.reset();
  newCat.render();
  localStorage.setItem('cats',JSON.stringify(Cat.all));
  console.log('this is what is in local storage', localStorage.getItem('cats'));
}
