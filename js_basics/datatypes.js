"use strict"; //treats all JS code as newer version

alert("hello"); // will give error in code editor bcz the js engine is present in brower.

let name="SONAL";
let age=21;
let loggedin=true;
let state;

// DATA TYPES IN JAVASCRIPT
    // NUMBER => 2^53
    // BIGINT
    // STRING =>" "
    // BOOLEAN => TRUE/FALSE 
    // NULL => standalone value
    // UNDEFINED
    // SYMBOL =>unique
    //OBJECT
    
    
    /*typeof OPERATOR*/
    console.log(typeof "sonal"); // gives string
    console.log(typeof age);     //gives number
    console.log(typeof loggedin);//gives boolean
    console.log(typeof name);    //gives string
    console.log(typeof state);   //====>gives undefined<==== NOTE
    console.log(typeof null);    //====>gives object<=====  NOTE NOTE