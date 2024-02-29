/* THIS keyword */
// it tells about the current contex

const user = {
    username: "sonal",
    price:999,
    
    welcomeMessage:function()
    {
        console.log(`${this.username},welcome to website`); //This is used to access the variables inside the scope.
        console.log(this); //this will give the contex values that is inside the scope
    }
}
user.welcomeMessage();
user.username="sam";
user.welcomeMessage();
//but what if we use this outside scope
console.log(this); // it will give empty object {} since we are in the node enviroment. it is refering to an empty object bcz there is no contex inside the global but when we use it in browser then it will give the window object which is global object.
const chai = function(){
    let username="sonal"
    console.log(this.username); // it will give undefined
}
chai()

const chai2=function()
{
    let username="sonal"
    console.log(this.username);
}
// ARROW FUNCTION
const chai3=()=>{
    let username="sonal"
    console.log(this.username); //undefined
     console.log(this); // gives{}
}
chai()

const addTwo=(num1,num2)=>{
    return num1+num2 //explicit return -->when we use return keyword 
}
//or 
const addTwo2=(num1,num2)=>num1+num2 //implicit return of function-->when we dont use return keyword
const addTwo3 = (num1,num2) =>({username:"sonal"}) //implicit return of objects 
console.log(addTwo(3,5))
