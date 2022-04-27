
    myOBJ = {class: "CBC14", topic: ["git", "html", "css", "js", "nodejs", "mysql"]}
    
    let myPromise = new Promise ((resolve,reject) => {
        setTimeout( function myFunc() {
            setTimeout(() => 1000); 
            setTimeout(() => 2000); 
            setTimeout(() => 3000); 
            setTimeout(() => 4000); 
            setTimeout(() => 5000); 
            setTimeout(() => 6000); 
            setTimeout(() => 7000);
            resolve("Success!")
            }, 2000)
    })

    myPromise.then((resolvedProm)=>{
        console.log(`I am in ${myOBJ.class} and am learning ${myOBJ.topic[0]}`)
        console.log(`I am learning ${myOBJ.topic[1]}`)
        console.log(`I am learning ${myOBJ.topic[2]}`)
        console.log(`I am learning ${myOBJ.topic[3]}`)
        console.log(`I am learning ${myOBJ.topic[4]}`)
        console.log(`I am learning ${myOBJ.topic[5]}`)
        console.log('the myFunc is now complete')
        console.log("yes the promise was a " + resolvedProm); 
    })
//want to run myFunc and all its console.log messages first, then resolve promise to say 
//the promise was a success. 