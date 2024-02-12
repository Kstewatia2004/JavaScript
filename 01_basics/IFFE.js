// IFFE are known as immediately invoked function expressions
// they are used when we do not want the function to be poluted by the global scope
// they are immediately invoked as soon as they as declared
// thos can be done by enclosing the entire function in parenthesis and making a block out of it
// second parenthesis is used for the execution

((name)=>{
    console.log(`hello, ${name}`);
})("kanishk");

// UnNamed IFFE
(()=>{
    console.log("hello world");
})();

// Named IFFE:-
(two=()=>{
    console.log("hello, two");
})();