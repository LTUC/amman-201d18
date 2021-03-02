'use strict';
// Truthy and falsy values
// Falsy values:
// Boolean false
// 0
// Empty strings
// undifined
//Not a Number(Nan)

// let userName='Omar';
// switch (userName){
//   // userName==='yahya'
// case 'yahya':
//   alert('hello yahya');
//   break;
// case 'YAHYA':
//   alert('hello YAHYA Upper case');
//   break;
// case 'yahia':
//   alert('hello yahia with I');
//   break;
// default:
//   alert('not authenticated');
// }
// for loop:
// let mainSection=document.getElementById('demo');
// for(let i=0;i<=10;i++){
//   // mainSection.innerHTML='<h3>'+i+'</h3>';
//   let element='<h3>'+i+'</h3>';
//   document.write(element);
// }

// let userName=prompt('try to guess the secret:');


// do{
// statement
// }while(value);

// alert('hello '+userName);
// let fruits=['apples','oranges','bananas','pineapples','watermelons'];
// console.log('length of our array:',fruits.length);

// fruits.unshift('watermelons');


// let indexOfApples=fruits.indexOf('apples');

// fruits.splice(indexOfApples,4);
// fruits.splice(indexOfPine,1);

// console.log(indexOfElments);
// console.log(fruits);
// console.log('length of our array after update: ',fruits.length);


// apples,bananas, grapes
// let fruits=['appels','bananas','grapes'];
// let hobbies=[];

// for(let i=0;i<=5;i++){
//   let hobby=prompt('please add a hobbie');
//   hobbies.push(hobby);
//   document.write('<h1>'+hobby+'</h1>');
// }
let age=prompt('please provide your age');

let allowedAge=55;
let convertedAge=parseInt(age);
if (typeof convertedAge !== typeof allowedAge){
  console.log('please cast age to number');
}