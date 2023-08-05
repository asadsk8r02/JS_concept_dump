let num = [1,2,3,4,5,6,7]
// let b = num.toString()
// console.log(b)
// console.log(num)
// console.log(typeof(num))
// console.log(typeof(b))

// let c = num.join("_")
// console.log(c)
// console.log(typeof(c))

// // console.log(num.pop())
// // pops last element and return the last element
// let r = num.pop()
// console.log(num, r)

// // add an element at the end
// let t = num.push(10)
// console.log(num, t)

// // remove the first element
// let y = num.shift()
// console.log(num, y)

// // add element at the starting
// let u = num.unshift(11)
// console.log(num, u)

// console.log(num)

// // delete an element
// delete num[1]
// console.log(num)
// console.log(num.length)

// console.log(num[1])

// // Concatenate arrays
// let num1 = [21,22,23,24,25,26,27]
// let num2 = [321,322,323,324,235,326,327]
// let newnum = num.concat(num1, num2)
// console.log(newnum)

// // Sort ALPHABETICALLY - change the orginal array
// let n = [3,65,1,222,61,167,43]
// n.sort()
// console.log(n)

// let compare = (a,b)=>{
//     return a-b
// }
// n.sort(compare)
// console.log(n)

// //or 

// n.sort((a,b)=>a-b)
// console.log(n)

// n.sort((a,b)=>b-a)
// console.log(n)

// num.reverse()
// console.log(num)

// // Splice and slice

// // num.splice(2,3, 1000, 1001, 1002, 1003)
// // console.log(num)

// let delt = num.splice(2,3, 1000, 1001, 1002, 1003)
// console.log(delt)

// let nums = num.slice(2,6)
// console.log(nums)



// Loops
// for (let i=0; i<num.length; i++){
//     console.log(num[i])
// }

// num.forEach((element)=>{
//     console.log(element*element)
// })

// num.forEach((element)=>{
//     console.log(element)
// })

// // arr.from
// let name = "asad"
// let arr = Array.from(name)
// console.log(arr)

// // For of
// for (let i of num){
//     console.log(i)
// }

// // for in - gives the keys
// for (let item in num){
//     console.log(item)
// }


// enumerate equivalent in javascript

// const fruits = ['apple', 'banana', 'orange'];

// for (const [index, fruit] of fruits.entries()) {
//   console.log(`Index: ${index}, Fruit: ${fruit}`);
// }

const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit, index) => {
  console.log(`Index: ${index}, Fruit: ${fruit}`);
});

