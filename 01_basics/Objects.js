// when you create an object using a constructor it becomes a singleton
// it does not become a singlton when use literal

// Object.create  => constructor method
const sym= Symbol("*")// symbol needs to be declared before it can be defined in the object
const myObj={
    "name":"sam",
    age:19,
    email:"xyz@gmail.com",
    isLoggedIn:false,
    [sym]:"*"// while declaring a symbol we need to declare it in brackets else it will be considered as a string
}
// Accessing the data:-
console.log(myObj.name);// this method is avoided because it cannot access the element if the key is daclared as a string

// proper metod:=
console.log(myObj["name"]);

// accessing a symbol in a object:-
console.log(myObj[sym]);

// changing the data in the object:-
myObj.age=19;
console.log(myObj.name,myObj.age);

// to lock some data in an object we use freeze operation:-
// Object.freeze(myObj);


// to add a function in an object:-
myObj.greetings= function() {
    console.log(`hello ${this.name}`);
}
console.log(myObj.greetings());