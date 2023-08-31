// Classes may include getters and setters to get and set the computed properties

class Animal{
    constructor(name){
        this._name = name 
    }
    fly(){
        console.log(" I am flying")
    }
    get name(){
        return this._name
    }
    set name(NewName){
        this._name = NewName
    }
}

class Rabbit extends Animal{
    eatcarrot(){
        console.log("Eating carrot")
    }
}

let a  = new Rabbit("Elephant")
a.fly()
a.name = "Eagle"
console.log(a.name) 

// let a  = new Animal("Elephant")
// a.fly()
// a.name = "Eagle"
// console.log(a.name) 


// Instance of operator. - It allows you to check whether or not objects belongs to a certain class.

// It returns true if object belong to the class or any other class inheriting from it. 

let c = 56

console.log(c instanceof Animal) // Will return false
console.log(a instanceof Animal) // Will return True
console.log(a instanceof Rabbit) // Will return True because of inheritance