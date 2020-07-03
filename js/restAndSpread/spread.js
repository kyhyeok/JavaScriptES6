const friends = [1, 2, 3, 4];

const family = ["a", "b", "c"];

// array채로 콘솔 로그가 찍힌다.
console.log(friends);

// array속의 값들이 콘솔 로그가 찍힌다.
console.log(...friends);

// friends와 family를 합쳐야 할 경우

// array가 아닌 string으로 변경이 된다.
console.log(friends + family);

// array안에 두개의 array가 생긴다.
console.log([friends, family]);

// array안에 element들을 원하기 때문에 Spread가 필요하다.
// 이렇게 하면 하나에 배열에
console.log([...friends, ...family]);

// object도 가능함
const hyeok = {
  name: "hyeok",
  age: 33
};

const hello = {
  nice: true,
  hell0: "hello"
};

console.log({ ...hyeok, ...hello });
