class Person{
   constructor(name){
    this.name= name
   }
   greet(){
    console.log(`Hello ${this.name}`)
}
}

class Student extends Person{
    constructor(name){
        super(name)
        // console.log(this.name)
    }
    greetChild(){
        super.greet()
    }
}


let name = new Person('Manasa')
let student = new Student("Manu")
name.greet()
student.greet()