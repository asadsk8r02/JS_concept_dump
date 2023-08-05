const arr = Array.from("hello")
console.log(arr)

const arr1 = Array.from([1,2,3], (x)=>x+x)
console.log(arr1)

const set = new Set(["foo", "bar", "baz", "foo"])
let arr2 = Array.from(set)
console.log(arr2)

let arr3 = Array.from({ length: 5 }, (_, i) => i)
console.log(arr3)

const start = 5
let arr4 = Array.from({length:5}, (_, index)=> start + index) 
console.log(arr4)

const min = 10;
const max = 20;

let arr5 = Array.from({length: 5}, (_,index)=> min+index * (max-min)/(5-1))
console.log(arr5)
