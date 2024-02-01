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

const names1=["ram","sam","pam"];
const names2=["mikey","loki"];

const names=names1.push(names2);//this will not add the elements of the array names2 into aray names1 instead it will take the entire array as an element and add it to names1


// to add 2 different arrays use concat method or another imp operator "SPREAD"
const names_new=names1.concat(names2);

// spread operator puts the elements of the array instead of the whole array
console.log(...names1,...names2);
const tst=[...names1,...names2];
console.log(tst);

// we use flat operation if we have a nested array to multiple levels to convert it to an array with only the elements
const anotherArray=[1,2,[3,4,[5,6]]];
const usableArray=anotherArray.flat(Infinity);//we specidy the depth till which we want to pull the elements
console.log(usableArray);


// we use the "Array.from" function to convert any data type to array
// because when we take some data from say a webpage we may get it in the form of objects or something else 

const str1="hitesh";
const arr1= Array.from(str1);
console.log(arr1);

// incase of objects we use the function Arrays.of

const obj1={
    name1: "kanishk",1
    name2: "ram",
}
const objToArray=Array.of(obj);
console.log(objToArray);