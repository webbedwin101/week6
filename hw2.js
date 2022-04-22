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

const form = document.querySelector('form'); 
const goBtn = document.getElementById('go');
const stopBtn = document.querySelector("#stop");
form.addEventListener("click", stopOrGo);
function stopOrGo(e) {
    if (e.target == goBtn){
        // goBtn.classList.add("go"); 
        goBtn.className = "go"; 
    }
        else if (e.target == stopBtn){
            // stopBtn.classList.add("stop"); 
            stopBtn.className ="stop"; 
        }
    e.preventDefault();
    }

