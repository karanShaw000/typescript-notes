// <--------------OBJECTS--------------->
//same as other types we can define object like this

const obj: {
  height: number;
} = {
  height: 20,
};

//but the problem will be it become chaotic , so we can use type alias

// type Obj = {
//   height: number;
//   weight: number;
//   havePassport: boolean;
// };

interface Obj {
  height: number;
  weight: number;
  havePassport: boolean;
}

const obj2: Obj = {
  height: 90,
  weight: 80,
  havePassport: false,
};

//But for object we will use 'interface'(you can think as a class, it helps to inherits types from one interface to another). Above i will comment the 'type Obj'

//now like classes we can inherits types of Obj in newObj plus we can add more properties in newObj

//If you  want property 'age' to be optional then you can use '?' so that you can ignore 'age' property during defination of object

// You can declare function prototype in interface or type

interface newObj extends Obj {
  scolar: boolean;
  age?: number; //Ignoring but you can add this property in object
  func: (n: number, m: number) => string; //this will take two input parameter as number and return  string. Use 'void' if you are not returning anything. eg: (n: number, m: number) => void
}

const obj3: newObj = {
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
