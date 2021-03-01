'use strict';

let moviesList=['Titanic','Captin America','Thor','Interstellar'];
console.log(moviesList.length);
console.log(moviesList);


// for (let i=0;i<moviesList.length;i++){
//   console.log(moviesList[i]);
// }

let attempts=4;
let userInput=prompt('try to guess the movie');
while(attempts){
  for (let i= 0;i<moviesList.length;i++){
    if (userInput===moviesList[i]){
      alert('correct answer!');
      correct=true;
      break;
    }
    attempts-=1;
    userInput=prompt('please try again you have : '+attempts+' remaining!');
  }
if (!attempts){
  break;
}

}



// moviesList.push('pirates of the carribian');
// console.log(moviesList);

// moviesList.pop();
// console.log(moviesList);


// moviesList.push('test moveie');
// console.log(moviesList);

// moviesList.unshift('superman');
// console.log(moviesList);

// moviesList.shift();
// console.log(moviesList.length);
// console.log(moviesList);