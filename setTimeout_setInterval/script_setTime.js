document.write("hello");

// SetTimeout - delay once
let a = setTimeout(()=>{
    alert("I am inside setTimeout")
},2000)

let b = prompt("Do you want to run the setTimeout")
if("n"== b){
    clearTimeout(a)
}

console.log(a)
// // stopre the execution of given timeout
// clearTimeout(a)

const sum = (a, b, c) => {
  console.log("yes I am running: " + (a + b + c));
};

let timerID = setTimeout(funtion, delay, arg1, arg2, arg....)
setTimeout(sum, 3000, 1, 2, 7)

// =====================================================================

// SetInterval - delay repeatedly - like a while loop runs infinitely
// let timerID = setInterval(funtion, delay, arg1, arg2, arg....)

setInterval(sum, 2000, 1,2,3)  // will run infinite times
setInterval(() => {
  alert("setIntervallll");
}, 3000); // will run infinite times

// example to stop or run delays for n number of times
let counter = 0; // Counter to keep track of the number of times the event has run
const intervalId = setInterval(() => {
  // Your event logic here
  console.log("Event is running...");
  counter++; // Increment the counter
  if (counter === 5) {
    clearInterval(intervalId); // Stop the interval after running 5 times
  }
}, 3000); // Run the event every 1000 milliseconds (1 second)

// another example
let counter = 0;
let a = setInterval(() => {
  console.log(sum(1, 2, 7));
  counter++;
  if (counter == 4) {
    clearInterval(a);
  }
}, 3000);


setInterval(sum, 3000, 1, 2, 7)  // This will run infinte loop for this
