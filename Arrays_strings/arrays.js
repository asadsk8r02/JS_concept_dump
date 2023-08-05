let a = [1,2,3,4,5,6,7, null, "not present"]
console.log(a)
console.log(a[8])
console.log(a[7])
console.log(a[6])
console.log(a.length)
console.log(`The 5th student marks are: ${a[5]}`)
console.log(a[10])
a[10] = 12
console.log(a[10]) 
a[10] = 14
console.log(a[10])

console.log(a)

// arrays are mutable and can be changes

for (i=0; i<a.length; i++){
    console.log(a[i])
}
