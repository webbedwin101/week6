let navbar            = document.getElementById('navbar'); 
let variable_showcase = document.getElementById('showcase');
let footer            = document.getElementById('footer'); 

// let footerNodes = document.querySelectorAll("footer"); 
let footerNodes = footer.childNodes;
console.log(footerNodes);

// let footerChildren = document.getElementsByTagName("footer"); 
let footerChildren = footer.children; 
console.log(footerChildren); 

let navLinks = document.getElementsByClassName('nav-link'); 
console.log(navLinks); 

let ul = document.querySelector('ul'); 
console.log(ul); 

let aboutLi = ul.childNodes[3]; 
console.log(aboutLi); 
