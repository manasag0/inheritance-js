class Person{
    constructor(name){
        this.name = name;
        this.occupation = "Unemployed";
    }
    greet(){
        console.log(`Hello ${this.name}`)

    }
    greetAgain(){
        console.log(`Hello Again ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,occupation){
        super(name);
        this.occupation = occupation;
    }
    callParentGreet(){
        super.greet();
    }
    greet(){
        console.log(`Hello student ${this.name}`);
        console.log(`occupation of student ${this.occupation}`)
    }
    greetInTheMorning(){
        console.log(`good morning ${this.name}`)

    }
}

let student1 = new Student("Manasa");
student1.greet();
student1.greetAgain();
student1.greetInTheMorning();
student1.callParentGreet();


