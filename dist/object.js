"use strict";
// <--------------OBJECTS--------------->
//same as other types we can define object like this
const obj = {
    height: 20,
};
const obj2 = {
    height: 90,
    weight: 80,
    havePassport: false,
};
const obj3 = {
    height: 70,
    weight: 55,
    havePassport: true,
    scolar: false,
    func: (x, y) => {
        return String(x * y);
    },
}; // here I ignore 'age' property
//But If you wnat to call func function that you have call like this:
const a = obj3.func(20, 30);
