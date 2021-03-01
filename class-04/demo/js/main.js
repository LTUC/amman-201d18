// let students = ['zuhair','mahmoud','mohammad','hala','bayan'];
// let attempts = 0;
// let userInput = prompt('enter student name');
// myLoop: while(attempts < 2) {
//   for(let i=0;i<students.length;i++){
//     console.log('at Index',i,'Value =>',students[i]);
//     if(students[i] === userInput){
//       break myLoop;
//   }
//   console.log('YOU SHOULD SEE ME ');
// }
// console.log('yes@@');
// userInput = prompt('enter student name');
// attempts++;
// }

// for (let i = 0; i < 2; i++) {
//   console.log('lets start',i)
//   for (let j = 0; j < 4; j++) {
//     console.log('inner',i,j)
//   }
//   console.log('lets end',i)
// }



/*

*/


// function Declaration

// function sayHello() {
//   alert('Hello');
// }

// sayHello();

// function SayGoodBye(userName){
//   //username ==> parameter
// alert('bye ' + userName);
// }

// SayGoodBye('mahmoud');

function getFullName(first,last){
  return first + ' ' + last;
}

let fullName = getFullName('test','test1');
console.log(fullName);

const printName = function(fullName){
return fullName + 'welcome';
}
console.log(printName(fullName));








