import { toUnicode } from "punycode";
import { createLogicalOr } from "typescript";

// const message: string = "hello world";
// console.log(message);

// let arr: [string, string] = ["h1", "10"]; //tuple
// const arr2: Array<string> = arr.concat("hello");
// console.log(arr2);

// enum Avengers {
//   Capt,
//   IronMan,
//   Thor,
// }

// let hero: Avengers | string = Avengers[0];
// console.log(hero);

// const purpleCuteSlime = {
//   name: "슬라임",
//   attribute: "cute",
//   color: "purple",
// };

// const { color, ...rest } = purpleCuteSlime;
// console.log(color);
// console.log(rest);

// const numbers = [0, 1, 2, 3, 4, 5, 6];
// const [one, two, ...remainNums] = numbers;

// console.log(one);
// console.log(two);
// console.log(remainNums);

const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum);

let array: (string | number)[] = ["apple", 1, 2];
let someArr: any[] = [0, 1, {}, [], "str"];

let userId: number = 1234;
let userName: string = "yong";
let isValid: boolean = true;

// let user: [number, string, boolean] = [122, "yong", true];

// console.log(user[0]);
// console.log(user[1]);

let tuple: [1, number];

enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

// console.log(Week);
console.log(Week.Sun);
console.log(Week["Sun"]);
console.log(Week[0]);

function fnA(x: number | null | undefined) {
  return (x as number).toFixed(2);
}

interface Iuser {
  name: string;
  age: number;
}

let user2: Readonly<Iuser> = {
  name: "neo",
  age: 18,
};

// user2.age = "dd";

interface IUser {
  name: string;
}
interface IGetUser {
  (name: string): IUser;
}

const getUser: IGetUser = (n) => {
  const user: IUser = { name: n };
  console.log(user);
  return user;
};

getUser("Hello");

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...toUnicode, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
