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
console.log(str2.indexOf("!"));