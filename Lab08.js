/* Lab 8 */
// Problem 1
// Bubble sort algorithm on the array object.
Array.prototype.bubbleSort = function(){
    let arr = this;
    let swap = false;
    for (let j = 0; j < arr.length; j++) {

        for(let i = 0; i < arr.length-1; i++){
            if (arr[i] > arr[i + 1]) {  // Swap.
                let a = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = a;
                swap = true;
            }
        }
        if(!swap)
            break;  // No more iteration is required.
    }
    return arr;
}

//Problem 2
// String filiter using for loops.
String.prototype.filter = function(words){
    let str = this.split(" ");
    let temp = [];
    let found = false;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < words.length; j++){
            if(str[i] === words[j]){
                found = true;
                break;
            }
        }
        if(!found){
            temp.push(str[i]);
        }
        found = false;
    }
    return temp.join(" ");
}

//Problem 3
// Inheritance using constructor function
// Person constructor function
function Person(name){
    this.name = name;
    console.log(this);
}
// Teacher Constructor Function created from the Person constructor function.
const Teacher = function(name){
    Person.call(this, name);
}
// Make Teacher() to inherit the methods defined on Person()'s prototype.
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(subject){
    console.log(this.name + " is now teaching " + subject)
}

cost teacher = new Teacher("Tina");
teacher.name;
teahcer.teach("WAP");

// Inheritance using Object.create
const Person = {
    name: "Unknown",
    log: function(){
        console.log(this);
    }
}

// Create sub-class
const Teacher = function(name) {
    let teacher = Object.create(Person);
    Person.name = name;
    teacher.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
    return teacher;
};

// Problem 4
// Person Function Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log("Greetins, my name is " + this.name + " and I am " + this.age + " years old.");
}
Person.prototype.salute = function(){
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

// Student Function Constructor
function Student(name, age, major){
    Person.call(this, name, age);
    this.major = major;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.greet = function(){
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

// Professor Function Constructor
function Professor(name, age, department){
    Person.call(this, name, age);
    this.department = department;
};
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.greet = function(){
    console.log("Good day, my name is " + this.name + " and I am in the  " + this.department + " department");
}

// Using Object prototype
const Person = {
    name: "Unknown",
    age: "unknown",
    greet: function(){
        console.log("Greetins, my name is " + this.name + " and I am " + this.age + " years old.");
    },
    salute: function(){
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
};

const Student = function(name, age, major){
    Person.name = name;
    Person.age = age;
    const Student = Object.create(Person);
    Student.major = major;
    Student.greet = function(){
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    }
    return Student;
};

const Professor = function(name, age, department){
    Person.name = name;
    Person.age = age;
    const Professor = Object.create(Person);
    Professor.department = department;
    Professor.greet = function(){
        console.log("Good day, my name is " + this.name + " and I am in the  " + this.department + " department");
    }
    return Professor;
};




