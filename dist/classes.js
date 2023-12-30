"use strict";
// <-------------------CLASSES--------------->
//classes can be write as same we do in javascript
//But one thing which typescript gives, is access modifiers (public, private, protected) which is not in javascript.
class Employee {
    // name: string;
    // id: number;
    // constructor(name:string, id:number){
    //     this.name = name;
    //     this.id = id
    // }
    //above is a way we can intialize properties of class
    //And the shortest way where we can use access modifier to initalize properties by:
    // constructor(name: string, id: number){}
    //without access modifiers
    //NOTE: By default all properties will be public
    constructor(name, //can access from anywhere
    id, //can only access in sub-class and will become private in sub-class
    address //can access only within this class
    ) {
        this.name = name;
        this.id = id;
        this.address = address;
    }
    //Now to access private or protected properties we can make a function which can return or change its value.
    //   getAddress = (): string => {
    //     return this.address;
    //   };
    //Or we can use setter and getter in classes
    get getAddress() {
        return this.address;
    }
    set setId(val) {
        //setter never returns anything that is not even void
        this.id = val;
    }
}
const emp = new Employee("Rahul", 123, "India");
//Calling a function after objection formation is like this:
//obj.getAddress();
//But to call setter and getter is bit diffrent which looks like this:
console.log(emp.getAddress); //getting addresss
emp.setId = 456; //setting id or changing id
class Manager extends Employee {
}
