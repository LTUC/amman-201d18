'use strict';
const cats = localStorage.getItem('cats');
if (cats) {
  const catsFromLS = JSON.parse(cats);
  for (let i = 0; i < catsFromLS.length; i++) {
    // eslint-disable-next-line no-undef
    new Cat(catsFromLS[i].name);
    Cat.all[i].render();
  }
}

catForm.addEventListener('submit', handleCatSubmit);
