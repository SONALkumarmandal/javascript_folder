                        /*STRINGS*/
                        const name="Sonal";
                        const age=22;
                        console.log(name + " is " + age + " years old"); // -->not a good way to write 
                        
                        console.log(`hello my name is ${name} and my age is ${age}`); // -->this is a good way to write   (STRING INTERPOLATION)
                        
                        // another way to declare a string variable 
                        
                        const gameName=new String('sonal-kumar-mandal');
                        // now when we put this declaration in console window of browser we can get diffrent methods of string in prototype and we can learn about them.
                        console.log(gameName[0]);  // -->gives the alphabet at zeroth index
                        // now to access the methods in given prototype we use dot sign
                        console.log(gameName.length); // -->gives length 
                        console.log(gameName.toUpperCase());  //-->converts to uppercase
                        const newString=gameName.substring(0,4); /*NOTE*/ // it does not include the last index. WHEN WE GIVE NEGATIVE STARTING  VALUE THEN IT STARTS WITH ZEROTH INDEX
                        console.log(newString);
                        
                        const newOne=gameName.slice(-10);
                        console.log(newOne);  /*similar to substring but when we add negative starting value then it will give the value from end*/