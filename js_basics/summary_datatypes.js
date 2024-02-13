//    DATA TYPES IMPORTANT 
// javascript is a dynamically typed language: JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

//int x = 10;  x is a variable of type int
//String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

//  There are two types of Data Types :
    //  ->primitive
    //  ->non-primitive
// these are divided on the basis of how the data is stored in the memory and accesed.

/* PRIMITIVE */ 
// these data types are call by value i.e a copy is created of the original 
// 7 types -->  STRING , NUMBER , BOOLEAN , NULL , UNDEFINED , SYMBOL , BIGINT
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

/* NON-PRIMITIVE (reference type) */
// Array , Object , Function
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
/*NOTE*/
 //Return type of variables in JavaScript
// 1) Primitive Datatypes
//       Number => number
//       String  => string
//       Boolean  => boolean
//       null  => object
//       undefined  =>  undefined
//       Symbol  =>  symbol
//       BigInt  =>  bigint

// 2) Non-primitive Datatypes
//       Arrays  =>  object
//       Function  =>  function
//       Object  =>  object


// note : All the primitive data types are stored in stack memory whereas all the non primitive data types are stored in heap memory.
/*primitive*/
let myYoutubeName = "sonalmandal";
let anotherone = myYoutubeName;
anotherone="hustlers";

console.log(myYoutubeName);
console.log(anotherone); //primitive : here copy is created so no change in original variable when we change the copied value. Memory is stored in stack here.

/*non-primitive*/
let userOne={
    email: "sonalmandal@gmail.com",
    upiId: "skm@ybl",
}

let userTwo=userOne;
userTwo.email="sonaal@gmail.com";
console.log(userOne.email);       // non-primitive : here refrence to heap address is given and any changes made can change the actual value.