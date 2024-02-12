const user={
    username:"hitesh",
    age:19,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`)//this. is used in the current context
        console.log(this);//it will print the entire object
    }
}
user.welcomeMessage();

// Arrow function:-

const one=()=>{
    console.log("hello");
}
one();

const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(7,23));

// Implicit return:
const multiplyTwo=(num1,num2)=>(num1*num2);
console.log(multiplyTwo(3,4));
// it does not require a return statement, it automatically returns it
// it is a single line code
// it is used in REACT
// it is useful while returning an object:-
const obj=()=>({username:"kanishk",age:19});
console.log(obj());
