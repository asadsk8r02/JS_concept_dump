//  Class
class Railwayform{
    constructor(name, trainno){
        console.log("Constructor called..." + name + " " + trainno)
        this.name = name 
        this.trainno = trainno
    }
    submit(){
        alert(this.name + ": Form submitted with train no " + this.trainno)
    }
    cancel(){
        alert(this.name + ": This form is cancelled " + this.trainno)
    }
    
 }


//  Objects
 let harry = new Railwayform("Harry", 1234)
 
 let asad1 = new Railwayform("Asad", 4567)
 let asad2 = new Railwayform("Asad", 420)

 harry.submit()
 asad1.submit()
 asad2.submit()
 harry.cancel()
 asad2.cancel()
 
 
