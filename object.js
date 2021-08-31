// Object Literal
const student = {name: 'Md Hasan Ali',id:20}

// constructor of object
const person = new Object(student);

// inheritance of object..
const human = Object.create(student)

// class of object..
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Hasan',22);

// function of object 
function manus(name){
    this.name = name;
}
const man = new manus('kader');
console.log(man);