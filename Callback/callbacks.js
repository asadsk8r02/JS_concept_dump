// // Asynchronous action - that we initiate now and then finish later.
// console.log("start")
// setTimeout(function() {
//     console.log("Run after sometime");
// }, 3000
// )
// console.log("End")

// // Synchronous action - that initiate and finish one-by-one.
// console.log("hey")
// console.log("Blah blah blah")

// Callaback funtion is a fucntion passed to another function as an argument,
// which is then invoked inside the outer function to complete an action.
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Script Loaded: " + src)
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading the script with SRC: " + src);
        callback(new Error("Src got some error"))
    }

    document.body.appendChild(script);
} 

function hello(error, src){
    if (error){
        console.log('error')
        return
    }
    alert("Hello World!" + src)
}

function goodmorning(src){
    if (error){
        console.log('error')
        return
    }
    alert("goodmorning" + src);
}

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", hello)
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", goodmorning)

