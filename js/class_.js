class User{
    static role = "user";
    static getRole(){
        console.log("my role is",User.role);
    }
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log("Hello, I'm",this.name);
    }
}


import {defaultFn} from "./script"

const user = new User("Nikhil");

user.sayHello();

User.getRole();


class Instructor extends User{
    constructor(name,course){
        super(name);
        this.course = course;
    }
    sayHello(){
        console.log(`Hi I'm ${this.name}, your course instructor for ${this.course}`);
    };
}

const instructor = new Instructor("Nikhil","Full Stack");

instructor.sayHello();

Instructor.getRole();
Instructor.role


defaultFn()