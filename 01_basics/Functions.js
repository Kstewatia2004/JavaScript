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