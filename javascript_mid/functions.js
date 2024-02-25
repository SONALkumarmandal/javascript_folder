/*FUNCTIONS*/
function greet()
{
    console.log("hello and welcome !");
}
// Executing a function
greet();

// function to add two numbers 

// function addition(number1,number2) //here number1 and number2 are parameters
// {
//     console.log(number1+number2); 
// }

//  const result = addition(3,"a"); //--->give 3a  //here 3 and a are arguments
//  console.log("the result is : ",result); //NOTE : result is undefined because the function has not returned the value
//  // using return
//  function addition(number1,number2) 
// {
//     const result= (number1+number2);
//     return result;
// }
// const answer= addition(3,5);
// console.log("The answer is :",answer);

/*another method*/
function loggin_user(username="no_one") //default value set to no one
{
    if(undefined)
    {
        console.log("please enter user name");
        return;
    }
         return `${username} just logged in`
}
console.log(loggin_user("kunal"));
/*REST operator*/
function calculateCartPrice(...num1)
{
    return num1;
}
console.log(calculateCartPrice(200,100,300)); // output-->[200,100,300]
// But 
function calculateCartPrice2(val1,val2,...num2)
{
    return num2;
}
console.log(calculateCartPrice2(200,100,300)); // output-->[300] 200 and 300 will be assigned to val1 and val2

/*OBJECT INSIDE FUNCTION*/
const user={
    username:"sonal",
    price:199
}

function checkobj(user)
{
    console.log(`Hello ${user.username} your bill is ${user.price}`);
}
checkobj(user);

/*Array inside function*/
const myarray=[200,400,100,600];

function checkarray(myarray)
{
    return myarray[1];
}
console.log(checkarray(myarray));