// Error handling - Try and Catch
// First Try is executed and if there no error Catch is ignored , otherwise Catch is executed to catch the error 
// Try and catch works synchronously
// If an exception happens in the scheduled code, like in the setTimeout thren tryand catch won't work.


setTimeout(()=>{
    console.log("Hacking Wifi, Please wait")
},1000)

// ======================================================================

try{
    console.log(asad)
}
catch(error){
    console.log("balle balle" + error) // console.log(error)
}

// ======================================================================

setTimeout(()=>{
    console.log("Fetching username and password, Please wait")
},2000)

setTimeout(()=>{
    console.log("Hacking asad gmail, Please wait")
},3000)

setTimeout(()=>{
    console.log("Username and password of asad fetched.")
},4000)

// ======================================================================

// If an exception happens in the scheduled code, like in the setTimeout thren tryand catch won't work.
// Becuase inside Try, we handle synchronous code and setTimeout is asynchronous code. A schedule event is there which JS won't expect to work with when implementing Try and catch.

try{
    setTimeout(()=>{
            console.log(asad)
    },100)
}
catch(error){
    console.log("balle balle" + error) // console.log(error)
}

// ======================================================================

// Solution -  we write try and error inside setTimeout and see there is no asynchronous code inside setTimeout's Try and catch. Here inside the schedule event setTimeout, Try and catch is wholy running on itself without and schedule.

try{
    setTimeout(()=>{
        try{
            console.log(asad)
        }
        catch(error){
                console.log("balle error")
        }
    },100)
}
catch(error){
    console.log("balle balle" + error) // console.log(error)
}

