class Employee{
    // Constructor
    constructor(name){
        console.log(`${name} Constructor for Employee`)
        this.name = name;
    }
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }

    requestleaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
    // When we don't make constructor in child class JS makes constructor for us in this way.
    // constructor(...args){  //Constructor made by JS automatically with arguments
    //     super(...args)
    // }

    // If we want our own constructor for the child  class and does not want to use parent constructor then we can simply write our won constructor
    constructor(name){
        super(name) // This should be called as well and it should be called first, before anything.
        console.log(`${name} New Constructor for Programmer.`)
        this.name = name;
    }

    requestcoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    // Method overiding
    // requestleaves(leaves){
    //     console.log(`Employee has requested ${leaves+1} leaves. (One extra)`)
    // }

    // super keyword - I can use parent class method with while making changes in it and still kind of over loading it.
    requestleaves(leaves){
        // super keyword 
        super.requestleaves(4)
        console.log(`One extra is granted`)
    }
}

// let e = new Employee()
// e.login()
// e.requestleaves(3)

let p = new Programmer("Asad")
p.login()
p.requestleaves(3)
