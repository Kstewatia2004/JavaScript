const num=400;
const num2= new Number(num);//ensure that the variable is a number
console.log(num);
console.log(typeof num2);//Object

let max=20;
let min=10;
// generating a random no. between max and min
console.log(Math.floor((Math.random()*max-min+1))+min);
// math.random() generates a random value between 0 and 1


