// // Map - creates new array from the old array.
// let arr = [5,7,78,3,2,43,4,66]

// let a = arr.map((value, index, array)=>{
//     console.log(value, index, array)
//     return value + index
// })

// console.log(a)

// // FIlter method - doesn not modify original array
// let arr = [0,3,5,72,3,7,82,9]

// let a = arr.filter((ele)=>{
//     return ele<10
// })
// console.log(a)
// console.log(arr)
// a.sort((a,b)=>a-b)
// console.log(a)

// Reduce method - does not change the original array

let arr = [1,4,6,78,32,4,7,87,3]
// let a = arr.reduce((ele1, ele2)=>{
//     return ele1 + ele2
// })

// console.log(arr)
// console.log(a)

// or

const reduce_func = (a,b)=>{
    return a+b
}
let a = arr.reduce(reduce_func)
console.log(a)
console.log(arr)







 
