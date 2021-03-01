
// console.log("USERNAME: ",userName1);
// var userName1 = "mahmoud";

// console.log("USERNAME: ",userName);
// let userName = "mahmoud";

// let&const vs var 

// var can be used before decleration the value will be undefined 
// let will give you and "not defined" error when used before decleration


// hoisting
/*
all var's will go to the top of the code with a value of undefined
all function decleration will go to the top with its values
all function expressions with var will be hoisted to the top with a value of undefined
*/

// console.log(sum(1,4));
// function sum(a,b){
//   return a + b;
// }

// console.log(sum(1,4));

// console.log(avg(5,5))
// var avg = function(s,n){
//   return s/n;
// }

// console.log(avg(5,5))

// scope


//global , local

//global
function getName(){
  
  //local => global to for and if
  const userName = 'test';
  for(let i=0;i<4;i++){
    //local => global for if
    let num = 0;
    if(i === 3){
      //local 
     let sum = 10; //scoped var
     console.log('WHAT IS THE NUM',num);
    }
  }
//   console.log('SUM',sum)
    console.log('num',num)
}

getName()
console.log('DO WE HAVE SUM??',sum)

