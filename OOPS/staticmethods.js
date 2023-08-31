// Static methods are used to implement functions that belong to a class as a whole and not to any particular object. In JavaScript, static methods are a concept used in object-oriented programming to define functions that are associated with a class itself rather than with instances (objects) of that class. These methods are called on the class itself and do not require an instance to be created.

// We have to access static methods with class name only.

// ====================================================================

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     walk(){
//         console.log("Animal " + Animal.capitalize(this.name) + " is walking.")
//     }
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1,name.length)
//     }
// }

// let j = new Animal("tiger")
// j.walk()

// ====================================================================

// If i want i can use this static method directly in this way and also without creating instance as well.

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     walk(){
//         console.log("Animal " + this.name + " is walking.")
//     }
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1,name.length)
//     }
// }

// let k = new Animal(Animal.capitalize("tiger"))
// k.walk()

// ==================================================================

// I can also incorporate static method in constructor itself.

class Animal{
    constructor(name){
        this.name = Animal.capitalize(name)
    }
    walk(){
        console.log("Animal " + this.name + " is walking.")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}

let l = new Animal("tiger")
l.walk()

console.log(l.capitalize("lion")) // This will not work as static methods are called using class and they are the methods associated with class and not objects

