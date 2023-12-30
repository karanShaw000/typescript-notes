// <---------------ARRAYS----------->

//types alias -> helps to define a type in a variable(not actual variable)

type Username = string | boolean;
// let z: Username;

//the variable 'z' can be same return as:

let z: string | boolean;

//therre are two ways to declare array:
//1:

const arr: number[] = [23, 45, 22];

//2:
//Focus on method 2 so that it will help in generics typescript

const arr2: Array<string> = ["karan", "shaw"];
