"use strict";
// <-----------------FUNCTIONS---------------->
//data types during function defination
const fun = (n, m) => {
    return n * m;
};
const func = (a, b) => {
    return a * b;
};
const func2 = (n, m, l) => {
    //checking type of l if it is undefined.
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func2(24, 22); //here l will be undefined so n * m will be return
func2(22, 23, 88);
const func3 = (n, m, l = 30) => {
    return n * m * l;
};
func3(20, 40); //here l = 30 will be taken as default parameters
func3(20, 40, 70);
const func4 = (...m) => {
    return m;
};
func4(22, 77, 44, 66, 56, 90); // [22, 77, 44, 66, 56, 90]
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "Bottle",
    stock: 99999,
    price: 100,
    isAvailable: true,
};
getData(productOne);
