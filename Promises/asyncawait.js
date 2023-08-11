// Async and Await

// Special syntax to work with promises
// A function can be made async by using async keyword
// Async function always return a promise. Other value are wrapped uo in promise autmatically
// Example: async function asad(){
//     return 2;
// }
// asad().then(alert) // Since it returns a promise we can use .then()

// async function asad(){
//     return 5
// }

// asad().then((x)=>{
//     alert(x)
// })

// Await works only inside the Async function. Await keyword makes JS wait until the promise settles and returns it's value. It is just more elegant way of syntax of getting the promise results than the promise.then(). Also it is easier to read and write.

async function weather() {
  let delhiweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degree");
    }, 1000);
  });

  let mumbaiweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 degree");
    }, 3000);
  });

  //   delhiweather.then(alert)
  //   mumbaiweather.then(alert)
  console.log("Fetching Delhi");
  let delhiw = await delhiweather;
  console.log("Weather fetched delhi: " + delhiw);

  console.log("Fetching mumbai");
  let mumbaiw = await mumbaiweather;
  console.log("Weather fetched mumbai: " + mumbaiw);
  return [delhiw, mumbaiw];
}

async function cherry() {
  let delhiweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("31 degree");
    }, 2000);
  });

  let mumbaiweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("37 degree");
    }, 6000);
  });

  //   delhiweather.then(alert)
  //   mumbaiweather.then(alert)
  console.log("Fetching Delhi");
  let delhiw = await delhiweather;
  console.log("Weather fetched delhi: " + delhiw);

  console.log("Fetching mumbai");
  let mumbaiw = await mumbaiweather;
  console.log("Weather fetched mumbai: " + mumbaiw);
  return [delhiw, mumbaiw];
}

// Parallel execution

console.log("Welcome to weather report");
let a = weather();
let b = cherry();
a.then((value) => {
  console.log(value);
});

b.then((value) => {
  console.log(value);
});

//Using async to get execution which runs on after other, as in first execute -> wait -> first fullfil -> second execute -> wait -> second fullfil -> end.

const main1 = async () => {
  console.log("Welcome to weather report");
  let a = await weather();
  let b = await cherry();
};
main1();
