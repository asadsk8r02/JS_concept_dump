// JS objects have a special property called prototype which is either null or references another object.

// When we try to read a property from an object and it is missing, JS automatically takes it fromathe prototype. This is called "Prototypal Inheritance". 

// We can set prototype by setting __proto__.  

let a = {
    name2:"asad",
    langauge:"english",
    run: ()=>{
        alert("self run")
    }
}

let p  = {
    run: ()=>{
        alert("run")
    }
}

// a.run() // this will not run obviously

p.__proto__ = {
    name: "khan"
}

a.__proto__ = p
a.run()
console.log(a.name)

