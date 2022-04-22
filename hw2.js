var heading = document.querySelector('div').querySelector("h1"); 
heading.innerHTML = "Generic Heading"; 

var paragraphs = document.querySelector('div').querySelectorAll("p");
paragraphs.forEach((element) => {
    console.log(element);
    element.classList.add("blue");  
})
// paragraphs.forEach((element) => {
//     element.className = "blue";
// });