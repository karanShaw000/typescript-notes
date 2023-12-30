// <-----------------DATA TYPES ------------>

//Note: AVOID "any" TYPES

let any: any;

let c: number = 2;

let b = <number>1;

let isLogin: boolean;

const username: string = "Karan";

//UNION -> variable can take two or more data types

let surname: string | number;

let y: string | number | boolean;

// return void and accept x as number and y as string

const fn = (x: number, y: string) => {};

// We can return a type give writting:

const fn2 = (x: number, y: string | number): string => {
  return "str";
};
