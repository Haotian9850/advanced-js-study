/**
 * Inheritance after the introduction of class keyword...
 */
//Student inherting from class Person

class Person{
    constructor(first, last, age, gender, interests){
        this.name = {
            first, last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    report(){
        console.log(`My name is ${this.name.first}`);
    };
}


//inheritance with extend keyword
class Student extends Person{
    constructor(subject, grade){
        super();    //sometimes optional    
        this.subject = subject;
        this.grade = grade;
    }
}




