//  Class
 class Railwayform{
    submit(){
        alert(this.name + ": Form submitted with train no " + this.trainno)
    }
    cancel(){
        alert(this.name + ": This form is cancelled " + this.trainno)
    }
    fill(name, trainno){
        this.name = name 
        this.trainno = trainno
    }
 }


//  Objects
 let harry = new Railwayform()
 harry.fill("Harry", 1234)
 
 let asad1 = new Railwayform()
 let asad2 = new Railwayform()
 asad1.fill("Asad", 4567)
 asad2.fill("Asad", 420)

 harry.submit()
 asad1.submit()
 asad2.submit()
 harry.cancel()
 asad2.cancel()
 
 
