    
    myArray = {class: "CBC14", topic: ["git", "html", "css", "js", "nodejs", "mysql"]}
    function myFunc() {
    setTimeout(() =>{ console.log(`I am in ${myArray.class} and am learing ${myArray.topic[0]}`)}, 1000); 
    setTimeout(() =>{ console.log(`I am learing ${myArray.topic[1]}`)}, 2000); 
    setTimeout(() =>{ console.log(`I am learing ${myArray.topic[2]}`)}, 3000); 
    setTimeout(() =>{ console.log(`I am learing ${myArray.topic[3]}`)}, 4000); 
    setTimeout(() =>{ console.log(`I am learing ${myArray.topic[4]}`)}, 5000); 
    setTimeout(() =>{ console.log(`I am learing ${myArray.topic[5]}`)}, 6000); 
    setTimeout(() => console.log('the myFunc is now complete'), 7000);
    }
const myPromise = new Promise((resolve,reject) => {
        setTimeout( myFunc(resolve('promise resolved')), 2000);
        myFunc(console.log('promise fired'))
    }); 
// myFunc().then(myPromise);
// myPromise.then(()=> console.log("Asynchronous function finished firing"));
//write a promise that waits for the myFunc() to finish .then resolves console.log("myFunc is now complete") 
/////////

    function myTimer() {
        for (let i = 1; i < 10; i++){
            console.log(`timer is at : ${i}`); 
            if (i == 9) {
                console.log(`the timer is complete at index${i}`)}
        }
    }
    //write a promise that waits for the timer to finish; .then resolves with (console.log('resolved'))
const myTimerPromise = new Promise ( (resolve, reject) => {
    setTimeout( function() {
        myTimer("Success!")  // Yay! Everything went well!
    }, 2000)
});
myTimerPromise.then((finishedTimerMsg) => {
    console.log('yay! ' + finishedTimerMsg)
})
//promise is being fullfill but internal/original function is not being fired. 

let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout( function() {//put timer function here
        resolve("Success!")  // Yay! Everything went well!
    }, 2000)
    })
    
    myFirstPromise.then((successMessage) => {
        console.log("Yay! " + successMessage)
        //message after timer completed and promise returned
});