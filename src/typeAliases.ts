type MyType = string;
type YourType = string | number | boolean;
type TUser =
  | {
      name: string;
      age: number;
      isValid: boolean;
    }
  | [string, number, boolean];

let userA: TUser = {
  name: "yong",
  age: 85,
  isValid: true,
};

let userB: TUser = ["Evan", 36, false];
