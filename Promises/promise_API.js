// There are 6 static methods of Promise class:

// 1- Promise.all - wait for all promises to resolve and return the array of their results . If one fails , it becomes the error and all other results are ignored.

// 2- Promise.allSettled - waits for all the promises to settle and returns their results as an arrya of objects with status and value.

// 3- Promise.race - waits for the first promise to settle and its result/error becomes the outcome.

// 4- Promise.any - waits for the first promise to fulful(& not rejected) and its result becomes the outcome. Throws aggregate Error if all the promies are rejected.

// 5- Promise.resolve - Makes a resolved promise with the given value.

// 6- Promise.reject - Makes a rejected promise with the given error.

// ======================================================================

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 1")
        // reject(new Error("Error 1"))
    },2000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 2")
        // reject(new Error("Error 2"))
    },3000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 3")
        // reject(new Error("Error 3"))
    },4000)
})

p1.then((value)=>{
    console.log(value)
})

p2.then((value)=>{
    console.log(value)
})

p3.then((value)=>{
    console.log(value)
})

// ======================================================================

// When we don't know in how much time our promise is going to be resolved, and we need to see all the .then results atr the same time.

// 1- Promise.all(promise) - wait for "all promises to resolve" and return the "array" of their results . If one fails , it becomes the error and all other results are "ignored".

let Promise_all = Promise.all([p1,p2,p3])
Promise_all.then((value)=>{
    console.log(value)
})

// ======================================================================

// 2- Promise.allSettled(promise) - waits for all the promises to settle and "returns their results as an array" of objects with "status" and "value". Returns an arrayof objects even when all promises are not resolved.

let Promise_all_settled = Promise.allSettled([p1,p2,p3])
Promise_all_settled.then((value)=>{
    console.log(value)
})

// ======================================================================

// 3- Promise.race(promise) - waits for the "first promise" to settle and its "result/error" becomes the "outcome". Whichever promise is resolved first. Returns the "fastest promise" be it "resolved or rejected".

let Promise_race = Promise.race([p1,p2,p3])
Promise_race.then((value)=>{
    console.log(value)
})

// ======================================================================

// 4- Promise.any(promise) - waits for the "first promise" to "fulfil(& not rejected)" and its "result" becomes the "outcome". Throws "aggregate Error" if "all" the promies are "rejected". Return the fastest resolved promise.

let Promise_any = Promise.any([p1,p2,p3])
Promise_any.then((value)=>{
    console.log(value)
})

// ======================================================================

// 5- Promise.resolve(value) - return a resolved promise with the given value.

let Promise_resolve = Promise.resolve(6)
Promise_resolve.then((value)=>{
    console.log(value)
})

// ======================================================================

// 6- Promise.reject(error) - return a rejected promise with the given error.

let Promise_reject = Promise.reject(new Error("Hey"))
Promise_reject.then((value)=>{
    console.log(value)
})
