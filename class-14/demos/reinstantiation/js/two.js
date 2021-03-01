'use strict';

const catButton = document.getElementById('catButton');

var handleCatButtonClick = function () {
  const catsFromLS = JSON.parse(localStorage.getItem('cats'));
  // Cat.all = catsFromLS;
  // console.log('allCats array after retrieving from local storage', Cat.all[0]);
  // console.log(
  //   'allCats array after retrieving from local storage',
  //   new Cat(Cat.all[0].name)
  // );
  // for (let i = 0; i < Cat.all.length; i++) {
  //   Cat.all[i].render();
  // }
  // if (catsFromLS) {
  for (let i = 0; i < catsFromLS.length; i++) {
    const newCat = new Cat(catsFromLS[i].name);
    newCat.render();
  }
  // }
  console.log('allCats array after reinstantiating through our Cat constructor', Cat.all);
};

catButton.addEventListener('click', handleCatButtonClick);
