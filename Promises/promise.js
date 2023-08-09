// Promise syntax
// let promise = new Promise(function(resolve, reject){
//     execute
// })

let promise = new Promise((resolve, reject)=>{
    alert("hello promise")
    resolve(56)
})

console.log("hello")
setTimeout(()=>{
    console.log("Hello in 3 seconds")
},3000)

console.log("My name is asad")
console.log(promise)

// ===============================================================
// Each "promise" has "state" and "result". "State" is either pending or "fulfilled."
// "Fulfillmen"t can be done as "result" of either "resolve" or "reject"

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I am a promise and I am resolved")
    resolve(true); // resolve("Any string or array")
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I am a promise and I am rejected")
    reject(new Error("I am an error."));
  }, 5000);
});

// console.log(p1,p2)

// To get the value
p1.then((value) => {
  console.log(value);
});
// or
p1.then(alert);

// To catch the error
p2.catch((error) => {
  console.log("Some error occured in p2");
});
// or
p2.catch(alert);
// or
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
