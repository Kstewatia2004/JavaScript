// DATE IS ALSO AN OBJECT
const date=new Date();
console.log(date);//not readable by humans
// readable by humans:-
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toISOString());

// TO DECLARE A DATE
const myDate= new Date(2024, 0, 31);
console.log(myDate.toDateString());

// creating a timestamp:-
const myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myDate.getTime());

// timestamp is originally obtained in miliseconds nad the comparision will also be done in miliseconds

console.log(Math.floor(Date.now()/1000));// we obtain the timestamp in seconds with this way.

// toLocaleString is a method which can be used to customise the date as we can declare an object in its argument.

let dateCheck= new Date();
dateCheck.toLocaleString('default',{
    weekday:"long",
});
console.log(dateCheck);