// ----------------Array-------------------//

const myArr = [0, 1, 2, 3, 4, 5] //in js array can contain diffrent data types.
const myHeors = ["shaktiman", "naagraj"]

//  ----Accessing data in array--------//
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// -----------Array methods--------------//

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)  // puts the value at the zeroth index
console.log(myArr); 

myArr.shift() // removes the first element
console.log(myArr);

console.log(myArr.includes(9)); //use to find if a particular element exist or not
console.log(myArr.indexOf(3)); // index of value

//-------Converting the array to numbers list---------//
const newArr = myArr.join()

console.log(myArr);
console.log( newArr); 


// -----------slice, splice--------------//

console.log("A ", myArr); // original array

const myn1 = myArr.slice(1, 3)  //give the value from 1 to 3(excluded)
console.log(myn1);

console.log("B ", myArr); //here original array is same  ******DEEP COPY******
const myn2 = myArr.splice(1, 3)  // removes the elemnts from 1 to 3(included)

console.log("C ", myArr);//----NOTE--->here the original array is changed since we used the splice  *****SHALLOW COPY****
console.log(myn2);     // NOTE : splice can change the original array


              /*MIXING OF ARRAYS*/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) //--->will  give array inside array 
console.log(marvel_heros);
console.log(marvel_heros[3][1]);  //-->accesing

//-------ALTERNATE WAY--------

const allHeros = marvel_heros.concat(dc_heros) // makes it a single array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // maks it a single array
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // maks it a single array
console.log(real_another_array);

// ****converting string to array****

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting ** NOTE **

// ****converting numbers to array****
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));