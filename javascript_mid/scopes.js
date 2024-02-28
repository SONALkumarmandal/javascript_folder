              /*SCOPE*/
// const a=10;
// let b=20;
// var c=30;

// console.log(a,b,c);

// global scope
var c=3;
if(true)
{ 
    // inside block scope
    const a=100; //a is inside the scope 
    let b=200;   //b is inside the scope 
    var c=300;   //c is inside the scope but it doesnt matter for var outer function can still access it.
}
// console.log(a); // ==>gives a is not defined
// console.log(b); // ==>similarly this 
console.log(c); //but in this case it gives 300 doesnt matter if earler it was c=3;
// in case of let and it is not the case

var d=3;
if(true)
{ 
    // inside block scope
    const d=100; //d is inside the scope 
    let e=200;   //e is inside the scope 
    var f=300;   //f is inside the scope but it doesnt matter for var outer function can still access it.
    console.log("inner value : ",d);
}
console.log(d); // gives outer value 3
console.log(e);  // not defined 
 console.log(f);  // not defined
 
 // nested scoping
 // in this case the child can access the parent property for example below the two function access the username but parent cannot accces childs property
 function one()
 {
     const username="sonal";
     function two()
     {
         const website="youtube";
         console.log(username);
     }
     console.log(website); //cannot print since website is inside scope.
     two();
 }
 one();
 
 if(true)
 {
     const username="hitesh";
     if(username==="hitesh")
     {
         const website = "youtube";
         console.log(username+website);
    }
    console.log(website);
 }
 console.log(username);