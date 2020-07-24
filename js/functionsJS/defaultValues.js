function sayHi(aName) {
  return "hi1 " + aName;
}
// 기본적으로 이렇게 사용하는데

console.log(sayHi("hyeok"));

// sayHi 함수에 인자값을 넣어주면 문제 없지만 인자값을 입력 안하면 undefined가 출력이 된다.
console.log(sayHi());

// 이 경우에 조건문으로 해결이 가능하지만 아름답지 못하다

function sayHi2(aName) {
  return "hi2 " + (aName || "아무개2");
}

console.log(sayHi2());

// 깔끔하게 해결하기 위해서 위해서 기본 값을 설정해 준다.

function sayHi3(aName = "아무개3") {
  return "hi3 " + aName;
}

console.log(sayHi3());

// 화살함수로 사용 방법
const sayHello = (aName = "아무개") => "Hello " + aName;
console.log(sayHello());

// 함수 안에 지정 대신 변수를 설정해서 넣어도 된다.

const DEFAULT_VALUE = "아무개2";
const sayHello2 = (aName = DEFAULT_VALUE) => "Hello " + aName;
console.log(sayHello2());
