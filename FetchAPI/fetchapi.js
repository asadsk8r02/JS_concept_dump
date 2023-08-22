//  JS can be used to send and recieve information from the network when needed(AJAX)

// Fetch API - used to get data over the netwrok

// let promise = fetch(url,[options]) - without "Options" a "GET" request is sent

// ======================================================================

// Getting a response is a 2 stage process:
// 1. An object of response class containing "status" and "Ok" properties:
// status = the https status code, eg - 404, 200
// Ok - boolean, true if https status code is 200-299

// 2. After that we need to call another method to access the body in different formats:
// Response.text() - read and return the text
// Response.json() - parse the response as JSON
// Other methods include response.formData(), response.blab(), response.arrayBuffer(), etc.

//  Note-  we can ony use one body reading method - i.e. If we have already get the response with response.text() then response.json() won'y work.

// Response Header - The response header are availaible in response.header.

// Request header - To set a request header in fetch, we can use the header option.
// let res = fetch(url,{
//     header:{
//         Authentication: "secret"
//     }
// });

// ======================================================================

// Fetch API - used to get data over the netwrok

// let promise = fetch(url,[options]) - without "Options" a "GET" request is sent

let p = fetch("https://goweather.herokuapp.com/weather/ny"); // p is a promise

p.then((value1) => { // value1 is often called response
  return value1.json();
}).then((value2) => { // value2 is often called json
  console.log(value2);
});

// When we fetch data, we get a promise (p) but this promise (p) is resolved within another promise who's value is the final result. i.e why we used 2 .then() to get the value of this data url.
//  fetch api main 2 .then() lagte hain.

p.then((value1) => {
  // Getting a response is a 2 stage process:
  // 1. An object of response class containing "status" and "Ok" properties:
  // status = the https status code, eg - 404, 200
  // Ok - boolean, true if https status code is 200-299
  console.log(value1.status);
  console.log(value1.ok);
  console.log(value1.headers); // Response Header - The response header are availaible in response.header.
  return value1.json(); // value1.json() is a promise which will be resolved further.
}).then((value2) => {
  // 2. After that we need to call another method to access the body in different formats:
  // Response.text() - read and return the text
  // Response.json() - parse the response as JSON
  // Other methods include response.formData(), response.blab(), response.arrayBuffer(), etc.
  console.log(value2);
});

//  Note-  we can ony use one body reading method - i.e. If we have already get the response with response.text() then response.json() won'y work.


