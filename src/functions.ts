// <-----------------FUNCTIONS---------------->

//data types during function defination
const fun = (n: number, m: number): number => {
  return n * m;
};

//Can also use type alias
type FunType = (n: number, m: number) => number;
const func: FunType = (a, b) => {
  return a * b;
};

//OPTIONAL PARAMETERS

type FunType2 = (n: number, m: number, l?: number) => number;

const func2: FunType2 = (n, m, l) => {
  //checking type of l if it is undefined.
  if (typeof l === "undefined") return n * m;

  return n * m * l;
};

func2(24, 22); //here l will be undefined so n * m will be return
func2(22, 23, 88);

//DEFAULT PARAMETERS

//Two ways you can default a parameter.
//1. Using type alias
type FunType3 = (n: number, m: number, l?: number) => number;

const func3: FunType3 = (n, m, l = 30) => {
  return n * m * l;
};

func3(20, 40); //here l = 30 will be taken as default parameters
func3(20, 40, 70);

//REST OPERATORS IN FUNCTION
type FunType4 = (...m: number[]) => number[];

const func4: FunType4 = (...m) => {
  return m;
};

func4(22, 77, 44, 66, 56, 90); // [22, 77, 44, 66, 56, 90]

// <----------------Function with Objects---------------->

//we will use interface to create a template for object and pass object as parameter to function

interface Product {
  name: String;
  stock: number;
  price: number;
  isAvailable: boolean;
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

const productOne: Product = {
  name: "Bottle",
  stock: 99999,
  price: 100,
  isAvailable: true,
};

getData(productOne);
