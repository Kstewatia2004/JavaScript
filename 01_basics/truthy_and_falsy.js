// falsy values: values that sre always false:-
// false, Nan, 0, -0, BigInt 0n, null, undefined, ""

// truthy values: values that are always true:-
// "0", 'false', " ", [], {}, function(){}, "xyz"

// Check if the array is empty:-

const myArray=[]

if(myArray.length===0){
    console.log("array is empty");
}

// Check if the object is empty:-

const myObj={};

if(Object.keys(myObj).length===0){
    console.log("object is empty");
}