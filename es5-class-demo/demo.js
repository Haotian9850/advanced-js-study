/**
 * How does pre-ES5 JavaScript emulate a class?
 */

function PersonES5(p){
    this.age = p.age;
    this.name = p.name;
    this.sex = p.sex;
}

PersonES5.prototype.showInfo = function(){
    console.log(this);
}

let person = new PersonES5({
    age: 20,
    name: 'Haotian',
    sex: 'M'
})


function demo(){
    person.showInfo();
}