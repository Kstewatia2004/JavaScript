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

const user= new Object();//singleton object

// non singlrton object:-
const user1={};
user1.id = 6;
user1.name = "sam";
user1.isLoggedIn = false;

// getting keys from an object:-
const keys = Object.keys(user1);//it returns an array

// using the keys to get the values of an object:-

for (let i = 0; i < keys.length; i++) {
    console.log(user1[keys[i]]);
}
console.log(keys);// it returns an array

// directly acessing the the values of the object:-
console.log(Object.values(user1));

// storing both the keys and values in an array:-
console.log(Object.entries(user1));

// checking if a property exists in an object:-
console.log(user1.hasOwnProperty('id'));

// nesting of objects:

const regularUser={
    fullname:{
        username:{
            firstname:"kanishk",
            lastname:"tewatia"
        }
    }
};
console.log(regularUser.fullname?.username.firstname);
//acessing the first name
// question mark is used to only try if the following objects if the given object exists

// merging two obects:-
const obj1={
    1:"1",
    2:"2"
};
const obj2={
    3:"3",
    4:"4"
};

const obj3= Object.assign({},obj1,obj2);
console.log(obj3);

// we can also use the spread method:-
const obj4 = {...obj1, ...obj2};
console.log(obj4);

// acessing an object in an array:-

const a=[
    {
        name:"kanishk"
    },{}
];
console.log((a[0].name));   