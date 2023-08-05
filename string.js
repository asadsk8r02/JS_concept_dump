let name  = "asad"
console.log(name.length)
console.log(name[0])


let name1 = "asadkhan"
let name2 = "atif"

// string interpolation
let sentence = `${name1} is a friend of ${name2}`
console.log(sentence)

// Escape sequence characters
let fruit = 'bana\'na'
console.log(fruit)

let fruit1 = 'bana\nna'
console.log(fruit1)

let fruit2 = 'bana\tna'
console.log(fruit2)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name1.slice(1))
console.log(name1.slice(1,6))
console.log(name1.replace("kha","nul"))
console.log(name1.concat(name1,"yes"))
console.log(name1.concat("yes"))

let x = "          asadullahkhan           "
console.log(x.trim(" "))
console.log(x)

// the original string will not chnage even after operation