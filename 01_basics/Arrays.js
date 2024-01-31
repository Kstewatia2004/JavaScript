// array methods
const myArr=[1,2,3,4,5];
myArr.push(3,4);//it is possible to push more than one elements at a time
console.log(myArr);
myArr.pop();// deletes an element from the end

myArr.unshift("hello");// adds the element at the begining of the array while shifting all the other elements. It puts lots of load on the system
myArr.shift();// deletes the element from the begining of the array
console.log(myArr.includes(3));// check if the the following element is present in the array or not. it returns the address of the element if it is present

const myStr= myArr.join();//stores the array as a string
console.log(myStr);
console.log(typeof myStr);//string

// difference between slice and splice method

const a1= myArr.slice(1,3);
console.log("A",myArr);
console.log("Slice",a1);
console.log("B",myArr);
// slice method creates a subarray and stores it in a different array without changing the original array
// it also does not include the end values

const a2=myArr.splice(1,3);
console.log("A",myArr);
console.log("Splice",a2);
console.log("B",myArr);
// splice method creates a subarray and stores it in a different array while at the same time also removing the elements present in the parameter from the original array
// it includes the end value


