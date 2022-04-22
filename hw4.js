var str1 = "hello";
let addstr1 = " world";
str1 = str1.concat(addstr1);
console.log(str1); 
// let str1a = str1 + " world";
// console.log(str1a); 
let str2 = `${str1}!`;
console.log(str2);
console.log(str2.length); 
//returns 12

let str1AllCaps = str1.toUpperCase()
console.log(upperCase); 
//returns HELLO WORLD

console.log(str1AllCaps[1]); 
console.log(str2.indexOf("!")); //returns 11

var str3 = str2.slice(0,4);
console.log(str3); 

console.log(str2.includes("ell")); 
//returns true

let me = {name: "Edwin", age: 32}; 
console.log(me.name); //returns Edwin
console.log(me["name"]); //returns Edwin
me.canDrink = "false";
console.log(me);  
// me.greet = () => `Hello my name is ${me.name}!`;
// console.log(me.greet()); 
me["greet"] = function () {
    return `Hello my name is ${this.name}`;
};
console.log(me.greet()); 
let myFirstName = me.name.split('');
console.log(myFirstName); 
if (myFirstName.includes("E", "e")){
    console.log('Your name contains an \"e\"!');
} else console.log('Your name does not contain an \"e\"'); 