function sayMyName(){
    console.log("k");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("k");
}
sayMyName();//sayMyName is the reference and () is the execution

function add(Number1,Number2){
    return Number1+Number2;
}
const addedNum=add(3,4);
console.log(addedNum);

function isLoggedIn(username){
    // following isnot a professional code:
    // if(username === undefined){
    //     console.log("Please enter a username");
    // }
    // else{
    //     return `${username} is currently logged in`;
    // }
    // Professional Code:-
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} is currently logged in`;

}
console.log(isLoggedIn("ravikant"));
// if we dont pass any argument it will return undefined just logged in

// if we want to pass many arguments in the functions and dont know how many we us rest operator:-
function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(30,40,50));//it will return all the elements in the array

// Passing objects in the functions:-
const user={
    username:"kanishk",
    id:55
};
function passObjects(anyObject){
    console.log(`username is ${anyObject.username} and id is ${anyObject.id}`)
}

// calling the function with an object in the argument:-
passObjects(user);
// object can also be passed in the function directly:-

passObjects({
    username:"sam",
    id:67
});
