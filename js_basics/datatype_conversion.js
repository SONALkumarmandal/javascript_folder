// Datatype conversion

let score = 33;
console.log(typeof score); // => will give number
console.log(typeof(score));// => will give number

// to convert into string to number or number to string

let score2="33"
console.log(typeof score2); // => will give string
/* now to convert */
let valueInNumber=Number(score);
console.log(typeof valueInNumber); // => will give number

// now 

let score3="33abc";
console.log(typeof score3); // => will give string
/*now to convert*/
let valueInNumber2=Number(score3);
console.log(typeof valueInNumber2); // =>will give number
console.log(valueInNumber2);        // =>will give NAN<== NOTE

// Boolean conversion
let score4=true;
console.log(typeof score4); // will give boolean
/*now to convert*/
let valueInNum=Number(score4);
console.log(typeof valueInNum); // will give number
console.log(valueInNum);        // will give 1 , similarly will give 0 for false

// string conversion to booliean
let name="sonal"; // we can it is string
let convert=Boolean(name); // conversion
console.log(typeof convert); // will give boolean
console.log(convert);        // will give true