let heading = document.querySelector('div').querySelector("h1"); 
heading.innerHTML = "Generic Heading"; 

let paragraphs = document.querySelector('div').querySelectorAll("p");
paragraphs.forEach((element) => {
    console.log(element);
    element.classList.add("blue");  
})
// paragraphs.forEach((element) => {
//     element.className = "blue";
// });
let newPara = document.querySelector('div');
newPara.appendChild(document.createElement('p')).textContent = "new paragraph"; 

const myHobbies = ['javascript', 'html', 'css', 'nodejs', 'mySQL'];
let ul = document.querySelector('ul'); 
myHobbies.forEach((hobby) => {
    ul.appendChild(document.createElement('li')).innerHTML = hobby; 
})

