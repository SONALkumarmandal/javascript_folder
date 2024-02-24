              /*OBJECTS*/
        // can be declared by using a)literals  b) constructors
        
        //when we use constructors SINGLTONS are produced and not while using literals
        
        // using constructors
        Object.create;
        
        // using literals
        const mySym=Symbol("key1")
        const jsUser={
            name:"sonal",
            //key  value
            age: 22,
            [mySym]:"mykey1",
            location: "bokaro",
            logged_in: true,
        }
        //accessing objects
        console.log(jsUser.name);
        console.log(jsUser["name"]); // It is a better  way to access bcz if the key will be in string form "name" then it would be difficult to access using dot .
        console.log(jsUser[mySym]); //accessing SYMBOL 
        
        //  FREEZING AN OBJECT
        // Object.freeze(jsUser);
        // jsUser.location="haldia";
        // console.log(jsUser.location); //NOTE : it will  still give BOKARO.
        
        /* Adding functions*/
        jsUser.greeting=function()
        {
            console.log("hello js user");
        }
        console.log(jsUser.greeting); //function is not exicuted only reference is given
        //to reference a particular key in object we can do it using interpolation.
        jsUser.greetingtwo=function()
        {
            console.log(`hello js user, ${this.name}`);
        }
        console.log(jsUser.greeting()); // will give hello js user
        console.log(jsUser.greetingtwo()); //give hello js user sonal
        /*DECLARING USING CONSTRUCTORS*/
        
        const tinderUser=new Object() //it is Singleton object
        const tinderUsertwo={} //it non singleton object
        tinderUsertwo.id="goku123"
        tinderUsertwo.name="son_goku"
        tinderUsertwo.logged_in=true
        console.log(tinderUser)
        console.log(tinderUsertwo)
        
        const regularUser={
            email:"son@123",
            fullName:{
                firstName:"sonal",
                lastName:"mandal",
            }
        }
        console.log(regularUser.fullName.firstName); // nested accessing
        
        /*MERGING TWO OBJECTS*/
        const obj1={1:"a",2:"b"}
        const obj2={3:"a",4:"b"}
        const obj3={obj1,obj2} //will give object inside object
        console.log(obj3);
        // const obj4=Object.assign(obj1,obj2);//gives in a single object
        const obj4=Object.assign({},obj1,obj2);//better way
        //{} acts as target and obj1,obj2 acts as source 
        const obj5={...obj1,...obj2} //using spread operator. It is used often
        console.log(obj4);
        console.log(obj5);
        
        // objects inside array
        
        const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
/* OBJECT DE-STRUCTURING*/
const course = {
    coursename : "js in hindi",
    price : "999",
    teacher : "hitesh sir",
}
//console.log(course.teacher) //normal way to access
// but to make more clean
const {teacher /*value to extract*/ } = course /*starting value*/ 
//if we want to change a long name to extract 
const {teacher : master}=course
console.log(master);

/*APIs*/
// these are values from brackend that can be written,earlier values were in XML now JSON 
// JASON is {something}

/*   {
       "name": "sonal",
       "coursename" : "js in hindi ",
       "price" : "free"
}
just like we access the  value of object we can fetch the values of APIs */

}

