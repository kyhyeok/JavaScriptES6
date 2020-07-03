// object를 지우거나 정리할 떄 쓸수 있다
const user = {
  name: "hyeok",
  age: 33, // TT
  password: 12345
};
// password를 제거하고 싶을 때

// 이 방법은 password가 null로 나와서 password 노출시키지 않는 방법
// 하지만 password라는 것이 남아있기 때문에 보안에 좋지는 않다.
//user["password"] = null;

// Destructuring은 object를 열어서 원하는 것만 가져오는데
// 여기서는 Destructuring을 rest operator하고 함께 하용하는 중
// return을 rest만 해줬다 화살표 함수의 implicit return을 이용해서
const killPassword = ({ password, ...rest }) => rest;

// user를 parameter로 넣어준다
const cleanUser = killPassword(user);

// console.log(cleanUser);

// country값을 가져오고 country값이 없다면 country값은 KR
// ...rest는 rest구문을 이용해서 입력 인자의 나머지 값들을 하나고 축소해서 가져왔다

const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });

// user country에 기본값을 KR로 주었기 때문에 country가 KR로 나왔다
// console.log(setCountry(user));

// rename

const user2 = {
  NAME: "hyeok",
  age: 33, // TT
  password: 12345
};

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });

console.log(rename(user2));
// user2의 NAME kye값을 name으로 변경하였다
