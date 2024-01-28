console.log("getter and setter")
/**
 * constructor method that takes two arguments:
 *  name and age.
 *  It should have a getter for name and a setter for age. 
 * Then, create a subclass called Student that extends the Person class.
 *  Add a method to the Student class called study()
 *  that logs <name> is studying to the console.
 *  Also, create a subclass called Teacher that extends the Person class.
 *  Add a method to the Teacher class called teach() 
 * that logs <name> is teaching to the console.
 */
//complete this code
class Person {
	constructor(name,age){
        name=this.name
        age=this.age
    }
    get getName(){
        console.log(`the name is ${this.name}`)
    }
    set setName(newName){
        console.log(`the name is ${newName.toLowerCase}`)
    }
}

class Student extends Person {
    constructor(name,age){
        super(name,age)

    }
    study(){
       // that logs <name> is studying to the console.
       console.log(`${this.name} is studying`)
    }
}

class Teacher extends Person {
    teach(){
        console.log(`${this.name} is studying`)
    }
}
obj=new Person('srinija',23)

// Do not change the code below this line
obj.Person = Person;
obj.Student = Student;
obj.Teacher = Teacher;
