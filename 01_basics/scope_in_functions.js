// basic function:-

console.log(addOne(5));// it will not throw an error because we not storing the data in a variable

function addOne(num){
    return num+1;
};

// an Expression is an variable but also an function 

// console.log(addTwo(5));it will throw an error because we are storing the value in an variable

const addTwo=function(num){
    return num+2;
};

console.log(addOne(5));

console.log(addTwo(5));


// read about Hoisting
