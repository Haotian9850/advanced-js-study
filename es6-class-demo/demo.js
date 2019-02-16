/**
 * How does ES6 JavaScript define a class?
 */

class PersonES6 {
    constructor(p){
        this.age = p.age;
        this.name = p.name;
        this.sex = p.sex;
    }

    showInfo(){
        console.log(this);
    }

}

function demo(){
    let PersonES6 = new PersonES6({
        age: 20,
        name: 'Haotian',
        sex: 'M'
    });

    PersonES6.showInfo();
}