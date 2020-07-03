const friends = ["hyeok", "lee"];

/*
friends.push("kim")는 friends에 추가하는 것이기 때문에
friends.push("kim");
*/

// friends는 그대로 누고 newFriends에다가 넣고 싶기 때문에 이렇게 한다.
const newFriends = [...friends, "kim"];
// 기존 데이터를 복사해서 새로운 데이터를 만들고 싶을때 사용할 수 있는 방법
// const newFriends = ["kim", ...friends]; 도 가능
// console.log(newFriends);

const hyeok = {
  username: "hyeok"
};
// hyeok.password = 123; 구 버전 방식
// console.log({ ...hyeok, password: 123 });

// array 병합 방법이고 원하는 곳에 배치를 할 수 있다.
const first = ["mon", "tue", "wed"];
const weekend = ["sat", "sun"];
const fullWeek = [...first, "thu", "fri", ...weekend];

// console.log(fullWeek);

// 조건부 object

// 빈 값을 입력해도 string으로 잡힌다. 이 부분은 if로 작업
const lastName = prompt("Last name?");

/*
const user = {
    username: "hyeok",
    age: 33 // TT
  };
*/

// 이 방식은 lastName이라는 key는 있지만 그 안에 value가 없는 상황
/*
const user = {
  username: "hyeok",
  age: 33, // TT
  lastName: lastName !== "" ? lastName : undefined
};
*/
// undefined가 아닌 lastName이 아에 없게 하려면?? 바로 Spread
const user = {
  username: "hyeok",
  age: 33, // TT
  // lastName !== ""와 {lastName} 둘다 true일 경우
  ...(lastName !== "" && { /*lastName만 입력해도 된다.*/ lastName: lastName })
};

console.log(user);
