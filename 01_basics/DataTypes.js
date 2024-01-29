"use strict"//uses newer version js

const accountId=19889;
let accountEmail="ram19889@gmail.com";
var accountPerformance="A";
// avoid using var as it causes problem in the block scope and the functional scope

console.table([accountId,accountEmail,accountPerformance]);

/* NULL is a stand alone data type for eg. if the program returns 0 for a temperature
 program then we will not want 0 as it itself is a temp instead we will want NULL*/

 console.log(typeof null)// object

 let Num= "33abc";
 let valueInNumber= Number(Num);
 console.log(valueInNumber);

//  if you try to convert between the datatypes javascript will convert it although it may not be correct

let converBool=Boolean(Num);
console.log(converBool);
// if you convert an empty string into boolean it wiil give false but if the string is not empty then it will give true

let a="2";
let b=2;
console.log(a==b);//true
console.log(a===b);//false
// == simply checks the value of the variable 
// === strictly equals to, not only checks the value but also the data type
