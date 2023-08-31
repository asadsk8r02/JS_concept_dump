class Employee{
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

let p = new Programmer()
p.login()
p.requestleaves(3)
