// Attaching multiple handlers to the promise 
let p1 = new Promise((resolve, reject)=>{
    alert("Hey I am resolve")
    setTimeout(()=>{
        resolve(1);
    },2000)
})

// Handler 1
p1.then(()=>{
    console.log("Congo, the promise is resolved")
})

// handler 2
p1.then(()=>{
    console.log("Hurry")
})

