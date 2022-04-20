// typeGuard 특정 scope 내에서 type의 보장 (isNumber 추상화)

// function isNumber(val: string | number): val is number {
//   return typeof val === "number";
// }

// function someFunc(val: string | number) {
//   if (isNumber(val)) {
//     console.log(val.toFixed(2));
//     isNaN(val);
//   } else {
//     val.split("");
//     val.toUpperCase();
//     val.length;
//   }
// }

// 1. typeof  연산자를 사용하여 type 보장 typeof 는 number, string, boolean, symbol 만 타입 가드로 인식할 수 있다.
// 위의 예제와 같이 isNumber 를 추상화 하지 않고도 가능

function someFuncTypeof(val: string | number) {
  if (typeof val === "number") {
    console.log(val.toFixed(2));
    isNaN(val);
  } else {
    val.split("");
    val.toUpperCase();
    val.length;
  }
}

// 2. in 연산자를 사용하요 type보장 in 연산자의 우변 객체(val)는 any 타입이어야 한다.
function someFuncIn(val: any) {
  if ("toFixed" in val) {
    val.toFixed(2);
    isNaN(val);
  } else if ("split" in val) {
    val.split("");
    val.toUpperCase();
    val.length;
  }
}

// 3. instanceof 연산자를 사용해 타입 가드를 제공

class Cat {
  meow() {}
}
class Dog {
  woof() {}
}

function sounds(ani: Cat | Dog) {
  if (ani instanceof Cat) {
    ani.meow();
  } else {
    ani.woof();
  }
}
