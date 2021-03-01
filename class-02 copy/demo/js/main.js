'use strict';
let userName = 'mahmoud';

console.log(userName);
// boolean
// true OR false
// Numbers
// 1 , 2 , 2.5 ....
// strings
// 'mahmoud' '1' ....

/*
Logical operators
And
T & T =>T
F & T => F
T & F => F
F & F => F
OR
T | T =>T
F | T => T
T | F => T
F | F => F
Not
!T => F
!F => T
comparison

===  ??? => Type And value

==   ??? =>  value
*/

let age = prompt('what\'s your age');
let gender = prompt('what\'s your gender');
if(gender.toLowerCase() === 'female'){
  alert('it\'s freeeeeeee!!!');
}else if(age > 22){
  alert('8JD please');
}else if(age >= 18 && age < 22 ) {
  // 18,19,20,21
  console.log('you got discount!');
}else {
  alert('you got a free ticket');
}

switch (Number(age)) {
case 20:
  console.log('20!!');
  break;
case 19:
  console.log('19!!');
  break;
default:
  console.log(age);
  break;
}
