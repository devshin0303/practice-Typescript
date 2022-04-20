//인터페이스(interface) 는 타입스크립트 여러 객체를 정의하는 일종의 규칙이며, 구조이다.

interface IUser {
  name: string;
  age: number;
  isAdult: boolean;
}

// 속성에 ? 를 사용시 선택적 속성(Optional properties)으로 정의 가능
interface IUser2 {
  name: string;
  age: number;
  isAdult?: boolean;
}

//readonly 속성을 사용하면 초기화된 값을 유지해야 하는 읽기 전용 속성을 정의할 수 있다.
interface IUser3 {
  readonly name: string;
  age: number;
  isAdult: boolean;
}

let user1: IUser = {
  name: "yong",
  age: 28,
  isAdult: true,
};

let user2: IUser3 = {
  name: "yongduk",
  age: 28,
  isAdult: true,
};

// user2.name = "neo"; ->  Error : Cannot assign to 'name' because it is a read-only property.
// user2.age = 18; -> OK

interface IUser4 {
  name: string;
  age: number;
}

// Readonly 를 사용할 때 유틸리티를 사용가능
let user3: Readonly<IUser4> = {
  name: "yong",
  age: 28,
};

// 단언을 사용하여 초기화된 값 유지
let user4 = {
  name: "yong",
  age: 28,
} as const;

// user3.name = "neo"; Error
// user3.age = 18; Error
// user4.name = "neo"; Error
// user4.age = 18; Error

interface IUser5 {
  name: string;
}

interface IGetUser {
  (name: string): IUser5;
}

// 매게 변수 이름이 인터페이스와 일치할 필요는 없다.
// 또한 타입 추론을 통해 매개 변수를 순서에 맞게 암시적 타입으로 제공할 수 있다.

const getUser: IGetUser = function (name: string) {
  const user: IUser5 = { name: name };

  return user;
};

// Indexable types(인덱싱 가능 타입) Index Signature 사용
interface IItem {
  [itemIndex: number]: string;
}

let item: IItem = ["a", "b", "c"];

console.log(item[0]);
console.log(item[1]);
console.log(item["0"]);

// 문자로 인덱싱
interface IUser6 {
  [userProp: string]: string | boolean;
}
let user: IUser6 = {
  name: "Neo",
  email: "thesecon@gmail.com",
  isValid: true,
  0: false,
};
console.log(user["name"]); // 'Neo' is string.
console.log(user["email"]); // 'thesecon@gmail.com' is string.
console.log(user["isValid"]); // true is boolean.
console.log(user[0]); // false is boolean
console.log(user[1]); // undefined
console.log(user["0"]); // false is boolean

// keyof: 인덱싱 가능 타입에서 keyof를 사용하면 속성 이름을 타입으로 사용할 수 있다.
// 인덱싱 가능 타입의 속성 이름들이 유니온 타입으로 적용된다.
interface ICountry {
  KR: "대한민국";
  US: "미국";
  CN: "중국";
}

let country: keyof ICountry;
let country2: ICountry[keyof ICountry]; // keyof를 통한 인덱싱으로 타입의 개별 값에도 접근 가능

country = "KR";
country2 = "대한민국";
// country = "RU"; Error

interface IAnimal {
  name: string;
}

interface ICat extends IAnimal {
  meow(): string;
}

class CatArt implements ICat {
  meow(): string {
    return "Meow~~";
  }
  name = "art";
}
