// function Person(name, job, age) {
//     this.name = name;
//     this.job = job;
//     this.age = age;

//     this.exercise = function (exer) {
//         return exer;
//     }

//     this.fetchjob = function (name, job) {
//         return `${name} is a ${job}`
//     }
// };

// const person = new Person("Harold", "backend engineer", 20);
// console.log(person.fetchjob("brad", "backend engineer"));

// console.log(person.exercise("Running is fun! - said no one ever"));


//create class with constructor and properties name age job

class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;

        //functions that take in a sting parameter to console log whatever user wants to print

        this.exercise = function (exer) {
            return exer;
        }

        //method to take in name and job and print it oyt
        this.fetchjob = function (name, job) {
            return `${name} is a ${job}`
        };

    }

}



class Programmer extends Person {

    constructor(name, job, age, languages) {
        //The super keyword is used to access properties on an 
        //object literal or class's [[Prototype]], or invoke a 
        //superclass's constructor.
        super(name, job, age);
        this.languages = languages;
        this.busy = true;

    }

    compleTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy) {
            return `${this.name} would love to take on a new responsibility.`
        }
        else {
            return `${this.name} can't accept any new task right now`;
        }


    }

    learnLanguage(languages) {
        this.languages.push(languages);
    }

    listLanguage() {
        return this.languages.join(", ")
    };


}



const person1 = new Person("Harold", "Backend Engineer", 20);
const person2 = new Programmer("erick", "apprentice", 26, ["html"]);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, [("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchjob();
c1.offerNewTask();
person2.busy = false;
console.log(person2.offerNewTask());





