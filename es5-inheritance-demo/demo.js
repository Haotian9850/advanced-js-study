/**
 * JS inheritance with class keyword in ES6
 */

 //Student (subclass) inherits from Person (parent class)

 function Person(first, last, age, gender, interest){
    this.name ={
        first, last
    };
    this.age = age;
    this.gender = gender;
    this.interest = interest;
}

//define a report function
Person.prototype.report = function(){
    console.log('My name is' + this.name.first);
}


//subclass
function Student(first, last, age, gender, interest, major){
    Person.call(this, first, last, age, gender, interest);
    this.major = major;
}

