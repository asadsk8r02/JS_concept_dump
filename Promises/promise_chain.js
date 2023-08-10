let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolve after 2 secs")
        resolve(42)
    },3000)
});

// We can chain promises and make them pass the resolved value to one another 
p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{ // or - return new Promise((resolve,reject)=>
            setTimeout(()=>{
                resolve("Promise 2");
            },3000);
    });
    return p2
}).then((value)=>{
    console.log(value)
    return 2
}).then((value)=>{
    let p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Final")
            // resolve(3)
        },2000)
    })
})


