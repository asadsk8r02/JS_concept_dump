//  TO make POST request, we need to use the fetch options:
// method = HTTP method = eg - POST
// body = The request body

// let response = await fetch("/url",{
//     method:'POST',
//     headers: {
//         'Content Type': 'application/json'
//     },
//     body:'{"a":"asad"}'
// });

// let result = await response.json()

// ======================================================================

// Normal fetch api syntax

// let options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Asad",
//     body: "bhai",
//     userId: 1100,
//   }),
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// ======================================================================

//  Now lets wrap this fetch api syntax in async function.

// const createTodo = async () => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "Asad",
//       body: "bhai",
//       userId: 1100,
//     }),
//   };

//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let response = await p.json();
//   return response;
// };

// const mainfunc = async() => {
//   let todo = await createTodo();
//   console.log(todo);
// };

// mainfunc()


// another variation 

const createTodo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getTodo = async (id) =>{
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/" +  id)
  let r = await response.json()
  return r;
}

const mainfunc = async() => {
  let todo = {
    title: "Asad2",
    body: "bhai2",
    userId: 1200,
  }
  let todor = await createTodo(todo);
  console.log(todor);
  console.log(await getTodo(5))
};

mainfunc()
