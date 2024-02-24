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